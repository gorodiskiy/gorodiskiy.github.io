(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dester\Desktop\full-version\src\main.ts */"zUnb");


/***/ }),

/***/ "6eW9":
/*!**************************************************!*\
  !*** ./src/app/theme/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-config */ "K7hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/scroll-spy/scroll-spy.service */ "QpnW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-click-outside */ "Hicy");









function LayoutComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("clickOutside", function LayoutComponent_header_0_Template_header_clickOutside_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r3.openClass = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r5.openClass = ctx_r5.openClass === "open" ? "" : "open"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function LayoutComponent_header_0_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r6.changeLang($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "EN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMap"](ctx_r0.openClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r0.mobileHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", ctx_r0.themeConfig.themeType === "light" ? "assets/images/logo.png" : "assets/images/logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
} }
function LayoutComponent_header_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 32);
} }
function LayoutComponent_header_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_1_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 33);
} }
function LayoutComponent_header_1_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_1_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 34);
} }
function LayoutComponent_header_1_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_1_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 35);
} }
function LayoutComponent_header_1_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_1_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 36);
} }
function LayoutComponent_header_1_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_1_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 37);
} }
function LayoutComponent_header_1_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_1_i_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i", 38);
} }
function LayoutComponent_header_1_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function LayoutComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("resize", function LayoutComponent_header_1_Template_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r21.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "nav", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r23.collapsedCardToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r24.scrollTo("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](11, LayoutComponent_header_1_i_11_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](12, LayoutComponent_header_1_span_12_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r25.scrollTo("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, LayoutComponent_header_1_i_15_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, LayoutComponent_header_1_span_16_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r26.scrollTo("services"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, LayoutComponent_header_1_i_19_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, LayoutComponent_header_1_span_20_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r27.scrollTo("experience"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, LayoutComponent_header_1_i_23_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](24, LayoutComponent_header_1_span_24_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r28.scrollTo("works"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, LayoutComponent_header_1_i_27_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, LayoutComponent_header_1_span_28_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r29.scrollTo("blog"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](31, LayoutComponent_header_1_i_31_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](32, LayoutComponent_header_1_span_32_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_1_Template_li_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r30.scrollTo("contact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](35, LayoutComponent_header_1_i_35_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](36, LayoutComponent_header_1_span_36_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r1.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r1.horizontalNavClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", ctx_r1.desktopLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("@collapsedCard", ctx_r1.collapsedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](32, _c0, ctx_r1.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](34, _c0, ctx_r1.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](36, _c0, ctx_r1.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](38, _c0, ctx_r1.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](40, _c0, ctx_r1.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](42, _c0, ctx_r1.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](44, _c0, ctx_r1.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](46, _c0, ctx_r1.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](48, _c0, ctx_r1.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](50, _c0, ctx_r1.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](52, _c0, ctx_r1.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](54, _c0, ctx_r1.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](56, _c0, ctx_r1.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](58, _c0, ctx_r1.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.themeConfig.theme !== "collapsed");
} }
function LayoutComponent_header_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function LayoutComponent_header_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "header", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r40.scrollTo("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, LayoutComponent_header_2_span_9_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r42.scrollTo("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, LayoutComponent_header_2_span_13_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r43.scrollTo("services"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, LayoutComponent_header_2_span_17_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r44.scrollTo("experience"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, LayoutComponent_header_2_span_21_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r45.scrollTo("works"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, LayoutComponent_header_2_span_25_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r46.scrollTo("pricing"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](28, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, LayoutComponent_header_2_span_29_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r47.scrollTo("testimonials"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](32, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](33, LayoutComponent_header_2_span_33_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r48.scrollTo("blog"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](36, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, LayoutComponent_header_2_span_37_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_header_2_Template_li_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r49.scrollTo("contact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](40, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](41, LayoutComponent_header_2_span_41_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function LayoutComponent_header_2_Template_select_change_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r50.changeLang($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44, "UA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](46, "EN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("d-flex align-items-start flex-column ", ctx_r2.openClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r2.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("src", ctx_r2.desktopLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](33, _c0, ctx_r2.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](35, _c0, ctx_r2.currentSection === "home"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](37, _c0, ctx_r2.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](39, _c0, ctx_r2.currentSection === "about"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](41, _c0, ctx_r2.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](43, _c0, ctx_r2.currentSection === "services"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](45, _c0, ctx_r2.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](47, _c0, ctx_r2.currentSection === "experience"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](49, _c0, ctx_r2.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](51, _c0, ctx_r2.currentSection === "works"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](53, _c0, ctx_r2.currentSection === "pricing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](55, _c0, ctx_r2.currentSection === "pricing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](57, _c0, ctx_r2.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](59, _c0, ctx_r2.currentSection === "testimonials"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](61, _c0, ctx_r2.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](63, _c0, ctx_r2.currentSection === "blog"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](65, _c0, ctx_r2.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](67, _c0, ctx_r2.currentSection === "contact"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.themeConfig.theme !== "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("\u00A9 ", ctx_r2.yearNow, "");
} }
class LayoutComponent {
    constructor(scrollSpy, location) {
        this.scrollSpy = scrollSpy;
        this.location = location;
        this.openClass = '';
        this.contentClass = 'content';
        this.mobileHeaderClass = 'mobile-header-1';
        this.desktopHeaderClass = 'desktop-header-1';
        this.horizontalNavClass = 'navbar-dark';
        this.desktopLogo = 'assets/images/logo.png';
        this.collapsedCard = 'collapsed';
        this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].config;
        this.windowWidth = window.innerWidth;
        this.yearNow = new Date().getFullYear();
    }
    ngOnInit() {
        this.scrollSpy.count.subscribe((c) => {
            console.log(c, 'currentSection');
            this.currentSection = c;
        });
        document.querySelector('body').classList.add(this.themeConfig.themeType);
        switch (this.themeConfig.theme) {
            case 'vertical':
                this.mobileHeaderClass = 'mobile-header-1';
                this.desktopHeaderClass = 'desktop-header-1';
                switch (this.themeConfig.themeType) {
                    case 'light':
                        this.desktopLogo = 'assets/images/logo.png';
                        break;
                    default:
                        this.desktopLogo = 'assets/images/logo.png';
                }
                break;
            case 'collapsed':
                this.mobileHeaderClass = 'mobile-header-2';
                this.desktopHeaderClass = 'desktop-header-2';
                this.contentClass = 'content-2';
                switch (this.themeConfig.themeType) {
                    case 'light':
                        this.desktopLogo = 'assets/images/logo.png';
                        break;
                    default:
                        this.desktopLogo = 'assets/images/logo.png';
                }
                break;
            case 'horizontal':
                this.desktopHeaderClass = 'desktop-header-3 fixed-top';
                this.contentClass = 'content-3';
                switch (this.themeConfig.themeType) {
                    case 'light':
                        this.horizontalNavClass = 'navbar-light';
                        this.desktopLogo = 'assets/images/logo.png';
                        break;
                    default:
                        this.desktopLogo = 'assets/images/logo.png';
                }
                break;
        }
        this.mobileHeaderClass =
            this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
        this.desktopHeaderClass =
            this.desktopHeaderClass + ' ' + this.themeConfig.themeType;
        if (this.windowWidth > 991) {
            this.collapsedCard = 'false';
        }
        this.onResize(true);
    }
    onResize(e) {
        if (this.windowWidth > 991) {
            this.collapsedCard = 'false';
            this.openClass = '';
            console.log('width > 991');
        }
        else {
            this.collapsedCard = 'collapsed';
        }
    }
    scrollTo(section) {
        this.currentSection = section;
        const sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }
    collapsedCardToggle() {
        this.collapsedCard =
            this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    }
    changeLang(e) {
        console.log(e.value);
    }
    test() {
        _app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].config.themeType = 'dark';
        // this.themeConfig.themeType = 'dark';
        console.log(_app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].config.themeType, 'config');
    }
}
LayoutComponent.??fac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSpyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
LayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDropdownConfig"]])], decls: 7, vars: 7, consts: [[3, "class", "ngClass", "clickOutside", 4, "ngIf"], [3, "ngClass", "resize", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass", "resize"], ["href", "javascript:", "id", "return-to-top", 3, "click"], [1, "fas", "fa-arrow-up"], [3, "ngClass", "clickOutside"], [1, "container"], [1, "menu-icon", "d-inline-flex", "mr-4"], [3, "click"], [1, "site-logo"], ["routerLink", "/"], ["alt", "Bolby", 3, "src"], ["name", "", "id", "", 1, "select-lang", 3, "change"], ["value", "UA"], ["value", "EN"], [1, "navbar", "navbar-expand-lg", 3, "ngClass"], ["routerLink", "/", 1, "navbar-brand"], ["aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarNavDropdown", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto", "scrollspy"], [1, "nav-item", 3, "ngClass", "click"], ["href", "javascript:", 1, "nav-link", 3, "ngClass"], ["class", "icon-home", 4, "ngIf"], [4, "ngIf"], ["class", "icon-user-following", 4, "ngIf"], ["class", "icon-briefcase", 4, "ngIf"], ["class", "icon-graduation", 4, "ngIf"], ["class", "icon-layers", 4, "ngIf"], ["class", "icon-note", 4, "ngIf"], ["class", "icon-bubbles", 4, "ngIf"], [1, "icon-home"], [1, "icon-user-following"], [1, "icon-briefcase"], [1, "icon-graduation"], [1, "icon-layers"], [1, "icon-note"], [1, "icon-bubbles"], [3, "ngClass"], [1, "vertical-menu", "scrollspy"], [3, "ngClass", "click"], [1, "icon-credit-card"], [1, "icon-user-follow"], [1, "footer"], [1, "copyright"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, LayoutComponent_header_0_Template, 13, 5, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, LayoutComponent_header_1_Template, 37, 60, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, LayoutComponent_header_2_Template, 50, 69, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("resize", function LayoutComponent_Template_main_resize_3_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function LayoutComponent_Template_a_click_5_listener() { return ctx.scrollTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.themeConfig.theme !== "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.themeConfig.theme === "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.themeConfig.theme !== "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMap"](ctx.openClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx.contentClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbNavbar"]], styles: ["@media screen and (max-width: 992px) {\n  .desktop-header-1[_ngcontent-%COMP%]   .select-lang[_ngcontent-%COMP%], .desktop-header-1[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.mobile-header-1[_ngcontent-%COMP%]   .select-lang[_ngcontent-%COMP%] {\n  float: right;\n}\n.select-lang[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 16px;\n  background-color: transparent;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n}\n.select-lang[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUTs7SUFFSSxhQUFBO0VBQVY7QUFDRjtBQUlBO0VBQ0ksWUFBQTtBQUZKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7QUFHSTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtBQURSIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuZGVza3RvcC1oZWFkZXItMSB7XHJcbiAgICAgICAgLnNlbGVjdC1sYW5nLFxyXG4gICAgICAgIC5zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1vYmlsZS1oZWFkZXItMSAuc2VsZWN0LWxhbmcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2VsZWN0LWxhbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3B0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapsedCard', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')]),
            ]),
        ] } });


/***/ }),

