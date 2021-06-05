import * as React from 'react';

import {block as bem} from 'bem-cn';

import bind from 'bind-decorator';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {FormItem, FormLayout, Group, Text, Title} from '@vkontakte/vkui';

import {State as TypingState, Stats, Status} from 'models/typing';

import {State as StateType} from 'store/index';

import {changeState, setStat} from 'actions/typing';

import {KeyHelper} from 'components/KeyHelper/KeyHelper';

import './TypingPractice.scss';

interface Props {
  stat: Stats[];

  setStat: (stat: Stats[]) => void;
  changeState: (state: TypingState) => void;
}

interface State {
  pointer: number;
  stat: Stats[];
}

const block = bem('TypingPractice');

const typeAudio = new Audio('audio/typewriter.mp3');
const errorAudio = new Audio('audio/error.mp3');

class TypingPracticeBase extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      pointer: 0,
      stat: [...this.props.stat]
    };
  }

  public componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  public componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  public render() {
    return (
        <React.Fragment>
          <Group mode='card' separator='hide'>
            <FormLayout>
              <FormItem>
                <Title level='1' weight='semibold'>Typing</Title>
              </FormItem>
              <FormItem>
                <Text weight='regular'>
                  {this.state.stat.map(({character: v, status: s}, i) => {
                    return (
                        <span key={i} className={block({status: s})}>{v}</span>
                    );
                  })}
                </Text>
              </FormItem>
            </FormLayout>
          </Group>
          <KeyHelper value={this.state.stat[this.state.pointer].character}/>
        </React.Fragment>
    )
  }

  @bind
  private onKeyPress(event: KeyboardEvent) {
    const charCode = (typeof event.which === 'number') ? event.which : event.keyCode;

    typeAudio.pause();
    errorAudio.pause();

    if (String.fromCharCode(charCode) === this.state.stat[this.state.pointer].character) {
      typeAudio.currentTime = 0;
      typeAudio.play();
      this.state.stat[this.state.pointer].status = Status.RIGHT;
    } else {
      typeAudio.currentTime = 0;
      errorAudio.play();
      this.state.stat[this.state.pointer].status = Status.WRONG;
    }

    this.state.stat[this.state.pointer].time = Date.now();

    if (this.state.pointer + 1 >= this.state.stat.length) {
      document.removeEventListener('keypress', this.onKeyPress);

      this.props.setStat(this.state.stat);
      this.props.changeState(TypingState.RESULT);
    } else {
      this.setState({
        pointer: this.state.pointer + 1
      });
    }

    event.preventDefault();
    event.stopPropagation();
  }
}

const mapStateToProps = (state: StateType) => ({
  stat: Array.from(state.typing.text).map((v) => ({
    character: v,
    status: Status.DEFAULT,
    time: Date.now()
  })),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setStat: (stat: Stats[]) => dispatch(setStat(stat)),
  changeState: (state: TypingState) => dispatch(changeState(state)),
});

export const TypingPractice = connect(mapStateToProps, mapDispatchToProps)(TypingPracticeBase);
