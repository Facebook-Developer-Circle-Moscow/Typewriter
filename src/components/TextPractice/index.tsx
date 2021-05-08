import * as React from 'react';

import bind from 'bind-decorator';

import {block as bem} from 'bem-cn';

import {Typography} from '@material-ui/core';

import {CharacterStatus} from 'reducers/text';

import {KeyHelper} from 'components/KeyHelper';

const block = bem('TextPractice');

const typeAudio = new Audio('audio/typewriter.mp3');
const errorAudio = new Audio('audio/error.mp3');

interface Props {
  value: string;
  position: number;
  status: CharacterStatus[];

  onChange: (status: CharacterStatus) => void;
}

import './index.scss';

export class TextPractice extends React.Component<Props> {
  public componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  public componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  public render() {
    const charStatus = [
      block('cr'),
      block('cw')
    ];

    return (
        <div className={block()}>
          <Typography variant='body1' gutterBottom={true}>
            {Array.from(this.props.value).map((v, i) => {
              return (
                  <span key={i} className={charStatus[this.props.status[i]]}>{v}</span>
              );
            })}
          </Typography>
          <KeyHelper value={this.props.value[this.props.position]}/>
        </div>
    );
  }

  @bind
  private onKeyPress(event: KeyboardEvent) {
    const charCode = (typeof event.which === 'number') ? event.which : event.keyCode;

    typeAudio.pause();
    errorAudio.pause();

    if (String.fromCharCode(charCode) === this.props.value[this.props.position]) {
      typeAudio.currentTime = 0;
      typeAudio.play();
      this.props.onChange(CharacterStatus.RIGHT);
    } else {
      typeAudio.currentTime = 0;
      errorAudio.play();
      this.props.onChange(CharacterStatus.WRONG);
    }

    event.preventDefault();
    event.stopPropagation();
  }
}
