/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/theme-provider.tsx":
/*!***************************************!*\
  !*** ./components/theme-provider.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ThemeProvider({ children, ...props }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/saransh/Documents/gaia-web/components/theme-provider.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNtQztBQUczRCxTQUFTQyxjQUFjLEVBQUVFLFFBQVEsRUFBRSxHQUFHQyxPQUEyQjtJQUN0RSxxQkFBTyw4REFBQ0Ysc0RBQWtCQTtRQUFFLEdBQUdFLEtBQUs7a0JBQUdEOzs7Ozs7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWlhLy4vY29tcG9uZW50cy90aGVtZS1wcm92aWRlci50c3g/OTI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgTmV4dFRoZW1lc1Byb3ZpZGVyIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyB0eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyB9IGZyb20gXCJuZXh0LXRoZW1lcy9kaXN0L3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IFRoZW1lUHJvdmlkZXJQcm9wcykge1xuICByZXR1cm4gPE5leHRUaGVtZXNQcm92aWRlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L05leHRUaGVtZXNQcm92aWRlcj47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZVByb3ZpZGVyIiwiTmV4dFRoZW1lc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-provider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/api */ \"./utils/api.ts\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_theme_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/theme-provider */ \"./components/theme-provider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_api__WEBPACK_IMPORTED_MODULE_2__]);\nutils_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst MyApp = ({ Component, pageProps: { session, ...pageProps } })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_theme_provider__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            attribute: \"class\",\n            defaultTheme: \"system\",\n            enableSystem: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/saransh/Documents/gaia-web/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/saransh/Documents/gaia-web/pages/_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/saransh/Documents/gaia-web/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils_api__WEBPACK_IMPORTED_MODULE_2__.api.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBRWxCO0FBQ0o7QUFDOEI7QUFFMUQsTUFBTUcsUUFBOEMsQ0FBQyxFQUNuREMsU0FBUyxFQUNUQyxXQUFXLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxXQUFXLEVBQ3JDO0lBQ0MscUJBQ0UsOERBQUNMLDREQUFlQTtRQUFDTSxTQUFTQTtrQkFDeEIsNEVBQUNKLG9FQUFhQTtZQUFDSyxXQUFVO1lBQVFDLGNBQWE7WUFBU0MsWUFBWTtzQkFDakUsNEVBQUNMO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUosMENBQUdBLENBQUNTLFFBQVEsQ0FBQ1AsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhaWEvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHR5cGUgQXBwVHlwZSB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcInV0aWxzL2FwaVwiO1xuaW1wb3J0IFwic3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcImNvbXBvbmVudHMvdGhlbWUtcHJvdmlkZXJcIjtcblxuY29uc3QgTXlBcHA6IEFwcFR5cGU8eyBzZXNzaW9uOiBTZXNzaW9uIHwgbnVsbCB9PiA9ICh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiIGRlZmF1bHRUaGVtZT1cInN5c3RlbVwiIGVuYWJsZVN5c3RlbT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpLndpdGhUUlBDKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJhcGkiLCJUaGVtZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIiwid2l0aFRSUEMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/api.ts":