/***/ "AaF/":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/ui-modal/ui-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: UiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModalComponent", function() { return UiModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function UiModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function UiModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];
const _c1 = function (a0) { return { "in": a0 }; };
const _c2 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
const _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];
class UiModalComponent {
    constructor() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = true;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() { }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
        document.querySelector('body').classList.add('modal-open');
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        document.querySelector('body').classList.remove('modal-open');
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
        }
    }
}
UiModalComponent.??fac = function UiModalComponent_Factory(t) { return new (t || UiModalComponent)(); };
UiModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UiModalComponent, selectors: [["app-ui-modal"]], inputs: { dialogClass: "dialogClass", hideHeader: "hideHeader", hideFooter: "hideFooter", containerClick: "containerClick" }, ngContentSelectors: _c3, decls: 7, vars: 10, consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]], template: function UiModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UiModalComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.dialogClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hideHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.hideFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdWktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBR0EsZ0NBQUE7QUFBSjtBQUNJO0VBQ0UsVUFBQTtBQUNOO0FBR0k7RUFJRSwwQkFBQTtBQUROO0FBR0k7RUFHRSw2QkFBQTtFQUlBLDZCQUFBO0FBRE47QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGSjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSiIsImZpbGUiOiJ1aS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgJi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJi5mYWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgICYuaW4ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1vZGFsLmZhZGUge1xyXG4gICAgJi5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B/bl":
/*!****************************************************************************!*\
  !*** ./src/app/components/sections/testimonials/testimonials.component.ts ***!
  \****************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");


class TestimonialsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestimonialsComponent.??fac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
TestimonialsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], inputs: { themeType: "themeType" }, decls: 61, vars: 14, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "testimonials-wrapper"], ["cellWidth", "100%", 3, "cellsToShow", "height", "loop", "autoplay", "dots", "arrows"], [1, "carousel-cell"], [1, "testimonial-item", "text-center", "mx-auto"], [1, "thumb", "mb-3", "mx-auto"], ["src", "assets/images/avatar-3.svg", "alt", "customer-name"], [1, "mt-3", "mb-0"], [1, "subtitle"], [1, "bg-white", "padding-30", "shadow-dark", "rounded", "triangle-top", "position-relative", "mt-4"], [1, "mb-0"], ["src", "assets/images/avatar-1.svg", "alt", "customer-name"], [1, "row"], [1, "col-md-3", "col-6"], [1, "client-item"], [1, "inner"], ["alt", "client-name", 3, "src"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Clients & Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Product designer at Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! \uD83D\uDC4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Product designer at Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! \uD83D\uDD25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cellsToShow", 1)("height", 350)("loop", true)("autoplay", true)("dots", true)("arrows", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-1-light.svg" : "assets/images/client-1.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-2-light.svg" : "assets/images/client-2.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-3-light.svg" : "assets/images/client-3.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-4-light.svg" : "assets/images/client-4.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-5-light.svg" : "assets/images/client-5.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-6-light.svg" : "assets/images/client-6.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-7-light.svg" : "assets/images/client-7.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.themeType === "dark" ? "assets/images/client-8-light.svg" : "assets/images/client-8.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    } }, directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "K7hc":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
class Config {
}
Config.config = {
    theme: 'vertical',
    themeType: 'dark',
};


/***/ }),

