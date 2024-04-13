import React, { ComponentType } from 'react';

export const lazy = (factory: () => Promise<{ default: ComponentType<any> }>) => {
  console.log('using error handler');

  return React.lazy(() => factory().catch(importErrorHandler));
};

export function importErrorHandler(err: string): { default: ComponentType<any> } {
  // Get the last reload time from local storage and the current time
  const timeStr = sessionStorage.getItem('last-reload');
  const time = timeStr ? Number(timeStr) : null;
  const now = Date.now();

  // If the last reload time is more than 10 seconds ago, reload the page
  const isReloading = !time || time + 10_000 < now;
  if (isReloading) {
    console.log('New version for this module found. Reloading ...');
    sessionStorage.setItem('last-reload', String(now));
    window.location.reload();
    return { default: () => null };
  }

  // We let ErrorBoundary handle the error
  //throw new Error(err);
  const module = {
    default: () => {
      console.log(err);
      return (
        <div style={{ borderColor: 'black', borderRadius: '1vh', width: '50vw', height: '50vh', color: 'black' }}>
          <div style={{ color: 'red' }}>Error</div>
          <br />
          Error loading component. Please clear cache and relaunch your browser. <br />
          If the error persists, please contact support.
        </div>
      );
    }
  };

  return module;
}
