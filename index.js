/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import Routes from './src/routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
