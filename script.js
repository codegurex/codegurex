const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
  mobileMenu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('menu-open', open);
}

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton) setMenu(false);
});

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-list details[open]').forEach((openItem) => {
      if (openItem !== item) openItem.removeAttribute('open');
    });
  });
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const message = document.getElementById('message');
const messageCount = document.getElementById('messageCount');
const fields = ['name', 'email', 'website', 'message', 'consent'];

function fieldValue(id) {
  const field = document.getElementById(id);
  return field?.type === 'checkbox' ? field.checked : field?.value.trim();
}

function selectedInterest() {
  return form?.querySelector('input[name="interest"]:checked')?.value || '';
}

function updateMessageCount() {
  if (messageCount) messageCount.textContent = `${message?.value.length || 0} / 600`;
}

message?.addEventListener('input', updateMessageCount);
updateMessageCount();

form?.addEventListener('input', (event) => {
  event.target.classList.remove('invalid');
  if (status.classList.contains('error')) {
    status.textContent = '';
    status.className = 'form-status';
  }
});

form?.querySelectorAll('input[name="interest"]').forEach((input) => {
  input.addEventListener('change', () => document.getElementById('interestGroup')?.classList.remove('invalid'));
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  fields.forEach((id) => document.getElementById(id)?.classList.remove('invalid'));
  document.getElementById('interestGroup')?.classList.remove('invalid');

  const invalid = fields.filter((id) => {
    const field = document.getElementById(id);
    return !field || !field.checkValidity();
  });

  if (!selectedInterest()) invalid.push('interestGroup');

  if (invalid.length) {
    invalid.forEach((id) => document.getElementById(id)?.classList.add('invalid'));
    const messages = {
      name: 'Escribe tu nombre para continuar.',
      email: 'Revisa que el correo tenga un formato válido.',
      website: 'Escribe una URL completa, por ejemplo https://tuempresa.com.',
      message: 'Cuéntanos un poco más: el mensaje debe tener al menos 20 caracteres.',
      consent: 'Necesitamos que aceptes la política de privacidad.',
      interestGroup: 'Elige el área que quieres mejorar.'
    };
    status.textContent = messages[invalid[0]] || 'Revisa los campos marcados antes de continuar.';
    status.className = 'form-status error';
    if (invalid[0] === 'interestGroup') {
      form.querySelector('input[name="interest"]')?.focus();
    } else {
      document.getElementById(invalid[0])?.focus();
    }
    return;
  }

  status.textContent = 'Solicitud preparada. Abriremos WhatsApp para que revises y confirmes el envío.';
  status.className = 'form-status success';
  const lines = [
    'Hola CodeGurex, quiero solicitar un diagnóstico web.',
    '',
    `*Nombre:* ${fieldValue('name')}`,
    `*Empresa:* ${fieldValue('company') || 'No indicada'}`,
    `*Email:* ${fieldValue('email') || 'No indicado'}`,
    `*Sitio:* ${fieldValue('website') || 'No indicado'}`,
    `*Interés:* ${selectedInterest()}`,
    '',
    `*Contexto:* ${fieldValue('message')}`
  ];
  const url = `https://wa.me/593963223403?text=${encodeURIComponent(lines.join('\n'))}`;
  const opened = window.open(url, '_blank');
  if (opened) opened.opener = null;
  else window.location.assign(url);
});

const currentYear = document.getElementById('currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();
