(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("@kard/react-form-engine", [], factory);
	else if(typeof exports === 'object')
		exports["@kard/react-form-engine"] = factory(require("react"));
	else
		root["@kard/react-form-engine"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/FormComponent.jsx":
/*!*******************************!*\
  !*** ./src/FormComponent.jsx ***!
  \*******************************/
/*! exports provided: asField, asInputField, asCheckboxField, asRadioButtonField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asField", function() { return asField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asInputField", function() { return asInputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asCheckboxField", function() { return asCheckboxField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRadioButtonField", function() { return asRadioButtonField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_combineArraysUnique__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/combineArraysUnique */ "./src/utils/combineArraysUnique.js");
/* harmony import */ var _FormProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormProvider */ "./src/FormProvider.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { objectsEqual } from './utils/objectsEqual'



/**
 * A link which become a part of error message. Should point to the documentation.
 */
// eslint-disable-next-line camelcase
var helpLink_formBoundaries = 'http://example.com';

/**
 * Note: About field state. Each field has several properties in its state:
 * - value {Any} - contains the field value
 * - errors {Array of Strings} - contains error messages of the current value
 * - focused {Bool} - true while the field focused
 * - dirty {Bool} - true while the field contains changed value
 * - touched {Bool} - true while the field is/was focused
 * - valid {Bool} - true while the field contains no errors
 * - declined {Bool} - true when the latest value was declined by onTest handler
 */
var asField = function asField(WrappedField) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _FormComponent = function (_Component) {
    _inherits(_FormComponent, _Component);

    function _FormComponent(props) {
      _classCallCheck(this, _FormComponent);

      var _this = _possibleConstructorReturn(this, (_FormComponent.__proto__ || Object.getPrototypeOf(_FormComponent)).call(this, props));

      _this._getInitialValue = _this._getInitialValue.bind(_this);
      _this._setFieldState = _this._setFieldState.bind(_this);
      _this._getFieldState = _this._getFieldState.bind(_this);
      _this._setFieldValue = _this._setFieldValue.bind(_this);
      _this._getFieldValue = _this._getFieldValue.bind(_this);
      _this._invalidate = _this._invalidate.bind(_this);
      _this._setFieldValue = _this._setFieldValue.bind(_this);
      _this._checkFormContext = _this._checkFormContext.bind(_this);
      _this._setFocused = _this._setFocused.bind(_this);
      _this._getCleanProps = _this._getCleanProps.bind(_this);
      _this._init = _this._init.bind(_this);
      _this._init();
      return _this;
    }

    _createClass(_FormComponent, [{
      key: '_init',
      value: function _init() {
        this._setFieldState(_extends({}, this._prepareState(this._getInitialValue()), {
          touched: false,
          focused: false,
          reset: this._init
        }));
      }

      /**
       * The only method to get initial value from the level of form
       * @return {Any} - initial value or undefined if no value is given
       */

    }, {
      key: '_getInitialValue',
      value: function _getInitialValue() {
        if (!this._checkFormContext()) {
          return;
        }
        var _props = this.props,
            fieldName = _props.fieldName,
            formLink = _props.formLink;

        return formLink.getFieldInitialValue(fieldName) || defaultValue;
      }

      /**
       * The only method to set state of the field
       * @param {Object} newState - the whole field state
       */

    }, {
      key: '_setFieldState',
      value: function _setFieldState(newState) {
        if (!this._checkFormContext()) {
          return;
        }
        var _props2 = this.props,
            fieldName = _props2.fieldName,
            formLink = _props2.formLink;

        var oldState = this._getFieldState();
        // if( objectsEqual( oldState, newState )){ return } // prevent state update if no changes in it
        formLink.setFieldState(fieldName, newState);
      }

      /**
       * The only method to get state of the field
       * @return {Object} - the state of the field
       */

    }, {
      key: '_getFieldState',
      value: function _getFieldState() {
        if (!this._checkFormContext()) {
          return;
        }
        var _props3 = this.props,
            fieldName = _props3.fieldName,
            formLink = _props3.formLink;

        var state = formLink.getFieldState(fieldName);
        return typeof state != 'undefined' ? state : {};
      }

      /**
       * Check if the Component is placed inside a form context.
       * Puts the error message in the console only one time per component.
       * @return {Bool} - true while the field is in a form context, false - in other case
       */

    }, {
      key: '_checkFormContext',
      value: function _checkFormContext() {
        if (this.props.formLink) {
          return true;
        }
        if (this.errorShown) {
          return false;
        }
        console.error(this.constructor.name + ' must be used in bounds of FormProvider. '
        // eslint-disable-next-line camelcase
        + ('Visit ' + helpLink_formBoundaries + ' to learn more about the form boundaries.'));
        this.errorShown = true;
        return false;
      }

      /**
       * The only method to prepare the data state for a value within valid, errors and dirty fields filled
       * @param {Any} newValue - new field value
       * @return {Object} - field state within all data propeties
       */

    }, {
      key: '_prepareState',
      value: function _prepareState(value) {
        var declined = !this.props.onTest(value);
        if (declined) {
          return _extends({}, this._getFieldState(), { declined: declined });
        }
        var dirty = value !== this._getInitialValue();
        var errors = this.props.onValidate(value, this._invalidate);
        var valid = errors.length === 0;
        return _extends({}, this._getFieldState(), { value: value, dirty: dirty, errors: errors, valid: valid, declined: declined });
      }

      /**
       * The only method to set value of the field. Except the value, the method sets data-related field's properties: valid, errors and dirty.
       * @param {Any} newValue - new field value
       */

    }, {
      key: '_setFieldValue',
      value: function _setFieldValue(value) {
        if (this.props.disabled) {
          return;
        } // only an enabled field can update its value
        this._setFieldState(this._prepareState(this.props.normalize ? this.props.normalize(value) : value));
      }

      /**
       * The main method to get field value. _getFieldState is better to use in cases when you need to get fields attributes too.
       * @return {Any} - the current value of the field
       */

    }, {
      key: '_getFieldValue',
      value: function _getFieldValue() {
        return this._getFieldState().value;
      }

      /**
       * The method is used to invalidate some value of the field. It is passed as the second paramater to onValidate handler and is used for async invalidation (see example)
       * @param  {Any} value - a value to invalidate
       * @param  {Array of Strings} errors - an array of errors found
       * @return {[type]}        [description]
       * @example
       *   function handleOnValidate( value, invalidate ){
       *     getAsyncErrors( value ).then( { value, errors }=>invalidate( value, errors ) )
       *     return getSyncErrors( value )
       *   }
       */

    }, {
      key: '_invalidate',
      value: function _invalidate(value) {
        var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var state = this._getFieldState();
        if (state.value !== value || errors.length === 0) {
          return;
        }
        var nextErrors = Object(_utils_combineArraysUnique__WEBPACK_IMPORTED_MODULE_1__["combineArraysUnique"])(state.errors, errors);
        this._setFieldState(_extends({}, state, { errors: nextErrors }));
      }

      /**
       * The only method to change focused value, keeps its eye on the touched property too.
       * @param {Bool} focused - the focused state to set.
       */

    }, {
      key: '_setFocused',
      value: function _setFocused(focused) {
        var oldState = this._getFieldState();
        var touched = focused || oldState.focused;
        this._setFieldState(_extends({}, oldState, { focused: focused, touched: touched }));
      }

      /**
       * The only method allows to get props cleaned from form-specific instances, suitable to be passed to a DOM tag.
       * @return {Objec} - cleaned property set
       */

    }, {
      key: '_getCleanProps',
      value: function _getCleanProps() {
        var _props4 = this.props,
            fieldName = _props4.fieldName,
            onValidate = _props4.onValidate,
            onTest = _props4.onTest,
            formLink = _props4.formLink,
            normalize = _props4.normalize,
            other = _objectWithoutProperties(_props4, ['fieldName', 'onValidate', 'onTest', 'formLink', 'normalize']);

        return other;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var value = this._getFieldValue();
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedField, _extends({}, this._getCleanProps(), {
          value: typeof value != 'undefined' ? value : defaultValue,
          onChange: function onChange(value) {
            return _this2._setFieldValue(value);
          },
          onFocus: function onFocus() {
            return _this2._setFocused(true);
          },
          onBlur: function onBlur() {
            return _this2._setFocused(false);
          }
          // name={ this.props.fieldName }
        }));
      }
    }]);

    return _FormComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  _FormComponent.defaultProps = {
    // defaultValue: '',
    fieldName: '',
    onValidate: function onValidate() {
      return [];
    },
    onTest: function onTest() {
      return true;
    }
  };


  return Object(_FormProvider__WEBPACK_IMPORTED_MODULE_2__["withFormContext"])(_FormComponent);
};