/***/ "Q9DS":
/*!************************************************************!*\
  !*** ./src/app/components/sections/blog/blog.component.ts ***!
  \************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollTo(section) {
        const sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 56, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row", "blog-wrapper"], [1, "col-md-4"], [1, "blog-item", "rounded", "bg-white", "shadow-dark", "wow", "fadeIn"], [1, "thumb"], ["href", "javascript:"], [1, "category"], ["href", "javascript:", 3, "click"], ["src", "assets/images/blog/1.svg", "alt", "blog-title"], [1, "details"], [1, "my-0", "title"], [1, "list-inline", "meta", "mb-0", "mt-2"], [1, "list-inline-item"], ["src", "assets/images/blog/2.svg", "alt", "blog-title"], ["src", "assets/images/blog/3.svg", "alt", "blog-title"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Latest Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogComponent_Template_a_click_11_listener() { return ctx.scrollTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "5 Best App Development Tool for Your Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "09 February, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Bolby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogComponent_Template_a_click_28_listener() { return ctx.scrollTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Common Misconceptions About Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "07 February, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Bolby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogComponent_Template_a_click_45_listener() { return ctx.scrollTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "3 Things To Know About Startup Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "06 February, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Bolby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "QpnW":
/*!*************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.service.ts ***!
  \*************************************************************/
