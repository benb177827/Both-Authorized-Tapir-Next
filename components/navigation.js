import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-link, .navigation-toggle, .navigation-logo, .navigation-cta-arrow {
  transition: none;
  animation: none;
}
.navigation-border-glow, .navigation-logo-pulse {
  display: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <nav
          id="navigation-main"
          aria-label="Main Navigation"
          className="navigation-wrapper"
        >
          <div className="navigation-container">
            <a href="/">
              <div aria-label="Seagai Homepage" className="navigation-logo">
                <span className="navigation-logo-text">
                  <span className="navigation-navigation-logo-bracket1">[</span>
                  <span className="navigation-navigation-logo-name">
                    Seagai
                  </span>
                  <span className="navigation-navigation-logo-bracket2">]</span>
                </span>
                <span className="navigation-logo-pulse"></span>
              </div>
            </a>
            <div id="navigation-menu" className="navigation-links">
              <a href="#features">
                <div className="navigation-link">
                  <span className="navigation-link-text">Features</span>
                  <span className="navigation-link-glow"></span>
                </div>
              </a>
              <a href="#solutions">
                <div className="navigation-link">
                  <span className="navigation-link-text">Solutions</span>
                  <span className="navigation-link-glow"></span>
                </div>
              </a>
              <a href="#pricing">
                <div className="navigation-link">
                  <span className="navigation-link-text">Pricing</span>
                  <span className="navigation-link-glow"></span>
                </div>
              </a>
              <a href="#about">
                <div className="navigation-link">
                  <span className="navigation-link-text">About</span>
                  <span className="navigation-link-glow"></span>
                </div>
              </a>
            </div>
            <div className="navigation-cta">
              <button className="btn btn-primary navigation-cta-btn">
                <span>Get Started</span>
                <span className="navigation-navigation-cta-arrow">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m5 12l7-7l7 7m-7 7V5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <button
              id="navigation-toggle"
              aria-label="Toggle Navigation Menu"
              aria-controls="navigation-menu"
              aria-expanded="false"
              className="navigation-toggle"
            >
              <span className="navigation-navigation-toggle-icon1 navigation-toggle-hamburger">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 5h16M4 12h16M4 19h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="navigation-navigation-toggle-icon2">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="navigation-navigation-toggle-glow"></span>
            </button>
          </div>
          <div className="navigation-border-glow"></div>
        </nav>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
        @keyframes navigation-logo-gradient {0%,100% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}}@keyframes navigation-logo-pulse {0%,100% {opacity: 0;
transform: translate(-50%, -50%) scale(0.8);}
50% {opacity: 0.3;
transform: translate(-50%, -50%) scale(1.2);}}@keyframes navigation-bracket-pulse {0%,100% {opacity: 1;}
50% {opacity: 0.5;}}@keyframes navigation-border-slide {0% {background-position: 0% 0%;}
100% {background-position: 200% 0%;}}@keyframes navigation-mobile-slide-in {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigation-toggle")
  const navigationMenu = document.getElementById("navigation-menu")

  if (navigationToggle && navigationMenu) {
    navigationToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"

      this.setAttribute("aria-expanded", !isExpanded)
      navigationMenu.classList.toggle("navigation-active")

      if (!isExpanded) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    const navigationLinks = navigationMenu.querySelectorAll(".navigation-link")
    navigationLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navigationMenu.classList.remove("navigation-active")
        navigationToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      })
    })

    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        navigationMenu.classList.remove("navigation-active")
        navigationToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      }
    })
  }

  let lastScrollTop = 0
  const nav = document.getElementById("navigation-main")

  window.addEventListener(
    "scroll",
    function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > 100) {
        nav.style.boxShadow =
          "0 10px 40px color-mix(in srgb, var(--color-surface) 30%, transparent)"
      } else {
        nav.style.boxShadow = "none"
      }

      lastScrollTop = scrollTop
    },
    false
  )
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-navigation-logo-bracket1 {
            color: var(--color-primary);
            animation: navigation-bracket-pulse 3s ease-in-out infinite;
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-regular);
          }
          .navigation-navigation-logo-name {
            position: relative;
            animation: navigation-logo-gradient 4s ease infinite;
            background: linear-gradient(
              135deg,
              var(--color-on-surface) 0%,
              var(--color-primary) 100%
            );
            background-clip: text;
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .navigation-navigation-logo-bracket2 {
            color: var(--color-primary);
            animation: navigation-bracket-pulse 3s ease-in-out infinite;
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-regular);
          }
          .navigation-navigation-cta-arrow {
            display: inline-flex;
            transform: rotate(90deg);
            transition: transform 0.3s var(--animation-curve-primary);
            align-items: center;
            justify-content: center;
          }
          .navigation-navigation-toggle-icon1 {
            display: flex;
            transition: all 0.3s var(--animation-curve-primary);
            align-items: center;
            justify-content: center;
          }
          .navigation-navigation-toggle-icon2 {
            top: 50%;
            left: 50%;
            display: flex;
            opacity: 0;
            position: absolute;
            transform: translate(-50%, -50%) rotate(90deg) scale(0);
            transition: all 0.3s var(--animation-curve-primary);
            align-items: center;
            justify-content: center;
          }
          .navigation-navigation-toggle-glow {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            z-index: 1;
            position: absolute;
            background: linear-gradient(
              135deg,
              color-mix(in srgb, var(--color-primary) 20%, transparent) 0%,
              color-mix(in srgb, var(--color-accent) 20%, transparent) 100%
            );
            transition: opacity 0.3s var(--animation-curve-primary);
            border-radius: var(--border-radius-sm);
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
