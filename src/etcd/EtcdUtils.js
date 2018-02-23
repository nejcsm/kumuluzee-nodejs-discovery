export const getServiceKeyInstance = (environment, serviceName, version, serviceId) => `/environments/${environment}/services/${serviceName}/${version}/instances/${serviceId}`;
export const getServiceKeyInstances = (environment, serviceName, version) => `/environments/${environment}/services/${serviceName}/${version}/instances/`;

export const getLastKeyLayer = (key) => {
  const splitted = key.split('/');
  return splitted[splitted.length - 1];
};

export const getEtcdDir = (etcd, key, retryPolicy, resillience) => {
  try {
    return etcd.getSync(key, { recursive: true, maxRetries: retryPolicy });
  } catch (err) {
    console.error(`Error when trying to access key: ${err}`);
  }

  return null;
};
