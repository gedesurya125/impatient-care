export const getHostUrl = () =>
  typeof window !== 'undefined' ? window.location.origin : '';
