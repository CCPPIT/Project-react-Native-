import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { Navigator } from './navigation/Navigator';

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(Navigator, {}, null));