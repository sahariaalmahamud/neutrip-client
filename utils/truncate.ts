/**
 * Truncates a string to a maximum length and appends a customizable suffix.
 * @param text - The text to truncate
 * @param length - Maximum length of the returned string (including suffix)
 * @param suffix - Suffix to append (default: '...')
 * @returns Truncated string
 */
export function truncate(text: string, length: number, suffix = '...'): string {
  if (!text) return '';
  if (text.length <= length) return text;

  const actualLength = length - suffix.length;
  if (actualLength <= 0) return suffix.slice(0, length);

  return text.slice(0, actualLength) + suffix;
}
