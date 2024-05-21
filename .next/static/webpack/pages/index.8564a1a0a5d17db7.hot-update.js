"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNav: function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_mobile_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/mobile-nav */ \"./components/mobile-nav.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mode_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mode-toggle */ \"./components/mode-toggle.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/button */ \"./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_GrFormClose_react_icons_gr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=GrFormClose!=!react-icons/gr */ \"./node_modules/react-icons/gr/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _barrel_optimize_names_LogIn_LogOut_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=LogIn,LogOut,Menu!=!lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_LogIn_LogOut_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=LogIn,LogOut,Menu!=!lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var _barrel_optimize_names_LogIn_LogOut_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=LogIn,LogOut,Menu!=!lucide-react */ \"./node_modules/lucide-react/dist/esm/icons/log-in.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MainNav() {\n    _s();\n    const [showMobileMenu, setShowMobileMenu] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const renderRoleSpecificLinks = ()=>{\n        if (!session) return null;\n        switch(session.user.role){\n            case \"SYSTEM_ADMIN\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"http://admin.localhost:3000\",\n                        className: \"nav-link\",\n                        children: \"Admin Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false);\n            case \"DOCTOR\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"http://doctor.localhost:3000\",\n                        className: \"nav-link\",\n                        children: \"Doctor Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false);\n            case \"PATIENT\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: process.env.PATIENT_URL,\n                        className: \"nav-link\",\n                        children: \"Patient Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between gap-6 bg-white bg-opacity-30 px-10 py-3 backdrop-blur-lg dark:bg-black md:gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: \"/logo.png\",\n                                width: 32,\n                                height: 32,\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold sm:inline-block\",\n                                children: \"Gaia\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center space-x-2 md:hidden\",\n                        onClick: ()=>setShowMobileMenu(!showMobileMenu),\n                        children: showMobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrFormClose_react_icons_gr__WEBPACK_IMPORTED_MODULE_8__.GrFormClose, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 29\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogIn_LogOut_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 67\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden items-center space-x-5 md:flex\",\n                        children: [\n                            status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    renderRoleSpecificLinks(),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)(),\n                                        children: [\n                                            \"Sign Out\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogIn_LogOut_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                className: \"ml-2\",\n                                                size: 18\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signIn)(),\n                                children: [\n                                    \"Sign In\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogIn_LogOut_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        className: \"ml-2\",\n                                        size: 18\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mode_toggle__WEBPACK_IMPORTED_MODULE_5__.ModeToggle, {}, void 0, false, {\n                                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    showMobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_mobile_nav__WEBPACK_IMPORTED_MODULE_3__.MobileNav, {\n                        session: session\n                    }, void 0, false, {\n                        fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 28\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[1px] bg-black opacity-50 dark:bg-[#F8515E]\"\n            }, void 0, false, {\n                fileName: \"/Users/saransh/Documents/gaia-web/components/navbar.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainNav, \"Ef6U1Dd88BrRy/gpFng/0PhC/Wg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNxQjtBQUNuQjtBQUNZO0FBQ047QUFDUTtBQUNpQjtBQUNYO0FBRTVDLFNBQVNhOztJQUNkLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsMkNBQWMsQ0FBVTtJQUNwRSxNQUFNLEVBQUVpQixNQUFNQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHViwyREFBVUE7SUFFNUMsTUFBTVcsMEJBQTBCO1FBQzlCLElBQUksQ0FBQ0YsU0FBUyxPQUFPO1FBRXJCLE9BQVFBLFFBQVFHLElBQUksQ0FBQ0MsSUFBSTtZQUN2QixLQUFLO2dCQUNILHFCQUNFOzhCQUNFLDRFQUFDckIsa0RBQUlBO3dCQUFDc0IsTUFBTUMsNkJBQWlDO3dCQUFFRyxXQUFVO2tDQUFXOzs7Ozs7O1lBTTFFLEtBQUs7Z0JBQ0gscUJBQ0U7OEJBQ0UsNEVBQUMxQixrREFBSUE7d0JBQ0hzQixNQUFNQyw4QkFBa0M7d0JBQ3hDRyxXQUFVO2tDQUNYOzs7Ozs7O1lBS1AsS0FBSztnQkFDSCxxQkFDRTs4QkFDRSw0RUFBQzFCLGtEQUFJQTt3QkFBQ3NCLE1BQU1DLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0ksV0FBVzt3QkFBRUYsV0FBVTtrQ0FBVzs7Ozs7OztZQU1oRTtnQkFDRSxPQUFPO1FBQ1g7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0c7Z0JBQUlILFdBQVU7O2tDQUNiLDhEQUFDMUIsa0RBQUlBO3dCQUFDc0IsTUFBSzt3QkFBSUksV0FBVTs7MENBQ3ZCLDhEQUFDeEIsbURBQUtBO2dDQUFDNEIsS0FBSTtnQ0FBWUMsT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsS0FBSTs7Ozs7OzBDQUNsRCw4REFBQ0M7Z0NBQUtSLFdBQVU7MENBQTRCOzs7Ozs7Ozs7Ozs7a0NBRzlDLDhEQUFDUzt3QkFDQ1QsV0FBVTt3QkFDVlUsU0FBUyxJQUFNdEIsa0JBQWtCLENBQUNEO2tDQUVqQ0EsK0JBQWlCLDhEQUFDUiwwRkFBV0E7NEJBQUNxQixXQUFVOzs7OztpREFBZSw4REFBQ2YsNkZBQUlBOzs7Ozs7Ozs7O2tDQUcvRCw4REFBQ2tCO3dCQUFJSCxXQUFVOzs0QkFDWlIsV0FBVyxnQ0FDVjs7b0NBQ0dDO2tEQUNELDhEQUFDZiw4Q0FBTUE7d0NBQUNnQyxTQUFTLElBQU03Qix3REFBT0E7OzRDQUFJOzBEQUVoQyw4REFBQ0csOEZBQU1BO2dEQUFDZ0IsV0FBVTtnREFBT1csTUFBTTs7Ozs7Ozs7Ozs7Ozs2REFJbkMsOERBQUNqQyw4Q0FBTUE7Z0NBQUNnQyxTQUFTLElBQU05Qix1REFBTUE7O29DQUFJO2tEQUUvQiw4REFBQ0csOEZBQUtBO3dDQUFDaUIsV0FBVTt3Q0FBT1csTUFBTTs7Ozs7Ozs7Ozs7OzBDQUdsQyw4REFBQ2xDLG9EQUFVQTs7Ozs7Ozs7Ozs7b0JBR1pVLGdDQUFrQiw4REFBQ1osNERBQVNBO3dCQUFDZ0IsU0FBU0E7Ozs7Ozs7Ozs7OzswQkFFekMsOERBQUNZO2dCQUFJSCxXQUFVOzs7Ozs7OztBQUdyQjtHQWhGZ0JkOztRQUVvQkosdURBQVVBOzs7S0FGOUJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLnRzeD83ZjBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgTW9iaWxlTmF2IH0gZnJvbSBcImNvbXBvbmVudHMvbW9iaWxlLW5hdlwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBNb2RlVG9nZ2xlIH0gZnJvbSBcIi4vbW9kZS10b2dnbGVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgR3JGb3JtQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ3JcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IExvZ0luLCBMb2dPdXQsIE1lbnUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluTmF2KCkge1xuICBjb25zdCBbc2hvd01vYmlsZU1lbnUsIHNldFNob3dNb2JpbGVNZW51XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCByZW5kZXJSb2xlU3BlY2lmaWNMaW5rcyA9ICgpID0+IHtcbiAgICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsO1xuXG4gICAgc3dpdGNoIChzZXNzaW9uLnVzZXIucm9sZSkge1xuICAgICAgY2FzZSBcIlNZU1RFTV9BRE1JTlwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BRE1JTl9VUkx9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgIEFkbWluIERhc2hib2FyZFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgey8qIEFkZCBtb3JlIGFkbWluLXNwZWNpZmljIGxpbmtzIGhlcmUgKi99XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiRE9DVE9SXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPQ1RPUl9VUkx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9jdG9yIERhc2hib2FyZFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlBBVElFTlRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUEFUSUVOVF9VUkx9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgIFBhdGllbnQgRGFzaGJvYXJkXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7LyogQWRkIG1vcmUgcGF0aWVudC1zcGVjaWZpYyBsaW5rcyBoZXJlICovfVxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgYmctd2hpdGUgYmctb3BhY2l0eS0zMCBweC0xMCBweS0zIGJhY2tkcm9wLWJsdXItbGcgZGFyazpiZy1ibGFjayBtZDpnYXAtMTBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgd2lkdGg9ezMyfSBoZWlnaHQ9ezMyfSBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgc206aW5saW5lLWJsb2NrXCI+R2FpYTwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgbWQ6aGlkZGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudSghc2hvd01vYmlsZU1lbnUpfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dNb2JpbGVNZW51ID8gPEdyRm9ybUNsb3NlIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPiA6IDxNZW51IC8+fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBpdGVtcy1jZW50ZXIgc3BhY2UteC01IG1kOmZsZXhcIj5cbiAgICAgICAgICB7c3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtyZW5kZXJSb2xlU3BlY2lmaWNMaW5rcygpfVxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+XG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgICAgICAgICA8TG9nT3V0IGNsYXNzTmFtZT1cIm1sLTJcIiBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+XG4gICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgPExvZ0luIGNsYXNzTmFtZT1cIm1sLTJcIiBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPE1vZGVUb2dnbGUgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Nob3dNb2JpbGVNZW51ICYmIDxNb2JpbGVOYXYgc2Vzc2lvbj17c2Vzc2lvbn0gLz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMXB4XSBiZy1ibGFjayBvcGFjaXR5LTUwIGRhcms6YmctWyNGODUxNUVdXCI+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTW9iaWxlTmF2IiwiSW1hZ2UiLCJNb2RlVG9nZ2xlIiwiQnV0dG9uIiwiR3JGb3JtQ2xvc2UiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkxvZ0luIiwiTG9nT3V0IiwiTWVudSIsIk1haW5OYXYiLCJzaG93TW9iaWxlTWVudSIsInNldFNob3dNb2JpbGVNZW51IiwidXNlU3RhdGUiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInJlbmRlclJvbGVTcGVjaWZpY0xpbmtzIiwidXNlciIsInJvbGUiLCJocmVmIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FETUlOX1VSTCIsImNsYXNzTmFtZSIsIk5FWFRfUFVCTElDX0RPQ1RPUl9VUkwiLCJQQVRJRU5UX1VSTCIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.tsx\n"));

/***/ })

});