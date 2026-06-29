import { useTranslation } from "react-i18next";
import "./Features.css";
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

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H18v4H6.5A2.5 2.5 0 0 1 4 5.5v13A2.5 2.5 0 0 0 6.5 21H20V8H6.5" />
      <path d="M16 12h4v5h-4a2.5 2.5 0 0 1 0-5Z" />
      <circle cx="16.5" cy="14.5" r="0.5" />
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

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
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

const featureCards = [
  {
    number: "03",
    icon: WalletIcon,
    titleKey: "features.cards.clearPricing.title",
    descriptionKey: "features.cards.clearPricing.description",
  },
  {
    number: "04",
    icon: ClockIcon,
    titleKey: "features.cards.fastMatching.title",
    descriptionKey: "features.cards.fastMatching.description",
  },
  {
    number: "05",
    icon: ShieldIcon,
    titleKey: "features.cards.safety.title",
    descriptionKey: "features.cards.safety.description",
  },
  {
    number: "06",
    icon: PackageIcon,
    titleKey: "features.cards.flexibleDeliveries.title",
    descriptionKey: "features.cards.flexibleDeliveries.description",
  },
];

const processSteps = [
  {
    number: "01",
    icon: LocationIcon,
    titleKey: "features.steps.locations.title",
    descriptionKey: "features.steps.locations.description",
  },
  {
    number: "02",
    icon: SearchIcon,
    titleKey: "features.steps.service.title",
    descriptionKey: "features.steps.service.description",
  },
  {
    number: "03",
    icon: RideIcon,
    titleKey: "features.steps.matching.title",
    descriptionKey: "features.steps.matching.description",
  },
  {
    number: "04",
    icon: TrackingIcon,
    titleKey: "features.steps.tracking.title",
    descriptionKey: "features.steps.tracking.description",
  },
];

