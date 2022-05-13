import { useContext } from 'react';

import { RtwDatepickContext, RtwDatepickContextValue } from './RtwDatepickContext';

export function useRtwDatepick(): RtwDatepickContextValue {
  const context = useContext(RtwDatepickContext);
  if (!context) {
    throw new Error(`useRtwDatepick must be used within a RtwDatepickProvider.`);
  }
  return context;
}