/*! exports provided: ScrollSpyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyService", function() { return ScrollSpyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollSpyService {
    constructor() {
        this.counter = 'home';
        this.count = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.counter);
    }
    nextCount(value) {
        this.count.next(value);
    }
}
ScrollSpyService.??fac = function ScrollSpyService_Factory(t) { return new (t || ScrollSpyService)(); };
ScrollSpyService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ScrollSpyService, factory: ScrollSpyService.??fac, providedIn: 'root' });


/***/ }),

/***/ "RX07":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-spy/scroll-spy.directive.ts ***!
  \***************************************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onScroll(event) {
        let currentSection = '';
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection && currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
        if (currentSection === 'home' && document.querySelector('#return-to-top').hasAttribute('style')) {
            document.querySelector('#return-to-top').removeAttribute('style');
        }
        else if (!(document.querySelector('#return-to-top').hasAttribute('style'))) {
            document.querySelector('#return-to-top').style.display = 'block';
        }
    }
}
ScrollSpyDirective.??fac = function ScrollSpyDirective_Factory(t) { return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollSpyDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: ScrollSpyDirective, selectors: [["", "scrollSpy", ""]], hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ "RntK":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 84, vars: 3, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-3"], [1, "text-center", "text-md-left"], ["src", "assets/images/avatar-2.svg", "alt", "Bolby"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "col-md-9", "triangle-left-md", "triangle-top-sm"], [1, "rounded", "bg-white", "shadow-dark", "padding-30"], [1, "col-md-6"], [1, "mt-3"], ["href", "javascript:", 1, "btn", "btn-default"], [1, "skill-item"], [1, "skill-info", "clearfix"], [1, "float-left", "mb-3", "mt-0"], [1, "float-right"], ["type", "warning", 3, "value"], [1, "spacer-20"], ["type", "danger", 3, "value"], ["type", "primary", 3, "value"], [1, "spacer-70"], [1, "col-md-3", "col-sm-6"], [1, "fact-item"], [1, "icon", "icon-fire"], [1, "details"], [1, "mb-0", "mt-0", "number"], [1, "count"], [1, "mb-0"], [1, "icon", "icon-cup"], [1, "icon", "icon-people"], [1, "icon", "icon-badge"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "ngb-progressbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "UI/UX design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "95%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "ngb-progressbar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "ngb-progressbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "em", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "198");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Projects completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "em", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "5670");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Cup of coffee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "em", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "427");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "em", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Nominees winner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 70);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");



