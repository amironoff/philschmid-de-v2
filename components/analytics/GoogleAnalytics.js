import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const GAScript = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  )
}

// <Script strategy="lazyOnload" id="ga-script">
//         {`
//           // https://developers.google.com/tag-manager/devguide
//           window.dataLayer = window.dataLayer || [];
//           function gtag() {
//             dataLayer.push(arguments);
//           }
//           gtag('js', new Date());

//           // defines window.localstorage key
//           const GA_LOCAL_STORAGE_KEY = 'ga:clientId';

//           // checks if localstorage is available
//           if (window.localStorage) {
//             // checks if user was already connected and loads client_id from localstorage
//             if (localStorage.getItem(GA_LOCAL_STORAGE_KEY)) {
//               // creates new tracker with same client_id as the last time the user visited
//               gtag('js', new Date());
//               gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
//                 send_page_view: true,
//                 client_storage: 'none',
//                 client_id: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
//               });
//             } else {
//               // creates client_id and saves it in localStorage -> currently random number better would be a uuid
//               window.localStorage.setItem(GA_LOCAL_STORAGE_KEY, uuidv4());
//               // creates new tracker with the new client_id
//               gtag('js', new Date());
//               gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
//                 send_page_view: true,
//                 client_storage: 'none',
//                 client_id: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
//               });
//             }
//           }
//         `}
//       </Script>

export default GAScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action, category, label, value) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
