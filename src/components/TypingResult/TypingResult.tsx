import * as React from 'react';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {FormItem, FormLayout, Group, Title} from '@vkontakte/vkui';

import {Line} from 'react-chartjs-2';

import {Stats, Status} from 'models/typing';

import {State as StateType} from 'store/index';

import './TypingResult.scss';

interface Props {
  stat: Stats[];
}

interface State {

}

class TypingResultBase extends React.Component<Props, State> {
  public render() {
    const time = this.props.stat.map((v) => v.time);
    const startTime = Math.min(...time);
    const endTime = Math.max(...time);

    let divider = 1000;
    let length = Math.ceil((endTime - startTime) / divider);

    if (length > 60) {
      divider = 60 * 1000;
      length = Math.ceil((endTime - startTime) / divider);
    }

    const seconds = Array.from({length}, (_, i) => i);

    const counter = this.props.stat.reduce((a, v) => {
      a[Math.floor((v.time - startTime) / divider)]++;

      return a;
    }, new Array(length).fill(0));

    const errors = this.props.stat.reduce((a, v) => {
      a[Math.floor((v.time - startTime) / divider)] += v.status === Status.WRONG;

      return a;
    }, new Array(length).fill(0));

    const data = {
      labels: seconds,
      datasets: [
        {
          label: `Typing speed ${(counter.reduce((a, b) => a + b, 0) / length).toFixed(0)}`,
          data: counter,
          fill: false,
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          borderColor: 'rgba(0, 255, 0, 0.2)',
        },
        {
          label: `Errors ${(errors.reduce((a, b) => a + b, 0) / length).toFixed(0)}`,
          data: errors,
          fill: false,
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0, 0.2)',
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
        <Group mode='card' separator='hide'>
          <FormLayout>
            <FormItem>
              <Title level='1' weight='semibold'>Typing</Title>
            </FormItem>
            <FormItem>
              <Line data={data} options={options}/>
            </FormItem>
          </FormLayout>
        </Group>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  stat: state.typing.stats,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export const TypingResult = connect(mapStateToProps, mapDispatchToProps)(TypingResultBase);
