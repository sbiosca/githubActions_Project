/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 147:
/***/ ((module) => {

    "use strict";
    module.exports = require("fs");
    
    /***/ }),
    
    /***/ 17:
    /***/ ((module) => {
    
    "use strict";
    module.exports = require("path");
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __nccwpck_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		var threw = true;
    /******/ 		try {
    /******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
    /******/ 			threw = false;
    /******/ 		} finally {
    /******/ 			if(threw) delete __webpack_module_cache__[moduleId];
    /******/ 		}
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat */
    /******/ 	
    /******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
    /******/ 	
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
    const path = __nccwpck_require__(17);
    const fs = __nccwpck_require__(147);
    
    const readme = path.resolve('./README.md')
    const resultado = process.env.resultado;
    let URL = resultado == 'success' ? 'https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg' : 'https://img.shields.io/badge/test-failure-red';
    URL = "![Cypress.io](" + URL + ")"
    
    fs.readFile(readme, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
        data += URL;
        fs.writeFile(readme, data, function (err) {
            if (err) throw err;
            console.log('Archivo actualizado');
        })
    });
    
    })();
    
    module.exports = __webpack_exports__;
    /******/ })()
    ;