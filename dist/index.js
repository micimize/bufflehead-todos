require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var filters = exports.filters = {
	    SHOW_ALL: 'show_all',
	    SHOW_COMPLETED: 'show_completed',
	    SHOW_ACTIVE: 'show_active'
	};
	
	exports.default = {
	    ADD_TODO: function ADD_TODO(state, payload) {
	        return [_extends({
	            _id: (state.reduce(function (maxId, todo) {
	                return Math.max(parseInt(todo._id), maxId);
	            }, -1) + 1).toString(),
	            completed: false
	        }, payload)].concat(_toConsumableArray(state));
	    },
	    DELETE_TODO: function DELETE_TODO(state, payload) {
	        return state.filter(function (todo) {
	            return todo._id !== payload._id;
	        });
	    },
	    EDIT_TODO: function EDIT_TODO(state, payload) {
	        return state.map(function (todo) {
	            return todo._id === payload._id ? Object.assign({}, todo, payload) : todo;
	        });
	    },
	    COMPLETE_TODO: function COMPLETE_TODO(state, payload) {
	        return state.map(function (todo) {
	            return todo._id === payload._id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
	        });
	    },
	    COMPLETE_ALL: function COMPLETE_ALL(state, payload) {
	        var areAllMarked = state.every(function (todo) {
	            return todo.completed;
	        });
	        return state.map(function (todo) {
	            return Object.assign({}, todo, {
	                completed: !areAllMarked
	            });
	        });
	    },
	    CLEAR_COMPLETED: function CLEAR_COMPLETED(state, payload) {
	        return state.filter(function (todo) {
	            return todo.completed === false;
	        });
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoTextInput = function (_Component) {
	  _inherits(TodoTextInput, _Component);
	
	  function TodoTextInput(props, context) {
	    _classCallCheck(this, TodoTextInput);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoTextInput).call(this, props, context));
	
	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }
	
	  _createClass(TodoTextInput, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var text = e.target.value.trim();
	      if (e.which === 13) {
	        this.props.onSave(text);
	        if (this.props.newTodo) {
	          this.setState({ text: '' });
	        }
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      if (!this.props.newTodo) {
	        this.props.onSave(e.target.value);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', { className: (0, _classnames2.default)({
	          edit: this.props.editing,
	          'new-todo': this.props.newTodo
	        }),
	        type: 'text',
	        placeholder: this.props.placeholder,
	        autoFocus: 'true',
	        value: this.state.text,
	        onBlur: this.handleBlur.bind(this),
	        onChange: this.handleChange.bind(this),
	        onKeyDown: this.handleSubmit.bind(this) });
	    }
	  }]);
	
	  return TodoTextInput;
	}(_react.Component);
	
	TodoTextInput.propTypes = {
	  onSave: _react.PropTypes.func.isRequired,
	  text: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  editing: _react.PropTypes.bool,
	  newTodo: _react.PropTypes.bool
	};
	
	exports.default = TodoTextInput;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("bufflehead/dist/for/node_development");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(14);
	
	var _polypackBufflehead = __webpack_require__(5);
	
	var bufflehead = _interopRequireWildcard(_polypackBufflehead);
	
	var _todos = __webpack_require__(13);
	
	var _todos2 = _interopRequireDefault(_todos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	if (false) require('todomvc-app-css/index.css');
	
	var settings = bufflehead.settings({
	    "db": {
	        "name": "todos",
	        "uri": "http://127.0.0.1:5984",
	        "credentials": {
	            "admin": {
	                "name": "server",
	                "password": "server"
	            }
	        }
	    }
	});
	
	var app = new bufflehead.default({
	    title: 'Bufflehead • TodoMVC',
	    domains: { todos: _todos2.default, settings: settings }
	});
	
	app.main();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FILTER_TITLES;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dataFlows = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var FILTER_TITLES = (_FILTER_TITLES = {}, _defineProperty(_FILTER_TITLES, _dataFlows.filters.SHOW_ALL, 'All'), _defineProperty(_FILTER_TITLES, _dataFlows.filters.SHOW_ACTIVE, 'Active'), _defineProperty(_FILTER_TITLES, _dataFlows.filters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'renderTodoCount',
	    value: function renderTodoCount() {
	      var activeCount = this.props.activeCount;
	
	      var itemWord = activeCount === 1 ? 'item' : 'items';
	
	      return _react2.default.createElement(
	        'span',
	        { className: 'todo-count' },
	        _react2.default.createElement(
	          'strong',
	          null,
	          activeCount || 'No'
	        ),
	        ' ',
	        itemWord,
	        ' left'
	      );
	    }
	  }, {
	    key: 'renderFilterLink',
	    value: function renderFilterLink(filter) {
	      var title = FILTER_TITLES[filter];
	      var _props = this.props;
	      var selectedFilter = _props.filter;
	      var onShow = _props.onShow;
	
	
	      return _react2.default.createElement(
	        'a',
	        { className: (0, _classnames2.default)({ selected: filter === selectedFilter }),
	          style: { cursor: 'pointer' },
	          onClick: function onClick() {
	            return onShow(filter);
	          } },
	        title
	      );
	    }
	  }, {
	    key: 'renderClearButton',
	    value: function renderClearButton() {
	      var _props2 = this.props;
	      var completedCount = _props2.completedCount;
	      var onClearCompleted = _props2.onClearCompleted;
	
	      if (completedCount > 0) {
	        return _react2.default.createElement(
	          'button',
	          { className: 'clear-completed',
	            onClick: onClearCompleted },
	          'Clear completed'
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'footer',
	        { className: 'footer' },
	        this.renderTodoCount(),
	        _react2.default.createElement(
	          'ul',
	          { className: 'filters' },
	          [_dataFlows.filters.SHOW_ALL, _dataFlows.filters.SHOW_ACTIVE, _dataFlows.filters.SHOW_COMPLETED].map(function (filter) {
	            return _react2.default.createElement(
	              'li',
	              { key: filter },
	              _this2.renderFilterLink(filter)
	            );
	          })
	        ),
	        this.renderClearButton()
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	Footer.propTypes = {
	  completedCount: _react.PropTypes.number.isRequired,
	  activeCount: _react.PropTypes.number.isRequired,
	  filter: _react.PropTypes.string.isRequired,
	  onClearCompleted: _react.PropTypes.func.isRequired,
	  onShow: _react.PropTypes.func.isRequired
	};
	
	exports.default = Footer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoTextInput = __webpack_require__(4);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: 'handleSave',
	    value: function handleSave(text) {
	      if (text.length !== 0) {
	        this.props.addTodo({ text: text });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'header',
	        { className: 'header' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'todos'
	        ),
	        _react2.default.createElement(_TodoTextInput2.default, { newTodo: true,
	          onSave: this.handleSave.bind(this),
	          placeholder: 'What needs to be done?' })
	      );
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	Header.propTypes = {
	  addTodo: _react.PropTypes.func.isRequired
	};
	
	exports.default = Header;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TodoTextInput = __webpack_require__(4);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoItem = function (_Component) {
	  _inherits(TodoItem, _Component);
	
	  function TodoItem(props, context) {
	    _classCallCheck(this, TodoItem);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).call(this, props, context));
	
	    _this.state = {
	      editing: false
	    };
	    return _this;
	  }
	
	  _createClass(TodoItem, [{
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick() {
	      this.setState({ editing: true });
	    }
	  }, {
	    key: 'handleSave',
	    value: function handleSave(id, text) {
	      if (text.length === 0) {
	        this.props.deleteTodo(id);
	      } else {
	        this.props.editTodo(id, text);
	      }
	      this.setState({ editing: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var todo = _props.todo;
	      var completeTodo = _props.completeTodo;
	      var deleteTodo = _props.deleteTodo;
	
	
	      var element = void 0;
	      if (this.state.editing) {
	        element = _react2.default.createElement(_TodoTextInput2.default, { text: todo.text,
	          editing: this.state.editing,
	          onSave: function onSave(text) {
	            return _this2.handleSave(todo.id, text);
	          } });
	      } else {
	        element = _react2.default.createElement(
	          'div',
	          { className: 'view' },
	          _react2.default.createElement('input', { className: 'toggle',
	            type: 'checkbox',
	            checked: todo.completed,
	            onChange: function onChange() {
	              return completeTodo(todo);
	            } }),
	          _react2.default.createElement(
	            'label',
	            { onDoubleClick: this.handleDoubleClick.bind(this) },
	            todo.text
	          ),
	          _react2.default.createElement('button', { className: 'destroy',
	            onClick: function onClick(_) {
	              return deleteTodo(todo);
	            } })
	        );
	      }
	
	      return _react2.default.createElement(
	        'li',
	        { className: (0, _classnames2.default)({
	            completed: todo.completed,
	            editing: this.state.editing
	          }) },
	        element
	      );
	    }
	  }]);
	
	  return TodoItem;
	}(_react.Component);
	
	TodoItem.propTypes = {
	  todo: _react.PropTypes.object.isRequired,
	  editTodo: _react.PropTypes.func.isRequired,
	  deleteTodo: _react.PropTypes.func.isRequired,
	  completeTodo: _react.PropTypes.func.isRequired
	};
	
	exports.default = TodoItem;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TODO_FILTERS;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoItem = __webpack_require__(9);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _Footer = __webpack_require__(7);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Header = __webpack_require__(8);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _dataFlows = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var TODO_FILTERS = (_TODO_FILTERS = {}, _defineProperty(_TODO_FILTERS, _dataFlows.filters.SHOW_ALL, function () {
	  return true;
	}), _defineProperty(_TODO_FILTERS, _dataFlows.filters.SHOW_ACTIVE, function (todo) {
	  return !todo.completed;
	}), _defineProperty(_TODO_FILTERS, _dataFlows.filters.SHOW_COMPLETED, function (todo) {
	  return todo.completed;
	}), _TODO_FILTERS);
	
	var Todos = function (_Component) {
	  _inherits(Todos, _Component);
	
	  function Todos(props, context) {
	    _classCallCheck(this, Todos);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Todos).call(this, props, context));
	
	    _this.state = { filter: _dataFlows.filters.SHOW_ALL };
	    return _this;
	  }
	
	  _createClass(Todos, [{
	    key: 'handleClearCompleted',
	    value: function handleClearCompleted() {
	      this.props.actions.clearCompleted();
	    }
	  }, {
	    key: 'handleShow',
	    value: function handleShow(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'renderToggleAll',
	    value: function renderToggleAll(completedCount) {
	      var _props = this.props;
	      var todos = _props.todos;
	      var actions = _props.actions;
	
	      if (todos.length > 0) {
	        return _react2.default.createElement('input', { className: 'toggle-all',
	          type: 'checkbox',
	          checked: completedCount === todos.length,
	          onChange: actions.completeAll });
	      }
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter(completedCount) {
	      var todos = this.props.todos;
	      var filter = this.state.filter;
	
	      var activeCount = todos.length - completedCount;
	
	      if (todos.length) {
	        return _react2.default.createElement(_Footer2.default, { completedCount: completedCount,
	          activeCount: activeCount,
	          filter: filter,
	          onClearCompleted: this.handleClearCompleted.bind(this),
	          onShow: this.handleShow.bind(this) });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var todos = _props2.todos;
	      var actions = _props2.actions;
	      var filter = this.state.filter;
	
	
	      var filteredTodos = todos.filter(TODO_FILTERS[filter]);
	      var completedCount = todos.reduce(function (count, todo) {
	        return todo.completed ? count + 1 : count;
	      }, 0);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'todoapp' },
	        _react2.default.createElement(_Header2.default, { addTodo: actions.addTodo }),
	        _react2.default.createElement(
	          'section',
	          { className: 'main' },
	          this.renderToggleAll(completedCount),
	          _react2.default.createElement(
	            'ul',
	            { className: 'todo-list' },
	            filteredTodos.map(function (todo) {
	              return _react2.default.createElement(_TodoItem2.default, _extends({ key: todo._id, todo: todo }, actions));
	            })
	          ),
	          this.renderFooter(completedCount)
	        )
	      );
	    }
	  }]);
	
	  return Todos;
	}(_react.Component);
	
	Todos.propTypes = {
	  todos: _react.PropTypes.array.isRequired,
	  actions: _react.PropTypes.object.isRequired
	};
	
	exports.default = Todos;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Todos = __webpack_require__(10);
	
	var _Todos2 = _interopRequireDefault(_Todos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Todos2.default;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dataFlows = __webpack_require__(2);
	
	var _dataFlows2 = _interopRequireDefault(_dataFlows);
	
	var _components = __webpack_require__(11);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _polypackBufflehead = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = new _polypackBufflehead.Domain({
	    name: 'todos',
	    route: {
	        path: '/',
	        component: _components2.default
	    },
	    pouchActionMap: {
	        insert: 'addTodo',
	        update: 'editTodo',
	        remove: 'deleteTodo'
	    },
	    dataFlows: _dataFlows2.default
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _domain = __webpack_require__(12);
	
	var _domain2 = _interopRequireDefault(_domain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _domain2.default;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map