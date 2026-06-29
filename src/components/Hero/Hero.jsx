import { useTranslation } from "react-i18next";
import "./Hero.css";
import useScrollReveal from "../../hooks/useScrollReveal";

import phoneImage from "../../assets/تحديد السائق-portrait.png";

function AppleLogo() {
  return (
    <svg
      className="hero-app-button__icon hero-app-button__icon--apple"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.05 12.54c-.03-3.05 2.49-4.51 2.61-4.58a5.6 5.6 0 0 0-4.41-2.39c-1.86-.2-3.67 1.11-4.61 1.11-.96 0-2.41-1.09-3.97-1.06a5.83 5.83 0 0 0-4.91 2.99c-2.14 3.7-.54 9.14 1.5 12.13 1.02 1.46 2.2 3.09 3.76 3.03 1.52-.06 2.09-.97 3.92-.97 1.81 0 2.35.97 3.94.94 1.64-.03 2.67-1.46 3.65-2.93a12.1 12.1 0 0 0 1.67-3.41 5.25 5.25 0 0 1-3.15-4.86Z" />

      <path d="M14.04 3.6A5.35 5.35 0 0 0 15.27 0a5.47 5.47 0 0 0-3.52 1.82 5.08 5.08 0 0 0-1.27 3.46 4.52 4.52 0 0 0 3.56-1.68Z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg
      className="hero-app-button__icon"
      viewBox="0 0 32 36"
      aria-hidden="true"
    >
      <path
        fill="#00D7FE"
        d="M2.3 1.3C1.6 2 1.2 3 1.2 4.3v27.4c0 1.3.4 2.3 1.1 3l16.3-16.6L2.3 1.3Z"
      />

      <path
        fill="#FFEA00"
        d="m23.8 23.4-5.2-5.3L2.3 34.7c.6.6 1.5.7 2.6.1l18.9-11.4Z"
      />

      <path
        fill="#FF3A44"
        d="M23.8 12.8 4.9 1.4C3.8.8 2.9.8 2.3 1.3l16.3 16.8 5.2-5.3Z"
      />

      <path
        fill="#00F076"
        d="m30.1 16.6-6.3-3.8-5.2 5.3 5.2 5.3 6.3-3.8c1.8-1.1 1.8-2.9 0-4Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function Hero() {
  const { t } = useTranslation();

  const { revealRef, isVisible } = useScrollReveal(
    0.05,
    "0px 0px -20px 0px",
  );

  const sectionClassName = isVisible
    ? "hero-section scroll-reveal scroll-reveal--visible"
    : "hero-section scroll-reveal";

  return (
    <section
      ref={revealRef}
      className={sectionClassName}
      id="home"
    >
      <div className="hero-section__particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div
        className="hero-section__glow hero-section__glow--left"
        aria-hidden="true"
      />

      <div
        className="hero-section__glow hero-section__glow--right"
        aria-hidden="true"
      />

      <div className="hero-section__content">
        <div className="hero-section__copy">
          <p className="hero-section__eyebrow">
            {t("hero.eyebrow")}
          </p>

          <h1 className="hero-section__title">
            {t("hero.titleLineOne")}
            <br />

            {t("hero.titleLineTwo")}
            <br />

            <span>{t("hero.titleHighlight")}</span>
          </h1>

          <p className="hero-section__description">
            {t("hero.description")}
          </p>

          <div className="hero-section__actions">
            <a
              className="hero-section__primary-button"
              href="#signup"
            >
              <span>{t("hero.startJourney")}</span>
              <ArrowIcon />
            </a>

            <a
              className="hero-section__secondary-button"
              href="#how-it-works"
            >
              {t("hero.seeHowItWorks")}
            </a>
          </div>

          <div className="hero-section__benefits">
            <span>{t("hero.fastPickup")}</span>
            <span>{t("hero.liveTracking")}</span>
            <span>{t("hero.secureDelivery")}</span>
          </div>

          <div className="hero-section__app-buttons" id="download">
            <a
              className="hero-app-button"
              href="#app-store"
              aria-label={t("hero.appStoreAriaLabel")}
            >
              <AppleLogo />

              <span>
                <small>{t("hero.downloadOn")}</small>
                <strong dir="ltr">{t("hero.appStore")}</strong>
              </span>
            </a>

            <a
              className="hero-app-button"
              href="#google-play"
              aria-label={t("hero.googlePlayAriaLabel")}
            >
              <GooglePlayLogo />

              <span>
                <small>{t("hero.getItOn")}</small>
                <strong dir="ltr">{t("hero.googlePlay")}</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-section__visual">
          <div className="hero-section__orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-section__phone-wrapper">
            <div
              className="hero-section__phone-glow"
              aria-hidden="true"
            />

            <img
              className="hero-section__phone"
              src={phoneImage}
              alt={t("hero.phoneImageAlt")}
            />

            <div className="hero-section__status-card hero-section__status-card--top">
              <span className="hero-section__status-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
              </span>

              <span>
                <small>{t("hero.driverNearby")}</small>
                <strong>{t("hero.twoMinutesAway")}</strong>
              </span>
            </div>

            <div className="hero-section__status-card hero-section__status-card--bottom">
              <span className="hero-section__status-dot" />

              <span>
                <small>{t("hero.liveTracking")}</small>
                <strong>{t("hero.tripInProgress")}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;