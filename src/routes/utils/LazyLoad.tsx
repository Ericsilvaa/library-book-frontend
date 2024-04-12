import { Suspense, lazy } from 'react';

export const lazyLoad = (importFunc: any) => {
  const Component = lazy(importFunc);

  const WrapperComponent = (props: any) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };

  function LazyLoadedCompoent(props: any) {
    return <WrapperComponent {...props} />;
  }

  return LazyLoadedCompoent;
};
