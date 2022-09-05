import './styles/App.scss';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import {compose} from 'redux';
import 'antd/dist/antd.css';
import React, {useEffect, useState} from 'react';
import Routes from './routes';
import {addAccent, addTheme} from './utils/helpers/Theme';

const App = () => {

    const [isAuth, setIsAuth] = useState(true);
    const routes = useRoutes(Routes);

    useEffect(() => {
        addTheme(), addAccent();
    }, []);
    return (
        <div className='wrapper'>
            <div className="App">
                {routes}
            </div>
        </div>
    );
};

const AppContainer = compose(
    // connect({}, {}))
)(App);


const ChatApp = (props) => {
    return <Router>
        <AppContainer/>
    </Router>;
};

export default ChatApp;

//"dependencies": {
//     "core-js": "^3.6.5",
//     "vue": "^2.6.11"
//   },
//   "devDependencies": {
//     "@vue/cli-plugin-babel": "~4.5.0",
//     "@vue/cli-plugin-eslint": "~4.5.0",
//     "@vue/cli-service": "~4.5.0",
//     "babel-eslint": "^10.1.0",
//     "eslint": "^6.7.2",
//     "eslint-plugin-vue": "^6.2.2",
//     "less": "^4.1.2",
//     "less-loader": "7.3.0",
//     "vue-template-compiler": "^2.6.11"
//   },
