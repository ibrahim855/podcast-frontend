import { useState } from 'react';

function useLoading() {
  const [loading, setLoading] = useState(false);

  function onLoadingChanged(val) {
    setLoading(val);
  }

  return {
    loading,
    onLoadingChanged,
  };
}

export default useLoading;