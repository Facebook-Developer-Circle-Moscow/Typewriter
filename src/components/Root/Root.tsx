import * as React from 'react';

import {Group, Title} from '@vkontakte/vkui';

import './Root.scss';

interface Props {
}

interface State {
}

export class Root extends React.Component<Props, State> {
  public render() {
    return (
        <Group mode='card' separator='hide'>
          <Title level='1' weight='semibold'>Root</Title>
        </Group>
    )
  }
}
