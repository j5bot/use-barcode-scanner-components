/*! For license information please see 564.fa9df48c.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_use_barcode_scanner_components=globalThis.webpackChunk_use_barcode_scanner_components||[]).push([[564],{"./node_modules/@undecaf/barcode-detector-polyfill/dist/main.js":(__webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.a(__webpack_module__,(async(__webpack_handle_async_dependencies__,__webpack_async_result__)=>{try{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BarcodeDetectorPolyfill:()=>m,Orientation:()=>s,ZBAR_WASM_PKG_NAME:()=>h,ZBAR_WASM_REPOSITORY:()=>f,ZBAR_WASM_VERSION:()=>d,ZBarConfig:()=>o});var s,https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.11/dist/main.js"),__webpack_async_dependencies__=__webpack_handle_async_dependencies__([https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__]);function i(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}c((r=r.apply(e,t||[])).next())}))}https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__=(__webpack_async_dependencies__.then?(await __webpack_async_dependencies__)():__webpack_async_dependencies__)[0];class a{constructor(e,n=https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarConfigType.ZBAR_CFG_ENABLE,r=1){this.symbolType=e,this.configType=n,this.number=r,this.configSteps=[this]}static register(e,t,n=t.symbolType){return a.formatsToConfigs[e]=t,a.typesToFormats[n]=a.typesToFormats[n]||e,t}static formats(){return Object.keys(a.formatsToConfigs)}static toFormat(e){return a.typesToFormats[e]}static configure(e,t){var n;null===(n=a.formatsToConfigs[t])||void 0===n||n.configSteps.forEach((t=>e.setConfig(t.symbolType,t.configType,t.number)))}add(e){return this.configSteps.push(e),this}}a.formatsToConfigs={},a.typesToFormats={},a.register("codabar",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_CODABAR)),a.register("code_39",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_CODE39)),a.register("code_93",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_CODE93)),a.register("code_128",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_CODE128)),a.register("databar",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_DATABAR)),a.register("databar_exp",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_DATABAR_EXP)),a.register("ean_2",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN2)),a.register("ean_5",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN5)),a.register("ean_8",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN8)),a.register("ean_13",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)),a.register("ean_13+2",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN2)),a.register("ean_13+5",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN5)),a.register("isbn_10",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_ISBN10)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)),a.register("isbn_13",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_ISBN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)),a.register("isbn_13+2",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_ISBN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN2)),a.register("isbn_13+5",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_ISBN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN5)),a.register("itf",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_I25)),a.register("qr_code",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_QRCODE)),a.register("sq_code",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_SQCODE)),a.register("upc_a",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_UPCA)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)),a.register("upc_e",new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_UPCE)).add(new a(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_EAN13)),(e=s||(s={}))[e.UNKNOWN=-1]="UNKNOWN",e[e.UPRIGHT=0]="UPRIGHT",e[e.ROTATED_RIGHT=1]="ROTATED_RIGHT",e[e.UPSIDE_DOWN=2]="UPSIDE_DOWN",e[e.ROTATED_LEFT=3]="ROTATED_LEFT";class o{}const c=(()=>{try{return new OffscreenCanvas(1,1).getContext("2d")instanceof OffscreenCanvasRenderingContext2D}catch(e){return!1}})();class m{constructor(e={}){if(void 0!==e.formats){if(!Array.isArray(e.formats)||!e.formats.length)throw new TypeError(`Barcode formats should be a non-empty array of strings but are: ${JSON.stringify(e)}`);const t=e.formats.filter((e=>!a.formats().includes(e)));if(t.length)throw new TypeError(`Unsupported barcode format(s): ${t.join(", ")}`)}this.formats=e.formats||a.formats(),this.zbarConfig=e.zbar||new o}static getSupportedFormats(){return Promise.resolve(a.formats())}detect(e){const t=m.intrinsicDimensions(e);return 0===t.width||0===t.height?Promise.resolve([]):Promise.all([this.toImageData(e),this.getScanner()]).then((e=>{const t=e[0],r=e[1];return void 0!==this.zbarConfig.enableCache&&r.enableCache(this.zbarConfig.enableCache),(0,https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.scanRGBABuffer)(t.data,t.width,t.height,r)})).then((e=>e.map((e=>this.toBarcodeDetectorResult(e)))))}getScanner(){return new Promise(((n,s)=>i(this,void 0,void 0,(function*(){if(!this.scanner){const n=yield https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarScanner.create();this.formats.length>0&&(n.setConfig(https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarSymbolType.ZBAR_NONE,https_cdn_jsdelivr_net_npm_undecaf_zbar_wasm_0_9_11_dist_main_js__WEBPACK_IMPORTED_MODULE_0__.ZBarConfigType.ZBAR_CFG_ENABLE,0),this.formats.forEach((e=>a.configure(n,e)))),this.scanner=n}n(this.scanner)}))))}toImageData(e){const t=e=>{const t=m.intrinsicDimensions(e);this.canvas&&this.canvas.width===t.width&&this.canvas.height===t.height||(this.canvas=function(e,t){if(c)return new OffscreenCanvas(e,t);{const n=document.createElement("canvas");return n.width=e,n.height=t,n}}(t.width,t.height));const n=this.canvas,r=n.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,n.width,n.height)};if(e instanceof ImageData)return Promise.resolve(e);if(e instanceof Blob){const n=document.createElement("img");return n.src=URL.createObjectURL(e),n.decode().then((()=>t(n))).finally((()=>URL.revokeObjectURL(n.src)))}return e instanceof CanvasRenderingContext2D?Promise.resolve(e.getImageData(0,0,e.canvas.width,e.canvas.height)):Promise.resolve(t(e))}toBarcodeDetectorResult(e){const t={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};return e.points.forEach((e=>{t.minX=Math.min(t.minX,e.x),t.maxX=Math.max(t.maxX,e.x),t.minY=Math.min(t.minY,e.y),t.maxY=Math.max(t.maxY,e.y)})),{format:a.toFormat(e.type),rawValue:e.decode(this.zbarConfig.encoding),orientation:e.orientation,quality:e.quality,boundingBox:DOMRectReadOnly.fromRect({x:t.minX,y:t.minY,width:t.maxX-t.minX,height:t.maxY-t.minY}),cornerPoints:[{x:t.minX,y:t.minY},{x:t.maxX,y:t.minY},{x:t.maxX,y:t.maxY},{x:t.minX,y:t.maxY}]}}static intrinsicDimensions(e){return{width:Number(e.naturalWidth||e.videoWidth||e.width),height:Number(e.naturalHeight||e.videoHeight||e.height)}}}const h="@undecaf/zbar-wasm",d="0.9.11",f="https://cdn.jsdelivr.net/npm/@undecaf/zbar-wasm@0.9.11";__webpack_async_result__()}catch(e){__webpack_async_result__(e)}var e}))}}]);