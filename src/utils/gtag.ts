export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

export const pageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    anonymize_ip: true,
    page_path: url
  });
};

type GtagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

export const GTAG_SCRIPT = `
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', { anonymize_ip: true });
gtag('set', 'allow_google_signals', false);
gtag('config', '${GA_TRACKING_ID}', {
  anonymize_ip: true,
  page_path: window.location.pathname
});
`;