function Features() {
  const { t } = useTranslation();

  const {
    revealRef: featuresRevealRef,
    isVisible: featuresVisible,
  } = useScrollReveal(0.1, "0px 0px -70px 0px");

  const {
    revealRef: processRevealRef,
    isVisible: processVisible,
  } = useScrollReveal(0.1, "0px 0px -70px 0px");

  const featuresClassName = featuresVisible
    ? "features-section__features features-reveal features-reveal--visible"
    : "features-section__features features-reveal";

  const processClassName = processVisible
    ? "features-section__process process-reveal process-reveal--visible"
    : "features-section__process process-reveal";

  return (
    <section className="features-section" id="features">
      <div
        className="features-section__glow features-section__glow--left"
        aria-hidden="true"
      />

      <div
        className="features-section__glow features-section__glow--right"
        aria-hidden="true"
      />

      <div className="features-section__container">
        <div ref={featuresRevealRef} className={featuresClassName}>
          <div className="features-section__heading">
            <div className="features-section__heading-copy">
              <p className="features-section__eyebrow">
                {t("features.eyebrow")}
              </p>

              <h2>
                {t("features.titleLineOne")}
                <br />
                <span>{t("features.titleHighlight")}</span>
              </h2>
            </div>

            <p className="features-section__introduction">
              {t("features.introduction")}
            </p>
          </div>

          <div className="features-section__grid">
            <article className="feature-card feature-card--services">
              <div className="feature-card__top">
                <div className="feature-card__icon">
                  <RideIcon />
                </div>

                <span className="feature-card__number">01</span>
              </div>

              <div className="feature-card__body">
                <span className="feature-card__label">
                  {t("features.services.label")}
                </span>

                <h3>{t("features.services.title")}</h3>

                <p>{t("features.services.description")}</p>
              </div>

              <div className="feature-card__service-switch">
                <div className="feature-card__service-option feature-card__service-option--active">
                  <span>
                    <RideIcon />
                  </span>

                  <div>
                    <small>{t("features.services.serviceLabel")}</small>
                    <strong>{t("features.services.requestRide")}</strong>
                  </div>

                  <CheckIcon />
                </div>

                <div className="feature-card__service-option">
                  <span>
                    <PackageIcon />
                  </span>

                  <div>
                    <small>{t("features.services.serviceLabel")}</small>
                    <strong>{t("features.services.sendPackage")}</strong>
                  </div>

                  <ArrowIcon />
                </div>
              </div>
            </article>

            <article className="feature-card feature-card--tracking">
              <div className="feature-card__top">
                <div className="feature-card__icon">
                  <TrackingIcon />
                </div>

                <span className="feature-card__number">02</span>
              </div>

              <div className="feature-card__body">
                <span className="feature-card__label">
                  {t("features.tracking.label")}
                </span>

                <h3>{t("features.tracking.title")}</h3>

                <p>{t("features.tracking.description")}</p>
              </div>

              <div className="feature-card__mini-map" aria-hidden="true">
                <span className="feature-card__map-road feature-card__map-road--one" />
                <span className="feature-card__map-road feature-card__map-road--two" />
                <span className="feature-card__map-road feature-card__map-road--three" />

                <span className="feature-card__map-point feature-card__map-point--start" />

                <span className="feature-card__map-route" />

                <span className="feature-card__map-car">
                  <RideIcon />
                </span>

                <span className="feature-card__map-point feature-card__map-point--end">
                  <LocationIcon />
                </span>
              </div>

              <div className="feature-card__tracking-status">
                <span className="feature-card__tracking-dot" />

                <div>
                  <small>{t("features.tracking.driverApproaching")}</small>
                  <strong>{t("features.tracking.twoMinutesAway")}</strong>
                </div>
              </div>
            </article>

            {featureCards.map(function (feature) {
              var Icon = feature.icon;

              return (
                <article
                  className="feature-card feature-card--small"
                  key={feature.number}
                >
                  <div className="feature-card__top">
                    <div className="feature-card__icon">
                      <Icon />
                    </div>

                    <span className="feature-card__number">
                      {feature.number}
                    </span>
                  </div>

                  <div className="feature-card__body">
                    <h3>{t(feature.titleKey)}</h3>
                    <p>{t(feature.descriptionKey)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          ref={processRevealRef}
          className={processClassName}
          id="how-it-works"
        >
          <div className="features-section__process-heading">
            <div>
              <p className="features-section__eyebrow">
                {t("features.howItWorks.eyebrow")}
              </p>

              <h2>
                {t("features.howItWorks.titleLineOne")}
                <br />
                <span>{t("features.howItWorks.titleHighlight")}</span>
              </h2>
            </div>

            <p>{t("features.howItWorks.introduction")}</p>
          </div>

          <div className="features-section__process-layout">
            <div className="process-steps">
              {processSteps.map(function (step) {
                var Icon = step.icon;

                return (
                  <article className="process-step" key={step.number}>
                    <div className="process-step__number">
                      <span>{step.number}</span>
                    </div>

                    <div className="process-step__icon">
                      <Icon />
                    </div>

                    <div className="process-step__content">
                      <h3>{t(step.titleKey)}</h3>
                      <p>{t(step.descriptionKey)}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="process-preview">
              <div
                className="process-preview__shine"
                aria-hidden="true"
              />

              <div className="process-preview__header">
                <div>
                  <small>{t("features.preview.currentRequest")}</small>
                  <h3>{t("features.preview.roverOnWay")}</h3>
                </div>

                <span className="process-preview__status">
                  <span />
                  {t("features.preview.active")}
                </span>
              </div>

              <div className="process-preview__driver">
                <div className="process-preview__avatar">
                  <RideIcon />
                </div>

                <div>
                  <small>{t("features.preview.yourDriver")}</small>
                  <strong>{t("features.preview.driverMatched")}</strong>
                  <span>{t("features.preview.arrivingApproximately")}</span>
                </div>

                <div className="process-preview__rating">
                  <strong dir="ltr">4.9</strong>
                  <span>★</span>
                </div>
              </div>

              <div className="process-preview__route">
                <div className="process-preview__route-points">
                  <span className="process-preview__point process-preview__point--start" />

                  <span className="process-preview__route-line">
                    <span />
                  </span>

                  <span className="process-preview__point process-preview__point--end">
                    <LocationIcon />
                  </span>
                </div>

                <div className="process-preview__locations">
                  <div>
                    <small>{t("features.preview.pickup")}</small>
                    <strong>
                      {t("features.preview.currentLocation")}
                    </strong>
                  </div>

                  <div>
                    <small>{t("features.preview.destination")}</small>
                    <strong>
                      {t("features.preview.selectedDestination")}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="process-preview__summary">
                <div>
                  <small>{t("features.preview.estimatedArrival")}</small>
                  <strong>{t("features.preview.twoMinutesShort")}</strong>
                </div>

                <div>
                  <small>{t("features.preview.serviceType")}</small>
                  <strong>{t("features.preview.roverRide")}</strong>
                </div>

                <div>
                  <small>{t("features.preview.tripStatus")}</small>
                  <strong>{t("features.preview.confirmed")}</strong>
                </div>
              </div>

              <a className="process-preview__button" href="#signup">
                <span>{t("features.preview.getStarted")}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;