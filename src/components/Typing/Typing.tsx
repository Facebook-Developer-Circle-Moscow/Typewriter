import * as React from 'react';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {State as TypingState} from 'models/typing';

import {State as StateType} from 'store/index';

import {TypingProvider} from 'components/TypingProvider/TypingProvider';
import {TypingPractice} from 'components/TypingPractice/TypingPractice';
import {TypingResult} from 'components/TypingResult/TypingResult';

import './Typing.scss';

interface Props {
  state: TypingState;
}

interface State {
}

class TypingBase extends React.Component<Props, State> {
  public render() {
    return (
        <React.Fragment>
          {this.props.state === TypingState.PROVIDER ? <TypingProvider/> : null}
          {this.props.state === TypingState.PRACTICE ? <TypingPractice/> : null}
          {this.props.state === TypingState.RESULT ? <TypingResult/> : null}
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  state: state.typing.state,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const Typing = connect(mapStateToProps, mapDispatchToProps)(TypingBase);
