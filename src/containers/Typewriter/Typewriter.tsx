import * as React from 'react';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Switch, Route, RouteComponentProps, withRouter} from 'react-router-dom';

import {block as bem} from 'bem-cn';

import {CellButton} from '@vkontakte/vkui';
import {Icon24PenOutline, Icon24TextLiveOutline, Icon24TextOutline} from '@vkontakte/icons';

import {State as StateType} from 'store/index';

import {Root} from 'components/Root/Root';
import {Typing} from 'components/Typing/Typing';
import {Spelling} from 'components/Spelling/Spelling';
import {Writing} from 'components/Writing/Writing';

import './Typewriter.scss';

interface Props {
  history: RouteComponentProps['history'];
  location: RouteComponentProps['location'];
  match: RouteComponentProps['match'];
}

interface State {
}

const block = bem('Typewriter');

class TypewriterBase extends React.Component<Props, State> {
  public render() {
    return (
        <section className={block()}>
          <header className={block('header')}>
            <span
                className={block('logo')}
                onClick={() => this.navGo('/')}
            >Typewriter</span>
          </header>
          <section className={block('body')}>
            <aside className={block('sidebar')}>
              <CellButton
                  before={<Icon24TextOutline/>}
                  onClick={() => this.navGo('/typing')}
              >Typing</CellButton>
              <CellButton
                  before={<Icon24TextLiveOutline/>}
                  onClick={() => this.navGo('/spelling')}
              >Spelling</CellButton>
              <CellButton
                  before={<Icon24PenOutline/>}
                  onClick={() => this.navGo('/writing')}
              >Writing</CellButton>
            </aside>
            <main className={block('main')}>
              <div className={block('panel')}>
                <Switch>
                  <Route exact={true} path='/'>
                    <Root/>
                  </Route>
                  <Route exact={true} path='/typing'>
                    <Typing/>
                  </Route>
                  <Route exact={true} path='/spelling'>
                    <Spelling/>
                  </Route>
                  <Route exact={true} path='/writing'>
                    <Writing/>
                  </Route>
                </Switch>
              </div>
            </main>
          </section>
        </section>
    );
  }

  private navGo(location: string) {
    this.props.history.push(location);
  }
}

const mapStateToProps = (state: StateType) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const Typewriter = withRouter(connect(mapStateToProps, mapDispatchToProps)(TypewriterBase));
