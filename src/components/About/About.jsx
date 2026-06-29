import { useTranslation } from "react-i18next";
import "./About.css";
import useScrollReveal from "../../hooks/useScrollReveal";

function RideIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 16.5h14" />
      <path d="M6.5 16.5 7.7 11h8.6l1.2 5.5" />
      <path d="m8.5 11 1.2-3h4.6l1.2 3" />
      <circle cx="8" cy="17.5" r="1.5" />
      <circle cx="16" cy="17.5" r="1.5" />
      <path d="M5 14h2" />
      <path d="M17 14h2" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="M4 7v10l8 4 8-4V7" />
      <path d="M12 11v10" />
      <path d="m8 5 8 4" />
    </svg>
  );
}

function TrackingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
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

function About() {
  const { t } = useTranslation();
  const { revealRef, isVisible } = useScrollReveal();

  const sectionClassName = isVisible
    ? "about-section scroll-reveal scroll-reveal--visible"
    : "about-section scroll-reveal";

  return (
    <section
      ref={revealRef}
      className={sectionClassName}
      id="about"
    >
      <div
        className="about-section__glow about-section__glow--left"
        aria-hidden="true"
      />

      <div
        className="about-section__glow about-section__glow--right"
        aria-hidden="true"
      />

      <div className="about-section__container">
        <div className="about-section__heading">
          <div className="about-section__heading-copy">
            <p className="about-section__eyebrow">
              {t("about.eyebrow")}
            </p>

            <h2>
              {t("about.titleLineOne")}
              <br />
              <span>{t("about.titleHighlight")}</span>
            </h2>
          </div>

          <p className="about-section__introduction">
            {t("about.introduction")}
          </p>
        </div>

        <div className="about-section__main">
          <div className="about-section__journey">
            <div className="about-section__journey-top">
              <div>
                <span className="about-section__journey-label">
                  {t("about.journeyLabel")}
                </span>

                <h3>{t("about.journeyTitle")}</h3>
              </div>

              <span className="about-section__live">
                <span />
                {t("about.liveTracking")}
              </span>
            </div>

            <div className="about-section__route">
              <div className="about-section__route-line">
                <span className="about-section__route-progress" />
              </div>

              <div className="about-section__route-point about-section__route-point--pickup">
                <span className="about-section__route-marker">
                  <span />
                </span>

                <div>
                  <small>{t("about.pickup")}</small>
                  <strong>{t("about.yourLocation")}</strong>
                </div>
              </div>

              <div className="about-section__route-car">
                <RideIcon />
              </div>

              <div className="about-section__route-point about-section__route-point--destination">
                <span className="about-section__route-marker">
                  <TrackingIcon />
                </span>

                <div>
                  <small>{t("about.destination")}</small>
                  <strong>{t("about.arrivingSafely")}</strong>
                </div>
              </div>
            </div>

            <div className="about-section__journey-bottom">
              <div className="about-section__journey-stat">
                <strong>{t("about.quick")}</strong>
                <span>{t("about.nearbyDrivers")}</span>
              </div>

              <div className="about-section__journey-stat">
                <strong>{t("about.visible")}</strong>
                <span>{t("about.realTimeProgress")}</span>
              </div>

              <div className="about-section__journey-stat">
                <strong>{t("about.simple")}</strong>
                <span>{t("about.oneConvenientApp")}</span>
              </div>
            </div>
          </div>

          <div className="about-section__services">
            <article className="about-service-card">
              <div className="about-service-card__icon">
                <RideIcon />
              </div>

              <div className="about-service-card__content">
                <span>01</span>
                <h3>{t("about.requestRideTitle")}</h3>

                <p>{t("about.requestRideDescription")}</p>
              </div>

              <a
                href="#signup"
                aria-label={t("about.requestRideAriaLabel")}
              >
                <ArrowIcon />
              </a>
            </article>

            <article className="about-service-card">
              <div className="about-service-card__icon">
                <PackageIcon />
              </div>

              <div className="about-service-card__content">
                <span>02</span>
                <h3>{t("about.sendPackageTitle")}</h3>

                <p>{t("about.sendPackageDescription")}</p>
              </div>

              <a
                href="#signup"
                aria-label={t("about.sendPackageAriaLabel")}
              >
                <ArrowIcon />
              </a>
            </article>
          </div>
        </div>

        <div className="about-section__features">
          <article className="about-feature">
            <div className="about-feature__icon">
              <TrackingIcon />
            </div>

            <div>
              <h3>{t("about.trackEveryStepTitle")}</h3>
              <p>{t("about.trackEveryStepDescription")}</p>
            </div>
          </article>

          <article className="about-feature">
            <div className="about-feature__icon">
              <ShieldIcon />
            </div>

            <div>
              <h3>{t("about.safetyTitle")}</h3>
              <p>{t("about.safetyDescription")}</p>
            </div>
          </article>

          <article className="about-feature">
            <div className="about-feature__icon">
              <PackageIcon />
            </div>

            <div>
              <h3>{t("about.flexibleTitle")}</h3>
              <p>{t("about.flexibleDescription")}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;