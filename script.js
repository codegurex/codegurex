const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function setMenu(open) {
  mobileMenu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  const english = document.body.dataset.language === "en";
  menuButton.setAttribute(
    "aria-label",
    open
      ? english
        ? "Close menu"
        : "Cerrar menú"
      : english
        ? "Open menu"
        : "Abrir menú",
  );
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileMenu?.querySelectorAll("a, button").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton) setMenu(false);
});

if (menuButton && mobileMenu) setMenu(false);

document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq-list details[open]").forEach((openItem) => {
      if (openItem !== item) openItem.removeAttribute("open");
    });
  });
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const message = document.getElementById("message");
const messageCount = document.getElementById("messageCount");
const fields = ["name", "email", "website", "message", "consent"];

function fieldValue(id) {
  const field = document.getElementById(id);
  return field?.type === "checkbox" ? field.checked : field?.value.trim();
}

function selectedInterest() {
  return form?.querySelector('input[name="interest"]:checked')?.value || "";
}

function interfaceLanguage() {
  return document.body.dataset.language === "en" ? "en" : "es";
}

function updateMessageCount() {
  if (messageCount)
    messageCount.textContent = `${message?.value.length || 0} / 600`;
}

message?.addEventListener("input", updateMessageCount);
updateMessageCount();

form?.addEventListener("input", (event) => {
  event.target.classList.remove("invalid");
  if (status.classList.contains("error")) {
    status.textContent = "";
    status.className = "form-status";
  }
});

form?.querySelectorAll('input[name="interest"]').forEach((input) => {
  input.addEventListener("change", () =>
    document.getElementById("interestGroup")?.classList.remove("invalid"),
  );
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  fields.forEach((id) =>
    document.getElementById(id)?.classList.remove("invalid"),
  );
  document.getElementById("interestGroup")?.classList.remove("invalid");

  const invalid = fields.filter((id) => {
    const field = document.getElementById(id);
    return !field || !field.checkValidity();
  });

  if (!selectedInterest()) invalid.push("interestGroup");

  if (invalid.length) {
    invalid.forEach((id) =>
      document.getElementById(id)?.classList.add("invalid"),
    );
    const messages =
      interfaceLanguage() === "en"
        ? {
            name: "Enter your name to continue.",
            email: "Check that the email address has a valid format.",
            website:
              "Enter a complete URL, for example https://yourcompany.com.",
            message:
              "Add a little more context: the message must contain at least 20 characters.",
            consent: "You need to accept the Privacy Policy.",
            interestGroup: "Choose the area you want to discuss.",
          }
        : {
            name: "Escribe tu nombre para continuar.",
            email: "Revisa que el correo tenga un formato válido.",
            website:
              "Escribe una URL completa, por ejemplo https://tuempresa.com.",
            message:
              "Cuéntanos un poco más: el mensaje debe tener al menos 20 caracteres.",
            consent: "Necesitamos que aceptes la política de privacidad.",
            interestGroup: "Elige el área que quieres conversar.",
          };
    status.textContent =
      messages[invalid[0]] || "Revisa los campos marcados antes de continuar.";
    status.className = "form-status error";
    if (invalid[0] === "interestGroup") {
      form.querySelector('input[name="interest"]')?.focus();
    } else {
      document.getElementById(invalid[0])?.focus();
    }
    return;
  }

  status.textContent =
    interfaceLanguage() === "en"
      ? "Request prepared. WhatsApp will open so you can review and confirm it."
      : "Solicitud preparada. Abriremos WhatsApp para que revises y confirmes el envío.";
  status.className = "form-status success";
  window.gtag?.("event", "generate_lead", {
    lead_source: "security_assessment_form",
    service_interest: selectedInterest(),
  });
  const isEnglish = interfaceLanguage() === "en";
  const lines = [
    isEnglish
      ? "Hello CodeGurex, I would like to discuss a security project."
      : "Hola CodeGurex, quiero conversar sobre un proyecto de seguridad.",
    "",
    `*${isEnglish ? "Name" : "Nombre"}:* ${fieldValue("name")}`,
    `*${isEnglish ? "Company" : "Empresa"}:* ${fieldValue("companyName") || (isEnglish ? "Not provided" : "No indicada")}`,
    `*Email:* ${fieldValue("email") || (isEnglish ? "Not provided" : "No indicado")}`,
    `*${isEnglish ? "Website" : "Sitio"}:* ${fieldValue("website") || (isEnglish ? "Not provided" : "No indicado")}`,
    `*${isEnglish ? "Interest" : "Interés"}:* ${selectedInterest()}`,
    "",
    `*${isEnglish ? "Context" : "Contexto"}:* ${fieldValue("message")}`,
  ];
  const url = `https://wa.me/593963223403?text=${encodeURIComponent(lines.join("\n"))}`;
  const opened = window.open(url, "_blank");
  if (opened) opened.opener = null;
  else window.location.assign(url);
});

const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();

document.querySelectorAll(".whatsapp-float").forEach((link) => {
  link.addEventListener("click", () => {
    window.gtag?.("event", "whatsapp_click", {
      link_location: "floating_button",
    });
  });
});
