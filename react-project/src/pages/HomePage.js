import React, { Component } from 'react'
import { ThemeContext } from './../Context';
import UserPage from './UserPage';

export default class HomePage extends Component {
  // 跨层级
  static contextType = ThemeContext
  render() {
    // 组件prop 传值
    // const {themeColor} = this.props.theme
    
    console.log('this', this);
    // 跨层级 context
    const {themeColor} = this.context
    return (
      <div>
        <h3 className={themeColor}>HomePage</h3>
        <UserPage />
      </div>
    )
  }
}

// HomePage.contextType = ThemeContext
// export default HomePage