class AppComponent {
    constructor() {
        this.title = 'Okk';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UYsO":
/*!************************************************************************!*\
  !*** ./src/app/components/sections/experience/experience.component.ts ***!
  \************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.??fac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 60, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-6"], [1, "timeline", "edu", "rounded", "bg-white", "shadow-dark", "padding-30", "overflow-hidden"], [1, "timeline-container", "wow", "fadeInUp"], [1, "content"], [1, "time"], [1, "title"], ["data-wow-delay", "0.2s", 1, "timeline-container", "wow", "fadeInUp"], ["data-wow-delay", "0.4s", 1, "timeline-container", "wow", "fadeInUp"], [1, "line"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "timeline", "exp", "bg-white", "shadow-dark", "rounded", "padding-30", "overflow-hidden"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "2019 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Academic Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "2017 - 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Bachelor\u2019s Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "2013 - 2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Honours Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "2019 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "2017 - 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Front-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "2013 - 2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Um2Q":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/pricing/pricing.component.ts ***!
  \******************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.??fac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 58, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeIn"], [1, "spacer-60"], [1, "row"], [1, "col-md-4", "pr-md-0", "mt-md-4", "mt-0"], [1, "price-item", "bg-white", "rounded", "shadow-dark", "text-center"], ["src", "assets/images/price-1.svg", "alt", "Regular"], [1, "plan"], [1, "price"], ["href", "javascript:", 1, "btn", "btn-default"], [1, "col-md-4", "px-md-0", "my-4", "my-md-0"], [1, "price-item", "bg-white", "rounded", "shadow-dark", "text-center", "best"], [1, "badge"], ["src", "assets/images/price-2.svg", "alt", "Premium"], [1, "col-md-4", "pl-md-0", "mt-md-4", "mt-0"], ["src", "assets/images/price-3.svg", "alt", "Ultimate"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Pricing Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "A Simple option but powerful to manage your business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Unlimited product including apps integrations and more features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Mon-Fri support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Ultimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "A wise option for large companies and individuals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/layout/layout.component */ "6eW9");
/* harmony import */ var _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader/loader.module */ "mRNh");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/shared.module */ "hGdz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_1__["ClickOutsideModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _components_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_1__["ClickOutsideModule"],
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();


/***/ }),

/***/ "cpwU":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/services/services.component.ts ***!
  \********************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollTo(section) {
        const sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }
}
ServicesComponent.??fac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 34, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-4"], [1, "service-box", "rounded", "data-background", "padding-30", "text-center", "text-light", "shadow-blue", "bg-blue"], ["src", "assets/images/service-1.svg", "alt", "UI/UX design"], [1, "mb-3", "mt-0"], [1, "mb-0"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "service-box", "rounded", "data-background", "padding-30", "text-center", "shadow-yellow", "bg-yellow"], ["src", "assets/images/service-2.svg", "alt", "UI/UX design"], [1, "service-box", "rounded", "data-background", "padding-30", "text-center", "text-light", "shadow-pink", "bg-pink"], ["src", "assets/images/service-3.svg", "alt", "UI/UX design"], [1, "mt-5", "text-center"], ["href", "javascript:", 3, "click"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "UI/UX design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Looking for a custom job? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ServicesComponent_Template_a_click_31_listener() { return ctx.scrollTo("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " to contact me! \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dE+s":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/works/works.component.ts ***!
  \**************************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-modal/ui-modal.component */ "AaF/");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery/gallery.component */ "sRMV");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-image-slider */ "yf9x");





function WorksComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_div_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12); return _r8.open(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Project Managment Illustration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "app-gallery", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("albums", ctx_r0.singleGallery1);
} }
function WorksComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_div_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31); return _r2.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Creative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Guest App Walkthrough Screens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function WorksComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Branding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Delivery App Wireframe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "ng-image-slider", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("images", ctx_r3.videoObject);
} }
function WorksComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_div_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46); return _r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Creative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Onboarding Motivation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function WorksComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_div_49_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12); return _r16.open(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Art, Branding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "iMac Mockup Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "app-gallery", 41, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("albums", ctx_r6.albums);
} }
function WorksComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Creative, Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Game Store App Concept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "current": a0 }; };
class WorksComponent {
    constructor() {
        this.albums = [];
        this.videoObject = [
            {
                video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
                posterImage: 'assets/images/works/3.svg',
            }
        ];
        this.workFilter = 'all';
        this.singleGallery1 = [
            {
                src: 'assets/images/works/1.svg',
                caption: 'Project Management Illustration',
                thumb: 'assets/images/works/1.svg'
            }
        ];
        for (let i = 5; i >= 1; i--) {
            const album = {
                src: 'assets/images/works/' + i + '.svg',
                caption: 'Image ' + i + ' caption here',
                thumb: 'assets/images/works/' + i + '.svg',
            };
            this.albums.push(album);
        }
    }
    ngOnInit() {
    }
    onChange(e) {
        this.workFilter = e.target.value;
    }
}
WorksComponent.??fac = function WorksComponent_Factory(t) { return new (t || WorksComponent)(); };
WorksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WorksComponent, selectors: [["app-works"]], decls: 61, vars: 25, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "portfolio-filter", "list-inline", "wow", "fadeInUp"], [1, "list-inline-item", 3, "ngClass", "click"], [1, "pf-filter-wrapper"], [1, "portfolio-filter-mobile", 3, "change"], ["value", "all"], ["value", "creative"], ["value", "art"], ["value", "design"], ["value", "branding"], [1, "row", "portfolio-wrapper"], ["class", "col-md-4 col-sm-6 grid-item art", 4, "ngIf"], ["class", "col-md-4 col-sm-6 grid-item creative design", 4, "ngIf"], ["dialogClass", "modal-dialog-centered work-modal", 3, "hideHeader", "hideFooter"], ["exampleModalCenter", ""], [1, "app-modal-body"], ["id", "small-dialog", 1, "white-popup", "zoom-anim-dialog", "mfp-hide"], ["src", "assets/images/single-work.svg", "alt", "Title"], ["href", "javascript:", 1, "btn", "btn-default"], ["class", "col-md-4 col-sm-6 grid-item branding", 4, "ngIf"], ["class", "col-md-4 col-sm-6 grid-item creative", 4, "ngIf"], ["dialogClass", "modal-dialog-centered work-modal audio-modal", 3, "hideHeader", "hideFooter"], ["audioModal", ""], ["frameborder", "0", "allowfullscreen", "", "src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 1, "mfp-iframe"], ["class", "col-md-4 col-sm-6 grid-item art branding", 4, "ngIf"], [1, "load-more", "text-center", "mt-4"], [1, "fas", "fa-spinner"], [1, "portfolio-pagination", "list-inline", "d-none"], [1, "list-inline-item"], ["href", "javascript:"], [1, "col-md-4", "col-sm-6", "grid-item", "art"], ["href", "javascript:", 1, "work-image", 3, "click"], [1, "portfolio-item", "rounded", "shadow-dark"], [1, "details"], [1, "term"], [1, "title"], [1, "more-button"], [1, "icon-magnifier-add"], [1, "thumb"], [3, "albums"], ["singleGallery", ""], [1, "mask"], [1, "col-md-4", "col-sm-6", "grid-item", "creative", "design"], ["href", "javascript:", "data-toggle", "modal", 1, "work-content", 3, "click"], [1, "icon-options"], ["src", "assets/images/works/2.svg", "alt", "Portfolio-title"], [1, "col-md-4", "col-sm-6", "grid-item", "branding"], ["href", "javascript:", 1, "work-video"], [1, "icon-camrecorder"], [3, "images"], ["nav", ""], [1, "col-md-4", "col-sm-6", "grid-item", "creative"], ["href", "javascript:", 1, "work-video", 3, "click"], [1, "icon-music-tone-alt"], ["src", "assets/images/works/4.svg", "alt", "Portfolio-title"], [1, "col-md-4", "col-sm-6", "grid-item", "art", "branding"], ["href", "javascript:", 1, "gallery-link", 3, "click"], [1, "icon-picture"], ["albumsGallery", ""], ["href", "javascript:", "target", "_blank"], [1, "icon-link"], ["src", "assets/images/works/6.svg", "alt", "Portfolio-title"]], template: function WorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Recent works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_Template_li_click_5_listener() { return ctx.workFilter = "all"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_Template_li_click_7_listener() { return ctx.workFilter = "creative"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_Template_li_click_9_listener() { return ctx.workFilter = "art"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_Template_li_click_11_listener() { return ctx.workFilter = "design"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WorksComponent_Template_li_click_13_listener() { return ctx.workFilter = "branding"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function WorksComponent_Template_select_change_16_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, WorksComponent_div_28_Template, 14, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, WorksComponent_div_29_Template, 13, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "app-ui-modal", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Guest App Walkthrough Screens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit nibh in massa semper rutrum. In rhoncus eleifend mi id tempus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Donec consectetur, libero at pretium euismod, nisl felis lobortis urna, id tristique nisl lectus eget ligula.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "View on Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, WorksComponent_div_43_Template, 14, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, WorksComponent_div_44_Template, 13, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "app-ui-modal", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "iframe", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, WorksComponent_div_49_Template, 14, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, WorksComponent_div_50_Template, 13, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Load more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c0, ctx.workFilter === "all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](17, _c0, ctx.workFilter === "creative"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx.workFilter === "art"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c0, ctx.workFilter === "design"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c0, ctx.workFilter === "branding"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "creative" || ctx.workFilter === "design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hideHeader", true)("hideFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hideHeader", true)("hideFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "art" || ctx.workFilter === "branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.workFilter === "all" || ctx.workFilter === "creative" || ctx.workFilter === "design");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "hGdz":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-spy/scroll-spy.directive */ "RX07");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/sections.module */ "k9h8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SharedModule {
}
SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]
        ], _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](SharedModule, { declarations: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]], exports: [_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"],
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"]] }); })();


/***/ }),

