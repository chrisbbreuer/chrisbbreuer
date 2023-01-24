export function formatDate(dateString) {
  console.log('1. dateString', dateString)

  if (dateString && isNaN(Date.parse(dateString))) // support for displaying "Coming Soon" date
    return dateString

  const d = new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
  console.log('2. d', d)
  return d
}
