"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Skills.tsx":
/*!***********************************!*\
  !*** ./app/components/Skills.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_TiMinus_react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=TiMinus!=!react-icons/ti */ \"(app-pages-browser)/./node_modules/react-icons/ti/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BiNetworkChart_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BiNetworkChart!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Skills = (param)=>{\n    let { modeTheme } = param;\n    _s();\n    const [more, setMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const cards = [\n        {\n            id: 1,\n            title: \"App Development\",\n            description: \"I am really passionate about working on web application since I have done my training at Microverse an online school of global developer where I have work on many project with developer from all over the world.\"\n        },\n        {\n            id: 2,\n            title: \"Web Development\",\n            description: \"I like working on website since I have done my training at Microverse an online school of global developer where I have work on many project with developer from all over the world. I have learn to work with frameworks like React on the front end, Ruby on Rails on the backend\"\n        },\n        {\n            id: 3,\n            title: \"Networking\",\n            description: \"I finish my studies in network and telecommunication in 2021, and I was really happy about my achievment and help me to grow my computer science skills and learn that we can develop our capacity in computer science throught research on the internet.\"\n        },\n        {\n            id: 4,\n            title: \"Electricity\",\n            description: \"My studies in electricity was really interesting because that when I first like to working with my hand and learn to like technologies.\"\n        }\n    ];\n    const handleShowMore = (id)=>{\n        setMore(id === more ? null : id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-3   \".concat(modeTheme === \"light\" ? \"\" : \"bg-slate-800 text-slate-300\", \" py-10 sm:px-2 md:px-20 xl:px-40 2xl:px-80 flex flex-col gap-5\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center font-bold text-2xl text-rose-500\",\n                children: \"What We Do\"\n            }, void 0, false, {\n                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold text-center text-3xl  sm:text-5xl\",\n                children: [\n                    \"We are Optimist who Love to \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 37\n                    }, undefined),\n                    \" work\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-rose-500\",\n                        children: \"Together\"\n                    }, void 0, false, {\n                        fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-5 justify-between justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4\",\n                children: cards.map((card)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-50 flex flex-col gap-6 w-[16rem] \".concat(more !== card.id || more === null ? \"h-[20rem] transition-height duration-800\" : \"h-auto transition-height duration-700\", \" px-4 py-8 rounded-xl shadow-lg \").concat(modeTheme === \"dark\" ? \"text-blue-950 shadow-slate-700\" : \"shadow-slate-400\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-100 shadow-inner shadow-slate-300 w-fit p-3 rounded-lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiNetworkChart_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiNetworkChart, {\n                                    className: \"text-4xl text-slate-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-xl\",\n                                children: card.title\n                            }, void 0, false, {\n                                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: more !== card.id || more === null ? \"text-slate-500 text-view\" : \"text-slate-500 text-view-1 transition-all duration-500\",\n                                children: more !== card.id || more === null ? \"\".concat(card.description.slice(0, 56), \"...\") : card.description\n                            }, void 0, false, {\n                                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"btn shadow shadow-slate-400 rounded-lg w-fit p-3 flex items-center gap-2 font-bold hover:bg-blue-950 hover:text-white transition duration-700\",\n                                onClick: ()=>handleShowMore(card.id),\n                                children: [\n                                    more === card.id ? \"Read Less\" : \"Read More\",\n                                    more === card.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TiMinus_react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiMinus, {}, void 0, false, {\n                                        fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 37\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TiMinus_react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiPlus, {}, void 0, false, {\n                                        fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 51\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, card.id, true, {\n                        fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid justify-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn shadow-xl rounded-lg w-fit p-3 flex items-center gap-2 font-bold  \".concat(modeTheme === \"dark\" ? \"shadow-slate-700\" : \"shadow-slate-400\"),\n                    children: [\n                        \"Load More\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TiMinus_react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiPlus, {}, void 0, false, {\n                            fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chrismk34/Documents/Next js13/next_portfolio/app/components/Skills.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Skills, \"QcDDdCuoGj7MiG1LS6Kd1mlUaoE=\");\n_c = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NraWxscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0M7QUFDQTtBQUNDO0FBQ087QUFFaEQsTUFBTUssU0FBUztRQUFDLEVBQUVDLFNBQVMsRUFBTzs7SUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1RLFFBQVE7UUFDWjtZQUNFQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFDRTtRQUNKO1FBQ0E7WUFDRUYsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLGFBQ0U7UUFDSjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsT0FBTztZQUNQQyxhQUNFO1FBQ0o7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE9BQU87WUFDUEMsYUFDRTtRQUNKO0tBQ0Q7SUFFRCxNQUFNQyxpQkFBaUIsQ0FBQ0g7UUFDdEJGLFFBQVFFLE9BQU9ILE9BQU8sT0FBT0c7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0k7UUFDQ0MsV0FBVyxVQUVWLE9BRENULGNBQWMsVUFBVSxLQUFLLCtCQUM5Qjs7MEJBRUQsOERBQUNVO2dCQUFHRCxXQUFVOzBCQUErQzs7Ozs7OzBCQUk3RCw4REFBQ0U7Z0JBQUVGLFdBQVU7O29CQUE4QztrQ0FDN0IsOERBQUNHOzs7OztvQkFBSztrQ0FDbEMsOERBQUNDO3dCQUFLSixXQUFVO2tDQUFnQjs7Ozs7O29CQUFlOzs7Ozs7OzBCQUdqRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pOLE1BQU1XLEdBQUcsQ0FBQyxDQUFDQztvQkFDVixxQkFDRSw4REFBQ1A7d0JBRUNDLFdBQVcsNkNBS1RULE9BSkFDLFNBQVNjLEtBQUtYLEVBQUUsSUFBSUgsU0FBUyxPQUN6Qiw2Q0FDQSx5Q0FDTCxvQ0FJQSxPQUhDRCxjQUFjLFNBQ1YsbUNBQ0E7OzBDQUdOLDhEQUFDUTtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1gsZ0dBQWNBO29DQUFDVyxXQUFVOzs7Ozs7Ozs7OzswQ0FFNUIsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUFxQk0sS0FBS1YsS0FBSzs7Ozs7OzBDQUM3Qyw4REFBQ007Z0NBQ0NGLFdBQ0VSLFNBQVNjLEtBQUtYLEVBQUUsSUFBSUgsU0FBUyxPQUN6Qiw2QkFDQTswQ0FHTEEsU0FBU2MsS0FBS1gsRUFBRSxJQUFJSCxTQUFTLE9BQzFCLEdBQWlDLE9BQTlCYyxLQUFLVCxXQUFXLENBQUNXLEtBQUssQ0FBQyxHQUFHLEtBQUksU0FDakNGLEtBQUtULFdBQVc7Ozs7OzswQ0FFdEIsOERBQUNZO2dDQUNDQyxNQUFLO2dDQUNMVixXQUFVO2dDQUNWVyxTQUFTLElBQU1iLGVBQWVRLEtBQUtYLEVBQUU7O29DQUVwQ0gsU0FBU2MsS0FBS1gsRUFBRSxHQUFHLGNBQWM7b0NBQ2pDSCxTQUFTYyxLQUFLWCxFQUFFLGlCQUFHLDhEQUFDUCxrRkFBT0E7Ozs7a0VBQU0sOERBQUNELGlGQUFNQTs7Ozs7Ozs7Ozs7O3VCQWhDdENtQixLQUFLWCxFQUFFOzs7OztnQkFvQ2xCOzs7Ozs7MEJBR0YsOERBQUNJO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDUztvQkFDQ0MsTUFBSztvQkFDTFYsV0FBVyx5RUFFVixPQURDVCxjQUFjLFNBQVMscUJBQXFCOzt3QkFFL0M7c0NBRUMsOERBQUNKLGlGQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQjtHQXhHTUc7S0FBQUE7QUEwR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2tpbGxzLnRzeD9iMzdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRpUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgVGlNaW51cyB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgQmlOZXR3b3JrQ2hhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcblxuY29uc3QgU2tpbGxzID0gKHsgbW9kZVRoZW1lIH06IGFueSkgPT4ge1xuICBjb25zdCBbbW9yZSwgc2V0TW9yZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2FyZHMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogXCJBcHAgRGV2ZWxvcG1lbnRcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkkgYW0gcmVhbGx5IHBhc3Npb25hdGUgYWJvdXQgd29ya2luZyBvbiB3ZWIgYXBwbGljYXRpb24gc2luY2UgSSBoYXZlIGRvbmUgbXkgdHJhaW5pbmcgYXQgTWljcm92ZXJzZSBhbiBvbmxpbmUgc2Nob29sIG9mIGdsb2JhbCBkZXZlbG9wZXIgd2hlcmUgSSBoYXZlIHdvcmsgb24gbWFueSBwcm9qZWN0IHdpdGggZGV2ZWxvcGVyIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkkgbGlrZSB3b3JraW5nIG9uIHdlYnNpdGUgc2luY2UgSSBoYXZlIGRvbmUgbXkgdHJhaW5pbmcgYXQgTWljcm92ZXJzZSBhbiBvbmxpbmUgc2Nob29sIG9mIGdsb2JhbCBkZXZlbG9wZXIgd2hlcmUgSSBoYXZlIHdvcmsgb24gbWFueSBwcm9qZWN0IHdpdGggZGV2ZWxvcGVyIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkLiBJIGhhdmUgbGVhcm4gdG8gd29yayB3aXRoIGZyYW1ld29ya3MgbGlrZSBSZWFjdCBvbiB0aGUgZnJvbnQgZW5kLCBSdWJ5IG9uIFJhaWxzIG9uIHRoZSBiYWNrZW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHRpdGxlOiBcIk5ldHdvcmtpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkkgZmluaXNoIG15IHN0dWRpZXMgaW4gbmV0d29yayBhbmQgdGVsZWNvbW11bmljYXRpb24gaW4gMjAyMSwgYW5kIEkgd2FzIHJlYWxseSBoYXBweSBhYm91dCBteSBhY2hpZXZtZW50IGFuZCBoZWxwIG1lIHRvIGdyb3cgbXkgY29tcHV0ZXIgc2NpZW5jZSBza2lsbHMgYW5kIGxlYXJuIHRoYXQgd2UgY2FuIGRldmVsb3Agb3VyIGNhcGFjaXR5IGluIGNvbXB1dGVyIHNjaWVuY2UgdGhyb3VnaHQgcmVzZWFyY2ggb24gdGhlIGludGVybmV0LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICB0aXRsZTogXCJFbGVjdHJpY2l0eVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTXkgc3R1ZGllcyBpbiBlbGVjdHJpY2l0eSB3YXMgcmVhbGx5IGludGVyZXN0aW5nIGJlY2F1c2UgdGhhdCB3aGVuIEkgZmlyc3QgbGlrZSB0byB3b3JraW5nIHdpdGggbXkgaGFuZCBhbmQgbGVhcm4gdG8gbGlrZSB0ZWNobm9sb2dpZXMuXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVTaG93TW9yZSA9IChpZDogYW55KSA9PiB7XG4gICAgc2V0TW9yZShpZCA9PT0gbW9yZSA/IG51bGwgOiBpZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BweC0zICAgJHtcbiAgICAgICAgbW9kZVRoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0zMDBcIlxuICAgICAgfSBweS0xMCBzbTpweC0yIG1kOnB4LTIwIHhsOnB4LTQwIDJ4bDpweC04MCBmbGV4IGZsZXgtY29sIGdhcC01YH1cbiAgICA+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtMnhsIHRleHQtcm9zZS01MDBcIj5cbiAgICAgICAgV2hhdCBXZSBEb1xuICAgICAgPC9oMj5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtM3hsICBzbTp0ZXh0LTV4bFwiPlxuICAgICAgICBXZSBhcmUgT3B0aW1pc3Qgd2hvIExvdmUgdG8gPGJyIC8+IHdvcmtcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yb3NlLTUwMFwiPlRvZ2V0aGVyPC9zcGFuPi5cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01IGp1c3RpZnktYmV0d2VlbiBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtMyAyeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge2NhcmRzLm1hcCgoY2FyZCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17Y2FyZC5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctc2xhdGUtNTAgZmxleCBmbGV4LWNvbCBnYXAtNiB3LVsxNnJlbV0gJHtcbiAgICAgICAgICAgICAgICBtb3JlICE9PSBjYXJkLmlkIHx8IG1vcmUgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gXCJoLVsyMHJlbV0gdHJhbnNpdGlvbi1oZWlnaHQgZHVyYXRpb24tODAwXCJcbiAgICAgICAgICAgICAgICAgIDogXCJoLWF1dG8gdHJhbnNpdGlvbi1oZWlnaHQgZHVyYXRpb24tNzAwXCJcbiAgICAgICAgICAgICAgfSBweC00IHB5LTggcm91bmRlZC14bCBzaGFkb3ctbGcgJHtcbiAgICAgICAgICAgICAgICBtb2RlVGhlbWUgPT09IFwiZGFya1wiXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ibHVlLTk1MCBzaGFkb3ctc2xhdGUtNzAwXCJcbiAgICAgICAgICAgICAgICAgIDogXCJzaGFkb3ctc2xhdGUtNDAwXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHNoYWRvdy1pbm5lciBzaGFkb3ctc2xhdGUtMzAwIHctZml0IHAtMyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPEJpTmV0d29ya0NoYXJ0IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtc2xhdGUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPntjYXJkLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIG1vcmUgIT09IGNhcmQuaWQgfHwgbW9yZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1zbGF0ZS01MDAgdGV4dC12aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtc2xhdGUtNTAwIHRleHQtdmlldy0xIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21vcmUgIT09IGNhcmQuaWQgfHwgbW9yZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBgJHtjYXJkLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDU2KX0uLi5gXG4gICAgICAgICAgICAgICAgICA6IGNhcmQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBzaGFkb3cgc2hhZG93LXNsYXRlLTQwMCByb3VuZGVkLWxnIHctZml0IHAtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LWJvbGQgaG92ZXI6YmctYmx1ZS05NTAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd01vcmUoY2FyZC5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bW9yZSA9PT0gY2FyZC5pZCA/IFwiUmVhZCBMZXNzXCIgOiBcIlJlYWQgTW9yZVwifVxuICAgICAgICAgICAgICAgIHttb3JlID09PSBjYXJkLmlkID8gPFRpTWludXMgLz4gOiA8VGlQbHVzIC8+fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHNoYWRvdy14bCByb3VuZGVkLWxnIHctZml0IHAtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LWJvbGQgICR7XG4gICAgICAgICAgICBtb2RlVGhlbWUgPT09IFwiZGFya1wiID8gXCJzaGFkb3ctc2xhdGUtNzAwXCIgOiBcInNoYWRvdy1zbGF0ZS00MDBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgPFRpUGx1cyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUaVBsdXMiLCJUaU1pbnVzIiwiQmlOZXR3b3JrQ2hhcnQiLCJTa2lsbHMiLCJtb2RlVGhlbWUiLCJtb3JlIiwic2V0TW9yZSIsImNhcmRzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU2hvd01vcmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJiciIsInNwYW4iLCJtYXAiLCJjYXJkIiwiaDMiLCJzbGljZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Skills.tsx\n"));

/***/ })

});