/***/ "k9h8":
/*!********************************************************!*\
  !*** ./src/app/components/sections/sections.module.ts ***!
  \********************************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "sWZ+");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "RntK");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "cpwU");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "UYsO");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/works.component */ "dE+s");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "Q9DS");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "xp7a");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pricing/pricing.component */ "Um2Q");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "B/bl");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gallery/gallery.component */ "sRMV");
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ "AaF/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class SectionsModule {
}
SectionsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: SectionsModule });
SectionsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ factory: function SectionsModule_Factory(t) { return new (t || SectionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](SectionsModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__["PricingComponent"],
        _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"],
        _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_14__["UiModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__["PricingComponent"],
        _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] }); })();


/***/ }),

/***/ "mRNh":
/*!****************************************************!*\
  !*** ./src/app/components/loader/loader.module.ts ***!
  \****************************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.component */ "vPOg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LoaderModule {
}
LoaderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: LoaderModule });
LoaderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]] }); })();


/***/ }),

/***/ "sRMV":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/gallery/gallery.component.ts ***!
  \******************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GalleryComponent_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function GalleryComponent_div_1_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r4.open(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r3.getSantizeUrl(image_r1.thumb), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
} }
function GalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, GalleryComponent_div_1_img_1_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r2 === 0);
} }
class GalleryComponent {
    constructor(lightbox, lightboxEvent, lighboxConfig, sanitizer) {
        this.lightbox = lightbox;
        this.lightboxEvent = lightboxEvent;
        this.lighboxConfig = lighboxConfig;
        this.sanitizer = sanitizer;
        this.albums = this.albums ? this.albums : [];
        lighboxConfig.fadeDuration = 1;
    }
    ngOnInit() { }
    getSantizeUrl(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    open(index) {
        this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event) => this._onReceivedEvent(event));
        this.lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
    }
    _onReceivedEvent(event) {
        if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__["LIGHTBOX_EVENT"].CLOSE) {
            this.subscription.unsubscribe();
        }
    }
}
GalleryComponent.??fac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__["LightboxEvent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__["LightboxConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
GalleryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], inputs: { albums: "albums" }, decls: 2, vars: 1, consts: [[1, "column", "has-text-centered"], ["class", "img-row", 4, "ngFor", "ngForOf"], [1, "img-row"], ["class", "img-frame", 3, "src", "click", 4, "ngIf"], [1, "img-frame", 3, "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, GalleryComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.albums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "sWZ+":
/*!************************************************************!*\
  !*** ./src/app/components/sections/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-animate */ "5Rqa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { light: a0 }; };
class HomeComponent {
    constructor() {
        this.bounce = 2;
        // setInterval(() => {
        //   this.bounce = this.bounce < 3 ? this.bounce + 1 : 1;
        // }, 3000);
    }
    ngOnInit() { }
    ngAfterContentInit() {
        setTimeout(() => {
            const Parallax = __webpack_require__(/*! parallax-js */ "patp");
            const scene = document.getElementById('scene');
            const parallaxInstance1 = new Parallax(scene, {
                relativeInput: false,
            });
        }, 2000);
    }
    scrollTo(section) {
        const sectionHtml = document.querySelector('#' + section);
        if (sectionHtml !== null) {
            sectionHtml.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], inputs: { themeType: "themeType" }, decls: 62, vars: 4, consts: [[1, "container"], [1, "intro"], ["src", "assets/images/avatar-1.png", "alt", "Gorodiskiy Evgeniy", 1, "mb-4", "avatar"], [1, "mb-2", "mt-0"], [1, "text-rotating", "morphext"], [1, "social-icons", "light", "list-inline", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:"], [1, "fab", "fa-instagram"], [1, "fab", "fa-twitter"], [1, "fab", "fa-behance"], [1, "fab", "fa-dribbble"], [1, "fab", "fa-pinterest-p"], [1, "mt-4"], ["href", "javascript:", 1, "btn", "btn-default", 3, "click"], [1, "scroll-down", 3, "ngClass"], ["href", "javascript:", 1, "mouse-wrapper", 3, "click"], [1, "mouse"], [1, "wheel"], ["id", "scene", "data-relative-input", "true", 1, "parallax"], ["width", "27", "height", "29", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p1"], ["d", "M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "26", "height", "26", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p2"], ["d", "M13 3.3541L2.42705 24.5h21.1459L13 3.3541z", "stroke", "#FF4C60", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p3"], ["d", "M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z", "fill", "#44D7B6", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.6", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p4"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p5"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "49", "height", "17", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p6"], ["fill", "#FF4C60", "fill-rule", "evenodd"], ["d", "M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"], ["d", "M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"], ["width", "26", "height", "26", "data-depth", "0.4", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p7"], ["d", "M13 22.6459L2.42705 1.5h21.1459L13 22.6459z", "stroke", "#FFD15C", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "19", "height", "21", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p8"], ["transform", "rotate(-40 6.25252 10.12626)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "data-depth-y", "-1.30", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p9"], ["d", "M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "47", "height", "29", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p10"], ["fill", "#44D7B6", "fill-rule", "evenodd"], ["d", "M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"], ["d", "M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"], ["width", "33", "height", "20", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p11"], ["d", "M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z", "fill", "#FFD15C", "fill-rule", "evenodd"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Gorodiskiy Evgeniy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Front-End developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_Template_a_click_27_listener() { return ctx.scrollTo("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "Hire me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_Template_a_click_30_listener() { return ctx.scrollTo("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Scroll Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](41, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "rect", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](45, "rect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](48, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](49, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "rect", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](55, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](58, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](59, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "svg", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](61, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("@bounce", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](2, _c0, ctx.themeType === "light"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".avatar[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n@media screen and (max-width: 992px) {\n  .avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJO0lBQ0ksZ0JBQUE7RUFFVjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('bounce', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_1__["bounceIn"], {
                    // Set the duration to 5seconds and delay to 2seconds
                    params: {
                        timing: 3,
                        delay: 0,
                        a: '3000px',
                        b: '-25px',
                        c: '10px',
                        d: '-5px',
                    },
                })),
            ]),
        ] } });


