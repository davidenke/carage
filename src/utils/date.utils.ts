export function formatDateSlug(slug: number): string {
  return slug
    .toString()
    .padStart(2, '0');
}

export function formatDate(date: Date): string {
  return `${ formatDateSlug(date.getDate()) }.${ formatDateSlug(date.getMonth() + 1) }.${ date.getFullYear() }`;
}

export function formatDateInput(date: Date): string {
  return `${ date.getFullYear() }-${ formatDateSlug(date.getMonth() + 1) }-${ formatDateSlug(date.getDate()) }`;
}
