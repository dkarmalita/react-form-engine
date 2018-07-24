import React, { Component } from 'react'
import { FormProvider, withFormContext } from '../src/FormProvider.jsx'

export class _Doomy extends Component {
  render(){
    return <div/>
  }
}

export const Doomy = withFormContext(_Doomy)

export const withHoc = ( WrappedField, defaultValue = '' ) => {
  class _FormComponent extends Component {
    render(){
      return <WrappedField/>
    }
  }
  return _FormComponent
}

