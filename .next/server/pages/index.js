"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./constants/movie.ts
const baseUrl = "https://image.tmdb.org/t/p/original/" // export const baseUrl = 'https://image.tmdb.org/t/p/'
 // add in possible malco movie cards, times, prices etc..
;

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "@heroicons/react/20/solid"
const solid_namespaceObject = require("@heroicons/react/20/solid");
;// CONCATENATED MODULE: ./components/Banner.tsx






function Banner({ netflixOriginals  }) {
    const [movie, setMovie] = (0,external_react_.useState)(null);
    // This is generating a random movie...is there a better way to generate a random movie card????
    (0,external_react_.useEffect)(()=>{
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }, [
        netflixOriginals
    ]);
    console.log(movie);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-2 py-16 md:sp-y-4 lg:h-[65vh] lg:justify-end lg:pb-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 left-0 -z-10 h-[95vh] w-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `${baseUrl}${movie?.backdrop_path || movie?.poster_path}`,
                    alt: "bg image",
                    fill: true,
                    sizes: "100vw",
                    style: {
                        objectFit: "cover"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl lg:text-7xl md:text-7xl",
                children: movie?.title || movie?.name || movie?.original_name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "max-w-xs text-xs text-shadow:20px md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl",
                children: movie?.overview
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex space-x-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "bannerButton bg-white text-black",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaPlay, {
                                className: "h-4 w-4 text-black md:h-7 md:w-7"
                            }),
                            "Play"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "bannerButton bg-[gray]/70",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.InformationCircleIcon, {
                                className: "h-5 w-5 md:h8 md:w8"
                            }),
                            "More Info"
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.tsx




// this was a HELLLLL TO WRITE!!!!!!!!!!!
function Header() {
    const [isScrolled, setIsScrolled] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `${isScrolled && "[bg-#3050505]"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center space-x-2 md:space-x-10",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "hidden space-x-4 md:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "headerLink",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "headerLink",
                            children: "Movies"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "headerLink",
                            children: "New Releases"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "headerLink",
                            children: "New & Popular"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "headerLink",
                            children: "My List"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-4 text-sm font-light",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.MagnifyingGlassIcon, {
                        className: "hidden h-6 w-6 sm:inline"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline",
                        children: "Kids"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.BellIcon, {
                        className: "h-6 w-6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/account",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "",
                                alt: "",
                                className: "cursor-pointer rounded"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.UsersIcon, {
                                className: "h-6 w-6"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Thumbnail.tsx


function Thumbnail({ movie  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px} md:hover:scale-105",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            alt: "",
            src: `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`,
            className: "rounded-sm object-cover md:rounded",
            fill: true
        })
    });
}
/* harmony default export */ const components_Thumbnail = (Thumbnail);

;// CONCATENATED MODULE: ./components/Row.tsx




function Row({ title , movies  }) {
    const rowRef = (0,external_react_.useRef)(null);
    const [isMoved, setIsMoved] = (0,external_react_.useState)(false);
    const handleClick = (direction)=>{
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft , clientWidth  } = rowRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-40 space-y-0.5 md:space-y-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transistion duration-200 hover:text-white md:text-2xl",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "group relative md:-ml-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ChevronLeftIcon, {
                        className: `absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
        cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && `hidden`}`,
                        onClick: ()=>handleClick(`left`)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: rowRef,
                        className: "flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2",
                        children: movies.map((movie)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Thumbnail, {
                                movie: movie
                            }, movie.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ChevronRightIcon, {
                        className: `absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 
        cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`,
                        onClick: ()=>handleClick(`right`)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Row = (Row);

;// CONCATENATED MODULE: ./utils/requests.ts
const API_KEY = "50d8d0c2ea55ba1597f37c2f7b5c6a01";
const BASE_URL = "https://api.themoviedb.org/3";
const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
};
/* harmony default export */ const utils_requests = (requests);

;// CONCATENATED MODULE: ./pages/index.tsx






const Home = ({ netflixOriginals , actionMovies , comedyMovies , documentaries , horrorMovies , romanceMovies , topRated , trendingNow  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative h-screen bg-gradient-to-b lg:h-[140vh]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home - Malco"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "relative pl-4 pb-24 lg:space-y-24 lg:pl-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Banner, {
                        netflixOriginals: netflixOriginals
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "md:space-y-24 lg:pl-16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "Trending",
                                movies: trendingNow
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "Top Rated",
                                movies: topRated
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "Action",
                                movies: actionMovies
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "Comedies",
                                movies: comedyMovies
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "Horror",
                                movies: horrorMovies
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "Romance",
                                movies: romanceMovies
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Row, {
                                title: "DocuSeries",
                                movies: documentaries
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);
// missing prettier.config.js??
const getServerSideProps = async ()=>{
    const [netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries] = await Promise.all([
        fetch(utils_requests.fetchNetflixOriginals).then((res)=>res.json()),
        fetch(utils_requests.fetchTrending).then((res)=>res.json()),
        fetch(utils_requests.fetchTopRated).then((res)=>res.json()),
        fetch(utils_requests.fetchActionMovies).then((res)=>res.json()),
        fetch(utils_requests.fetchComedyMovies).then((res)=>res.json()),
        fetch(utils_requests.fetchHorrorMovies).then((res)=>res.json()),
        fetch(utils_requests.fetchRomanceMovies).then((res)=>res.json()),
        fetch(utils_requests.fetchDocumentaries).then((res)=>res.json())
    ]);
    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results
        }
    };
};


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61], () => (__webpack_exec__(3880)));
module.exports = __webpack_exports__;

})();