import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useBattery} from '..';

const Demo = () => {
  const state = useBattery();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

storiesOf('useBattery', module)
  .add('Example', () =>
    <Demo/>
  )
