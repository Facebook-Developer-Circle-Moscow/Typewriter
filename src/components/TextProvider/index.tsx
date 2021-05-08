import * as React from 'react';

import {block as bem} from 'bem-cn';

import {TextField} from '@material-ui/core';

const block = bem('TextProvider');

interface Props {
  value: string;
  onChange: (value: string) => void;
}

import './index.scss';

export function TextProvider(props: Props) {
  const [value, setValue] = React.useState(props.value);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.shiftKey) {
      const charCode = (typeof event.which === 'number') ? event.which : event.keyCode

      if (charCode === 13) {
        props.onChange(value);
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  return (
      <div className={block()}>
        <TextField
            label='Practice text'
            helperText='To start practicing, press Shift + Enter'
            variant='outlined'
            multiline={true}
            fullWidth={true}
            rows={10}
            rowsMax={10}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
      </div>
  );
}
