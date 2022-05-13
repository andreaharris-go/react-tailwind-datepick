import React from 'react';

import { RtwDatepickBase } from 'types/RtwDatepickBase';
import { RtwDatepickProvider } from "./RtwDatepick";

export type RootContext = RtwDatepickBase & {
  children: React.ReactNode;
};

export function RootProvider(props: RootContext): JSX.Element {
  const { children, ...initialProps } = props;

  return (
    <RtwDatepickProvider initialProps={initialProps}>
      {children}
    </RtwDatepickProvider>
  );
}