/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-config */ "K7hc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* spinner */






const _c0 = function (a0) { return { "light": a0 }; };
function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "filter", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "feGaussianBlur", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "feColorMatrix", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "feBlend", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](1, _c0, ctx_r0.themeConfig.themeType === "light"));
} }
class LoaderComponent {
    constructor(router, document, activatedRoute) {
        this.router = router;
        this.document = document;
        this.activatedRoute = activatedRoute;
        this.isSpinnerVisible = true;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
        this.themeConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].config;
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
    ngOnInit() { }
}
LoaderComponent.??fac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
LoaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["id", "preloader", 3, "ngClass", 4, "ngIf"], ["id", "preloader", 3, "ngClass"], [1, "outer"], [1, "infinityChrome"], [1, "infinity"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 1, "goo-outer"], ["id", "goo"], ["in", "SourceGraphic", "stdDeviation", "6", "result", "blur"], ["in", "blur", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", "result", "goo"], ["in", "SourceGraphic", "in2", "goo"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, LoaderComponent_div_0_Template, 19, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/layout/layout.component */ "6eW9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    // {
    //   path: '',
    //   redirectTo: '',
    //   pathMatch: 'full',
    // },
    {
        path: '',
        component: _theme_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | view-view-module */ "view-view-module").then(__webpack_require__.bind(null, /*! ./view/view.module */ "B4v+")).then((module) => module.ViewModule),
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xp7a":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-4"], [1, "contact-info"], [1, "wow", "fadeInUp"], ["href", "mailto:name@example.com"], [1, "col-md-8"], ["id", "contact-form", "method", "post", "action", "javascript:", 1, "contact-form", "mt-6"], [1, "messages"], [1, "column", "col-md-6"], [1, "form-group"], ["type", "text", "name", "InputName", "id", "InputName", "placeholder", "Your name", "required", "required", "data-error", "Name is required.", 1, "form-control"], [1, "help-block", "with-errors"], ["type", "email", "id", "InputEmail", "name", "InputEmail", "placeholder", "Email address", "required", "required", "data-error", "Email is required.", 1, "form-control"], [1, "column", "col-md-12"], ["type", "text", "id", "InputSubject", "name", "InputSubject", "placeholder", "Subject", "required", "required", "data-error", "Subject is required.", 1, "form-control"], ["name", "InputMessage", "id", "InputMessage", "rows", "5", "placeholder", "Message", "required", "required", "data-error", "Message is required.", 1, "form-control"], ["type", "submit", "name", "submit", "id", "submit", "value", "Submit", 1, "btn", "btn-default"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Let's talk about everything!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Don't like forms? Send me an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, ". \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map