export interface SelectOption {
  value: string;
  label: string;
}

export const LANGUAGES_LIST: SelectOption[] = [
  { value: 'en', label: 'English (US)' },
  { value: 'es', label: 'Español (ES)' },
  { value: 'fr', label: 'Français (FR)' },
  { value: 'ja', label: '日本語 (JA)' },
];

export const CURRENCIES_LIST: SelectOption[] = [
  { value: 'USD', label: 'USD ($)' },
  { value: 'EUR', label: 'EUR (€)' },
  { value: 'GBP', label: 'GBP (£)' },
  { value: 'JPY', label: 'JPY (¥)' },
];
