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
  if (event.key === 'Escape') setMenu(false);
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
const fields = ['name', 'email', 'website', 'interest', 'message', 'consent'];

function fieldValue(id) {
  const field = document.getElementById(id);
  return field?.type === 'checkbox' ? field.checked : field?.value.trim();
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  fields.forEach((id) => document.getElementById(id)?.classList.remove('invalid'));

  const invalid = fields.filter((id) => {
    const field = document.getElementById(id);
    return !field || !field.checkValidity();
  });

  if (invalid.length) {
    invalid.forEach((id) => document.getElementById(id)?.classList.add('invalid'));
    status.textContent = 'Revisa los campos marcados antes de continuar.';
    status.className = 'form-status error';
    document.getElementById(invalid[0])?.focus();
    return;
  }

  status.textContent = '';
  status.className = 'form-status';
  const lines = [
    'Hola CodeGurex, quiero solicitar un diagnóstico web.',
    '',
    `*Nombre:* ${fieldValue('name')}`,
    `*Empresa:* ${fieldValue('company') || 'No indicada'}`,
    `*Email:* ${fieldValue('email')}`,
    `*WhatsApp:* ${fieldValue('whatsapp') || 'No indicado'}`,
    `*Sitio:* ${fieldValue('website')}`,
    `*Interés:* ${fieldValue('interest')}`,
    '',
    `*Contexto:* ${fieldValue('message')}`
  ];
  const url = `https://wa.me/593963223403?text=${encodeURIComponent(lines.join('\n'))}`;
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.assign(url);
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
