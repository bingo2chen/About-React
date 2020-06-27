import React, { Component } from 'react'
// import HomePage from './HomePage'
import { ThemeProvider, UserProvider } from '../Context'
import ConsumerPage from './ConsumerPage';

export default class ContextPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theme: {
         themeColor: 'red'
       },
       user: {
         name: '小米'
       }
    }
  }
  
  changeColor = () => {
    const {themeColor} = this.state.theme
    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'green' : 'red'
      }
    })
  }

  render() {
    const {theme, user} = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        {/* <ThemeProvider value={theme}>
          <HomePage />
        </ThemeProvider> */}
        <button onClick={this.changeColor}>Change color</button>
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <ConsumerPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    )
  }
}
