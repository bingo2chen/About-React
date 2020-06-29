import {useRef} from 'react'

class FormStore {
  constructor(props) {
    this.store = {}
    this.fieldEntities = [] // 存field实例
    this.callbacks = {}
  }

  setCallback = callback => {
    this.callbacks = {
      ...callback,
      ...this.callbacks
    };
    console.log(this.callbacks);
    
  };

  registerField = field => {
    this.fieldEntities.push(field)

    // 执行取消注册
    return () => {
      this.fieldEntities = this.fieldEntities.filter(item=>item !== field)
      delete this.store[field.props.name]
    }
  }

  getFieldValue = name => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return this.store
  }
  setFieldsValue = newStore => {
    this.store = {
      ...this.store,
      ...newStore
    }
    // store已经更新，希望组件也更新
    this.fieldEntities.forEach(entity => {
      const {name} = entity.props
      Object.keys(newStore).forEach(key => {
        if (key === name) {
          entity.onStoreChange()
        }
      })
      
    })
    console.log('this.store', this.store);
  }

  validate = () => {
    let err = []
    this.fieldEntities.forEach(entity => {
      const {name, rules} = entity.props
      let value = this.store[name]
      let rule = rules && rules[0]
      if (rule && rule.required && (value === undefined || value=== '')) {
        // 出错
        err.push({
          [name]: rules.message,
          value
        })
      }
    })
    return err
  }

  submit = () => {
    let err = this.validate()
    if (err.length === 0) { // 成功
      this.callbacks.onFinish(this.store)
    } else { // 失败
      this.callbacks.onFinishFailed(err)
    }
    console.log('submit', this.store);
    
  }
  
  getForm = () => {
    return {
      setCallback: this.setCallback,
      submit: this.submit,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
    }
  }
}

export default function useForm(form) {
  const formRef = useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}
