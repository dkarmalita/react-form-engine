import React, { Component } from 'react'
import { FormProvider, withFormContext } from '../src/FormProvider.jsx'
import { asField } from '../src/FormComponent.jsx'


// import { Doomy, withHoc } from './doomy.jsx'

export class _Doomy extends Component {
  constructor(props){
    super(props)
    console.log('PROPS C', props)
  }
  render(){
    console.log( 'PROPS B', this.props )
    return (
      <div/>
    )
  }
}

export const Doomy = withFormContext(_Doomy)

class Wrapped extends Component {
  constructor(props){
    super(props)
    console.log( 'PROPS A', props )
  }
  render(){
    return (
      <FormProvider>
        <Doomy fieldName='FN'/>
      </FormProvider>
    )
  }
}

/* simple component example
  ------------------------- */
// const wrapped = new Wrapped()

const wrapped = new _Doomy({
  formLink: {
    setFieldState       : () => {},
    getFieldState       : () => ({}),
    getFieldInitialValue: (fieldName)=>({}[fieldName]),
    getFormState        : () => ({}),
    getFormValue        : () => ({}),
    getFieldsState      : () => ({}),
    resetForm           : () => {},
  }
})

// console.log( wrapped )
// console.log( wrapped.render() )

//Doomy({ myprop: 'xxx' })
// console.log( doomy.render() )

/* HoC example
  ------------ */
// const myField = new (withHoc(Doomy))()
// console.log( myField )
// console.log( myField.render() )

// const myField = new (asField(Doomy))()
// console.log( myField )
// console.log( myField.render() )
