import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Both Authorized Tapir</title>
          <meta property="og:title" content="Both Authorized Tapir" />
          <link rel="canonical" href="/" />
        </Head>
        <Navigation></Navigation>
        <div className="home-container11">
          <div className="home-container12">
            <Script
              html={`<style>
#hero-section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr min(920px, 80%) 1fr;
  position: relative;
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--color-surface);
  overflow: hidden;
}
#hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      color-mix(in srgb, var(--color-primary) 3%, transparent) 2px,
      color-mix(in srgb, var(--color-primary) 3%, transparent) 4px
    );
  pointer-events: none;
  opacity: 0.4;
  z-index: 1;
}
#value-props-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
  position: relative;
}
#onboarding-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
#template-library-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
#process-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
#social-proof-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
#cta-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
@media (max-width: 991px) {
#hero-section {
  grid-template-columns: 1fr;
  min-height: auto;
  padding: var(--spacing-xl) var(--spacing-md);
}
}
@media (max-width: 479px) {
#hero-section {
  padding: var(--spacing-lg) var(--spacing-sm);
}
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section id="hero-section" role="region" aria-labelledby="hero-heading">
          <div className="hero-container">
            <div className="hero-central-column">
              <div className="hero-panel">
                <h1 id="hero-heading" className="home-hero-title hero-title">
                  {' '}
                  Seagai — Bespoke Course Templates for Influencers
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
                <p className="hero-copy">
                  {' '}
                  Launch high-converting courses fast with designer-built
                  templates tailored to your voice. Modern, modular, and ready
                  to fill.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <form
                  id="hero-form"
                  role="form"
                  aria-label="Quick influencer template"
                  data-form-id="c80873fa-2752-4709-8738-9ae26a534ee7"
                  className="hero-form"
                >
                  <input
                    type="text"
                    id="hero-input"
                    name="textinput"
                    aria-label="Enter your course topic"
                    placeholder="your course topic..."
                    data-form-field-id="hero-input"
                    className="hero-input"
                  />
                  <button
                    id="thq_button_RgrL"
                    name="button"
                    type="submit"
                    aria-label="Get started with template"
                    data-form-field-id="thq_button_RgrL"
                    className="btn hero-cta-btn btn-primary"
                  >
                    {' '}
                    Get Started
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </form>
                <div className="hero-helper-text">
                  <span>
                    {' '}
                    Start with a template: headline, outcomes, modules, pricing
                    — all ready in seconds.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="hero-metrics"
              role="region"
              aria-label="Creator impact metrics"
            >
              <div
                role="group"
                aria-label="Growth metrics"
                className="hero-metric-left"
              >
                <div className="metric-icon-wrapper">
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
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </g>
                  </svg>
                </div>
                <div data-target="4200" className="metric-number">
                  <span>0</span>
                </div>
                <div className="metric-label">
                  <span>Creators launched</span>
                </div>
              </div>
              <div
                role="group"
                aria-label="Conversion metrics"
                className="hero-metric-right"
              >
                <div className="metric-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div data-target="87" className="metric-number">
                  <span>0</span>
                </div>
                <div className="metric-label">
                  <span>% avg. conversion</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="value-props-section"
          role="region"
          aria-labelledby="value-props-heading"
        >
          <div className="value-props-container">
            <div className="value-props-left">
              <h2 id="value-props-heading" className="section-title">
                {' '}
                Launch polished courses in hours — not months
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="value-props-intro">
                {' '}
                Bespoke, plug-and-play templates engineered for influencers who
                scale quickly and stay authentic.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="value-props-list">
                <li>
                  <span className="list-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    {' '}
                    Data-driven structures that convert — templates optimized
                    for retention and repeatable engagement
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <span className="list-icon">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </span>
                  <span>
                    {' '}
                    Brand-first customization — maintain your voice and visuals
                    without the build time
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <span className="list-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    {' '}
                    Built for velocity — animated interactions and
                    conversion-ready CTAs designed to iterate as you grow
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <button
                aria-label="Explore templates"
                className="btn btn-primary value-props-cta"
              >
                {' '}
                Explore Templates
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="value-props-right">
              <div className="value-card">
                <div className="value-card-label">
                  <span>Avg. Launch Time</span>
                </div>
                <div data-target="7" className="value-card-number">
                  <span>0</span>
                </div>
                <div className="value-card-unit">
                  <span>days</span>
                </div>
              </div>
              <div className="value-card">
                <div className="value-card-label">
                  <span>Completion Rate</span>
                </div>
                <div data-target="62" className="value-card-number">
                  <span>0</span>
                </div>
                <div className="value-card-unit">
                  <span>%</span>
                </div>
              </div>
              <div className="value-card">
                <div className="value-card-label">
                  <span>Conversion Lift</span>
                </div>
                <div data-target="3" className="value-card-number">
                  <span>0</span>
                </div>
                <div className="value-card-unit">
                  <span>x</span>
                </div>
              </div>
              <div className="value-card">
                <div className="value-card-label">
                  <span>Time Saved</span>
                </div>
                <div data-target="60" className="value-card-number">
                  <span>0</span>
                </div>
                <div className="value-card-unit">
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="onboarding-section"
          role="region"
          aria-labelledby="onboarding-heading"
        >
          <div className="onboarding-container">
            <div className="onboarding-header">
              <h2 id="onboarding-heading" className="section-title">
                Onboarding Preview
              </h2>
              <p className="section-subtitle">
                {' '}
                Instant-ready fields that feel handcrafted. Watch prefilled
                prompts animate in.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="onboarding-panels">
              <div className="onboarding-col-left">
                <div className="featured-metric-card">
                  <div className="featured-metric-icon">
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
                        <circle r="10" cx="12" cy="12"></circle>
                        <circle r="6" cx="12" cy="12"></circle>
                        <circle r="2" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <div data-target="4200" className="featured-metric-value">
                    <span>0</span>
                  </div>
                  <div className="featured-metric-label">
                    <span>Creators using templates</span>
                  </div>
                </div>
              </div>
              <div className="onboarding-col-center">
                <div
                  role="group"
                  aria-label="Sample headline field"
                  className="editable-field-card"
                >
                  <label className="field-label">Sample Headline</label>
                  <input
                    type="text"
                    id="field-headline"
                    value="Unlock your audience's next transformation with a 6-week masterclass"
                    aria-label="Editable headline field"
                    className="field-input"
                  />
                  <div className="field-hint">
                    <span>Click to edit • Autosave enabled</span>
                  </div>
                </div>
                <div
                  role="group"
                  aria-label="Sample hook field"
                  className="editable-field-card"
                >
                  <label className="field-label">Sample Hook</label>
                  <input
                    type="text"
                    id="field-hook"
                    value="Turn followers into students with a proven funnel script"
                    aria-label="Editable hook field"
                    className="field-input"
                  />
                  <div className="field-hint">
                    <span>Suggested tone: authoritative, warm</span>
                  </div>
                </div>
                <div
                  role="group"
                  aria-label="Sample module title field"
                  className="editable-field-card"
                >
                  <label className="field-label">Sample Module Title</label>
                  <input
                    type="text"
                    id="field-module"
                    value="Week 1 — Magnetic Offer Architecture"
                    aria-label="Editable module title field"
                    className="field-input"
                  />
                </div>
                <button
                  aria-label="Preview with your content"
                  className="btn btn-primary onboarding-cta"
                >
                  {' '}
                  Preview Now
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
              <div className="onboarding-col-right">
                <div className="metric-badge">
                  <div className="badge-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="badge-text">
                    <span>18% avg. conversion</span>
                  </div>
                </div>
                <div className="metric-badge">
                  <div className="badge-icon">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="badge-text">
                    <span>4.2k+ users</span>
                  </div>
                </div>
                <div className="social-proof-card">
                  <p className="social-proof-text">
                    {' '}
                    &quot;Templates felt custom-made. Saved me weeks.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="social-proof-author">
                    <span>— Mateo C., Coach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="template-library-section"
          role="region"
          aria-labelledby="template-library-heading"
        >
          <div className="template-library-container">
            <div className="template-library-header">
              <h2 id="template-library-heading" className="section-title">
                {' '}
                Template Library — Instant Course Blueprints
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-subtitle">
                {' '}
                Curated blocks built for creators: modular lessons, monetization
                funnels, and community scripts.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="template-library-grid">
              <div className="template-col-left">
                <div className="template-quick-card">
                  <div className="template-card-header">
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
                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                      </g>
                    </svg>
                    <h3 className="template-card-title">Micro-Courses</h3>
                  </div>
                  <p className="template-card-desc">
                    {' '}
                    Quick-start templates for 3-5 lesson formats
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="template-quick-card">
                  <div className="template-card-header">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <h3 className="template-card-title">Challenge Funnels</h3>
                  </div>
                  <p className="template-card-desc">
                    {' '}
                    5-7 day challenge structures with engagement hooks
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="template-col-center">
                <div className="template-featured-tile">
                  <img
                    alt="Interactive template preview showing dynamic graphs"
                    src="https://images.pexels.com/photos/11743790/pexels-photo-11743790.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="template-featured-image"
                  />
                  <div className="template-featured-content">
                    <h3 className="template-featured-title">
                      Signature Series
                    </h3>
                    <p className="template-featured-desc">
                      {' '}
                      6-lesson premium framework — each lesson includes
                      objective, hook, micro-assignment, and shareable clip
                      prompt.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <button
                      aria-label="Preview signature series template"
                      className="btn btn-primary template-cta"
                    >
                      {' '}
                      Preview Template
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="template-col-right">
                <div className="template-metric-widget">
                  <div className="widget-label">
                    <span>Completion</span>
                  </div>
                  <div data-target="62" className="widget-value">
                    <span>0</span>
                  </div>
                  <div className="widget-unit">
                    <span>%</span>
                  </div>
                </div>
                <div className="template-quick-card template-card-alt">
                  <div className="template-card-header">
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
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                        <path d="M3 12a9 3 0 0 0 18 0"></path>
                      </g>
                    </svg>
                    <h3 className="template-card-title">Membership Launches</h3>
                  </div>
                  <p className="template-card-desc">
                    {' '}
                    Recurring revenue structures with onboarding flows
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="template-metric-widget widget-secondary">
                  <div className="widget-label">
                    <span>Avg. Revenue Lift</span>
                  </div>
                  <div data-target="240" className="widget-value">
                    <span>0</span>
                  </div>
                  <div className="widget-unit">
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="template-categories">
              <button
                aria-label="Filter micro-courses"
                className="category-chip"
              >
                {' '}
                Micro-Courses
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="Filter signature series"
                className="category-chip"
              >
                {' '}
                Signature Series
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="Filter challenge funnels"
                className="category-chip"
              >
                {' '}
                Challenge Funnels
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="Filter membership launches"
                className="category-chip"
              >
                {' '}
                Membership
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="Filter live workshops"
                className="category-chip"
              >
                {' '}
                Live Workshops
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <button
                aria-label="Filter email sequences"
                className="category-chip"
              >
                {' '}
                Email Sequences
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </section>
        <section
          id="process-section"
          role="region"
          aria-labelledby="process-heading"
        >
          <div className="process-container">
            <div className="process-hero">
              <div className="process-hero-content">
                <h2 id="process-heading" className="hero-tag">
                  Select. Shape. Launch.
                </h2>
              </div>
              <button
                role="button"
                tabindex="0"
                aria-label="Start guided session"
                className="btn btn-primary hero-cta"
              >
                {' '}
                Start Now
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <div className="process-grid">
              <div className="step-card">
                <div className="step-num">
                  <span>01</span>
                </div>
                <h3 className="step-title">Pick your base</h3>
                <p className="step-desc">
                  {' '}
                  Browse curated templates engineered for course creators and
                  influencers. Each template is modular, mobile-first, and
                  optimized for conversion.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="step-thumb">
                  <img
                    alt="Digital visualization of neural network template selection"
                    src="https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="step-thumb-img"
                  />
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">
                  <span>02</span>
                </div>
                <h3 className="step-title">Personalize in minutes</h3>
                <p className="step-desc">
                  {' '}
                  Replace placeholder fields with your voice. Prewritten
                  sentence options and adjustable modules let you refine tone,
                  pacing, and CTAs without design or dev work.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="step-thumb">
                  <img
                    alt="Music production interface showing customization settings"
                    src="https://images.pexels.com/photos/27141304/pexels-photo-27141304.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="step-thumb-img"
                  />
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">
                  <span>03</span>
                </div>
                <h3 className="step-title">Deploy instantly</h3>
                <p className="step-desc">
                  {' '}
                  One-click export or connect directly to your platform. Version
                  control, backups, and rollback keep launches smooth and safe.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="step-thumb">
                  <img
                    alt="Futuristic glowing cube representing deployment"
                    src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="step-thumb-img"
                  />
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">
                  <span>04</span>
                </div>
                <h3 className="step-title">Amplify with tools</h3>
                <p className="step-desc">
                  {' '}
                  Integrate analytics, gated content, drip schedules, and
                  payment flows. Toggle features on/off to match your audience
                  and revenue model.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="step-thumb">
                  <img
                    alt="3D digital brain visualization showing tool integration"
                    src="https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="step-thumb-img"
                  />
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">
                  <span>05</span>
                </div>
                <h3 className="step-title">Preview with motion</h3>
                <p className="step-desc">
                  {' '}
                  Live animated preview shows entrance cues, progress ticks, and
                  micro-interactions so you can feel the end-user experience
                  before publishing.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="step-thumb">
                  <img
                    alt="Digital audio mixing software on tablet"
                    src="https://images.pexels.com/photos/13003485/pexels-photo-13003485.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="step-thumb-img"
                  />
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">
                  <span>06</span>
                </div>
                <h3 className="step-title">Scale with confidence</h3>
                <p className="step-desc">
                  {' '}
                  Built for speed and credibility: reduces setup time from weeks
                  to hours while preserving creator authenticity and
                  high-conversion UX.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="step-thumb">
                  <img
                    alt="Digital cube with greenery symbolizing growth"
                    src="https://images.pexels.com/photos/17485678/pexels-photo-17485678.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="step-thumb-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="social-proof-section"
          role="region"
          aria-labelledby="social-proof-heading"
        >
          <div className="social-proof-container">
            <div className="social-proof-panel">
              <h2 id="social-proof-heading" className="section-title">
                {' '}
                Trusted by rising creators and boutique studios
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <div className="social-proof-grid">
                <div className="social-proof-col-primary">
                  <div className="hero-case-card">
                    <div className="case-metric-badge">
                      <div data-target="1000" className="case-metric-value">
                        <span>0</span>
                      </div>
                      <div className="case-metric-label">
                        <span>+ influencer launches</span>
                      </div>
                    </div>
                    <blockquote className="case-quote">
                      {' '}
                      &quot;Launched my first paid mini-course in 7 days using
                      Seagai templates. 3x conversion vs my old pages.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite className="case-author">
                      — Aria Valen, Content Creator
                    </cite>
                    <div className="case-highlight">
                      <p className="case-highlight-text">
                        {' '}
                        Beauty creator doubled email signups in 14 days after
                        integrating Seagai&apos;s template CTAs and lesson
                        previews.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="social-proof-col-secondary">
                  <div className="testimonial-card">
                    <blockquote className="testimonial-quote">
                      {' '}
                      &quot;Templates felt custom-made. The onboarding copy and
                      lesson flow saved me weeks.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite className="testimonial-author">
                      — Mateo Cruz, Wellness Coach
                    </cite>
                  </div>
                  <div className="testimonial-card">
                    <blockquote className="testimonial-quote">
                      {' '}
                      &quot;From blank page to launch-ready in one sprint. The
                      dark aesthetic matched my brand instantly.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite className="testimonial-author">
                      {' '}
                      — Nova Li, Lifestyle Influencer
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </cite>
                  </div>
                </div>
                <div className="social-proof-col-tertiary">
                  <div className="testimonial-card">
                    <blockquote className="testimonial-quote">
                      {' '}
                      &quot;Investor-ready collateral and on-page metrics made
                      my pitch deck shine.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </blockquote>
                    <cite className="testimonial-author">
                      — Rowan Beck, Founder
                    </cite>
                  </div>
                  <div className="stat-highlight-card">
                    <div data-target="87" className="stat-highlight-value">
                      <span>0</span>
                    </div>
                    <div className="stat-highlight-label">
                      <span>
                        {' '}
                        % of creators report faster time-to-launch
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-card testimonial-card-compact">
                    <p className="testimonial-compact-text">
                      {' '}
                      Fitness influencer cut content production time by 60%
                      using modular lesson blocks.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cta-section" role="region" aria-labelledby="cta-heading">
          <div className="cta-container">
            <div className="cta-panel">
              <div className="cta-col-primary">
                <h2 id="cta-heading" className="cta-title">
                  {' '}
                  Get started — build your first bespoke course template
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="cta-desc">
                  {' '}
                  Launch faster. Convert better. Scale with templates built for
                  modern creators.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="cta-buttons">
                  <button
                    aria-label="Try demo template now"
                    className="btn btn-primary cta-btn-primary"
                  >
                    {' '}
                    Try Demo Template
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button
                    aria-label="Schedule discovery call"
                    className="btn-secondary btn cta-btn-secondary"
                  >
                    {' '}
                    Schedule Call
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
                <div className="cta-metrics">
                  <div className="cta-metric-item">
                    <div className="cta-metric-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="cta-metric-text">
                      No credit card required
                    </span>
                  </div>
                  <div className="cta-metric-item">
                    <div className="cta-metric-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="cta-metric-text">Live in 7 days avg.</span>
                  </div>
                </div>
              </div>
              <div className="cta-col-secondary">
                <div className="cta-links-group">
                  <h3 className="cta-links-title">Quick Links</h3>
                  <ul role="list" className="cta-links-list">
                    <li>
                      <a href="#">
                        <div className="cta-link">
                          <span>Explore pricing packages</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="cta-link">
                          <span>Join early-access waitlist</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="cta-link">
                          <span>View template gallery</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="cta-link">
                          <span>Read creator stories</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="cta-social-badges">
                  <div className="social-badge">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                    <span>4.2k+ creators</span>
                  </div>
                  <div className="social-badge">
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
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                      </g>
                    </svg>
                    <span>87% faster launches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container20">
          <div className="home-container21">
            <Script
              html={`<style>
        @keyframes heroFadeIn {from {opacity: 0;
transform: scale(0.96);}
to {opacity: 1;
transform: scale(1);}}@keyframes slideInUp {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes slideInLeft {from {opacity: 0;
transform: translateX(-20px) translateY(-8%);}
to {opacity: 1;
transform: translateX(0) translateY(-8%);}}@keyframes slideInRight {from {opacity: 0;
transform: translateX(20px) translateY(6%);}
to {opacity: 1;
transform: translateX(0) translateY(6%);}}@keyframes numberGlow {0%,100% {text-shadow: 0 0 8px
        color-mix(in srgb, var(--color-primary) 30%, transparent);}
50% {text-shadow: 0 0 16px
        color-mix(in srgb, var(--color-primary) 50%, transparent);}}@keyframes fadeInStagger {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes slideInRight {from {opacity: 0;
transform: translateX(12px);}
to {opacity: 1;
transform: translateX(0);}}@keyframes fadeInScale {from {opacity: 0;
transform: scale(0.96);}
to {opacity: 1;
transform: scale(1);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container22">
          <div className="home-container23">
            <Script
              html={`<script defer data-name="homepage">
(function(){
  // Number counter animation utility
  function animateCounter(element, target, duration) {
    const start = 0
    const startTime = performance.now()

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const current = Math.floor(progress * target)
      element.textContent = current

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        element.textContent = target
      }
    }

    requestAnimationFrame(update)
  }

  // Intersection Observer for triggering animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  }

  const counters = document.querySelectorAll("[data-target]")

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const target = parseInt(entry.target.dataset.target)
        const duration = 2000

        animateCounter(entry.target, target, duration)
        entry.target.dataset.animated = "true"
      }
    })
  }, observerOptions)

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })

  // Hero form submission handler
  const heroForm = document.getElementById("hero-form")
  if (heroForm) {
    heroForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const input = document.getElementById("hero-input")
      console.log("Course topic submitted:", input.value)

      // Visual feedback
      const btn = heroForm.querySelector("button")
      const originalText = btn.textContent
      btn.textContent = "Loading..."
      btn.disabled = true

      setTimeout(() => {
        btn.textContent = originalText
        btn.disabled = false
        input.value = ""
      }, 1500)
    })
  }

  // Parallax effect for hero metrics on scroll (subtle)
  let ticking = false

  function updateParallax() {
    const scrolled = window.pageYOffset
    const metricLeft = document.querySelector(".hero-metric-left")
    const metricRight = document.querySelector(".hero-metric-right")

    if (metricLeft && metricRight && scrolled < 800) {
      metricLeft.style.transform = \`translateY(calc(-8% + \${
        scrolled * 0.05
      }px))\`
      metricRight.style.transform = \`translateY(calc(6% + \${
        scrolled * 0.03
      }px))\`
    }

    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax)
      ticking = true
    }
  })

  // Input field focus animations
  const editableFields = document.querySelectorAll(".field-input")
  editableFields.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)"
    })

    field.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)"
    })
  })

  // Category chip interactions
  const categoryChips = document.querySelectorAll(".category-chip")
  categoryChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      categoryChips.forEach(
        (c) => (c.style.background = "var(--color-surface)")
      )
      categoryChips.forEach((c) => (c.style.color = "var(--color-on-surface)"))

      this.style.background = "var(--color-primary)"
      this.style.color = "var(--color-on-primary)"
    })
  })

  // Glow effect on hover for metric cards
  const valueCards = document.querySelectorAll(".value-card")
  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const number = this.querySelector(".value-card-number")
      if (number) {
        number.style.textShadow =
          "0 0 12px color-mix(in srgb, var(--color-primary) 50%, transparent)"
      }
    })

    card.addEventListener("mouseleave", function () {
      const number = this.querySelector(".value-card-number")
      if (number) {
        number.style.textShadow = "none"
      }
    })
  })

  // Console log for demo
  console.log("Seagai Homepage - Interactive elements initialized")
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container11 {
            display: none;
          }
          .home-container12 {
            display: contents;
          }
          .home-container20 {
            display: none;
          }
          .home-container21 {
            display: contents;
          }
          .home-container22 {
            display: none;
          }
          .home-container23 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
