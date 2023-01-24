export function formatDate(dateString) {
  if (dateString && isNaN(Date.parse(dateString))) // support for displaying "Coming Soon" date
    return dateString

  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
