require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeDefs */ "./src/typeDefs.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers.js");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_2__);



let server = new apollo_server__WEBPACK_IMPORTED_MODULE_2__["ApolloServer"]({
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_0__["typeDefs"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_1__["resolvers"],
  tracing: true
});
server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);

const pubsub = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["PubSub"]();
/* harmony default export */ __webpack_exports__["default"] = (pubsub);

/***/ }),

/***/ "./src/resolvers.js":
/*!**************************!*\
  !*** ./src/resolvers.js ***!
  \**************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const books = [{
  id: 1,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling"
}, {
  id: 2,
  title: "Jurassic Park",
  author: "Michael Crichton"
}];
const chats = [{
  id: 1,
  message: "Hello",
  author: "Guillermo del Toro"
}, {
  id: 2,
  title: "World",
  author: "Neill Blomkamp"
}];
const CHAT_CHANNEL = "CHAT_CHANNEL";
const resolvers = {
  Query: {
    books: (_, {
      input
    }, context, info) => {
      return books;
    },
    book: (_, {
      id
    }) => {
      return books.find(book => book.id === id);
    },
    authors: () => {
      return [{
        name: "Todd",
        twitter: "toddmotto"
      }, {
        name: "React",
        twitter: "reactjs"
      }];
    },
    chats: () => chats
  },
  Mutation: {
    addAuthor: (_, {
      input: {
        name,
        twitter
      }
    }) => {
      return {
        name,
        twitter
      };
    },
    deleteBook: (_, {
      title
    }) => true,
    changeBookTitle: async (_, {
      input
    }) => {
      let {
        id,
        title
      } = input; //simulate a big delay in processing
      //await new Promise(resolve => setTimeout(resolve, 3000))

      let book = books.find(book => book.id === id);
      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("bookTitleChanged", {
        bookTitleChanged: _objectSpread({}, book, {
          title
        })
      }); //Return the new book title

      return _objectSpread({}, book, {
        title: title + " test"
      });
    },

    sendMessage(_, {
      author,
      message
    }, {
      pubsub
    }) {
      const chat = {
        id: chats.length + 1,
        message,
        author
      };
      chats.push(chat);
      pubsub.publish("CHAT_CHANNEL", {
        messageSent: chat
      });
      return chat;
    }

  },
  Subscription: {
    bookTitleChanged: {
      subscribe: () => _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].asyncIterator(["bookTitleChanged"])
    },
    messageSent: {
      subscribe: () => _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].asyncIterator(CHAT_CHANNEL)
    }
  }
};

/***/ }),

/***/ "./src/typeDefs.js":
/*!*************************!*\
  !*** ./src/typeDefs.js ***!
  \*************************/
/*! exports provided: typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  input AddAuthorInput {
    name: String!
    twitter: String
  }

  type Author {
    name: String!
    twitter: String
  }

  type Book {
    id: Int!
    title: String!
    author: String!
  }

  input ChangeBookInput {
    id: Int!
    title: String!
  }

  type Chat {
    id: Int!
    message: String!
    author: String!
  }

  input SendMessageInput {
    message: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
    authors: [Author]
    chats: [Chat]
    chat(id: Int!): Chat
  }

  type Mutation {
    changeBookTitle(input: ChangeBookInput!): Book
    addAuthor(input: AddAuthorInput!): Author
    deleteBook(author: String!): Boolean
    sendMessage(input: SendMessageInput!): Chat
    deleteMessage(author: String!): Boolean
  }

  type Subscription {
    bookTitleChanged: Book
    messageSent: Chat
  }
`;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/takayatakuki/Documents/hello_apollo/graphql_server/src/index.js */"./src/index.js");


/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ })

/******/ });
//# sourceMappingURL=main.map