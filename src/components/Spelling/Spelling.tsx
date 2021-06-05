import * as React from 'react';

import {Group, Title} from '@vkontakte/vkui';

import './Spelling.scss';

interface Props {
}

interface State {
}

export class Spelling extends React.Component<Props, State> {
  public render() {
    return (
        <Group mode='card' separator='hide'>
          <Title level='1' weight='semibold'>Spelling</Title>
        </Group>
    )
  }
}
