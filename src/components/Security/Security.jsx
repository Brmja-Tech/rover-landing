import { useTranslation } from "react-i18next";
import "./Security.css";
import useScrollReveal from "../../hooks/useScrollReveal";

import supportPhoneImage from "../../assets/الشات-portrait.png";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14v3a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Z" />
      <path d="M20 14v3a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z" />
      <path d="M16 19c0 1.1-.9 2-2 2h-2" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3v-4.5A2 2 0 0 1 3 15V7a2 2 0 0 1 2-2Z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v3" />
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

const securityFeatures = [
  {
    icon: LocationIcon,
    titleKey: "security.features.visibleJourneys.title",
    descriptionKey: "security.features.visibleJourneys.description",
  },
  {
    icon: LockIcon,
    titleKey: "security.features.protectedInformation.title",
    descriptionKey: "security.features.protectedInformation.description",
  },
  {
    icon: HeadsetIcon,
    titleKey: "security.features.supportWithinReach.title",
    descriptionKey: "security.features.supportWithinReach.description",
  },
];

function Security() {
  const { t } = useTranslation();

  const { revealRef, isVisible } = useScrollReveal(
    0.1,
    "0px 0px -70px 0px",
  );

  const sectionClassName = isVisible
    ? "security-section security-reveal security-reveal--visible"
    : "security-section security-reveal";

  return (
    <section
      ref={revealRef}
      className={sectionClassName}
      id="security"
    >
      <div className="security-section__particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div
        className="security-section__glow security-section__glow--left"
        aria-hidden="true"
      />

      <div
        className="security-section__glow security-section__glow--right"
        aria-hidden="true"
      />

      <div className="security-section__container">
        <div className="security-section__visual">
          <div className="security-section__orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div
            className="security-section__shield-halo"
            aria-hidden="true"
          >
            <ShieldIcon />
          </div>

          <div className="security-section__phone-wrapper">
            <div
              className="security-section__phone-glow"
              aria-hidden="true"
            />

            <img
              className="security-section__phone"
              src={supportPhoneImage}
              alt={t("security.phoneImageAlt")}
            />

            <div className="security-section__support-card security-section__support-card--top">
              <span className="security-section__support-icon">
                <HeadsetIcon />
              </span>

              <span>
                <small>{t("security.phoneCards.supportStatus")}</small>
                <strong>{t("security.phoneCards.teamReady")}</strong>
              </span>

              <span className="security-section__online-dot" />
            </div>

            <div className="security-section__support-card security-section__support-card--bottom">
              <span className="security-section__support-icon">
                <MessageIcon />
              </span>

              <span>
                <small>{t("security.phoneCards.inAppAssistance")}</small>
                <strong>
                  {t("security.phoneCards.startConversation")}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="security-section__content">
          <div className="security-section__heading">
            <p className="security-section__eyebrow">
              {t("security.eyebrow")}
            </p>

            <h2>
              {t("security.titleLineOne")}
              <br />
              <span>{t("security.titleHighlight")}</span>
            </h2>
          </div>

          <p className="security-section__introduction">
            {t("security.introduction")}
          </p>

          <div className="security-section__assurance">
            <div className="security-section__assurance-icon">
              <ShieldIcon />
            </div>

            <div>
              <span>{t("security.assurance.label")}</span>

              <h3>{t("security.assurance.title")}</h3>

              <p>{t("security.assurance.description")}</p>
            </div>
          </div>

          <div className="security-section__features">
            {securityFeatures.map(function (feature) {
              var Icon = feature.icon;

              return (
                <article
                  className="security-feature"
                  key={feature.titleKey}
                >
                  <div className="security-feature__icon">
                    <Icon />
                  </div>

                  <div>
                    <h3>{t(feature.titleKey)}</h3>
                    <p>{t(feature.descriptionKey)}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="security-section__support-banner">
            <div
              className="security-section__support-team"
              aria-hidden="true"
            >
              <span>
                <HeadsetIcon />
              </span>

              <span>
                <MessageIcon />
              </span>

              <span>
                <ShieldIcon />
              </span>
            </div>

            <div className="security-section__support-copy">
              <small>{t("security.supportBanner.label")}</small>

              <strong>
                {t("security.supportBanner.description")}
              </strong>
            </div>

            <span className="security-section__support-availability">
              <span />
              {t("security.supportBanner.available")}
            </span>
          </div>

          <div className="security-section__actions">
            <a
              className="security-section__primary-button"
              href="#signup"
            >
              <span>{t("security.actions.getRover")}</span>
              <ArrowIcon />
            </a>

            <a
              className="security-section__secondary-button"
              href="#how-it-works"
            >
              {t("security.actions.seeHowItWorks")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;