/* connection models HOCs */


var asInputField = function asInputField(InputComponent) {
  var WrappedInput = function (_Component2) {
    _inherits(WrappedInput, _Component2);

    function WrappedInput() {
      _classCallCheck(this, WrappedInput);

      return _possibleConstructorReturn(this, (WrappedInput.__proto__ || Object.getPrototypeOf(WrappedInput)).apply(this, arguments));
    }

    _createClass(WrappedInput, [{
      key: 'render',
      value: function render() {
        var _this4 = this;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, _extends({}, this.props, {
          onChange: function onChange(event) {
            return _this4.props.onChange(event.target.value);
          }
        }));
      }
    }]);

    return WrappedInput;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return asField(WrappedInput);
};

var asCheckboxField = function asCheckboxField(InputComponent) {
  var WrappedInput = function (_Component3) {
    _inherits(WrappedInput, _Component3);

    function WrappedInput() {
      _classCallCheck(this, WrappedInput);

      return _possibleConstructorReturn(this, (WrappedInput.__proto__ || Object.getPrototypeOf(WrappedInput)).apply(this, arguments));
    }

    _createClass(WrappedInput, [{
      key: 'render',
      value: function render() {
        var _this6 = this;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, _extends({}, this.props, {
          onChange: null,
          checked: this.props.value,
          onClick: function onClick() {
            return _this6.props.onChange(!_this6.props.value);
          },
          onKeyPress: function onKeyPress() {
            return _this6.props.onChange(!_this6.props.value);
          } // add support of keyboard enter
        }));
      }
    }]);

    return WrappedInput;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return asField(WrappedInput);
};

