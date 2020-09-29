/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

//1 Import Store bao phủ cả project:
import {createStore} from 'redux';
import {Provider} from 'react-redux'

let store = createStore();

//2 tạo action:
const App = () => {
    <Provider store={store}>

    </Provider>
}

AppRegistry.registerComponent(appName, () => App);
