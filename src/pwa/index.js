// @flow
const handleServiceWorkerRegistrationSuccess = (registration: any) => {
  const registrationResult = registration;

  registrationResult.onupdatefound = () => {
    const installingWorker = registration.installing;

    installingWorker.onstatechange = () => {
      switch (installingWorker.state) {
        case 'installed':
          // eslint-disable-next-line no-console
          console.warn('New Update available! Reload the webapp to see the latest juicy changes.');
          window.location.reload(true);
          break;
        default:
          break;
      }
    };
  };
};

const handleServiceWorkerRegistrationFailed = (registrationError: any) => {
  // eslint-disable-next-line no-console
  console.log('SW registration failed: ', registrationError);
};

const handleWindowLoad = () => {
  if (!navigator.serviceWorker) return;
  navigator.serviceWorker.register('/service-worker.js')
    .then(handleServiceWorkerRegistrationSuccess)
    .catch(handleServiceWorkerRegistrationFailed);
};

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', handleWindowLoad);
  }
};

export default {
  registerServiceWorker,
};