var asRadioButtonField = function asRadioButtonField(InputComponent) {
  var WrappedInput = function (_Component4) {
    _inherits(WrappedInput, _Component4);

    function WrappedInput() {
      _classCallCheck(this, WrappedInput);

      return _possibleConstructorReturn(this, (WrappedInput.__proto__ || Object.getPrototypeOf(WrappedInput)).apply(this, arguments));
    }

    _createClass(WrappedInput, [{
      key: 'render',
      value: function render() {
        var _this8 = this;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, _extends({}, this.props, {
          onChange: null,
          checked: this.props.value === this.props.option,
          onClick: function onClick() {
            return _this8.props.onChange(_this8.props.option);
          }
        }));
      }
    }]);

    return WrappedInput;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return asField(WrappedInput);
};

/***/ }),

/***/ "./src/FormProvider.jsx":
/*!******************************!*\
  !*** ./src/FormProvider.jsx ***!
  \******************************/
/*! exports provided: FormProvider, withFormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFormContext", function() { return withFormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FormContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
// Note: createContext takes the default context state
// used while the component in placed outside the context

var FormProvider = function (_Component) {
  _inherits(FormProvider, _Component);

  function FormProvider(props) {
    _classCallCheck(this, FormProvider);

    var _this = _possibleConstructorReturn(this, (FormProvider.__proto__ || Object.getPrototypeOf(FormProvider)).call(this, props));

    _this.state = { formBuffer: {}, blocked: false };


    _this._getFormValue = _this._getFormValue.bind(_this);
    _this._getFormState = _this._getFormState.bind(_this);
    _this._resetForm = _this._resetForm.bind(_this);
    _this._getFormLink = _this._getFormLink.bind(_this);

    var formBuffer = _this.state.formBuffer;

    var formLink = _this._getFormLink();
    _this.props.onReady(formLink);
    return _this;
  }

  _createClass(FormProvider, [{
    key: '_getFormValue',
    value: function _getFormValue() {
      var formBuffer = this.state.formBuffer;

      var acc = {};
      Object.keys(formBuffer).map(function (fieldName) {
        acc[fieldName] = formBuffer[fieldName].value;
      });
      return acc;
    }
  }, {
    key: '_getFormState',
    value: function _getFormState() {
      var formBuffer = this.state.formBuffer;

      var stateAcc = { dirty: false, touched: false, valid: true };
      Object.keys(formBuffer).map(function (fieldName) {
        stateAcc.dirty = stateAcc.dirty || formBuffer[fieldName].dirty;
        stateAcc.touched = stateAcc.touched || formBuffer[fieldName].touched;
        stateAcc.valid = !stateAcc.valid || !formBuffer[fieldName].valid;
      });
      return stateAcc;
    }
  }, {
    key: '_resetForm',
    value: function _resetForm() {
      var formBuffer = this.state.formBuffer;

      Object.keys(formBuffer).map(function (fieldName) {
        return formBuffer[fieldName].reset();
      });
    }
  }, {
    key: '_getFormLink',
    value: function _getFormLink() {
      var _this2 = this;

      var formLink = {

        /* field mathods */

        setFieldState: function setFieldState(fieldName, fieldState, cb) {
          return _this2.setState(function (prevState, props) {
            return _extends({}, prevState, {
              formBuffer: _extends({}, prevState.formBuffer, _defineProperty({}, fieldName, fieldState))
            });
          }, function () {
            var onChange = _this2.props.onChange;

            if (cb) {
              cb();
            }
            onChange(_this2.state.formBuffer);
          });
        },

        getFieldState: function getFieldState(fieldName) {
          return _this2.state.formBuffer[fieldName];
        },

        getFieldInitialValue: function getFieldInitialValue(fieldName) {
          return _this2.props.initialValue[fieldName];
        },

        /* form methods */

        // __setState : this.setState, // undocumented for now

        getFormState: function getFormState() {
          return _this2._getFormState();
        },

        getFormValue: function getFormValue() {
          return _this2._getFormValue();
        },

        getFieldsState: function getFieldsState() {
          return _this2.state.formBuffer;
        },

        resetForm: function resetForm() {
          return _this2._resetForm();
        }
      };
      return formLink;
    }

    /**
     * `render` is only used to render the component's children in the context of the
     * `formLink` structure which contains all of the necessary form-wide fields.
     * @return {Component}
     */

  }, {
    key: 'render',
    value: function render() {
      var formLink = this._getFormLink();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        FormContext.Provider,
        { value: formLink },
        this.props.children
      );
    }
  }]);

  return FormProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/**
 * HOC which is used to convert Basic Input Components to those connected to the form's context.
 * @param  {Component} FormComponent - one of the Basic Input Components.
 * @return {Component} - Connected to the form's context Component.
 */
