import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

import roverLogo from "../../assets/Rover-Logo.png";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.42 1.42" />
      <path d="M17.65 17.65l1.42 1.42" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.42-1.42" />
      <path d="M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 15.4A8.5 8.5 0 0 1 8.6 3.5a8.6 8.6 0 1 0 11.9 11.9Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function Header({ theme, onToggleTheme }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLightMode = theme === "light";

  var currentLanguage =
    i18n.resolvedLanguage || i18n.language || "en";

  var normalizedLanguage = String(currentLanguage).split("-")[0];
  var isArabic = normalizedLanguage === "ar";

  var languageButtonText = isArabic
    ? t("language.english")
    : t("language.arabic");

  var languageButtonLabel = isArabic
    ? t("language.switchToEnglish")
    : t("language.switchToArabic");

  var themeButtonLabel = isLightMode
    ? t("header.switchToDarkMode")
    : t("header.switchToLightMode");

  useEffect(
    function () {
      if (menuOpen) {
        document.body.classList.add("mobile-menu-open");
      } else {
        document.body.classList.remove("mobile-menu-open");
      }

      return function () {
        document.body.classList.remove("mobile-menu-open");
      };
    },
    [menuOpen],
  );

  useEffect(function () {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return function () {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleThemeToggle() {
    onToggleTheme();
  }

  function handleLanguageToggle() {
    var nextLanguage = isArabic ? "en" : "ar";

    i18n.changeLanguage(nextLanguage);
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <a
        className="header__logo-link"
        href="#home"
        aria-label={t("header.home")}
      >
        <img
          className="header__logo"
          src={roverLogo}
          alt="Rover"
        />
      </a>

      <nav
        className="header__navigation"
        aria-label={t("header.mainNavigation")}
      >
        <a href="#about">{t("header.about")}</a>
        <a href="#features">{t("header.features")}</a>
        <a href="#security">{t("header.security")}</a>
        <a href="#contact">{t("header.contact")}</a>
      </nav>

      <div className="header__actions">
        <button
          className="header__theme-button"
          type="button"
          onClick={handleThemeToggle}
          aria-label={themeButtonLabel}
          title={themeButtonLabel}
        >
          {isLightMode ? <MoonIcon /> : <SunIcon />}
        </button>

        <button
          className="header__language-button"
          type="button"
          onClick={handleLanguageToggle}
          aria-label={languageButtonLabel}
          title={languageButtonLabel}
        >
          {languageButtonText}
        </button>

        <a className="header__start-button" href="#signup">
          {t("header.startFree")}
        </a>
      </div>

      <button
        className="header__mobile-toggle"
        type="button"
        onClick={openMenu}
        aria-label={t("header.openNavigationMenu")}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <MenuIcon />
      </button>

      <div
        className={
          menuOpen
            ? "header__mobile-backdrop header__mobile-backdrop--open"
            : "header__mobile-backdrop"
        }
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={
          menuOpen
            ? "header__mobile-menu header__mobile-menu--open"
            : "header__mobile-menu"
        }
        aria-hidden={!menuOpen}
        aria-label={t("header.mobileNavigation")}
      >
        <div className="header__mobile-menu-top">
          <button
            className="header__mobile-close"
            type="button"
            onClick={closeMenu}
            aria-label={t("header.closeNavigationMenu")}
          >
            <CloseIcon />
          </button>
        </div>

        <nav
          className="header__mobile-navigation"
          aria-label={t("header.mobileNavigation")}
        >
          <a href="#about" onClick={closeMenu}>
            {t("header.about")}
          </a>

          <a href="#features" onClick={closeMenu}>
            {t("header.features")}
          </a>

          <a href="#security" onClick={closeMenu}>
            {t("header.security")}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {t("header.contact")}
          </a>
        </nav>

        <div className="header__mobile-actions">
          <div className="header__mobile-controls">
            <button
              className="header__mobile-theme-button"
              type="button"
              onClick={handleThemeToggle}
              aria-label={themeButtonLabel}
              title={themeButtonLabel}
            >
              {isLightMode ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              className="header__mobile-language-button"
              type="button"
              onClick={handleLanguageToggle}
              aria-label={languageButtonLabel}
              title={languageButtonLabel}
            >
              {languageButtonText}
            </button>
          </div>

          <a
            className="header__mobile-start-button"
            href="#signup"
            onClick={closeMenu}
          >
            {t("header.startFree")}
          </a>
        </div>
      </aside>
    </header>
  );
}

export default Header;