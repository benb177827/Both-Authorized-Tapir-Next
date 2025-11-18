import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-grid-line, .footer-brand-glow, .footer-status-dot, .footer-particle {
  animation: none;
}
.footer-nav-link, .footer-social-link, .footer-top-btn {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <footer id="footer-section" className="footer-wrapper">
          <div className="footer-container">
            <div aria-hidden="true" className="footer-grid-background">
              <div className="footer-grid-line"></div>
              <div className="footer-grid-line"></div>
              <div className="footer-grid-line"></div>
              <div className="footer-grid-line"></div>
            </div>
            <div className="footer-content">
              <div className="footer-brand-section">
                <div className="footer-brand-logo">
                  <span className="footer-brand-text">Seagai</span>
                  <div aria-hidden="true" className="footer-brand-glow"></div>
                </div>
                <p className="footer-brand-tagline">
                  {' '}
                  Next-generation course templates for digital creators
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-newsletter">
                  <label
                    htmlFor="footer-email-input"
                    className="footer-newsletter-label"
                  >
                    {' '}
                    Stay ahead of the curve
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </label>
                  <div className="footer-newsletter-form">
                    <div className="footer-input-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        className="footer-input-icon"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                      <input
                        type="email"
                        id="footer-email-input"
                        aria-label="Email address for newsletter subscription"
                        placeholder="your.email@domain.com"
                        className="footer-input"
                      />
                    </div>
                    <button
                      aria-label="Subscribe to newsletter"
                      className="btn btn-primary footer-newsletter-btn"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        className="footer-footer-btn-icon"
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
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-navigation-grid">
                <div className="footer-nav-column">
                  <h3 className="footer-nav-title">
                    <span className="footer-footer-nav-title-text1">
                      Products
                    </span>
                    <span
                      aria-hidden="true"
                      className="footer-footer-nav-title-line1"
                    ></span>
                  </h3>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Course Templates</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Custom Solutions</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Creator Tools</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Enterprise Plans</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h3 className="footer-nav-title">
                    <span className="footer-footer-nav-title-text2">
                      Resources
                    </span>
                    <span
                      aria-hidden="true"
                      className="footer-footer-nav-title-line2"
                    ></span>
                  </h3>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Documentation</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Case Studies</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>API Reference</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Support Center</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h3 className="footer-nav-title">
                    <span className="footer-footer-nav-title-text3">
                      Company
                    </span>
                    <span
                      aria-hidden="true"
                      className="footer-footer-nav-title-line3"
                    ></span>
                  </h3>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>About Us</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Careers</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Partners</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Contact</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-column">
                  <h3 className="footer-nav-title">
                    <span className="footer-footer-nav-title-text4">
                      Connect
                    </span>
                    <span
                      aria-hidden="true"
                      className="footer-footer-nav-title-line4"
                    ></span>
                  </h3>
                  <div className="footer-social-grid">
                    <a href="#">
                      <div aria-label="LinkedIn" className="footer-social-link">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                            <circle r="2" cx="4" cy="4"></circle>
                          </g>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="footer-social-glow"
                        ></span>
                      </div>
                    </a>
                    <a href="#">
                      <div aria-label="Twitter" className="footer-social-link">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="footer-social-glow"
                        ></span>
                      </div>
                    </a>
                    <a href="#">
                      <div
                        aria-label="Instagram"
                        className="footer-social-link"
                      >
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                              width="20"
                              height="20"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                          </g>
                        </svg>
                        <span
                          aria-hidden="true"
                          className="footer-social-glow"
                        ></span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-status-indicator">
                    <span
                      aria-hidden="true"
                      className="footer-status-dot"
                    ></span>
                    <span className="footer-status-text">
                      All systems operational
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div aria-hidden="true" className="footer-bottom-divider"></div>
              <div className="footer-bottom-content">
                <div className="footer-legal">
                  <p className="footer-copyright">
                    <span className="footer-footer-copyright-symbol">
                      &amp;copy;
                    </span>
                    <span>
                      {' '}
                      2025 Seagai. All rights reserved.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <nav
                    aria-label="Legal navigation"
                    className="footer-legal-nav"
                  >
                    <a href="#">
                      <div className="footer-legal-link">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          className="footer-legal-icon"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span>
                          {' '}
                          Privacy Policy
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-legal-link">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          className="footer-legal-icon"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Terms of Service
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="footer-legal-link">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          className="footer-legal-icon"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="3"
                              y="11"
                              rx="2"
                              ry="2"
                              width="18"
                              height="11"
                            ></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </g>
                        </svg>
                        <span>
                          {' '}
                          Security
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </nav>
                </div>
                <div className="footer-back-to-top">
                  <button aria-label="Back to top" className="footer-top-btn">
                    <span className="footer-footer-top-text">Back to top</span>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="footer-footer-top-icon"
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
                    <span
                      aria-hidden="true"
                      className="footer-footer-top-glow"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="footer-particles">
              <div className="footer-particle"></div>
              <div className="footer-particle"></div>
              <div className="footer-particle"></div>
              <div className="footer-particle"></div>
              <div className="footer-particle"></div>
              <div className="footer-particle"></div>
            </div>
          </div>
        </footer>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<style>
        @keyframes footer-scan {0%,100% {opacity: 0.02;
transform: translateX(-100%);}
50% {opacity: 0.1;
transform: translateX(100%);}}@keyframes footer-pulse {0%,100% {opacity: 0.15;
transform: translate(-50%, -50%) scale(1);}
50% {opacity: 0.25;
transform: translate(-50%, -50%) scale(1.1);}}@keyframes footer-status-pulse {0%,100% {opacity: 1;
transform: scale(1);}
50% {opacity: 0.6;
transform: scale(1.2);}}@keyframes footer-float {0%,100% {transform: translateY(0) translateX(0);
opacity: 0.2;}
25% {transform: translateY(-20px) translateX(10px);
opacity: 0.4;}
50% {transform: translateY(-10px) translateX(-15px);
opacity: 0.3;}
75% {transform: translateY(-30px) translateX(5px);
opacity: 0.5;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="footer-container6">
          <div className="footer-container7">
            <Script
              html={`<script defer data-name="footer">
(function(){
  // Back to Top Functionality
  const backToTopBtn = document
    .getElementById("footer-section")
    .querySelector(".footer-top-btn")

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Newsletter Form Handling
  const newsletterInput = document.getElementById("footer-email-input")
  const newsletterBtn = document
    .getElementById("footer-section")
    .querySelector(".footer-newsletter-btn")

  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener("click", function (e) {
      e.preventDefault()
      const email = newsletterInput.value.trim()

      if (email && email.includes("@")) {
        // Add success animation
        newsletterBtn.style.transform = "scale(0.95)"
        setTimeout(() => {
          newsletterBtn.style.transform = "scale(1)"
          newsletterInput.value = ""
          newsletterInput.placeholder = "Thanks for subscribing!"

          setTimeout(() => {
            newsletterInput.placeholder = "your.email@domain.com"
          }, 3000)
        }, 150)
      } else {
        // Add error shake animation
        newsletterInput.style.animation = "none"
        setTimeout(() => {
          newsletterInput.style.animation = "footer-shake 0.4s ease-in-out"
        }, 10)
      }
    })

    // Enter key support
    newsletterInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        newsletterBtn.click()
      }
    })
  }

  // Add shake animation to stylesheet programmatically
  const shakeStyle = document.createElement("style")
  shakeStyle.textContent = \`
  @keyframes footer-shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }
\`
  document.head.appendChild(shakeStyle)

  // Intersection Observer for fade-in animations
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  )

  // Apply fade-in to navigation columns
  const navColumns = document
    .getElementById("footer-section")
    .querySelectorAll(".footer-nav-column")
  navColumns.forEach((column, index) => {
    column.style.opacity = "0"
    column.style.transform = "translateY(20px)"
    column.style.transition = \`opacity 0.6s ease-out \${
      index * 0.1
    }s, transform 0.6s ease-out \${index * 0.1}s\`
    footerObserver.observe(column)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-footer-btn-icon {
            width: 20px;
            height: 20px;
          }
          .footer-footer-nav-title-text1 {
            color: var(--color-on-surface);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .footer-footer-nav-title-line1 {
            width: 2rem;
            height: 2px;
            background: linear-gradient(
              90deg,
              var(--color-primary),
              transparent
            );
            border-radius: var(--border-radius-full);
          }
          .footer-footer-nav-title-text2 {
            color: var(--color-on-surface);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .footer-footer-nav-title-line2 {
            width: 2rem;
            height: 2px;
            background: linear-gradient(
              90deg,
              var(--color-primary),
              transparent
            );
            border-radius: var(--border-radius-full);
          }
          .footer-footer-nav-title-text3 {
            color: var(--color-on-surface);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .footer-footer-nav-title-line3 {
            width: 2rem;
            height: 2px;
            background: linear-gradient(
              90deg,
              var(--color-primary),
              transparent
            );
            border-radius: var(--border-radius-full);
          }
          .footer-footer-nav-title-text4 {
            color: var(--color-on-surface);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .footer-footer-nav-title-line4 {
            width: 2rem;
            height: 2px;
            background: linear-gradient(
              90deg,
              var(--color-primary),
              transparent
            );
            border-radius: var(--border-radius-full);
          }
          .footer-footer-copyright-symbol {
            color: var(--color-primary);
            font-size: var(--font-size-sm);
            margin-right: 0.25rem;
          }
          .footer-footer-top-text {
            z-index: 2;
            position: relative;
            letter-spacing: var(--letter-spacing-normal);
          }
          .footer-footer-top-icon {
            width: 18px;
            height: 18px;
            z-index: 2;
            position: relative;
            transition: transform 0.3s var(--animation-curve-primary);
          }
          .footer-footer-top-glow {
            top: 50%;
            left: 50%;
            width: 120%;
            filter: blur(20px);
            height: 120%;
            opacity: 0;
            z-index: 1;
            position: absolute;
            transform: translate(-50%, -50%);
            background: radial-gradient(
              circle,
              var(--color-primary),
              transparent 70%
            );
            transition: opacity 0.3s var(--animation-curve-primary);
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          .footer-container6 {
            display: none;
          }
          .footer-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
