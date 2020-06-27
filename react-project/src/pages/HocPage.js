import React, { Component } from 'react'

// hoc
// 是个函数，参数参数是一个组件，返回一个组件
const foo = Comp => props => {
  return (
    <div className="border">
      <Comp {...props} />
    </div>
  )
}

// function Child(props) {
//   return <div className="border">Child-{props.name}</div>
// }

// 装饰器
// @foo
@foo
class Child extends Component {
  render() { 
    return <div className="border">Child-{this.props.name}</div>
  }
}


// const Bfoo = foo(Child)
// const Foo = foo(foo(foo(Child)))


export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        {/* <Bfoo name="参数" />
        <Foo name="链式嵌套参数2"/> */}

        <Child name="新参数" />
      </div>
    )
  }
}
