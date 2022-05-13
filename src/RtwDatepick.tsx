import React from 'react';
import { Root } from './components/Root';
import { RootProvider } from './contexts/RootProvider';
import { RtwDatepickBase } from './types/RtwDatepickBase';

export type RtwDatepickProps = RtwDatepickBase

export function RtwDatepick(props: RtwDatepickProps): JSX.Element {
  return (
    <RootProvider {...props}>
      <Root />
    </RootProvider>
  );
}
