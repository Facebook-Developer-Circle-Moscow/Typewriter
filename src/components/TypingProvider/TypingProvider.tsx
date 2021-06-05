import * as React from 'react';

import bind from 'bind-decorator';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {FormItem, FormLayout, Group, Textarea, Title} from '@vkontakte/vkui';

import {State as TypingState} from 'models/typing';

import {State as StateType} from 'store/index';

import {changeState, setText} from 'actions/typing';

import './TypingProvider.scss';

interface Props {
  text: string;

  setText: (text: string) => void;
  changeState: (state: TypingState) => void;
}

interface State {
  text: string;
}

class TypingProviderBase extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  public render() {
    return (
        <Group mode='card' separator='hide'>
          <FormLayout>
            <FormItem>
              <Title level='1' weight='semibold'>Typing</Title>
            </FormItem>
            <FormItem bottom='To start practicing, press Shift + Enter'>
              <Textarea
                  value={this.state.text}
                  placeholder='Enter your practice text'
                  onChange={this.onChange}
                  onKeyPress={this.onKeyPress}
              />
            </FormItem>
          </FormLayout>
        </Group>
    )
  }

  @bind
  private onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      text: event.target.value
    });
  }

  @bind
  private onKeyPress(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.shiftKey && event.charCode === 13) {
      this.props.setText(this.state.text);
      this.props.changeState(TypingState.PRACTICE);
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

const mapStateToProps = (state: StateType) => ({
  text: state.typing.text,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setText: (text: string) => dispatch(setText(text)),
  changeState: (state: TypingState) => dispatch(changeState(state)),
});

export const TypingProvider = connect(mapStateToProps, mapDispatchToProps)(TypingProviderBase);
