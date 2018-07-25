import { mount } from 'enzyme';
// ref: https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
// https://github.com/airbnb/enzyme/issues/346#issuecomment-214435925

import React, { Component } from 'react'
import { FormProvider, withFormContext } from '../src/FormProvider'
import { asField, asInputField, asCheckboxField, asRadioButtonField } from '../src/FormComponent'

// >> -------------------------------------------------------------------------

  const testFieldName = 'testField'

// ----------------------------------------------------------------------------

  const renderTestForm = ({ formProps, fieldProps }) => {

    let fieldRef = null
    let monitorRef = null

    class _TestProbe extends Component {
      constructor(props){
        super(props)
      }
      render(){
        fieldRef = this
        return null
      }
    }

    class _StateMonitor extends Component {
      constructor(props){
        super(props)
      }
      render(){
        monitorRef = this
        return null
      }
    }

    const TestProbe = asField( _TestProbe )
    const StateMonitor = withFormContext( _StateMonitor )

    const wrapper = mount(
      <FormProvider { ...formProps }>
        <TestProbe { ...fieldProps }/>
        <StateMonitor/>
      </FormProvider>
    );

    const { formLink } = monitorRef.props
    const fieldLink = fieldRef.props

    const getFieldState = () => {
      const fieldState = formLink.getFieldState(fieldProps.fieldName)
      delete fieldState.reset
      return fieldState
    }

    return {
      formLink,
      fieldLink,
      getFieldState,
    }
  }

// << -------------------------------------------------------------------------

describe('asField', function () {

  const { formLink, fieldLink, getFieldState } = renderTestForm({
    formProps: { initialValue: { testFieldName: 'initial value'} },
    fieldProps: { fieldName: 'testFieldName' }
  })

  it('set initial state', () => {
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": "initial value",
    })
  })

  it('update value', () => {
    fieldLink.onChange('updated value')
    expect( getFieldState() ).toEqual({
      "dirty": true,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": "updated value",
    })
  })

  it('restore value', () => {
    fieldLink.onChange('initial value')
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": "initial value",
    })
  })

  it('get focused', () => {
    fieldLink.onFocus()
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": true,
      "touched": true,
      "valid": true,
      "value": "initial value",
    })
  })

  it('get unfocused', () => {
    fieldLink.onBlur()
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": false,
      "touched": true,
      "valid": true,
      "value": "initial value",
    })
  })

})

describe('asField (special cases)', function () {

  it('error of render outside the form boundaries', function () {

    const TestProbe = asField( <div/> )

    /**
     * This function will render TestProbe outside of the form boundaries,
     * get the custom error message generated and return it available for
     * a check.
     * @return {[type]} - custom error message
     */
    const mountWithoutContext = () => {
      let shownErrors = []
      const errLogger = console.error
      console.error = (msg)=>shownErrors.push(msg)
      try { mount( <TestProbe/> ) }catch(e){}
      console.error = errLogger
      return shownErrors
    };

    // Look for the main part of the custom error message in the first error
    // message we've got.
    expect( mountWithoutContext()[0] ).toMatch(
      /_FormComponent must be used in bounds of FormProvider./
    )
  })

  it('render without initialValue', () => {
    const { formLink, fieldLink, getFieldState } = renderTestForm({
      formProps: {},
      fieldProps: { fieldName: 'testFieldName' }
    })
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": "",
    })
  })

  it('try to set value while disabled', () => {
    const { formLink, fieldLink, getFieldState } = renderTestForm({
      formProps: {},
      fieldProps: { fieldName: 'testFieldName', disabled: true }
    })

    fieldLink.onChange('updated value')
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": "",
    })
  })

  it('validating sync', () => {

    const validator = jest.fn().mockReturnValue(['error'])

    const { formLink, fieldLink, getFieldState } = renderTestForm({
      formProps: {},
      fieldProps: { fieldName: 'testFieldName', onValidate: validator }
    })

    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [ "error" ],
      "focused": false,
      "touched": false,
      "valid": false,
      "value": "",
    })
  })

  it('invalidate async', ( done ) => {

    const validator = jest.fn().mockReturnValue(['error'])
    const handleOnValidate = (value, invalidate) => {
      setTimeout(
        () => {
          invalidate( value, ['Async Err'])

          expect( getFieldState() ).toEqual({
            "dirty": false,
            "errors": [
              "error",
              "Async Err"
            ],
            "focused": false,
            "touched": false,
            "valid": false,
            "value": "",
          })

          done()
        }
        ,0
      )
      return validator()
    }

    const { formLink, fieldLink, getFieldState } = renderTestForm({
      formProps: {},
      fieldProps: { fieldName: 'testFieldName', onValidate: handleOnValidate }
    })
  })

  it('invalidate async (changed value)', ( done ) => {

    const validator = jest.fn().mockReturnValue(['error'])
    const handleOnValidate = (value, invalidate) => {
      setTimeout(
        () => {
          invalidate( 'changed' )

          expect( getFieldState() ).toEqual({
            "dirty": false,
            "errors": [
              "error",
            ],
            "focused": false,
            "touched": false,
            "valid": false,
            "value": "",
          })

          done()
        }
        ,0
      )
      return validator()
    }

    const { formLink, fieldLink, getFieldState } = renderTestForm({
      formProps: {},
      fieldProps: { fieldName: 'testFieldName', onValidate: handleOnValidate }
    })
  })

})
