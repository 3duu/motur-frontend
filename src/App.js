import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import ProviderList from './components/ProviderList';
import EndpointConfigList from './components/EndpointConfigList';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/providers" component={ProviderList} />
                        <Route path="/endpoint-configs" component={EndpointConfigList} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
