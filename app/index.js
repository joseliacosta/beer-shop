import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return <div>Welcome to Beer Shop! 🍻 </div>
  }
}
export default App

ReactDOM.render(<App />, document.getElementById('app'))
