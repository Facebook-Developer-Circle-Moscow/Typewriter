export enum State {
  PROVIDER = 'provider',
  PRACTICE = 'practice',
  RESULT = 'result'
}

export enum Status {
  DEFAULT = 'default',
  WRONG = 'wrong',
  RIGHT = 'right',
}

export interface Stats {
  character: string;
  status: Status;
  time: number;
}
