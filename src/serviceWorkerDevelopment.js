const serviceWorkerDevelopment = () => {
  const { serviceWorker } = navigator;
  const serviceWorkerUrl = {
    current: null,
  };

  serviceWorkerUrl.current = `${process.env.PUBLIC_URL}/sw.js`;

  serviceWorker.register(serviceWorkerUrl.current).then((response) => {
    console.warn("response", response);
  });
};

export default serviceWorkerDevelopment;
