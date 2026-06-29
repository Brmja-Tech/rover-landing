import { useTranslation } from "react-i18next";
import "./Footer.css";

import roverLogo from "../../assets/Rover-Logo.png";
import brmjaLogo from "../../assets/Brmja-logo-light.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contact">
      <div className="footer__content">
        <div className="footer__brand">
          <a href="#home" aria-label={t("header.home")}>
            <img
              className="footer__rover-logo"
              src={roverLogo}
              alt="Rover"
            />
          </a>

          <p className="footer__description">
            {t("footer.description")}
          </p>

          <div className="footer__socials">
            <a href="#home" aria-label={t("footer.social.website")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c3 3.5 4.5 6.5 4.5 9S15 17.5 12 21" />
                <path d="M12 3C9 6.5 7.5 9.5 7.5 12S9 17.5 12 21" />
              </svg>
            </a>

            <a href="#" aria-label={t("footer.social.x")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4l14 16" />
                <path d="M19 4L5 20" />
              </svg>
            </a>

            <a href="#" aria-label={t("footer.social.facebook")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>

            <a href="#" aria-label={t("footer.social.youtube")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="6" width="18" height="12" rx="4" />
                <path d="M10 9.5l5 2.5-5 2.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h2>{t("footer.quickLinks")}</h2>

          <nav
            className="footer__links"
            aria-label={t("footer.navigationLabel")}
          >
            <a href="#about">{t("header.about")}</a>
            <a href="#features">{t("header.features")}</a>
            <a href="#security">{t("header.security")}</a>
            <a href="#contact">{t("header.contact")}</a>
          </nav>
        </div>

        <div className="footer__column">
          <h2>{t("footer.policies")}</h2>

          <div className="footer__links">
            <a href="#privacy-policy">
              {t("footer.privacyPolicy")}
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h2>{t("footer.contactInfo")}</h2>

          <div className="footer__contact-list">
            <a href="tel:+123456789">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 3.5 9 3l2 5-2.5 1.5a15.5 15.5 0 0 0 6 6L16 13l5 2 .5 2.5a3 3 0 0 1-3 3C10.2 20.5 3.5 13.8 3.5 5.5a3 3 0 0 1 3-2Z" />
              </svg>

              <span className="content-ltr" dir="ltr">
                +123456789
              </span>
            </a>

            <a href="mailto:info@mywebsite.com">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>

              <span className="content-ltr" dir="ltr">
                info@mywebsite.com
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          <span dir="ltr">{t("footer.copyrightPrefix")}</span>{" "}

          <a
            className="footer__brmja-text"
            href="https://brmja.tech"
            target="_blank"
            rel="noreferrer"
            dir="ltr"
          >
            BRMJA TECH
          </a>

          {t("footer.copyrightSuffix")}
        </p>

        <div className="footer__powered">
          <span>{t("footer.poweredBy")}</span>

          <a
            href="https://brmja.tech"
            target="_blank"
            rel="noreferrer"
            aria-label={t("footer.visitBrmja")}
          >
            <img src={brmjaLogo} alt="BRMJA TECH" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;