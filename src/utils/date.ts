/**
 * Formats a date to Japanese format (YYYY年MM月DD日)
 */
export function formatDateToJapanese(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

/**
 * Formats a date string to Japanese format
 */
export function formatDateStringToJapanese(dateString: string): string {
  const date = new Date(dateString);
  return formatDateToJapanese(date);
}