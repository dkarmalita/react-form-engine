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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asRadioButtonField = exports.asCheckboxField = exports.asInputField = exports.asField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _isObjectsEqual = __webpack_require__(/*! ./utils/isObjectsEqual */ "./src/utils/isObjectsEqual.js");

var _combineArraysUnique = __webpack_require__(/*! ./utils/combineArraysUnique */ "./src/utils/combineArraysUnique.js");

var _FormProvider = __webpack_require__(/*! ./FormProvider */ "./src/FormProvider.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        if ((0, _isObjectsEqual.isObjectsEqual)(oldState, newState)) {
          return;
        } // prevent state update if no changes in it
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
        var dirty = value !== this._getInitialValue();
        var errors = this.props.onValidate(value, this._invalidate);
        var valid = errors.length === 0;
        return _extends({}, this._getFieldState(), { value: value, dirty: dirty, errors: errors, valid: valid });
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
        this._setFieldState(this._prepareState(value));
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
        var nextErrors = (0, _combineArraysUnique.combineArraysUnique)(state.errors, errors);
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
            formLink = _props4.formLink,
            other = _objectWithoutProperties(_props4, ['fieldName', 'onValidate', 'formLink']);

        return other;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var value = this._getFieldValue();
        return _react2.default.createElement(WrappedField, _extends({}, this._getCleanProps(), {
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
  }(_react.Component);

  _FormComponent.defaultProps = {
    // defaultValue: '',
    fieldName: '',
    onValidate: function onValidate() {
      return [];
    }
  };


  return (0, _FormProvider.withFormContext)(_FormComponent);
};

/* connection models HOCs */

exports.asField = asField;
var asInputField = exports.asInputField = function asInputField(InputComponent) {
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

        return _react2.default.createElement(InputComponent, _extends({}, this.props, {
          onChange: function onChange(event) {
            return _this4.props.onChange(event.target.value);
          }
        }));
      }
    }]);

    return WrappedInput;
  }(_react.Component);

  return asField(WrappedInput);
};

var asCheckboxField = exports.asCheckboxField = function asCheckboxField(InputComponent) {
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

        return _react2.default.createElement(InputComponent, _extends({}, this.props, {
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
  }(_react.Component);

  return asField(WrappedInput);
};

var asRadioButtonField = exports.asRadioButtonField = function asRadioButtonField(InputComponent) {
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

        return _react2.default.createElement(InputComponent, _extends({}, this.props, {
          onChange: null,
          checked: this.props.value === this.props.option,
          onClick: function onClick() {
            return _this8.props.onChange(_this8.props.option);
          }
        }));
      }
    }]);

    return WrappedInput;
  }(_react.Component);

  return asField(WrappedInput);
};

/***/ }),

/***/ "./src/FormProvider.jsx":
/*!******************************!*\
  !*** ./src/FormProvider.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormContext = exports.FormProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContext = _react2.default.createContext(null);
// Note: createContext takes the default context state
// used while the component in placed outside the context

var FormProvider = exports.FormProvider = function (_Component) {
  _inherits(FormProvider, _Component);

  function FormProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormProvider.__proto__ || Object.getPrototypeOf(FormProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { formBuffer: {}, blocked: false }, _temp), _possibleConstructorReturn(_this, _ret);
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

    /**
     * `render` is only used to render the component's children in the context of the
     * `formLink` structure which contains all of the necessary form-wide fields.
     * @return {Component}
     */

  }, {
    key: 'render',
    value: function render() {
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
            if (onChange) {
              onChange(_this2.state.formBuffer);
            }
          });
        },

        getFieldState: function getFieldState(fieldName) {
          return _this2.state.formBuffer[fieldName];
        },

        getFieldInitialValue: function getFieldInitialValue(fieldName) {
          return (_this2.props.initialValue || {})[fieldName];
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

      return _react2.default.createElement(
        FormContext.Provider,
        { value: formLink },
        this.props.children
      );
    }
  }]);

  return FormProvider;
}(_react.Component);

/**
 * HOC which is used to convert Basic Input Components to those connected to the form's context.
 * @param  {Component} FormComponent - one of the Basic Input Components.
 * @return {Component} - Connected to the form's context Component.
 */


var withFormContext = exports.withFormContext = function withFormContext(FormComponent) {
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

        return _react2.default.createElement(
          FormContext.Consumer,
          null,
          function (formLink) {
            return _react2.default.createElement(FormComponent, _extends({}, _this4.props, { formLink: formLink }));
          }
        );
      }
    }]);

    return _class;
  }(_react.Component);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FormProvider = __webpack_require__(/*! ./FormProvider */ "./src/FormProvider.jsx");

Object.defineProperty(exports, 'FormProvider', {
  enumerable: true,
  get: function get() {
    return _FormProvider.FormProvider;
  }
});
Object.defineProperty(exports, 'withFormContext', {
  enumerable: true,
  get: function get() {
    return _FormProvider.withFormContext;
  }
});

var _FormComponent = __webpack_require__(/*! ./FormComponent */ "./src/FormComponent.jsx");

Object.defineProperty(exports, 'asField', {
  enumerable: true,
  get: function get() {
    return _FormComponent.asField;
  }
});
Object.defineProperty(exports, 'asInputField', {
  enumerable: true,
  get: function get() {
    return _FormComponent.asInputField;
  }
});
Object.defineProperty(exports, 'asCheckboxField', {
  enumerable: true,
  get: function get() {
    return _FormComponent.asCheckboxField;
  }
});
Object.defineProperty(exports, 'asRadioButtonField', {
  enumerable: true,
  get: function get() {
    return _FormComponent.asRadioButtonField;
  }
});

/***/ }),

/***/ "./src/utils/combineArraysUnique.js":
/*!******************************************!*\
  !*** ./src/utils/combineArraysUnique.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// @kard js snippet
/**
 * Add elements from arrB to arrA. Each element is addad only if
 * is absent in the arrA.
 * @param  {Array} arrA - array of unique errors ids
 * @param  {Array} arrB - array of unique errors ids to add to errorsBuffer
 * @return {Array]} - combined array of errors
 */
var combineArraysUnique = exports.combineArraysUnique = function combineArraysUnique() {
  var arrA = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var arrB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var acc = [].concat(arrA);

  // Add only items are not in the list yet
  arrB.forEach(function (errId) {
    if (!~arrA.indexOf(errId)) {
      // ref: https://www.joezimjs.com/javascript/great-mystery-of-the-tilde/
      acc.push(errId);
    }
  });

  return acc;
};

/***/ }),

/***/ "./src/utils/isObjectsEqual.js":
/*!*************************************!*\
  !*** ./src/utils/isObjectsEqual.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObjectsEqual = isObjectsEqual;
// @kard js snippet
/**
 * isObjectsEqual Deeply chack two objects for equality
 * idea: https://stackoverflow.com/a/16788517
 * @param  {Object}  x - the first object to compare
 * @param  {Object}  y - the second object to compare
 * @return {Boolean} - true when objects equal, false in another case
 */
function isObjectsEqual(x, y) {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }

  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false;
  }

  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y;
  }

  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) {
    return x === y;
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return false;
  }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }

  // recursive object equality check
  var p = Object.keys(x);
  return Object.keys(y).every(function (i) {
    return p.indexOf(i) !== -1;
  }) && p.every(function (i) {
    return isObjectsEqual(x[i], y[i]);
  });
}

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