/**
 * Formats a date string, timestamp, or Date object into a readable format.
 * @param date - The date to format
 * @param options - Localization options for Intl.DateTimeFormat
 * @returns Formatted date string or empty string on error
 */
export function formatDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }
): string {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      throw new Error('Invalid date value');
    }
    return new Intl.DateTimeFormat('en-US', options).format(d);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}
