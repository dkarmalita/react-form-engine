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
        return <input { ...this.props } type='checkbox' />
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

    const TestProbe = asCheckboxField( _TestProbe )
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
      wrapper,
      formLink,
      fieldLink,
      getFieldState,
    }
  }

// << -------------------------------------------------------------------------

describe('asCheckboxField', function () {

  const { wrapper, formLink, fieldLink, getFieldState } = renderTestForm({
    formProps: { initialValue: { testFieldName: true } },
    fieldProps: { fieldName: 'testFieldName',  }
  })

  it('simulate click', () => {

    wrapper.find('input').simulate('click')
    expect( getFieldState() ).toEqual({
      "dirty": true,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": false,
    })
  })

  it('simulate keypress', () => {

    wrapper.find('input').simulate('keypress')
    expect( getFieldState() ).toEqual({
      "dirty": false,
      "errors": [],
      "focused": false,
      "touched": false,
      "valid": true,
      "value": true,
    })
  })
})