FormProvider.defaultProps = {
  initialValue: {},
  onChange: function onChange() {},
  onReady: function onReady() {}
};
var withFormContext = function withFormContext(FormComponent) {
  return function (_Component2) {
    _inherits(_class, _Component2);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        var _this4 = this;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          FormContext.Consumer,
          null,
          function (formLink) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormComponent, _extends({}, _this4.props, { formLink: formLink }));
          }
        );
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: FormProvider, withFormContext, asField, asInputField, asCheckboxField, asRadioButtonField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormProvider */ "./src/FormProvider.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return _FormProvider__WEBPACK_IMPORTED_MODULE_0__["FormProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withFormContext", function() { return _FormProvider__WEBPACK_IMPORTED_MODULE_0__["withFormContext"]; });

/* harmony import */ var _FormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent */ "./src/FormComponent.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asField", function() { return _FormComponent__WEBPACK_IMPORTED_MODULE_1__["asField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asInputField", function() { return _FormComponent__WEBPACK_IMPORTED_MODULE_1__["asInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asCheckboxField", function() { return _FormComponent__WEBPACK_IMPORTED_MODULE_1__["asCheckboxField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asRadioButtonField", function() { return _FormComponent__WEBPACK_IMPORTED_MODULE_1__["asRadioButtonField"]; });




/***/ }),

/***/ "./src/utils/combineArraysUnique.js":
/*!******************************************!*\
  !*** ./src/utils/combineArraysUnique.js ***!
  \******************************************/
/*! exports provided: combineArraysUnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineArraysUnique", function() { return combineArraysUnique; });
// @kard js snippet
/**
 * Add elements from arrB to arrA. Each element is addad only if
 * is absent in the arrA.
 * @param  {Array} arrA - array of unique errors ids
 * @param  {Array} arrB - array of unique errors ids to add to errorsBuffer
 * @return {Array]} - combined array of errors
 */
var combineArraysUnique = function combineArraysUnique() {
  var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var acc = []; // .concat( arrA )

  var addEl = function addEl(el) {
    if (!~acc.indexOf(el)) {
      acc.push(el);
    }
  };

  // Add only items are not in the list yet
  a1.forEach(addEl);

  // Add only items are not in the list yet
  a2.forEach(addEl);

  return acc;
};

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","umd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=library.js.map