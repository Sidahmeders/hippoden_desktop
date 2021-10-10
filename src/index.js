import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ContextProvider } from './context'

ReactDOM.render(
    <StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </StrictMode>,
    document.getElementById('root')
)
