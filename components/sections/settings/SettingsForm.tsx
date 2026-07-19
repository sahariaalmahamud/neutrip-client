'use client';

import React, { useState } from 'react';
import { Button, Card } from '@heroui/react';
import {
  FiUser, FiMail, FiPhone, FiGlobe, FiDollarSign,
  FiSun, FiMoon, FiBell, FiShield, FiLoader, FiSave,
} from 'react-icons/fi';
import { toast } from 'sonner';
import { useTheme } from '@/providers/theme-provider';
import { MOCK_PROFILE } from '@/constants/profile';
import { LANGUAGES_LIST, CURRENCIES_LIST } from '@/constants/settings';

export function SettingsForm() {
  const { theme, toggleTheme } = useTheme();

  // All form state is local until "Save Changes" is clicked
  const [name, setName] = useState(MOCK_PROFILE.name);
  const [email, setEmail] = useState(MOCK_PROFILE.email);
  const [phone, setPhone] = useState(MOCK_PROFILE.phone);
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');
  const [tempTheme, setTempTheme] = useState<'dark' | 'light'>(theme);
  const [notifyTrips, setNotifyTrips] = useState(true);
  const [notifyPromos, setNotifyPromos] = useState(false);
  const [notifyOffset, setNotifyOffset] = useState(true);
  const [profilePublic, setProfilePublic] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Synchronize theme with ThemeProvider only if it changed
      if (tempTheme !== theme) {
        toggleTheme();
      }
      toast.success('Settings saved successfully!');
    }, 1600);
  };

  const notifications = [
    {
      id: 'notify-trips',
      label: 'Trip updates & reminders',
      desc: 'Get alerts for booking confirmations and schedule changes.',
      checked: notifyTrips,
      onChange: setNotifyTrips,
    },
    {
      id: 'notify-promos',
      label: 'Promotional deals',
      desc: 'Receive curated discount recommendations matching your travel style.',
      checked: notifyPromos,
      onChange: setNotifyPromos,
    },
    {
      id: 'notify-offset',
      label: 'Sustainability tips & offsets',
      desc: 'Stay informed about eco-friendly travel recommendations.',
      checked: notifyOffset,
      onChange: setNotifyOffset,
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* ── Account Details ── */}
      <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
        <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/40">
          Account Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-name" className="text-[10px] font-bold text-accent uppercase tracking-wider">
              Full Name
            </label>
            <div className="flex items-center bg-background/40 rounded-xl border border-border/80 hover:border-border transition-colors h-10 px-3 gap-2">
              <FiUser className="w-4 h-4 text-primary flex-shrink-0" />
              <input
                id="settings-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                className="w-full bg-transparent text-foreground text-sm outline-none placeholder:text-muted disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-email" className="text-[10px] font-bold text-accent uppercase tracking-wider">
              Email Address
            </label>
            <div className="flex items-center bg-background/40 rounded-xl border border-border/80 hover:border-border transition-colors h-10 px-3 gap-2">
              <FiMail className="w-4 h-4 text-primary flex-shrink-0" />
              <input
                id="settings-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full bg-transparent text-foreground text-sm outline-none placeholder:text-muted disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="settings-phone" className="text-[10px] font-bold text-accent uppercase tracking-wider">
              Phone Number
            </label>
            <div className="flex items-center bg-background/40 rounded-xl border border-border/80 hover:border-border transition-colors h-10 px-3 gap-2 sm:max-w-xs">
              <FiPhone className="w-4 h-4 text-primary flex-shrink-0" />
              <input
                id="settings-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
                className="w-full bg-transparent text-foreground text-sm outline-none placeholder:text-muted disabled:opacity-50"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* ── Profile Preferences ── */}
      <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
        <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/40">
          Profile Preferences
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-language" className="text-[10px] font-bold text-accent uppercase tracking-wider">
              Language
            </label>
            <div className="flex items-center bg-background/40 rounded-xl border border-border/80 hover:border-border transition-colors h-10 px-3 gap-2">
              <FiGlobe className="w-4 h-4 text-primary flex-shrink-0" />
              <select
                id="settings-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={isLoading}
                className="w-full bg-transparent text-foreground text-sm outline-none appearance-none cursor-pointer disabled:opacity-50"
              >
                {LANGUAGES_LIST.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-currency" className="text-[10px] font-bold text-accent uppercase tracking-wider">
              Currency
            </label>
            <div className="flex items-center bg-background/40 rounded-xl border border-border/80 hover:border-border transition-colors h-10 px-3 gap-2">
              <FiDollarSign className="w-4 h-4 text-primary flex-shrink-0" />
              <select
                id="settings-currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                disabled={isLoading}
                className="w-full bg-transparent text-foreground text-sm outline-none appearance-none cursor-pointer disabled:opacity-50"
              >
                {CURRENCIES_LIST.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-background text-foreground">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* ── Theme Preference ── */}
      <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
        <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/40">
          Theme Preference
        </h3>
        <p className="text-xs text-muted -mt-2">
          Theme changes are applied globally only after clicking &ldquo;Save Changes&rdquo;.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setTempTheme('dark')}
            disabled={isLoading}
            suppressHydrationWarning
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 ${
              tempTheme === 'dark'
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-background/40 border-border/80 text-muted hover:border-border'
            }`}
          >
            <FiMoon className="w-4 h-4" />
            Dark Mode
          </button>

          <button
            type="button"
            onClick={() => setTempTheme('light')}
            disabled={isLoading}
            suppressHydrationWarning
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 ${
              tempTheme === 'light'
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-background/40 border-border/80 text-muted hover:border-border'
            }`}
          >
            <FiSun className="w-4 h-4" />
            Light Mode
          </button>
        </div>
      </Card>

      {/* ── Notification Preferences ── */}
      <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
        <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/40 flex items-center gap-2">
          <FiBell className="w-4 h-4 text-primary" />
          Notification Preferences
        </h3>

        <div className="flex flex-col gap-4">
          {notifications.map((item) => (
            <label key={item.id} htmlFor={item.id} className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-0.5 flex-shrink-0">
                <input
                  id={item.id}
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => item.onChange(e.target.checked)}
                  disabled={isLoading}
                  className="sr-only peer"
                />
                <div className="w-4 h-4 rounded border-2 border-border peer-checked:border-primary peer-checked:bg-primary transition-all duration-200 flex items-center justify-center">
                  {item.checked && (
                    <svg className="w-2.5 h-2.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <span className="text-[10px] text-muted">{item.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </Card>

      {/* ── Privacy & Security ── */}
      <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-5">
        <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/40 flex items-center gap-2">
          <FiShield className="w-4 h-4 text-primary" />
          Privacy &amp; Security
        </h3>

        <label htmlFor="profile-public" className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5 flex-shrink-0">
            <input
              id="profile-public"
              type="checkbox"
              checked={profilePublic}
              onChange={(e) => setProfilePublic(e.target.checked)}
              disabled={isLoading}
              className="sr-only peer"
            />
            <div className="w-4 h-4 rounded border-2 border-border peer-checked:border-primary peer-checked:bg-primary transition-all duration-200 flex items-center justify-center">
              {profilePublic && (
                <svg className="w-2.5 h-2.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Public profile visibility
            </span>
            <span className="text-[10px] text-muted">
              Allow other Neutrip explorers to discover and view your travel profile.
            </span>
          </div>
        </label>
      </Card>

      {/* ── Save Changes ── */}
      <Button
        onPress={handleSave}
        isDisabled={isLoading}
        className="w-full sm:w-56 h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 self-start"
      >
        {isLoading ? (
          <>
            <FiLoader className="w-4 h-4 animate-spin" />
            Saving Changes...
          </>
        ) : (
          <>
            <FiSave className="w-4 h-4" />
            Save Changes
          </>
        )}
      </Button>

    </div>
  );
}
