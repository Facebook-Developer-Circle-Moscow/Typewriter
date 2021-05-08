import * as React from 'react';

import {block as bem} from 'bem-cn';

import {Keyboard} from 'components/Keyboard';
import {Hands} from 'components/Hands';

const block = bem('KeyHelper');

import './index.scss';

interface Props {
  value: string;
}

export function KeyHelper({value}: Props) {
  return (
      <div className={block()}>
        <Keyboard value={value}/>
        <Hands value={value}/>
      </div>
  );
}