(() => {
  const measurementId = 'G-3NH66XEY32';
  const consentKey = 'codegurex_analytics_consent';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };

  let storedConsent = null;
  try { storedConsent = window.localStorage.getItem(consentKey); } catch { storedConsent = null; }

  window.gtag('consent', 'default', {
    analytics_storage: storedConsent === 'granted' ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });

  function saveConsent(value) {
    try { window.localStorage.setItem(consentKey, value); } catch { /* Preference remains valid for this visit. */ }
    window.gtag('consent', 'update', { analytics_storage: value });
  }

  function createConsentControls() {
    const banner = document.createElement('section');
    banner.className = 'analytics-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'analyticsConsentTitle');
    banner.innerHTML = '<div><span class="analytics-consent-label">PRIVACIDAD</span><h2 id="analyticsConsentTitle">Tú decides sobre la analítica.</h2><p>Usamos Google Analytics para entender qué páginas resultan útiles y mejorar el sitio. La publicidad personalizada permanece desactivada.</p><a href="/privacidad.html#cookies">Conocer el tratamiento de datos ↗</a></div><div class="analytics-consent-actions"><button class="button button-primary" type="button" data-consent="granted">Aceptar analítica</button><button class="button button-secondary" type="button" data-consent="denied">Rechazar</button></div>';

    const settings = document.createElement('button');
    settings.className = 'analytics-settings';
    settings.type = 'button';
    settings.textContent = 'Privacidad';
    settings.setAttribute('aria-label', 'Cambiar preferencias de analítica');

    function showBanner(focusButton = true) {
      banner.hidden = false;
      settings.hidden = true;
      if (focusButton) banner.querySelector('button')?.focus();
    }

    function hideBanner(focusSettings = true) {
      banner.hidden = true;
      settings.hidden = false;
      if (focusSettings) settings.focus();
    }

    banner.querySelectorAll('[data-consent]').forEach((button) => {
      button.addEventListener('click', () => {
        saveConsent(button.dataset.consent);
        hideBanner();
      });
    });
    settings.addEventListener('click', showBanner);

    document.body.append(banner, settings);
    if (storedConsent === 'granted' || storedConsent === 'denied') hideBanner(false);
    else showBanner(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createConsentControls);
  } else {
    createConsentControls();
  }
})();
