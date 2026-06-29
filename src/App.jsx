import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import Security from "./components/Security/Security";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [theme, setTheme] = useState(function () {
    var savedTheme = localStorage.getItem("rover-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return "dark";
  });

  useLayoutEffect(function () {
    var frameId;

    function resetScrollPosition() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    resetScrollPosition();

    frameId = window.requestAnimationFrame(function () {
      resetScrollPosition();
    });

    window.addEventListener("pageshow", resetScrollPosition);

    return function () {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pageshow", resetScrollPosition);
    };
  }, []);

  useEffect(
    function () {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("rover-theme", theme);
    },
    [theme],
  );

  function toggleTheme() {
    setTheme(function (currentTheme) {
      return currentTheme === "dark" ? "light" : "dark";
    });
  }

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="app__main">
        <Hero />
        <About />
        <Features />
        <Security />
        <SignUp />
      </main>

      <Footer />
    </div>
  );
}

export default App;