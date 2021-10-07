import { useState } from 'react'
const { osCount } = window.TestApis
const { getUsage } = window.NodeCustomApis

function App() {
    const [state, setState] = useState(false)

    function getStat() {
        getUsage().then((data) => {
            if (data.currentLoad) {
                setState(() => data)
            }
        })
    }

    const latency = 1000 * 5
    setInterval(getStat, latency)

    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <h1>Hello World</h1>
            <h1>OS Counter: {osCount} </h1>
            <h1>CPU Usage: {state ? state.currentLoad.toFixed(2) : '00'}</h1>
            <button
                onClick={() => {
                    // let win = new BrowserWindow()
                    // win.loadURL('https://www.electronjs.org/docs/api/remote')
                }}>
                Open BrowserWindow
            </button>
        </div>
    )
}

export default App
