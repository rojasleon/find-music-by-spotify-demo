webpackHotUpdate(4,{

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




var SearchBar = function SearchBar(_ref) {
  var query = _ref.query,
      search = _ref.search;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["b" /* Form */],
    { onSubmit: query, className: 'container-search-bar', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__helpers_styles__["d" /* Input */], {
      className: 'input is-danger is-medium',
      type: 'text',
      placeholder: 'Busca tu canci\xF3n favorita',
      onChange: search,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["a" /* ButtonSubmit */],
      { onClick: query, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      'Buscar'
    )
  );
};
var _default = SearchBar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchBar, 'SearchBar', '/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js');
  reactHotLoader.register(_default, 'default', '/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Track.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Expected corresponding JSX closing tag for <DescriptionDescription> (52:10)\n\n\u001b[0m \u001b[90m 50 | \u001b[39m              \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33msmall\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 51 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 52 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mDescription\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 53 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 54 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mstyle\u001b[39m jsx\u001b[33m>\u001b[39m{\u001b[32m`\u001b[39m\n \u001b[90m 55 | \u001b[39m\u001b[32m          .preview-url {\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./components/card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Track__ = __webpack_require__("./components/Track.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Track___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Track__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/card.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();






var Card = function Card(_ref) {
  var tracks = _ref.tracks,
      selectedTrack = _ref.selectedTrack;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["c" /* GridCard */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    tracks.map(function (track) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Track__["default"], _extends({ key: track.id, onClick: selectedTrack }, track, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
    })
  );
};
var _default = Card;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Card, 'Card', '/Users/rojas/Desktop/find-music-by-spotify-demo/components/card.js');
  reactHotLoader.register(_default, 'default', '/Users/rojas/Desktop/find-music-by-spotify-demo/components/card.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./helpers/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GridCard; });
/* unused harmony export CardRow */
/* unused harmony export Description */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();



var Form = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].form.withConfig({
  displayName: 'styles__Form',
  componentId: 's1yqit97-0'
})(['display:grid;grid-template-columns:5fr 1fr;background:green;padding:3px;box-sizing:border-box;']);
var Input = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].input.withConfig({
  displayName: 'styles__Input',
  componentId: 's1yqit97-1'
})(['width:100%;padding:3px 6px 3px 6px;font-size:18px;max-height:100%;border-radius:4px;border:1px solid #ccc;']);
var ButtonSubmit = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].button.withConfig({
  displayName: 'styles__ButtonSubmit',
  componentId: 's1yqit97-2'
})(['background:green;width:100%;padding:10px;font-size:19px;color:#fff;border:none;border-radius:5px;&:hover{cursor:pointer;}']);
var GridCard = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div.withConfig({
  displayName: 'styles__GridCard',
  componentId: 's1yqit97-3'
})(['display:grid;grid-template-columns:repeat(4,1fr);grid-gap:12px;justify-content:center;']);
var CardRow = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div.withConfig({
  displayName: 'styles__CardRow',
  componentId: 's1yqit97-4'
})(['border:1px solid #ccc;background-color:#f2f2f2;']);
var Description = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div.withConfig({
  displayName: 'styles__Description',
  componentId: 's1yqit97-5'
})(['background:red;']);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Form, 'Form', '/Users/rojas/Desktop/find-music-by-spotify-demo/helpers/styles.js');
  reactHotLoader.register(Input, 'Input', '/Users/rojas/Desktop/find-music-by-spotify-demo/helpers/styles.js');
  reactHotLoader.register(ButtonSubmit, 'ButtonSubmit', '/Users/rojas/Desktop/find-music-by-spotify-demo/helpers/styles.js');
  reactHotLoader.register(GridCard, 'GridCard', '/Users/rojas/Desktop/find-music-by-spotify-demo/helpers/styles.js');
  reactHotLoader.register(CardRow, 'CardRow', '/Users/rojas/Desktop/find-music-by-spotify-demo/helpers/styles.js');
  reactHotLoader.register(Description, 'Description', '/Users/rojas/Desktop/find-music-by-spotify-demo/helpers/styles.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./helpers/time.js":
false

})
//# sourceMappingURL=4.0a023a472e2ab37cabb6.hot-update.js.map