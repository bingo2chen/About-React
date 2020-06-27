import React, { useContext } from 'react'
import { ThemeContext } from '../Context';

export default function UserPage(props) {
  const context = useContext(ThemeContext)
  console.log(context);
  
  return (
    <div>
      <h3 className={context.themeColor}>UserPage</h3>
    </div>
  )
}
