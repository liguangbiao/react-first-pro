import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import renderRoutes from './router/renderRoutes'
import routes from './router/route'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </Router>
        )
    }
}

export default App;
