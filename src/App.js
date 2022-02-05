import './styles/App.scss';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter as Router, useNavigate, useRoutes} from "react-router-dom";
import {compose} from "redux";
import 'antd/dist/antd.css'
import Auth from "./pages/Auth/Auth";
import React, {useEffect, useState} from "react";
import Home from "./pages/Home/Home";

const App = () => {

    const nav = useNavigate()
    const [isAuth, setIsAuth] = useState(true)
    const routes = useRoutes([
        {path: '*', element: <Auth/>},
        {path: '/login/*', element: <Auth/>},
        {path: '/im/*', element: <Home/>}
    ])

    return (
        <div className='wrapper'>
            <div className="App">
                {routes}
            </div>
        </div>
    );
}

const AppContainer = compose(
    // connect({}, {}))
)(App)


const ChatApp = (props) => {
    return <Router>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </Router>
}

export default ChatApp;
