/**
 * 日付を日本語形式（YYYY年MM月DD日）にフォーマット
 */
export function formatDateToJapanese(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

/**
 * 日付文字列を日本語形式にフォーマット
 */
export function formatDateStringToJapanese(dateString: string): string {
  const date = new Date(dateString);
  return formatDateToJapanese(date);
}