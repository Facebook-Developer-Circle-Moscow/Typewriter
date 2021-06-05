import * as React from 'react';

import {block as bem} from 'bem-cn';

const block = bem('Keyboard');

import './Keyboard.scss';

interface Props {
  value: string;
}

export function Keyboard({value}: Props) {
  const isShiftRightOn = '~!@#$%QWERTASDFGZXCVB'.includes(value);
  const isShiftLeftOn = '^&*()_+YUIOP{}HJKL:"|NM<>?'.includes(value);
  const isShiftOn = isShiftLeftOn || isShiftRightOn;

  return (
      <svg className={block()} viewBox='0 0 683.3 254'>
        <g className={block('keys')}>
          <path className={block('key', {'tilda': true, 'active': '~`'.includes(value)})} d='M58.4,53.7c0,1.7-1.4,3-3,3H18.9c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z'/>
          <path className={block('key', {'1': true, 'active': '1!'.includes(value)})} d='M103.4,53.7c0,1.7-1.3,3-3,3H63.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'2': true, 'active': '2@'.includes(value)})} d='M148.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'3': true, 'active': '3#'.includes(value)})} d='M193.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'4': true, 'active': '4$'.includes(value)})} d='M238.4,53.7c0,1.7-1.4,3-3,3H199c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z'/>
          <path className={block('key', {'5': true, 'active': '5%'.includes(value)})} d='M283.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z'/>
          <path className={block('key', {'6': true, 'active': '6^'.includes(value)})} d='M328.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z'/>
          <path className={block('key', {'7': true, 'active': '7&'.includes(value)})} d='M373.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'8': true, 'active': '8*'.includes(value)})} d='M418.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'9': true, 'active': '9('.includes(value)})} d='M463.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'0': true, 'active': '0)'.includes(value)})} d='M508.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'minus': true, 'active': '-_'.includes(value)})} d='M553.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z'/>
          <path className={block('key', {'equal': true, 'active': '=+'.includes(value)})} d='M598.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z'/>
          <path className={block('key', {'backspace': true})} d='M668.8,53.7c0,1.7-1.3,3-3,3h-61.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h61.9c1.7,0,3,1.4,3,3V53.7z'/>

          <path className={block('key', {'tab': true, 'active': value === `\t`})} d='M81.7,97.6c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h59.8c1.7,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'q': true, 'active': 'qQ'.includes(value)})} d='M126.7,97.6c0,1.6-1.3,3-3,3H87.2c-1.7,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'w': true, 'active': 'wW'.includes(value)})} d='M171.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'e': true, 'active': 'eE'.includes(value)})} d='M216.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V97.6z'/>
          <path className={block('key', {'r': true, 'active': 'rR'.includes(value)})} d='M261.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'t': true, 'active': 'tT'.includes(value)})} d='M306.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'y': true, 'active': 'yY'.includes(value)})} d='M351.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'u': true, 'active': 'uU'.includes(value)})} d='M396.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'i': true, 'active': 'iI'.includes(value)})} d='M441.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'o': true, 'active': 'oO'.includes(value)})} d='M486.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'p': true, 'active': 'pP'.includes(value)})} d='M531.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'open-bracket': true, 'active': '[{'.includes(value)})}
                d='M576.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'close-bracket': true, 'active': ']}'.includes(value)})}
                d='M621.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z'/>
          <path className={block('key', {'backslash': true, 'active': '\\|'.includes(value)})} d='M668.8,97.6c0,1.6-1.3,3-3,3h-38.6c-1.6,0-3-1.4-3-3V62.4c0-1.6,1.4-3,3-3h38.6c1.7,0,3,1.4,3,3V97.6z'/>

          <path className={block('key', {'capslock': true})} d='M92.4,141.5c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h70.4c1.7,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'a': true, 'active': 'aA'.includes(value)})} d='M137.4,141.5c0,1.6-1.4,3-3,3H97.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'s': true, 'active': 'sS'.includes(value)})} d='M182.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'d': true, 'active': 'dD'.includes(value)})} d='M227.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'f': true, 'active': 'fF'.includes(value)})} d='M272.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'g': true, 'active': 'gG'.includes(value)})} d='M317.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'h': true, 'active': 'hH'.includes(value)})} d='M362.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'j': true, 'active': 'jJ'.includes(value)})} d='M407.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'k': true, 'active': 'kK'.includes(value)})} d='M452.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'l': true, 'active': 'lL'.includes(value)})} d='M497.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'semicolon': true, 'active': ';:'.includes(value)})}
                d='M542.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'quote': true, 'active': '\'"'.includes(value)})} d='M587.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z'/>
          <path className={block('key', {'enter': true, 'active': value === `\n`})} d='M668.8,141.5c0,1.6-1.3,3-3,3h-72.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h72.9c1.7,0,3,1.3,3,3V141.5z'/>

          <path className={block('key', {'shift-left': true, 'active': isShiftLeftOn})} d='M115.8,185.4c0,1.7-1.3,3-3,3H18.9c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h93.8c1.7,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'z': true, 'active': 'zZ'.includes(value)})} d='M160.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V185.4z'/>
          <path className={block('key', {'x': true, 'active': 'xX'.includes(value)})} d='M205.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'c': true, 'active': 'cC'.includes(value)})} d='M250.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'v': true, 'active': 'vV'.includes(value)})} d='M295.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'b': true, 'active': 'bB'.includes(value)})} d='M340.8,185.4c0,1.7-1.4,3-3,3h-36.6c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.6c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'n': true, 'active': 'nN'.includes(value)})} d='M385.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'m': true, 'active': 'mM'.includes(value)})} d='M430.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'comma': true, 'active': ',<'.includes(value)})} d='M475.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'dot': true, 'active': '.>'.includes(value)})} d='M520.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'slash': true, 'active': '/?'.includes(value)})} d='M565.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z'/>
          <path className={block('key', {'shift-right': true, 'active': isShiftRightOn})} d='M668.8,185.4c0,1.7-1.3,3-3,3h-94.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h94.5c1.7,0,3,1.4,3,3V185.4z'/>

          <path className={block('key', {'control-left': true})} d='M105,236c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-42c0-1.7,1.3-3,3-3H102c1.7,0,3,1.3,3,3V236z'/>
          <path className={block('key', {'option-left': true})} d='M182.4,236c0,1.7-1.4,3-3,3h-68.8c-1.7,0-3-1.3-3-3v-42c0-1.7,1.3-3,3-3h68.8c1.6,0,3,1.3,3,3V236z'/>
          <path className={block('key', {'space': true, 'active': value === ' '})} d='M460.4,191c1.6,0,3,1.4,3,3v42c0,1.7-1.4,3-3,3H187.5c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H460.4z'/>
          <path className={block('key', {'option-right': true})} d='M531.8,191c1.7,0,3,1.4,3,3v42c0,1.7-1.3,3-3,3h-62.9c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H531.8z'/>
          <path className={block('key', {'control-right': true})} d='M668.8,236.1c0,1.7-1.3,3-3,3H540.3c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3h125.5c1.7,0,3,1.4,3,3V236.1z'/>
        </g>
        <g className={block('letters')}>
          <text className={block('letter', {'active': value === '~'})} transform='matrix(1 0 0 1 33.4903 33.804)'>~</text>
          <text className={block('letter', {'active': value === '`'})} transform='matrix(1 0 0 1 35.8009 52.6643)'>`</text>
          <text className={block('letter', {'active': value === '1'})} transform='matrix(1 0 0 1 78.626 50.4071)'>1</text>
          <text className={block('letter', {'active': value === '2'})} transform='matrix(1 0 0 1 123.299 51.1765)'>2</text>
          <text className={block('letter', {'active': value === '3'})} transform='matrix(1 0 0 1 169.6841 51.404)'>3</text>
          <text className={block('letter', {'active': value === '4'})} transform='matrix(1 0 0 1 213.0758 51.404)'>4</text>
          <text className={block('letter', {'active': value === '5'})} transform='matrix(1 0 0 1 258.0724 51.404)'>5</text>
          <text className={block('letter', {'active': value === '6'})} transform='matrix(1 0 0 1 303.2822 51.0891)'>6</text>
          <text className={block('letter', {'active': value === '7'})} transform='matrix(1 0 0 1 349.5064 51.0891)'>7</text>
          <text className={block('letter', {'active': value === '8'})} transform='matrix(1 0 0 1 393.281 51.2157)'>8</text>
          <text className={block('letter', {'active': value === '9'})} transform='matrix(1 0 0 1 438.5742 51.2157)'>9</text>
          <text className={block('letter', {'active': value === '0'})} transform='matrix(1 0 0 1 483.4907 51.2157)'>0</text>
          <text className={block('letter', {'active': value === '-'})} transform='matrix(1 0 0 1 530.4011 50.4071)'>-</text>
          <text className={block('letter', {'active': value === '='})} transform='matrix(1 0 0 1 573.5195 51.2157)'>=</text>
          <text className={block('letter', {'active': value === '!'})} transform='matrix(1 0 0 1 80.5513 31.7605)'>!</text>
          <text className={block('letter', {'active': value === '@'})} transform='matrix(1 0 0 1 119.8565 30.45)'>@</text>
          <text className={block('letter', {'active': value === '#'})} transform='matrix(1 0 0 1 169.6841 31.76)'>#</text>
          <text className={block('letter', {'active': value === '$'})} transform='matrix(1 0 0 1 213.0758 31.2171)'>$</text>
          <text className={block('letter', {'active': value === '%'})} transform='matrix(1 0 0 1 255.5748 30.8318)'>%</text>
          <text className={block('letter', {'active': value === '^'})} transform='matrix(1 0 0 1 303.9556 32.4427)'>^</text>
          <text className={block('letter', {'active': value === '&'})} transform='matrix(1 0 0 1 348.2554 31.76)'>&amp;</text>
          <text className={block('letter', {'active': value === '*'})} transform='matrix(1 0 0 1 394.5334 32.8236)'>*</text>
          <text className={block('letter', {'active': value === '('})} transform='matrix(1 0 0 1 440.3076 30.6435)'>(</text>
          <text className={block('letter', {'active': value === ')'})} transform='matrix(1 0 0 1 485.1645 30.6435)'>)</text>
          <text className={block('letter', {'active': value === '_'})} transform='matrix(1 0 0 1 528.7588 25.5423)'>_</text>
          <text className={block('letter', {'active': value === '+'})} transform='matrix(1 0 0 1 573.5195 32.4422)'>+</text>

          <text className={block('letter', {'q': true, 'hidden': isShiftOn, 'active': value === 'q'})} transform='matrix(1 0 0 1 100.9088 93.4743)' dx='-2.070037841796875' dy='-6'>q</text>
          <text className={block('letter', {'w': true, 'hidden': isShiftOn, 'active': value === 'w'})} transform='matrix(1 0 0 1 145.3644 93.4744)' dx='-2.986358642578125' dy='-6'>w</text>
          <text className={block('letter', {'e': true, 'hidden': isShiftOn, 'active': value === 'e'})} transform='matrix(1 0 0 1 190.5943 93.4744)' dx='-2.070037841796875' dy='-6'>e</text>
          <text className={block('letter', {'r': true, 'hidden': isShiftOn, 'active': value === 'r'})} transform='matrix(1 0 0 1 236.9933 93.4743)' dx='-0.91094970703125' dy='-6'>r</text>
          <text className={block('letter', {'t': true, 'hidden': isShiftOn, 'active': value === 't'})} transform='matrix(1 0 0 1 280.6080 93.4744)' dx='-0.5349884033203125' dy='-6'>t</text>
          <text className={block('letter', {'y': true, 'hidden': isShiftOn, 'active': value === 'y'})} transform='matrix(1 0 0 1 326.5138 93.4744)' dx='-1.75677490234375' dy='-6'>y</text>
          <text className={block('letter', {'u': true, 'hidden': isShiftOn, 'active': value === 'u'})} transform='matrix(1 0 0 1 371.1386 93.4743)' dx='-2.070068359375' dy='-6'>u</text>
          <text className={block('letter', {'i': true, 'hidden': isShiftOn, 'active': value === 'i'})} transform='matrix(1 0 0 1 418.5557 93.4743)' dx='-0.22174072265625' dy='-6'>i</text>
          <text className={block('letter', {'o': true, 'hidden': isShiftOn, 'active': value === 'o'})} transform='matrix(1 0 0 1 459.9639 93.4743)' dx='-2.070037841796875' dy='-6'>o</text>
          <text className={block('letter', {'p': true, 'hidden': isShiftOn, 'active': value === 'p'})} transform='matrix(1 0 0 1 506.9335 93.4743)' dx='-2.070037841796875' dy='-6'>p</text>
          <text className={block('letter', {'a': true, 'hidden': isShiftOn, 'active': value === 'a'})} transform='matrix(1 0 0 1 112.1346 138.3303)' dx='-2.070037841796875' dy='-6'>a</text>
          <text className={block('letter', {'s': true, 'hidden': isShiftOn, 'active': value === 's'})} transform='matrix(1 0 0 1 156.0135 138.3303)' dx='-1.75677490234375' dy='-6'>s</text>
          <text className={block('letter', {'d': true, 'hidden': isShiftOn, 'active': value === 'd'})} transform='matrix(1 0 0 1 201.5241 138.3303)' dx='-2.070037841796875' dy='-6'>d</text>
          <text className={block('letter', {'f': true, 'hidden': isShiftOn, 'active': value === 'f'})} transform='matrix(1 0 0 1 247.1121 138.3303)' dx='-0.7229766845703125' dy='-6'>f</text>
          <text className={block('letter', {'g': true, 'hidden': isShiftOn, 'active': value === 'g'})} transform='matrix(1 0 0 1 289.4753 138.3303)' dx='-2.070037841796875' dy='-6'>g</text>
          <text className={block('letter', {'h': true, 'hidden': isShiftOn, 'active': value === 'h'})} transform='matrix(1 0 0 1 335.5886 138.3303)' dx='-2.070037841796875' dy='-6'>h</text>
          <text className={block('letter', {'j': true, 'hidden': isShiftOn, 'active': value === 'j'})} transform='matrix(1 0 0 1 382.2692 138.3303)' dx='-0.47235107421875' dy='-6'>j</text>
          <text className={block('letter', {'k': true, 'hidden': isShiftOn, 'active': value === 'k'})} transform='matrix(1 0 0 1 426.0182 138.3303)' dx='-1.75677490234375' dy='-6'>k</text>
          <text className={block('letter', {'l': true, 'hidden': isShiftOn, 'active': value === 'l'})} transform='matrix(1 0 0 1 470.8706 138.3303)' dx='-0.22174072265625' dy='-6'>l</text>
          <text className={block('letter', {'z': true, 'hidden': isShiftOn, 'active': value === 'z'})} transform='matrix(1 0 0 1 134.7896 181.7458)' dx='-1.75677490234375' dy='-6'>z</text>
          <text className={block('letter', {'x': true, 'hidden': isShiftOn, 'active': value === 'x'})} transform='matrix(1 0 0 1 179.2339 181.7458)' dx='-1.75677490234375' dy='-6'>x</text>
          <text className={block('letter', {'c': true, 'hidden': isShiftOn, 'active': value === 'c'})} transform='matrix(1 0 0 1 222.5416 181.7458)' dx='-1.7567596435546875' dy='-6'>c</text>
          <text className={block('letter', {'v': true, 'hidden': isShiftOn, 'active': value === 'v'})} transform='matrix(1 0 0 1 269.3973 181.7458)' dx='-1.7567596435546875' dy='-6'>v</text>
          <text className={block('letter', {'b': true, 'hidden': isShiftOn, 'active': value === 'b'})} transform='matrix(1 0 0 1 314.0098 181.7458)' dx='-2.070037841796875' dy='-6'>b</text>
          <text className={block('letter', {'n': true, 'hidden': isShiftOn, 'active': value === 'n'})} transform='matrix(1 0 0 1 358.4863 181.7458)' dx='-2.070037841796875' dy='-6'>n</text>
          <text className={block('letter', {'m': true, 'hidden': isShiftOn, 'active': value === 'm'})} transform='matrix(1 0 0 1 401.6816 181.7458)' dx='-3.589385986328125' dy='-6'>m</text>

          <text className={block('letter', {'Q': true, 'hidden': !isShiftOn, 'active': value === 'Q'})} transform='matrix(1 0 0 1 100.9088 93.4743)' dx='-4.9599609375' dy='-5'>Q</text>
          <text className={block('letter', {'W': true, 'hidden': !isShiftOn, 'active': value === 'W'})} transform='matrix(1 0 0 1 145.3644 93.4744)' dx='-5.88409423828125' dy='-5'>W</text>
          <text className={block('letter', {'E': true, 'hidden': !isShiftOn, 'active': value === 'E'})} transform='matrix(1 0 0 1 190.5943 93.4744)' dx='-3.5189208984375' dy='-5'>E</text>
          <text className={block('letter', {'R': true, 'hidden': !isShiftOn, 'active': value === 'R'})} transform='matrix(1 0 0 1 236.9933 93.4743)' dx='-5.8136138916015625' dy='-5'>R</text>
          <text className={block('letter', {'T': true, 'hidden': !isShiftOn, 'active': value === 'T'})} transform='matrix(1 0 0 1 280.6080 93.4744)' dx='-4.881622314453125' dy='-5'>T</text>
          <text className={block('letter', {'Y': true, 'hidden': !isShiftOn, 'active': value === 'Y'})} transform='matrix(1 0 0 1 326.5138 93.4744)' dx='-3.9418487548828125' dy='-5'>Y</text>
          <text className={block('letter', {'U': true, 'hidden': !isShiftOn, 'active': value === 'U'})} transform='matrix(1 0 0 1 371.1386 93.4743)' dx='-4.23944091796875' dy='-5'>U</text>
          <text className={block('letter', {'I': true, 'hidden': !isShiftOn, 'active': value === 'I'})} transform='matrix(1 0 0 1 418.5557 93.4743)' dx='-0.95794677734375' dy='-5'>I</text>
          <text className={block('letter', {'O': true, 'hidden': !isShiftOn, 'active': value === 'O'})} transform='matrix(1 0 0 1 459.9639 93.4743)' dx='-4.9599609375' dy='-5'>O</text>
          <text className={block('letter', {'P': true, 'hidden': !isShiftOn, 'active': value === 'P'})} transform='matrix(1 0 0 1 506.9335 93.4743)' dx='-3.5189208984375' dy='-5'>P</text>
          <text className={block('letter', {'A': true, 'hidden': !isShiftOn, 'active': value === 'A'})} transform='matrix(1 0 0 1 112.1346 138.3303)' dx='-3.55023193359375' dy='-5'>A</text>
          <text className={block('letter', {'S': true, 'hidden': !isShiftOn, 'active': value === 'S'})} transform='matrix(1 0 0 1 156.0135 138.3303)' dx='-3.9418182373046875' dy='-5'>S</text>
          <text className={block('letter', {'D': true, 'hidden': !isShiftOn, 'active': value === 'D'})} transform='matrix(1 0 0 1 201.5241 138.3303)' dx='-4.2394256591796875' dy='-5'>D</text>
          <text className={block('letter', {'F': true, 'hidden': !isShiftOn, 'active': value === 'F'})} transform='matrix(1 0 0 1 247.1121 138.3303)' dx='-4.623199462890625' dy='-5'>F</text>
          <text className={block('letter', {'G': true, 'hidden': !isShiftOn, 'active': value === 'G'})} transform='matrix(1 0 0 1 289.4753 138.3303)' dx='-4.959930419921875' dy='-5'>G</text>
          <text className={block('letter', {'H': true, 'hidden': !isShiftOn, 'active': value === 'H'})} transform='matrix(1 0 0 1 335.5886 138.3303)' dx='-4.23944091796875' dy='-5'>H</text>
          <text className={block('letter', {'J': true, 'hidden': !isShiftOn, 'active': value === 'J'})} transform='matrix(1 0 0 1 382.2692 138.3303)' dx='-3.495391845703125' dy='-5'>J</text>
          <text className={block('letter', {'K': true, 'hidden': !isShiftOn, 'active': value === 'K'})} transform='matrix(1 0 0 1 426.0182 138.3303)' dx='-3.94183349609375' dy='-5'>K</text>
          <text className={block('letter', {'L': true, 'hidden': !isShiftOn, 'active': value === 'L'})} transform='matrix(1 0 0 1 470.8706 138.3303)' dx='-4.584014892578125' dy='-5'>L</text>
          <text className={block('letter', {'Z': true, 'hidden': !isShiftOn, 'active': value === 'Z'})} transform='matrix(1 0 0 1 134.7896 181.7458)' dx='-3.2056427001953125' dy='-5'>Z</text>
          <text className={block('letter', {'X': true, 'hidden': !isShiftOn, 'active': value === 'X'})} transform='matrix(1 0 0 1 179.2339 181.7458)' dx='-3.9418182373046875' dy='-5'>X</text>
          <text className={block('letter', {'C': true, 'hidden': !isShiftOn, 'active': value === 'C'})} transform='matrix(1 0 0 1 222.5416 181.7458)' dx='-4.6623382568359375' dy='-5'>C</text>
          <text className={block('letter', {'V': true, 'hidden': !isShiftOn, 'active': value === 'V'})} transform='matrix(1 0 0 1 269.3973 181.7458)' dx='-3.9418182373046875' dy='-5'>V</text>
          <text className={block('letter', {'B': true, 'hidden': !isShiftOn, 'active': value === 'B'})} transform='matrix(1 0 0 1 314.0098 181.7458)' dx='-3.518890380859375' dy='-5'>B</text>
          <text className={block('letter', {'N': true, 'hidden': !isShiftOn, 'active': value === 'N'})} transform='matrix(1 0 0 1 358.4863 181.7458)' dx='-4.23944091796875' dy='-5'>N</text>
          <text className={block('letter', {'M': true, 'hidden': !isShiftOn, 'active': value === 'M'})} transform='matrix(1 0 0 1 401.6816 181.7458)' dx='-3.597198486328125' dy='-5'>M</text>

          <text className={block('letter', {'active': value === ';'})} transform='matrix(1 0 0 1 519.074 136.7127)'>;</text>
          <text className={block('letter', {'active': value === ':'})} transform='matrix(1 0 0 1 519.074 119.3763)'>:</text>
          <text className={block('letter', {'active': value === ','})} transform='matrix(1 0 0 1 451.3285 180.0409)' dx='-1.253082275390625'>,</text>
          <text className={block('letter', {'active': value === '<'})} transform='matrix(1 0 0 1 450.2827 164.3396)'>&lt;</text>
          <text className={block('letter', {'active': value === '.'})} transform='matrix(1 0 0 1 495.9731 181.0409)' dx='-1.2530517578125'>.</text>
          <text className={block('letter', {'active': value === '>'})} transform='matrix(1 0 0 1 494.9274 164.3396)'>&gt;</text>
          <text className={block('letter', {'active': value === '/'})} transform='matrix(1 0 0 1 543.4077 181.0408)'>/</text>
          <text className={block('letter', {'active': value === '?'})} transform='matrix(1 0 0 1 541.3276 163.2498)'>?</text>
          <text className={block('letter', {'active': value === '\''})} transform='matrix(1 0 0 1 565.621 138.7127)'>'</text>
          <text className={block('letter', {'active': value === '"'})} transform='matrix(1 0 0 1 565.621 120.3763)'>'</text>
          <text className={block('letter', {'active': value === '['})} transform='matrix(1 0 0 1 553.3923 94.426)'>[</text>
          <text className={block('letter', {'active': value === '{'})} transform='matrix(1 0 0 1 552.9709 74.8769)'>{'{'}</text>
          <text className={block('letter', {'active': value === ']'})} transform='matrix(1 0 0 1 598.7657 94.426)'>]</text>
          <text className={block('letter', {'active': value === '}'})} transform='matrix(1 0 0 1 598.3443 74.7849)'>{'}'}</text>
          <text className={block('letter', {'active': value === '\\'})} transform='matrix(1 0 0 1 644.3574 96.8807)'>\</text>
          <text className={block('letter', {'active': value === '|'})} transform='matrix(1 0 0 1 644.4941 74.8769)'>|</text>

          <text className={block('letter', {'tab': true, 'active': value === `\t`})} transform='matrix(1 0 0 1 23.3467 93.2342)'>tab</text>
          <text className={block('letter', {'caps-lock': true})} transform='matrix(1 0 0 1 23.3467 137.7127)'>caps lock</text>
          <text className={block('letter', {'shift-left': true, 'active': isShiftLeftOn})} transform='matrix(1 0 0 1 23.3467 181.0408)'>shift</text>
          <text className={block('letter', {'shift-right': true, 'active': isShiftRightOn})} transform='matrix(1 0 0 1 641.826 180.0408)'>shift</text>
          <text className={block('letter', {'backspace': true})} transform='matrix(1 0 0 1 606.4653 51.1765)'>backspace</text>
          <text className={block('letter', {'enter': true, 'active': value === `\n`})} transform='matrix(1 0 0 1 636.3144 137.7128)'>enter</text>
          <text className={block('letter', {'control': true})} transform='matrix(1 0 0 1 23.3467 232.465)'>control</text>
          <text className={block('letter', {'option-left': true})} transform='matrix(1 0 0 1 129.2338 231.4646)'>option</text>
          <text className={block('letter', {'space': true, 'active': value === ' '})} transform='matrix(1 0 0 1 199.7899 232.4646)'>space</text>
          <text className={block('letter', {'option-right': true})} transform='matrix(1 0 0 1 483.8864 231.4646)'>option</text>
        </g>
      </svg>
  );
}
