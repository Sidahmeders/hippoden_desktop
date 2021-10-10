import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CpuCounter from './components/CpuCount'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Layout>
                        <Route path="/" component={CpuCounter} />
                    </Layout>
                </Switch>
            </Router>
        </div>
    )
}

export default App
