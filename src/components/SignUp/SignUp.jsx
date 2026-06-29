import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SignUp.css";
import useScrollReveal from "../../hooks/useScrollReveal";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
      <path d="M10 21h4" />
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

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
      <path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
      <path d="m5 14 .6 1.4L7 16l-1.4.6L5 18l-.6-1.4L3 16l1.4-.6L5 14Z" />
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

const updateBenefits = [
  {
    icon: LocationIcon,
    titleKey: "signup.benefits.serviceAreas.title",
    descriptionKey: "signup.benefits.serviceAreas.description",
  },
  {
    icon: SparkleIcon,
    titleKey: "signup.benefits.productUpdates.title",
    descriptionKey: "signup.benefits.productUpdates.description",
  },
  {
    icon: ShieldIcon,
    titleKey: "signup.benefits.safetyNews.title",
    descriptionKey: "signup.benefits.safetyNews.description",
  },
];

function SignUp() {
  const { t } = useTranslation();

  const { revealRef, isVisible } = useScrollReveal(
    0.12,
    "0px 0px -70px 0px",
  );

  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("idle");

  const sectionClassName = isVisible
    ? "signup-section signup-reveal signup-reveal--visible"
    : "signup-section signup-reveal";

  var formMessage = "";

  if (formStatus === "error") {
    formMessage = t("signup.form.invalidEmail");
  } else if (formStatus === "success") {
    formMessage = t("signup.form.successMessage");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    var cleanEmail = email.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      setFormStatus("error");
      return;
    }

    /*
     * Connect your newsletter API here.
     * Send cleanEmail to your backend before setting the success state.
     */

    setFormStatus("success");
    setEmail("");
  }

  return (
    <section
      ref={revealRef}
      className={sectionClassName}
      id="signup"
    >
      <div className="signup-section__particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div
        className="signup-section__glow signup-section__glow--left"
        aria-hidden="true"
      />

      <div
        className="signup-section__glow signup-section__glow--right"
        aria-hidden="true"
      />

      <div className="signup-section__container">
        <div className="signup-section__shell">
          <div className="signup-section__copy">
            <p className="signup-section__eyebrow">
              {t("signup.eyebrow")}
            </p>

            <h2>
              {t("signup.titleLineOne")}
              <br />
              <span>{t("signup.titleHighlight")}</span>
            </h2>

            <p className="signup-section__introduction">
              {t("signup.introduction")}
            </p>

            <div className="signup-section__benefits">
              {updateBenefits.map(function (benefit) {
                var Icon = benefit.icon;

                return (
                  <article
                    className="signup-benefit"
                    key={benefit.titleKey}
                  >
                    <div className="signup-benefit__icon">
                      <Icon />
                    </div>

                    <div>
                      <h3>{t(benefit.titleKey)}</h3>
                      <p>{t(benefit.descriptionKey)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="signup-section__form-side">
            <div className="signup-section__orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="signup-section__floating-card signup-section__floating-card--top">
              <span>
                <SparkleIcon />
              </span>

              <div>
                <small>{t("signup.floatingCards.latestFeature")}</small>
                <strong>{t("signup.floatingCards.roverUpdates")}</strong>
              </div>
            </div>

            <div className="signup-section__floating-card signup-section__floating-card--bottom">
              <span>
                <BellIcon />
              </span>

              <div>
                <small>{t("signup.floatingCards.notifications")}</small>
                <strong>{t("signup.floatingCards.stayInformed")}</strong>
              </div>
            </div>

            <div className="signup-form-card">
              <div className="signup-form-card__icon">
                <MailIcon />
              </div>

              <p className="signup-form-card__label">
                {t("signup.form.newsletterLabel")}
              </p>

              <h3>{t("signup.form.title")}</h3>

              <p className="signup-form-card__description">
                {t("signup.form.description")}
              </p>

              <form
                className="signup-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <label htmlFor="rover-signup-email">
                  {t("signup.form.emailLabel")}
                </label>

                <div
                  className={
                    formStatus === "error"
                      ? "signup-form__field signup-form__field--error"
                      : "signup-form__field"
                  }
                >
                  <span className="signup-form__field-icon">
                    <MailIcon />
                  </span>

                  <input
                    id="rover-signup-email"
                    className="content-ltr"
                    name="email"
                    type="email"
                    dir="ltr"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={t("signup.form.emailPlaceholder")}
                    autoComplete="email"
                    aria-invalid={formStatus === "error"}
                    aria-describedby="signup-form-message"
                    required
                  />

                  <button type="submit">
                    <span>
                      {formStatus === "success"
                        ? t("signup.form.subscribed")
                        : t("signup.form.joinList")}
                    </span>

                    {formStatus === "success" ? (
                      <CheckIcon />
                    ) : (
                      <ArrowIcon />
                    )}
                  </button>
                </div>

                <p
                  id="signup-form-message"
                  className={
                    formStatus === "error"
                      ? "signup-form__message signup-form__message--error"
                      : formStatus === "success"
                        ? "signup-form__message signup-form__message--success"
                        : "signup-form__message"
                  }
                  aria-live="polite"
                >
                  {formMessage}
                </p>
              </form>

              <div className="signup-form-card__privacy">
                <ShieldIcon />

                <span>{t("signup.form.privacy")}</span>
              </div>

              <div className="signup-form-card__footer">
                <div
                  className="signup-form-card__avatars"
                  aria-hidden="true"
                  dir="ltr"
                >
                  <span>R</span>
                  <span>O</span>
                  <span>V</span>
                </div>

                <p>{t("signup.form.community")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;