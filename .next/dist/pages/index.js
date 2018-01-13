'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _track = require('../services/track');

var _track2 = _interopRequireDefault(_track);

var _Track = require('../components/Track');

var _Track2 = _interopRequireDefault(_Track);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Loading = require('../components/shared/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Banner = require('../components/shared/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _Player = require('../components/Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/pages/index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.state = {
      searchQuery: '',
      tracks: [],
      loading: false,
      selectedTrack: '',
      songCounter: null
    };
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.setSelectedTrack = _this.setSelectedTrack.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'handleSearch',
    value: function handleSearch(event) {
      this.setState({
        searchQuery: event.target.value
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this2 = this;

      e.preventDefault();
      if (!this.state.searchQuery) {
        return null;
      }

      this.setState({
        loading: true
      });

      _track2.default.search(this.state.searchQuery).then(function (response) {
        _this2.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length
        });
      });
    }
  }, {
    key: 'setSelectedTrack',
    value: function setSelectedTrack(data) {
      if (!data) {
        return null;
      }
      this.setState({
        selectedTrack: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { className: 'container-react-spotify', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'React Spotify'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('link', { rel: 'icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement('div', { className: 'columns container-music', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { className: 'column is-8', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('div', { className: 'control', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleClick, className: 'container-search-bar', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('input', {
        className: 'input is-danger is-medium',
        type: 'text',
        placeholder: 'Busca tu canci\xF3n favorita',
        onChange: this.handleSearch,
        'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }))))), _react2.default.createElement('div', { className: 'column container-button', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('a', { onClick: this.handleClick, className: 'button is-danger is-medium', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Buscar'))), this.state.songCounter > 0 && _react2.default.createElement('div', { className: 'notification is-danger', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('p', { className: 'is-size-4 results', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Resultados: ', this.state.songCounter)), this.state.songCounter === 0 && _react2.default.createElement('section', { className: 'hero is-danger is-fullheight', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('div', { className: 'hero-body', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '\xA1Ups!'), _react2.default.createElement('h2', { className: 'subtitle', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'No se encontraron resultados con ', _react2.default.createElement('strong', {
        'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, this.state.searchQuery))))), _react2.default.createElement('div', { className: 'reproductor', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_Player2.default, { selectedTrack: this.state.selectedTrack, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), this.state.loading ? _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }) : _react2.default.createElement('div', { className: 'columns is-multiline', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, this.state.tracks.map(function (track) {
        return _react2.default.createElement('div', { className: 'column scale is-3', key: track.id, 'data-jsx': 2361373708,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react2.default.createElement(_Track2.default, (0, _extends3.default)({ onClick: _this3.setSelectedTrack }, track, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        })));
      })), _react2.default.createElement(_style2.default, {
        styleId: 2361373708,
        css: '.container-music[data-jsx="2361373708"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px;box-shadow:0 0 10px 5px #ccc;margin-bottom:30px;height:30vh;width:100vw;background-attachment:fixed;background:linear-gradient(to right, #F44336, #EF9A9A)}.image-logo[data-jsx="2361373708"]{background-image:url(\'https://image.ibb.co/mcfhvG/logo.png\');height:20vh;background-repeat:no-repeat}.container-search-bar[data-jsx="2361373708"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.container-button[data-jsx="2361373708"]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.reproductor[data-jsx="2361373708"]{position:fixed;bottom:0;z-index:999;width:100%}.input[data-jsx="2361373708"]{width:70%}.columns.is-multiline[data-jsx="2361373708"]{margin-bottom:100px}.is-selected[data-jsx="2361373708"]{background-color:red}.scale[data-jsx="2361373708"]{-webkit-transition:.3s;transition:.3s}.scale[data-jsx="2361373708"]:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.results[data-jsx="2361373708"]{-webkit-text-align:center;text-align:center}@media(max-width:800px){.container-music[data-jsx="2361373708"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:30vh}.input[data-jsx="2361373708"]{width:100%}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIb0IsQUFHMEIsQUFDZ0QsQUFDaEQsQUFDYyxBQUNaLEFBQ0wsQUFDVSxBQUNDLEFBQ04sQUFDTSxBQUNILEFBRU0sQUFDWCxXQVJRLENBUUssSUFUVyxLQUVOLENBQ0MsSUFIOEIsYUFBd0IsQ0FJNUQsTUFFRyxLQU5vRSxXQUhYLGFBQXlDLEdBRGxGLEFBRU0sQUFPbkIsR0FHbUIsYUFBYSxVQVgwRSxLQUVyRixrRUFIa0IsSUFFVCxRQUNFLEVBSGlELDhCQUFnQyxvQkFBeUIsYUFBeUIsYUFBeUMsNkJBQW9FLHdEQUFXIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWFubHVpc3JvamFzbGVvbi9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFja1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvdHJhY2snO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYW5uZXInO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgdHJhY2tzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRUcmFjazogJycsXG4gICAgICBzb25nQ291bnRlcjogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRUcmFjayA9IHRoaXMuc2V0U2VsZWN0ZWRUcmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hRdWVyeTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCF0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfSlcblxuICAgIHRyYWNrU2VydmljZS5zZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tzOiByZXNwb25zZS50cmFja3MuaXRlbXMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc29uZ0NvdW50ZXI6IHJlc3BvbnNlLnRyYWNrcy5pdGVtcy5sZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkVHJhY2soZGF0YSkge1xuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkVHJhY2s6IGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJlYWN0LXNwb3RpZnlcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlJlYWN0IFNwb3RpZnk8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7Lyo8QmFubmVyIC8+Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb250YWluZXItbXVzaWNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJjb250YWluZXItc2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWRhbmdlciBpcy1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2EgdHUgY2FuY2nDs24gZmF2b3JpdGFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250YWluZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLW1lZGl1bVwiPkJ1c2NhcjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gaXMtZGFuZ2VyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1zaXplLTQgcmVzdWx0c1wiPlJlc3VsdGFkb3M6IHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXIgPT09IDAgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtZGFuZ2VyIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+wqFVcHMhPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIE5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3MgY29uIDxzdHJvbmc+e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwcm9kdWN0b3JcIj5cbiAgICAgICAgICA8UGxheWVyIHNlbGVjdGVkVHJhY2s9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUcmFja30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZyAvPiA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50cmFja3MubWFwKCh0cmFjaykgPT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gc2NhbGUgaXMtM1wiIGtleT17dHJhY2suaWR9PlxuICAgICAgICAgICAgICAgIDxUcmFjayBvbkNsaWNrPXt0aGlzLnNldFNlbGVjdGVkVHJhY2t9IHsuLi50cmFja30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lci1tdXNpYyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggI2NjYztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjQ0MzM2LCAjRUY5QTlBKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdlLWxvZ28ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmliYi5jby9tY2ZodkcvbG9nby5wbmcnKTtcbiAgICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXItc2VhcmNoLWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1idXR0b24ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlcHJvZHVjdG9yIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbnMuaXMtbXVsdGlsaW5lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NhbGUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NhbGU6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyLW11c2ljIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;