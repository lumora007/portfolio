import { useEffect, useState } from 'react';

// The site navigates sections with plain hashes (#about, #posts), so routes are
// namespaced with a leading slash (#/posts/my-slug) to keep the two apart
// without pulling in a router dependency.
const readRoute = () => {
  const { hash } = window.location;
  return hash.startsWith('#/') ? hash.slice(1) : null;
};

export const useHashRoute = () => {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
};

export const matchPostSlug = route => {
  const prefix = '/posts/';
  return route && route.startsWith(prefix) ? route.slice(prefix.length) : null;
};
