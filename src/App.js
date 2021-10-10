import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Layout>
                        <Route path="/" component={Dashboard} />
                    </Layout>
                </Switch>
            </Router>
        </div>
    )
}

export default App
