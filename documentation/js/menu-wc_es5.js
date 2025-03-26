'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">backend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' : 'id="xs-controllers-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"' : 'id="xs-injectables-links-module-AppModule-0d4455101e70d34840573d2998da95ad206e7529c6c0f17e23695b68ce49aed64609a4abcaad95df84f8f4e16982b4dfa3871e752e1935a9864fc0e04dfcea6e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PostAllService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostAllService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthorModule.html\" data-type=\"entity-link\" >AuthorModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' : 'data-bs-target="#xs-controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' : 'id="xs-controllers-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthorController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthorController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' : 'data-bs-target="#xs-injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"' : 'id="xs-injectables-links-module-AuthorModule-52fcfeb81a7366c1cf2bbc7db0429367afda01359efa64873eafe737eaf87345c0c3f62a8e06f33f1702a48e602eed717bfb300e3037fcb6b778a1628b7f3ce7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthorService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthorService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PostAllModule.html\" data-type=\"entity-link\" >PostAllModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"' : 'data-bs-target="#xs-injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"' : 'id="xs-injectables-links-module-PostAllModule-52a29eeaec979e8b8a9f52ef74e422672d88d12ac1eadedbab72068a4317f74ec9b7888fd50d6ad2d364bb7bb6ca097e87ad8104b616d9e9fa32927a713fbba3"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PostAllService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostAllService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PostModule.html\" data-type=\"entity-link\" >PostModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' : 'data-bs-target="#xs-controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' : 'id="xs-controllers-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/PostController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' : 'data-bs-target="#xs-injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"' : 'id="xs-injectables-links-module-PostModule-217021b92df86e5d7f02afc138320cbb770c12964d7628a2d7567871274053cc7e0a4525441be7d228b0d614be1b7d3b1524eac8e166fd782dadc68f8f69acda"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PostService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/allPosts.html\" data-type=\"entity-link\" >allPosts</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Author.html\" data-type=\"entity-link\" >Author</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateAuthorDto.html\" data-type=\"entity-link\" >CreateAuthorDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePostDto.html\" data-type=\"entity-link\" >CreatePostDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Post.html\" data-type=\"entity-link\" >Post</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/postAuthorDto.html\" data-type=\"entity-link\" >postAuthorDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateAuthorDto.html\" data-type=\"entity-link\" >UpdateAuthorDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePostDto.html\" data-type=\"entity-link\" >UpdatePostDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));