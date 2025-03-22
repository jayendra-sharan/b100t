import React, { createContext, useContext, useEffect, useState } from 'react';

type FeatureFlags = {
  enableLanguageSwitcher: boolean;
  [key: string]: boolean;
};

const defaultFlags: FeatureFlags = {
  enableLanguageSwitcher: false,
};

const FeatureFlagContext = createContext<FeatureFlags>(defaultFlags);

export const FeatureFlagProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [flags, setFlags] = useState<FeatureFlags>(defaultFlags);
  const env = import.meta.env.VITE_ENV || 'dev';

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}config/features.${env}.json`)
      .then((res) => res.json())
      .then((json) => setFlags(json))
      .catch(() => {
        console.warn('Could not load feature flags, using defaults.');
      });
  }, []);

  return (
    <FeatureFlagContext.Provider value={flags}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlags = () => useContext(FeatureFlagContext);