/*!**********************!*\
  !*** ./utils/api.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superjson */ \"superjson\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__, superjson__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__, superjson__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\n * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which\n * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.\n *\n * We also create a few inference helpers for input and output types.\n */ \n\n\nconst getBaseUrl = ()=>{\n    if (false) {} // browser should use relative url\n    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url\n    return `http://app.kindhealth.tech:${process.env.PORT ?? 8080}`; // dev SSR should use localhost\n// FIXME: better app location \n};\n/** A set of type-safe react-query hooks for your tRPC API. */ const api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            queryClientConfig: {\n                defaultOptions: {\n                    queries: {\n                        refetchOnWindowFocus: false\n                    }\n                }\n            },\n            /**\n       * Transformer used for data de-serialization from the server.\n       *\n       * @see https://trpc.io/docs/data-transformers\n       */ transformer: superjson__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            /**\n       * Links used to determine request flow from client to server.\n       *\n       * @see https://trpc.io/docs/links\n       */ links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({\n                    enabled: (opts)=> true || 0\n                }),\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: `${getBaseUrl()}/api/trpc`\n                })\n            ]\n        };\n    },\n    /**\n   * Whether tRPC should await queries when server rendering pages.\n   *\n   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false\n   */ ssr: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztDQUtDLEdBQ3dEO0FBQ2I7QUFFVjtBQUdsQyxNQUFNSSxhQUFhO0lBQ2pCLElBQUksS0FBNkIsRUFBRSxFQUFVLENBQUMsa0NBQWtDO0lBQ2hGLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsRUFBRSw0QkFBNEI7SUFDcEcsT0FBTyxDQUFDLDJCQUEyQixFQUFFRixRQUFRQyxHQUFHLENBQUNFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSwrQkFBK0I7QUFDaEcsOEJBQThCO0FBQ2hDO0FBRUEsNERBQTRELEdBQ3JELE1BQU1DLE1BQU1QLDBEQUFjQSxDQUFZO0lBQzNDUTtRQUNFLE9BQU87WUFDTEMsbUJBQW1CO2dCQUNqQkMsZ0JBQWdCO29CQUNkQyxTQUFTO3dCQUNQQyxzQkFBc0I7b0JBQ3hCO2dCQUNGO1lBQ0Y7WUFDQTs7OztPQUlDLEdBQ0RDLGFBQWFaLGlEQUFTQTtZQUV0Qjs7OztPQUlDLEdBQ0RhLE9BQU87Z0JBQ0xmLHdEQUFVQSxDQUFDO29CQUNUZ0IsU0FBUyxDQUFDQyxPQUNSYixLQUFzQyxJQUNyQ2EsQ0FBeURHO2dCQUM5RDtnQkFDQXJCLDJEQUFhQSxDQUFDO29CQUNac0IsS0FBSyxDQUFDLEVBQUVsQixhQUFhLFNBQVMsQ0FBQztnQkFDakM7YUFDRDtRQUNIO0lBQ0Y7SUFDQTs7OztHQUlDLEdBQ0RtQixLQUFLO0FBQ1AsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhaWEvLi91dGlscy9hcGkudHM/NmVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgdGhlIGNsaWVudC1zaWRlIGVudHJ5cG9pbnQgZm9yIHlvdXIgdFJQQyBBUEkuIEl0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgYXBpYCBvYmplY3Qgd2hpY2hcbiAqIGNvbnRhaW5zIHRoZSBOZXh0LmpzIEFwcC13cmFwcGVyLCBhcyB3ZWxsIGFzIHlvdXIgdHlwZS1zYWZlIFJlYWN0IFF1ZXJ5IGhvb2tzLlxuICpcbiAqIFdlIGFsc28gY3JlYXRlIGEgZmV3IGluZmVyZW5jZSBoZWxwZXJzIGZvciBpbnB1dCBhbmQgb3V0cHV0IHR5cGVzLlxuICovXG5pbXBvcnQgeyBodHRwQmF0Y2hMaW5rLCBsb2dnZXJMaW5rIH0gZnJvbSBcIkB0cnBjL2NsaWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlVFJQQ05leHQgfSBmcm9tIFwiQHRycGMvbmV4dFwiO1xuaW1wb3J0IHsgdHlwZSBpbmZlclJvdXRlcklucHV0cywgdHlwZSBpbmZlclJvdXRlck91dHB1dHMgfSBmcm9tIFwiQHRycGMvc2VydmVyXCI7XG5pbXBvcnQgc3VwZXJqc29uIGZyb20gXCJzdXBlcmpzb25cIjtcbmltcG9ydCB7IHR5cGUgQXBwUm91dGVyIH0gZnJvbSBcIn4vc2VydmVyL2FwaS9yb290XCI7XG5cbmNvbnN0IGdldEJhc2VVcmwgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gXCJcIjsgLy8gYnJvd3NlciBzaG91bGQgdXNlIHJlbGF0aXZlIHVybFxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkgcmV0dXJuIGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gOyAvLyBTU1Igc2hvdWxkIHVzZSB2ZXJjZWwgdXJsXG4gIHJldHVybiBgaHR0cDovL2FwcC5raW5kaGVhbHRoLnRlY2g6JHtwcm9jZXNzLmVudi5QT1JUID8/IDgwODB9YDsgLy8gZGV2IFNTUiBzaG91bGQgdXNlIGxvY2FsaG9zdFxuICAvLyBGSVhNRTogYmV0dGVyIGFwcCBsb2NhdGlvbiBcbn07XG5cbi8qKiBBIHNldCBvZiB0eXBlLXNhZmUgcmVhY3QtcXVlcnkgaG9va3MgZm9yIHlvdXIgdFJQQyBBUEkuICovXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlVFJQQ05leHQ8QXBwUm91dGVyPih7XG4gIGNvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlDbGllbnRDb25maWc6IHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zZm9ybWVyIHVzZWQgZm9yIGRhdGEgZGUtc2VyaWFsaXphdGlvbiBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICAgKlxuICAgICAgICogQHNlZSBodHRwczovL3RycGMuaW8vZG9jcy9kYXRhLXRyYW5zZm9ybWVyc1xuICAgICAgICovXG4gICAgICB0cmFuc2Zvcm1lcjogc3VwZXJqc29uLFxuXG4gICAgICAvKipcbiAgICAgICAqIExpbmtzIHVzZWQgdG8gZGV0ZXJtaW5lIHJlcXVlc3QgZmxvdyBmcm9tIGNsaWVudCB0byBzZXJ2ZXIuXG4gICAgICAgKlxuICAgICAgICogQHNlZSBodHRwczovL3RycGMuaW8vZG9jcy9saW5rc1xuICAgICAgICovXG4gICAgICBsaW5rczogW1xuICAgICAgICBsb2dnZXJMaW5rKHtcbiAgICAgICAgICBlbmFibGVkOiAob3B0cykgPT5cbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgfHxcbiAgICAgICAgICAgIChvcHRzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgb3B0cy5yZXN1bHQgaW5zdGFuY2VvZiBFcnJvciksXG4gICAgICAgIH0pLFxuICAgICAgICBodHRwQmF0Y2hMaW5rKHtcbiAgICAgICAgICB1cmw6IGAke2dldEJhc2VVcmwoKX0vYXBpL3RycGNgLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIFdoZXRoZXIgdFJQQyBzaG91bGQgYXdhaXQgcXVlcmllcyB3aGVuIHNlcnZlciByZW5kZXJpbmcgcGFnZXMuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly90cnBjLmlvL2RvY3MvbmV4dGpzI3Nzci1ib29sZWFuLWRlZmF1bHQtZmFsc2VcbiAgICovXG4gIHNzcjogZmFsc2UsXG59KTtcblxuLyoqXG4gKiBJbmZlcmVuY2UgaGVscGVyIGZvciBpbnB1dHMuXG4gKlxuICogQGV4YW1wbGUgdHlwZSBIZWxsb0lucHV0ID0gUm91dGVySW5wdXRzWydleGFtcGxlJ11bJ2hlbGxvJ11cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVySW5wdXRzID0gaW5mZXJSb3V0ZXJJbnB1dHM8QXBwUm91dGVyPjtcblxuLyoqXG4gKiBJbmZlcmVuY2UgaGVscGVyIGZvciBvdXRwdXRzLlxuICpcbiAqIEBleGFtcGxlIHR5cGUgSGVsbG9PdXRwdXQgPSBSb3V0ZXJPdXRwdXRzWydleGFtcGxlJ11bJ2hlbGxvJ11cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyT3V0cHV0cyA9IGluZmVyUm91dGVyT3V0cHV0czxBcHBSb3V0ZXI+O1xuIl0sIm5hbWVzIjpbImh0dHBCYXRjaExpbmsiLCJsb2dnZXJMaW5rIiwiY3JlYXRlVFJQQ05leHQiLCJzdXBlcmpzb24iLCJnZXRCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJQT1JUIiwiYXBpIiwiY29uZmlnIiwicXVlcnlDbGllbnRDb25maWciLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInRyYW5zZm9ybWVyIiwibGlua3MiLCJlbmFibGVkIiwib3B0cyIsImRpcmVjdGlvbiIsInJlc3VsdCIsIkVycm9yIiwidXJsIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/api.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/next");;

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("superjson");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();