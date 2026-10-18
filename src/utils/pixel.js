export function trackLead(location) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: 'Vibe Coders Program',
      content_category: location,
    });
  }
}
