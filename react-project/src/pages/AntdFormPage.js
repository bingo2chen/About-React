import React, { Component, useEffect } from 'react'
import { Form, Button, Input } from 'antd'

const FormItem = Form.Item
const nameRules = { required: true, message: "请输⼊姓名！ " };
const passworRules = { required: true, message: "请输⼊密码！ " };


// 类组件
export default class AntdFormPage extends Component {
  formRef = React.createRef()
  onFinishFailed(val) {
    console.log('onFinishFailed', val);
  }
  onFinish(val) {
    console.log('onFinish', val)
  }
  componentDidMount() {
    this.formRef.current.setFieldsValue({username: 'default class'})
  }
  
  render() {
    return (
      <div>
        <h3>AntdFormPage</h3>
        <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <FormItem name="username" label="姓名" rules={[nameRules]}>
            <Input placeholder="username placeholder" />
          </FormItem>
          <FormItem name="password" label="密码" rules={[passworRules]}>
            <Input placeholder="password placeholder" />
          </FormItem>
          <FormItem>
            <Button type="primary" size="large" htmlType='submit'>Submit</Button>
          </FormItem>
        </Form>

      </div>
    )
  }
}



// 函数组件
// export default function AntdFormPage(Props) {
//   const [form] = Form.useForm()
//   function onFinishFailed(val) {
//     console.log('onFinishFailed', val);
//   }
//   function onFinish(val) {
//     console.log('onFinish', val)
//   }
//   useEffect(() => {
//     form.setFieldsValue({ username: 'default' })
//   })
//   return (
//     <div>
//       <h3>AntdFormPage</h3>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <FormItem name="username" label="姓名" rules={[nameRules]}>
//           <Input placeholder="username placeholder" />
//         </FormItem>
//         <FormItem name="password" label="密码" rules={[passworRules]}>
//           <Input placeholder="password placeholder" />
//         </FormItem>
//         <FormItem>
//           <Button type="primary" size="large" htmlType='submit'>Submit</Button>
//         </FormItem>
//       </Form>

//     </div>
//   )
// }

