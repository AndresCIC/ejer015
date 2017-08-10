'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logoSvg = require('./logo.svg');

var _logoSvg2 = _interopRequireDefault(_logoSvg);

require('./App.css');

var Formulario = (function (_React$Component) {
  _inherits(Formulario, _React$Component);

  function Formulario(props) {
    _classCallCheck(this, Formulario);

    _get(Object.getPrototypeOf(Formulario.prototype), 'constructor', this).call(this, props);
    this.state = {
      nombre: '',
      apellidos: '',
      edad: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  _createClass(Formulario, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmitChange',
    value: function handleSubmitChange(event) {}
  }, {
    key: 'handleEdad',
    value: function handleEdad(event) {

      this.state.nombre > 100 ? "NOPE" : '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'form',
        null,
        _react2['default'].createElement(
          'label',
          null,
          'Nombre:',
          _react2['default'].createElement('input', {
            name: 'nombre',
            type: 'text',
            maxLength: '20',
            value: this.state.nombre,
            onChange: this.handleInputChange })
        ),
        _react2['default'].createElement('br', null),
        _react2['default'].createElement(
          'label',
          null,
          'Apellidos:',
          _react2['default'].createElement('input', {
            name: 'apellidos',
            type: 'text',
            maxLength: '20',
            value: this.state.apellidos,
            onChange: this.handleInputChange })
        ),
        _react2['default'].createElement('br', null),
        _react2['default'].createElement(
          'label',
          null,
          'Edad:',
          _react2['default'].createElement('input', {
            name: 'edad',
            type: 'number',
            value: this.state.edad,
            min: 0,
            max: 120,
            onChange: this.handleInputChange })
        ),
        _react2['default'].createElement('br', null),
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            name: 'enviar',
            type: 'submit',
            value: 'Enviar',
            onChange: this.handleSubmitChange })
        )
      );
    }
  }]);

  return Formulario;
})(_react2['default'].Component);

exports['default'] = Formulario;
module.exports = exports['default'];

