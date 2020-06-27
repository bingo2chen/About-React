// 跨层级
import React from 'react'

export const ThemeContext = React.createContext({ themeColor: 'pink' }) // pink 默认值
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer


export const UserContext = React.createContext();
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;