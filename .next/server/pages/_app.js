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

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyB191pvErFoUq6t5DZLBSY7GkZVjoqeIus\",\n    authDomain: \"netflix-re-build.firebaseapp.com\",\n    projectId: \"netflix-re-build\",\n    storageBucket: \"netflix-re-build.appspot.com\",\n    messagingSenderId: \"771023614999\",\n    appId: \"1:771023614999:web:6f46b8ad61c2ca54c75852\",\n    measurementId: \"G-4N6581VS9E\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ1Y7QUFFdkMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNLENBQUNYLHFEQUFPQSxHQUFHWSxNQUFNLEdBQUdkLDJEQUFhQSxDQUFDSyxrQkFBa0JKLG9EQUFNQSxFQUFFO0FBQ3hFLE1BQU1jLEtBQUtaLGdFQUFZQTtBQUN2QixNQUFNYSxPQUFPWixzREFBT0E7QUFFcEIsaUVBQWVTLEdBQUdBLEVBQUE7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlLnRzPzkyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcblxyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QjE5MXB2RXJGb1VxNnQ1RFpMQlNZN0drWlZqb3FlSXVzXCIsXHJcbiAgYXV0aERvbWFpbjogXCJuZXRmbGl4LXJlLWJ1aWxkLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJuZXRmbGl4LXJlLWJ1aWxkXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXRmbGl4LXJlLWJ1aWxkLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzcxMDIzNjE0OTk5XCIsXHJcbiAgYXBwSWQ6IFwiMTo3NzEwMjM2MTQ5OTk6d2ViOjZmNDZiOGFkNjFjMmNhNTRjNzU4NTJcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctNE42NTgxVlM5RVwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpXHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFxyXG5leHBvcnQgeyBhdXRoLCBkYiB9Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHAiLCJnZXRBcHBzIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImxlbmd0aCIsImRiIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    //persisting thr user\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        }), [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(user);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user,\n            signUp,\n            signIn,\n            loading,\n            logout,\n            error\n        }), [\n        user,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hogs2\\\\OneDrive\\\\Desktop\\\\Projects\\\\builds\\\\malco-clone\\\\hooks\\\\useAuth.tsx\",\n        lineNumber: 128,\n        columnNumber: 12\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvb2tzL3VzZUF1dGgudHN4P2ZiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCdcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gICAgc2lnbk91dCxcclxuICAgIFVzZXIsXHJcbiAgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG4gIFxyXG4gIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuICBpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbiAgaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5cclxuXHJcbiAgaW50ZXJmYWNlIElBdXRoIHtcclxuICAgIHVzZXI6IFVzZXIgfCBudWxsXHJcbiAgICBzaWduVXA6IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XHJcbiAgICBzaWduSW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XHJcbiAgICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD5cclxuICAgIGVycm9yOiBzdHJpbmcgfCBudWxsXHJcbiAgICBsb2FkaW5nOiBib29sZWFuXHJcbiAgfVxyXG5cclxuICBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUF1dGg+KHtcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzaWduVXA6IGFzeW5jICgpID0+IHt9LFxyXG4gICAgc2lnbkluOiBhc3luYyAoKSA9PiB7fSxcclxuICAgIGxvZ291dDogYXN5bmMgKCkgPT4ge30sXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gIH0pXHJcbiAgXHJcbiAgaW50ZXJmYWNlIEF1dGhQcm92aWRlclByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHtjaGlsZHJlbn06IEF1dGhQcm92aWRlclByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2luaXRpYWxMb2FkaW5nLCBzZXRJbml0aWFsTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuLy9wZXJzaXN0aW5nIHRociB1c2VyXHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICAgKCkgPT5cclxuICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgIC8vIExvZ2dlZCBpbi4uLlxyXG4gICAgICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIE5vdCBsb2dnZWQgaW4uLi5cclxuICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgc2V0SW5pdGlhbExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBbYXV0aF1cclxuICAgICAgKVxyXG4gICAgXHJcbiAgICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcblxyXG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gIFxyXG5cclxuY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcblxyXG4gICAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICAgICAgKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFVzZXIodXNlckNyZWRlbnRpYWwudXNlcilcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKSAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG1lbW9lZFZhbHVlID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgIHVzZXIsIFxyXG4gICAgICAgIHNpZ25VcCwgXHJcbiAgICAgICAgc2lnbkluLCBcclxuICAgICAgICBsb2FkaW5nLCBcclxuICAgICAgICBsb2dvdXQsIFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgfSksIFxyXG4gICAgW3VzZXIsIGxvYWRpbmddXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWVtb2VkVmFsdWV9PlxyXG4gICAgICAgIHshaW5pdGlhbExvYWRpbmcgJiYgY2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGggKCkge1xyXG4gICAgIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KSAgICAgIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzaWduVXAiLCJzaWduSW4iLCJsb2dvdXQiLCJlcnJvciIsImxvYWRpbmciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldExvYWRpbmciLCJzZXRVc2VyIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJpbml0aWFsTG9hZGluZyIsInNldEluaXRpYWxMb2FkaW5nIiwicHVzaCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJjYXRjaCIsImFsZXJ0IiwibWVzc2FnZSIsImZpbmFsbHkiLCJtZW1vZWRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(//HOC\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hogs2\\\\OneDrive\\\\Desktop\\\\Projects\\\\builds\\\\malco-clone\\\\pages\\\\_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hogs2\\\\OneDrive\\\\Desktop\\\\Projects\\\\builds\\\\malco-clone\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVpQjtBQUUvQyxTQUFTQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDakQsT0FFRSxLQUFLO2tCQUNQLDhEQUFDSCx3REFBWUE7a0JBRWYsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHeEI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9ob29rcy91c2VBdXRoJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG5cbiAgICAvL0hPQ1xuICA8QXV0aFByb3ZpZGVyPlxuXG48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

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