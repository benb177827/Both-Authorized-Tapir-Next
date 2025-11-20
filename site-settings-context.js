import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const defaultSettings = {
  heroBadge: 'Creator-first template lab',
  heroBadgeSecondary: 'New drop weekly',
  heroTitle: 'Seagai — Bespoke Course Templates for Influencers',
  heroCopy:
    'Launch high-converting courses fast with designer-built templates tailored to your voice. Modern, modular, and ready to fill.',
  heroHelper:
    'Start with a template: headline, outcomes, modules, pricing — all ready in seconds.',
  primaryColor: '#ff5a5f',
  secondaryColor: '#ff9f1c',
}

const SiteSettingsContext = createContext(null)

const STORAGE_KEY = 'site-settings'

const applyThemeColors = (settings) => {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.style.setProperty(
    '--color-primary',
    settings.primaryColor
  )
  document.documentElement.style.setProperty(
    '--color-accent',
    settings.primaryColor
  )
  document.documentElement.style.setProperty(
    '--color-secondary',
    settings.secondaryColor
  )
}

export const SiteSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setSettings({ ...defaultSettings, ...parsed })
        applyThemeColors({ ...defaultSettings, ...parsed })
        return
      } catch (error) {
        console.error('Unable to parse stored settings', error)
      }
    }

    applyThemeColors(defaultSettings)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    applyThemeColors(settings)
  }, [settings])

  const updateSettings = (partialSettings) => {
    setSettings((previous) => ({ ...previous, ...partialSettings }))
  }

  const value = useMemo(() => ({ settings, updateSettings }), [settings])

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  )
}

export const useSiteSettings = () => {
  const context = useContext(SiteSettingsContext)
  if (!context) {
    throw new Error('useSiteSettings must be used within a SiteSettingsProvider')
  }

  return context
}
