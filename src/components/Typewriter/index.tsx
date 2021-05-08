import * as React from 'react';

import bind from 'bind-decorator';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {block as bem} from 'bem-cn';

import {Container} from '@material-ui/core';

import {TextProvider} from 'components/TextProvider';
import {TextPractice} from 'components/TextPractice';

import {State as StateType} from 'store/index';

import {Views} from 'reducers/view';
import {CharacterStatus} from 'reducers/text';

import {changeText, pushStatus, setPosition} from 'actions/text';
import {changeView} from 'actions/view';

import './index.scss';

interface Props {
  text: string;
  text_status: CharacterStatus[];
  text_position: number;
  view: Views;

  updateText: (text: string) => void;
  updateView: (view: Views) => void;

  pushTextStatus: (status: CharacterStatus) => void;
  setTextPosition: (position: number) => void;
}

interface State {
}


const block = bem('Typewriter');

export class TypewriterBase extends React.Component<Props, State> {
  public render() {
    return (
        <Container maxWidth='md'>
          <h1 className={block('title')}>Typewriter</h1>
          {this.props.view === Views.TEXT_PROVIDER ? (
              <TextProvider
                  value={this.props.text}
                  onChange={this.onTextChange}
              />
          ) : null}
          {this.props.view === Views.TEXT_PRACTICE ? (
              <TextPractice
                  value={this.props.text}
                  position={this.props.text_position}
                  status={this.props.text_status}
                  onChange={this.onTextStatusChange}
              />
          ) : null}
        </Container>
    );
  }

  @bind
  private onTextChange(text: string) {
    this.props.updateText(text);
    this.props.updateView(Views.TEXT_PRACTICE);
  }

  @bind
  private onTextStatusChange(status: CharacterStatus) {
    this.props.pushTextStatus(status);
    this.props.setTextPosition(this.props.text_position + 1);
  }
}

export const mapStateToProps = (state: StateType) => ({
  text: state.text.value,
  text_status: state.text.status,
  text_position: state.text.position,
  view: state.view.view,
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateText: (text: string) => dispatch(changeText(text)),
  updateView: (view: Views) => dispatch(changeView(view)),
  pushTextStatus: (status: CharacterStatus) => dispatch(pushStatus(status)),
  setTextPosition: (position: number) => dispatch(setPosition(position)),
});

export const Typewriter = connect(mapStateToProps, mapDispatchToProps)(TypewriterBase);