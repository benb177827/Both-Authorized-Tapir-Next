import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useSiteSettings } from '../site-settings-context'

const ControlPanel = () => {
  const { settings, updateSettings } = useSiteSettings()

  const handleChange = (event) => {
    const { name, value } = event.target
    updateSettings({ [name]: value })
  }

  return (
    <div className="control-panel">
      <Head>
        <title>Content Controls | Seagai</title>
        <meta
          name="description"
          content="Adjust the wording and theme colours for your site."
        />
      </Head>
      <div className="control-panel__header">
        <div>
          <p className="control-panel__eyebrow">Site configuration</p>
          <h1 className="control-panel__title">Update wording & colours</h1>
          <p className="control-panel__subtitle">
            Use this panel to adjust the hero messaging and brand colours. Your
            changes are saved in your browser, so you can tweak the page without
            touching the code.
          </p>
        </div>
        <Link className="control-panel__link" href="/">
          ← Back to site
        </Link>
      </div>

      <div className="control-panel__grid">
        <section className="control-panel__card">
          <h2 className="control-panel__section-title">Hero wording</h2>
          <div className="control-panel__field">
            <label htmlFor="heroBadge">Badge (left)</label>
            <input
              id="heroBadge"
              name="heroBadge"
              value={settings.heroBadge}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="control-panel__field">
            <label htmlFor="heroBadgeSecondary">Badge (right)</label>
            <input
              id="heroBadgeSecondary"
              name="heroBadgeSecondary"
              value={settings.heroBadgeSecondary}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="control-panel__field">
            <label htmlFor="heroTitle">Hero title</label>
            <input
              id="heroTitle"
              name="heroTitle"
              value={settings.heroTitle}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="control-panel__field">
            <label htmlFor="heroCopy">Hero description</label>
            <textarea
              id="heroCopy"
              name="heroCopy"
              rows="3"
              value={settings.heroCopy}
              onChange={handleChange}
            />
          </div>
          <div className="control-panel__field">
            <label htmlFor="heroHelper">Helper line</label>
            <textarea
              id="heroHelper"
              name="heroHelper"
              rows="2"
              value={settings.heroHelper}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="control-panel__card">
          <h2 className="control-panel__section-title">Brand colours</h2>
          <div className="control-panel__field">
            <label htmlFor="primaryColor">Primary colour</label>
            <input
              id="primaryColor"
              name="primaryColor"
              value={settings.primaryColor}
              onChange={handleChange}
              type="color"
            />
          </div>
          <div className="control-panel__field">
            <label htmlFor="secondaryColor">Secondary colour</label>
            <input
              id="secondaryColor"
              name="secondaryColor"
              value={settings.secondaryColor}
              onChange={handleChange}
              type="color"
            />
          </div>
          <p className="control-panel__hint">
            These colours update the accent styles throughout the page using the
            existing theme variables.
          </p>
        </section>
      </div>
    </div>
  )
}

export default ControlPanel
