(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/compiler/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_home_home1_home1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home1/home1.component */ "./src/app/component/home/home1/home1.component.ts");
/* harmony import */ var _component_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/users/login/login.component */ "./src/app/component/users/login/login.component.ts");
/* harmony import */ var _component_users_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/users/register/register.component */ "./src/app/component/users/register/register.component.ts");
/* harmony import */ var _component_users_profil_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/users/profil/profil.component */ "./src/app/component/users/profil/profil.component.ts");
/* harmony import */ var _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/page-not-found/page-not-found.component */ "./src/app/component/page-not-found/page-not-found.component.ts");
/* harmony import */ var _component_post_detils_post_detils_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/post-detils/post-detils.component */ "./src/app/component/post-detils/post-detils.component.ts");
/* harmony import */ var _component_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/list-posts/list-posts.component */ "./src/app/component/list-posts/list-posts.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _component_bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/bloggers/bloggers.component */ "./src/app/component/bloggers/bloggers.component.ts");













var routes = [
    { path: '', component: _component_home_home1_home1_component__WEBPACK_IMPORTED_MODULE_4__["Home1Component"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'bloggers', component: _component_bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_12__["BloggersComponent"] },
    { path: 'user/login', component: _component_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'user/register', component: _component_users_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'user/profil', component: _component_users_profil_profil_component__WEBPACK_IMPORTED_MODULE_7__["ProfilComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'admin/list', component: _component_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_10__["ListPostsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'post/:id', component: _component_post_detils_post_detils_component__WEBPACK_IMPORTED_MODULE_9__["PostDetilsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: '**', component: _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bloggers';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/users/login/login.component */ "./src/app/component/users/login/login.component.ts");
/* harmony import */ var _component_users_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/users/register/register.component */ "./src/app/component/users/register/register.component.ts");
/* harmony import */ var _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/page-not-found/page-not-found.component */ "./src/app/component/page-not-found/page-not-found.component.ts");
/* harmony import */ var _component_users_profil_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/users/profil/profil.component */ "./src/app/component/users/profil/profil.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _component_post_detils_post_detils_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/post-detils/post-detils.component */ "./src/app/component/post-detils/post-detils.component.ts");
/* harmony import */ var _component_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/list-posts/list-posts.component */ "./src/app/component/list-posts/list-posts.component.ts");
/* harmony import */ var _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/modal/modal.component */ "./src/app/component/modal/modal.component.ts");
/* harmony import */ var _component_users_profil_modal_profil_modal_profil_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/users/profil/modal-profil/modal-profil.component */ "./src/app/component/users/profil/modal-profil/modal-profil.component.ts");
/* harmony import */ var _component_home_home1_home1_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/home/home1/home1.component */ "./src/app/component/home/home1/home1.component.ts");
/* harmony import */ var _component_bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/bloggers/bloggers.component */ "./src/app/component/bloggers/bloggers.component.ts");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/bloggers.service */ "./src/app/services/bloggers.service.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_users_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _component_users_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _component_users_profil_profil_component__WEBPACK_IMPORTED_MODULE_8__["ProfilComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _component_post_detils_post_detils_component__WEBPACK_IMPORTED_MODULE_20__["PostDetilsComponent"],
                _component_list_posts_list_posts_component__WEBPACK_IMPORTED_MODULE_21__["ListPostsComponent"],
                _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_22__["ModalComponent"],
                _component_users_profil_modal_profil_modal_profil_component__WEBPACK_IMPORTED_MODULE_23__["ModalProfilComponent"],
                _component_home_home1_home1_component__WEBPACK_IMPORTED_MODULE_24__["Home1Component"],
                _component_bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_25__["BloggersComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot()
            ],
            providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestore"], _services_data_api_service__WEBPACK_IMPORTED_MODULE_26__["DataApiService"], _services_bloggers_service__WEBPACK_IMPORTED_MODULE_27__["BloggersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/bloggers/bloggers.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/bloggers/bloggers.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** Sass Variables ****/\r\n\r\n#profil{\r\n    background: url('20.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    margin-top: 20px;\r\n    min-height: 700px;\r\n  }\r\n\r\nbody {\r\n    font-family: 'Open Sans', sans-serif;\r\n    background: #333;\r\n  }\r\n\r\n.card-wrapper {\r\n    width: 400px;\r\n    height: 500px;\r\n    position: relative;\r\n  }\r\n\r\n.card {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 350px;\r\n    height: 450px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    border-radius: 16px;\r\n    overflow: hidden;\r\n    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.card .card-image {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background-color: #000;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.card:hover img {\r\n    opacity: 0.4;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.card:hover .card-image {\r\n    -webkit-transform: translateY(-100px);\r\n            transform: translateY(-100px);\r\n    transition: all 0.9s;\r\n  }\r\n\r\n/**** Social Icons *****/\r\n\r\n.social-icons {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    z-index: 3;\r\n    display: flex;\r\n  }\r\n\r\n.social-icons li {\r\n    list-style: none;\r\n  }\r\n\r\n.social-icons li a {\r\n    position: relative;\r\n    display: block;\r\n    width: 50px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    background: #fff;\r\n    font-size: 23px;\r\n    color: #333;\r\n    font-weight: bold;\r\n    margin: 0 6px;\r\n    transition: 0.4s;\r\n    -webkit-transform: translateY(200px);\r\n            transform: translateY(200px);\r\n    opacity: 0;\r\n  }\r\n\r\n.card:hover .social-icons li a {\r\n    -webkit-transform: translateY(0px);\r\n            transform: translateY(0px);\r\n    opacity: 1;\r\n  }\r\n\r\n.social-icons li a:hover {\r\n    background: #000;\r\n    transition: 0.2s;\r\n  }\r\n\r\n.social-icons li a:hover .fab {\r\n    color: #fff;\r\n  }\r\n\r\n.social-icons li a .fab {\r\n    transition: 0.8s;\r\n  }\r\n\r\n.social-icons li a .fab:hover {\r\n    -webkit-transform: rotateY(360deg);\r\n            transform: rotateY(360deg);\r\n    color: #fff;\r\n  }\r\n\r\n.card:hover li:nth-child(1) a {\r\n    transition-delay: 0.1s;\r\n  }\r\n\r\n.card:hover li:nth-child(2) a {\r\n    transition-delay: 0.2s;\r\n  }\r\n\r\n.card:hover li:nth-child(3) a {\r\n    transition-delay: 0.3s;\r\n  }\r\n\r\n.card:hover li:nth-child(4) a {\r\n    transition-delay: 0.4s;\r\n  }\r\n\r\n/**** Personal Details ****/\r\n\r\n.details {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    background: #fff;\r\n    width: 100%;\r\n    height: 120px;\r\n    z-index: 1;\r\n    padding: 10px;\r\n  }\r\n\r\n.details h2 {\r\n    margin: 30px 0;\r\n    padding: 0;\r\n    text-align: center;\r\n  }\r\n\r\n.details h2 .job-title {\r\n    font-size: 1rem;\r\n    line-height: 2.5rem;\r\n    color: #333;\r\n    font-weight: 300;\r\n  }\r\n\r\n.jane {\r\n    position: absolute;\r\n    bottom: -120px;\r\n    margin-top: 100px;\r\n    left: 0;\r\n    opacity: 0;\r\n    background: #fff;\r\n    width: 100%;\r\n    height: 120px;\r\n    z-index: 3;\r\n    padding: 10px;\r\n    transition: 0.4s;\r\n  }\r\n\r\n.profile-two .social-icons li a {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.card:hover .p\r\n  rofile-img--two {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n\r\n.card:hover .jane {\r\n    bottom: 0;\r\n    left: 0;\r\n    transition-delay: 0.5s;\r\n    opacity: 1;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Jsb2dnZXJzL2Jsb2dnZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCOztBQUV6QjtJQUNJLG1DQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBR0E7SUFDRSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixvQkFBb0I7RUFDdEI7O0FBQ0Esd0JBQXdCOztBQUN4QjtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGFBQWE7RUFDZjs7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaOztBQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsV0FBVztFQUNiOztBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0EsMkJBQTJCOztBQUMzQjtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0VBQ2Y7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0FBQ0E7O0lBRUUsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1Qjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ibG9nZ2Vycy9ibG9nZ2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogU2FzcyBWYXJpYWJsZXMgKioqKi9cclxuXHJcbiNwcm9maWx7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvMjAuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICB9XHJcblxyXG4gIC5jYXJkLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLmNhcmQgLmNhcmQtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLmNhcmQ6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyIC5jYXJkLWltYWdlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgfVxyXG4gIC8qKioqIFNvY2lhbCBJY29ucyAqKioqKi9cclxuICAuc29jaWFsLWljb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnNvY2lhbC1pY29ucyBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICAuc29jaWFsLWljb25zIGxpIGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciAuc29jaWFsLWljb25zIGxpIGEge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciAuZmFiIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuc29jaWFsLWljb25zIGxpIGEgLmZhYiB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gIH1cclxuICAuc29jaWFsLWljb25zIGxpIGEgLmZhYjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciBsaTpudGgtY2hpbGQoMSkgYSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciBsaTpudGgtY2hpbGQoMikgYSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciBsaTpudGgtY2hpbGQoMykgYSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciBsaTpudGgtY2hpbGQoNCkgYSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICAvKioqKiBQZXJzb25hbCBEZXRhaWxzICoqKiovXHJcbiAgLmRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmRldGFpbHMgaDIge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZGV0YWlscyBoMiAuam9iLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5qYW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgfVxyXG4gIC5wcm9maWxlLXR3byAuc29jaWFsLWljb25zIGxpIGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciAucFxyXG4gIHJvZmlsZS1pbWctLXR3byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbiAgLmNhcmQ6aG92ZXIgLmphbmUge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/bloggers/bloggers.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/bloggers/bloggers.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"profil\">\n    <div class=\"row justify-content-center blogger\">\n        <div class=\"col\" *ngFor=\"let blogger of bloggers;\">\n\n\n  \n        <div class=\"card-wrapper\">\n    \n            <div class=\"card profile-two\">\n              \n              <div class=\"card-image profile-img--two\">\n                <img src=\"{{blogger.photoURL}}\" alt=\"profile two\" style=\"max-width: 100%;  height: 100%;\">\n              </div>\n      \n              <ul class=\"social-icons\">\n                <li>\n                  <a href=\"{{blogger.facebook}}\">\n                    <i class=\"fab fa-facebook-f\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"{{blogger.instagram}}\">\n                    <i class=\"fab fa-instagram\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"{{blogger.twiter}}\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                </li>\n              </ul>\n      \n              <div class=\"details jane\">\n                  <h2>{{blogger.name}}\n                    <br>\n                    <span class=\"job-title\">{{blogger.email}}</span>\n                  </h2>\n                  <p>{{blogger.about}}</p>\n              </div>\n          </div>\n       </div><!-- END box wrapper -->\n          \n  </div>\n       \n \n   </div><!-- END container -->\n  </section>"

/***/ }),

/***/ "./src/app/component/bloggers/bloggers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/bloggers/bloggers.component.ts ***!
  \**********************************************************/
/*! exports provided: BloggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersComponent", function() { return BloggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");



var BloggersComponent = /** @class */ (function () {
    function BloggersComponent(bloggerService) {
        this.bloggerService = bloggerService;
    }
    BloggersComponent.prototype.ngOnInit = function () {
        this.getBloggers();
    };
    BloggersComponent.prototype.getBloggers = function () {
        var _this = this;
        this.bloggerService.getAllBloggers().subscribe(function (bloggers) {
            _this.bloggers = bloggers;
            console.log('Blogers', bloggers);
        });
    };
    BloggersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bloggers',
            template: __webpack_require__(/*! ./bloggers.component.html */ "./src/app/component/bloggers/bloggers.component.html"),
            styles: [__webpack_require__(/*! ./bloggers.component.css */ "./src/app/component/bloggers/bloggers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_2__["BloggersService"]])
    ], BloggersComponent);
    return BloggersComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*PEN STYLES*/\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.bloggers {\r\n  background: #f1f1f1;\r\n  margin: 1rem;\r\n}\r\n\r\n.blog-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 2rem auto;\r\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, .1);\r\n  margin-bottom: 1.6%;\r\n  background: #fff;\r\n  line-height: 1.4;\r\n  font-family: sans-serif;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\n\r\n.blog-card a {\r\n  color: inherit;\r\n}\r\n\r\n.blog-card a:hover {\r\n  color: #5ad67d;\r\n}\r\n\r\n.blog-card:hover .photo {\r\n  -webkit-transform: scale(1.3) rotate(3deg);\r\n          transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.blog-card .meta {\r\n  position: relative;\r\n  z-index: 0;\r\n  height: 200px;\r\n}\r\n\r\n.blog-card .photo {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n  transition: -webkit-transform 0.2s;\r\n  transition: transform 0.2s;\r\n  transition: transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n\r\n.blog-card .details, .blog-card .details ul {\r\n  margin: auto;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.blog-card .details {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: -100%;\r\n  margin: auto;\r\n  transition: left 0.2s;\r\n  background: rgba(0, 0, 0, .6);\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 100%;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.blog-card .details a {\r\n  -webkit-text-decoration: dotted underline;\r\n          text-decoration: dotted underline;\r\n}\r\n\r\n.blog-card .details ul li {\r\n  display: inline-block;\r\n}\r\n\r\n.blog-card .details .author:before {\r\n  font-family: FontAwesome;\r\n  margin-right: 10px;\r\n  content: \"\\f007\";\r\n}\r\n\r\n.blog-card .details .date:before {\r\n  font-family: FontAwesome;\r\n  margin-right: 10px;\r\n  content: \"\\f133\";\r\n}\r\n\r\n.blog-card .details .tags ul:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f02b\";\r\n  margin-right: 10px;\r\n}\r\n\r\n.blog-card .details .tags li {\r\n  margin-right: 5px;\r\n}\r\n\r\n.blog-card .details .tags li:first-child {\r\n  margin-left: -4px;\r\n}\r\n\r\n.blog-card .description {\r\n  padding: 1rem;\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.blog-card .description h1, .blog-card .description h2 {\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\n.blog-card .description h1 {\r\n  line-height: 1;\r\n  margin: 0;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.blog-card .description h2 {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  text-transform: uppercase;\r\n  color: #a2a2a2;\r\n  margin-top: 5px;\r\n}\r\n\r\n.blog-card .description .read-more {\r\n  text-align: right;\r\n}\r\n\r\n.blog-card .description .read-more a {\r\n  color: #5ad67d;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.blog-card .description .read-more a:after {\r\n  content: \"\\f061\";\r\n  font-family: FontAwesome;\r\n  margin-left: -10px;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n  transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.blog-card .description .read-more a:hover:after {\r\n  margin-left: 5px;\r\n  opacity: 1;\r\n}\r\n\r\n.blog-card p {\r\n  position: relative;\r\n  margin: 1rem 0 0;\r\n}\r\n\r\n.blog-card p:first-of-type {\r\n  margin-top: 1.25rem;\r\n}\r\n\r\n.blog-card p:first-of-type:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 5px;\r\n  background: #5ad67d;\r\n  width: 35px;\r\n  top: -0.75rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.blog-card:hover .details {\r\n  left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .blog-card {\r\n    flex-direction: row;\r\n    max-width: 700px;\r\n }\r\n  .blog-card .meta {\r\n    flex-basis: 40%;\r\n    height: auto;\r\n }\r\n  .blog-card .description {\r\n    flex-basis: 60%;\r\n }\r\n  .blog-card .description:before {\r\n    -webkit-transform: skewX(-3deg);\r\n            transform: skewX(-3deg);\r\n    content: \"\";\r\n    background: #fff;\r\n    width: 30px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n }\r\n  .blog-card.alt {\r\n    flex-direction: row-reverse;\r\n }\r\n  .blog-card.alt .description:before {\r\n    left: inherit;\r\n    right: -10px;\r\n    -webkit-transform: skew(3deg);\r\n            transform: skew(3deg);\r\n }\r\n  .blog-card.alt .details {\r\n    padding-left: 25px;\r\n }\r\n}\r\n\r\n#photo{\r\n  background-size: cover !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7O0FBRWI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsMENBQWtDO1VBQWxDLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsa0RBQTBCO0FBQzVCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UseUNBQWlDO1VBQWpDLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7O0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkI7RUFDQztJQUNFLGVBQWU7SUFDZixZQUFZO0NBQ2Y7RUFDQztJQUNFLGVBQWU7Q0FDbEI7RUFDQztJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7Q0FDZDtFQUNDO0lBQ0UsMkJBQTJCO0NBQzlCO0VBQ0M7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUFxQjtZQUFyQixxQkFBcUI7Q0FDeEI7RUFDQztJQUNFLGtCQUFrQjtDQUNyQjtBQUNEOztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypQRU4gU1RZTEVTKi9cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJsb2dnZXJzIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG4uYmxvZy1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS42JTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uYmxvZy1jYXJkIGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi5ibG9nLWNhcmQgYTpob3ZlciB7XHJcbiAgY29sb3I6ICM1YWQ2N2Q7XHJcbn1cclxuLmJsb2ctY2FyZDpob3ZlciAucGhvdG8ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XHJcbn1cclxuLmJsb2ctY2FyZCAubWV0YSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYmxvZy1jYXJkIC5waG90byB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxufVxyXG4uYmxvZy1jYXJkIC5kZXRhaWxzLCAuYmxvZy1jYXJkIC5kZXRhaWxzIHVsIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5ibG9nLWNhcmQgLmRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnM7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4uYmxvZy1jYXJkIC5kZXRhaWxzIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogZG90dGVkIHVuZGVybGluZTtcclxufVxyXG4uYmxvZy1jYXJkIC5kZXRhaWxzIHVsIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmJsb2ctY2FyZCAuZGV0YWlscyAuYXV0aG9yOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjb250ZW50OiBcIlxcZjAwN1wiO1xyXG59XHJcbi5ibG9nLWNhcmQgLmRldGFpbHMgLmRhdGU6YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTMzXCI7XHJcbn1cclxuLmJsb2ctY2FyZCAuZGV0YWlscyAudGFncyB1bDpiZWZvcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBjb250ZW50OiBcIlxcZjAyYlwiO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYmxvZy1jYXJkIC5kZXRhaWxzIC50YWdzIGxpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uYmxvZy1jYXJkIC5kZXRhaWxzIC50YWdzIGxpOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogLTRweDtcclxufVxyXG4uYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIGgxLCAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gaDEge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG4uYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiBoMiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2EyYTJhMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gLnJlYWQtbW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gLnJlYWQtbW9yZSBhIHtcclxuICBjb2xvcjogIzVhZDY3ZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIC5yZWFkLW1vcmUgYTphZnRlciB7XHJcbiAgY29udGVudDogXCJcXGYwNjFcIjtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcywgb3BhY2l0eSAwLjNzO1xyXG59XHJcbi5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIC5yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ibG9nLWNhcmQgcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMXJlbSAwIDA7XHJcbn1cclxuLmJsb2ctY2FyZCBwOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XHJcbn1cclxuLmJsb2ctY2FyZCBwOmZpcnN0LW9mLXR5cGU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjNWFkNjdkO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIHRvcDogLTAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5ibG9nLWNhcmQ6aG92ZXIgLmRldGFpbHMge1xyXG4gIGxlZnQ6IDAlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gIC5ibG9nLWNhcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiB9XHJcbiAgLmJsb2ctY2FyZCAubWV0YSB7XHJcbiAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiB9XHJcbiAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleC1iYXNpczogNjAlO1xyXG4gfVxyXG4gIC5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gfVxyXG4gIC5ibG9nLWNhcmQuYWx0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuIH1cclxuICAuYmxvZy1jYXJkLmFsdCAuZGVzY3JpcHRpb246YmVmb3JlIHtcclxuICAgIGxlZnQ6IGluaGVyaXQ7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XHJcbiB9XHJcbiAgLmJsb2ctY2FyZC5hbHQgLmRldGFpbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gfVxyXG59XHJcbiNwaG90b3tcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\r\n<div class=\"row bloggers\">\r\n  <div class=\"blog-card col-lg-6\" *ngFor=\"let post of posts \">\r\n          <div class=\"meta\">\r\n            <div class=\"photo\" id=\"photo\"  [ngStyle]=\"{'background': '#fff url(' + post.photo + ') no-repeat 0 0'}\"  ></div>\r\n            <ul class=\"details\">\r\n              <li class=\"author\"><a href=\"#\"></a></li>\r\n              <li class=\"date\">{{post.dateCreated}}</li>\r\n              <li class=\"tags\">\r\n                <ul>\r\n                  <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\r\n                  <li><a href=\"#\"><i class=\"fab fa-facebook\"></i></a></li>\r\n                  <li><a href=\"#\"><i class=\"fab fa-twitter-square\"></i></a></li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"description\">\r\n            <h2>{{post.name}}</h2>\r\n            <p> {{post.about | slice:0:150}}</p>\r\n            <p class=\"read-more\">\r\n              <a routerLink=\"/post/{{post.id}}\">Read More</a>\r\n            </p>\r\n            <p><i class=\"fas fa-pen\"></i></p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n</section>\r\n<app-modal [userUID]=\"userID\"></app-modal>\r\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataApi, bloggerService) {
        this.dataApi = dataApi;
        this.bloggerService = bloggerService;
        this.post = '';
        this.blogger = {
            name: '',
            email: '',
            photoURL: '',
            facebook: '',
            twiter: '',
            roles: {}
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllBloggers();
        this.getAllPosts();
        this.dataApi.getPostBloggers().toPromise().then(function (posts) {
            _this.newPosts = posts;
            console.log(_this.newPosts);
        });
    };
    HomeComponent.prototype.getAllPosts = function () {
        var _this = this;
        this.dataApi.getAllPosts().subscribe(function (posts) {
            console.log('POSTS', posts);
            _this.posts = posts;
        });
    };
    HomeComponent.prototype.getBlogger = function () {
        var _this = this;
        this.bloggerService.getOneBlogger('zb4lch4ndNPssHCiY1qs5EetXdb2').subscribe(function (blogger) {
            _this.blogger = blogger;
            console.log('Blogger1', _this.blogger);
            return blogger.name;
        });
    };
    HomeComponent.prototype.getAllBloggers = function () {
        var _this = this;
        this.bloggerService.getAllBloggers().subscribe(function (data) {
            _this.bloggers = data;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], _services_bloggers_service__WEBPACK_IMPORTED_MODULE_3__["BloggersService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home1/home1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/home/home1/home1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: #333;\r\n    color: #fff;\r\n}\r\n.navbar{\r\n    border-bottom: #008ed6 3px solid;\r\n    opacity: 0.8;\r\n}\r\n#home-section{\r\n    background: url('20.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 750px;\r\n}\r\n#home-section .dark-overlay{\r\n    background-color: rgba(0,0,0,0.7);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 810px;\r\n}\r\n.info-header{\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n/*PEN STYLES*/\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n.bloggers {\r\n    background: #f1f1f1;\r\n    margin: 1rem;\r\n  }\r\n.blog-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 2rem auto;\r\n    box-shadow: 0 3px 7px -1px rgba(0, 0, 0, .1);\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    line-height: 1.4;\r\n    font-family: sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    z-index: 0;\r\n  }\r\n.blog-card a {\r\n    color: inherit;\r\n  }\r\n.blog-card a:hover {\r\n    color: #5ad67d;\r\n  }\r\n.blog-card:hover .photo {\r\n    -webkit-transform: scale(1.3) rotate(3deg);\r\n            transform: scale(1.3) rotate(3deg);\r\n  }\r\n.blog-card .meta {\r\n    position: relative;\r\n    z-index: 0;\r\n    height: 200px;\r\n  }\r\n.blog-card .photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: -webkit-transform 0.2s;\r\n    transition: transform 0.2s;\r\n    transition: transform 0.2s, -webkit-transform 0.2s;\r\n  }\r\n.blog-card .details, .blog-card .details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n.blog-card .details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -100%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, .6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n  }\r\n.blog-card .details a {\r\n    -webkit-text-decoration: dotted underline;\r\n            text-decoration: dotted underline;\r\n  }\r\n.blog-card .details ul li {\r\n    display: inline-block;\r\n  }\r\n.blog-card .details .author:before {\r\n    font-family: FontAwesome;\r\n    margin-right: 10px;\r\n    content: \"\\f007\";\r\n  }\r\n.blog-card .details .date:before {\r\n    font-family: FontAwesome;\r\n    margin-right: 10px;\r\n    content: \"\\f133\";\r\n  }\r\n.blog-card .details .tags ul:before {\r\n    font-family: FontAwesome;\r\n    content: \"\\f02b\";\r\n    margin-right: 10px;\r\n  }\r\n.blog-card .details .tags li {\r\n    margin-right: 5px;\r\n  }\r\n.blog-card .details .tags li:first-child {\r\n    margin-left: -4px;\r\n  }\r\n.blog-card .description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n.blog-card .description h1, .blog-card .description h2 {\r\n    font-family: Poppins, sans-serif;\r\n  }\r\n.blog-card .description h1 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n  }\r\n.blog-card .description h2 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n  }\r\n.blog-card .description .read-more {\r\n    text-align: right;\r\n  }\r\n.blog-card .description .read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n.blog-card .description .read-more a:after {\r\n    content: \"\\f061\";\r\n    font-family: FontAwesome;\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n  }\r\n.blog-card .description .read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n  }\r\n.blog-card p {\r\n    position: relative;\r\n    margin: 1rem 0 0;\r\n  }\r\n.blog-card p:first-of-type {\r\n    margin-top: 1.25rem;\r\n  }\r\n.blog-card p:first-of-type:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n  }\r\n.blog-card:hover .details {\r\n    left: 0%;\r\n  }\r\n@media (min-width: 640px) {\r\n    .blog-card {\r\n      flex-direction: row;\r\n      max-width: 700px;\r\n   }\r\n    .blog-card .meta {\r\n      flex-basis: 40%;\r\n      height: auto;\r\n   }\r\n    .blog-card .description {\r\n      flex-basis: 60%;\r\n   }\r\n    .blog-card .description:before {\r\n      -webkit-transform: skewX(-3deg);\r\n              transform: skewX(-3deg);\r\n      content: \"\";\r\n      background: #fff;\r\n      width: 30px;\r\n      position: absolute;\r\n      left: -10px;\r\n      top: 0;\r\n      bottom: 0;\r\n      z-index: -1;\r\n   }\r\n    .blog-card.alt {\r\n      flex-direction: row-reverse;\r\n   }\r\n    .blog-card.alt .description:before {\r\n      left: inherit;\r\n      right: -10px;\r\n      -webkit-transform: skew(3deg);\r\n              transform: skew(3deg);\r\n   }\r\n    .blog-card.alt .details {\r\n      padding-left: 25px;\r\n   }\r\n  }\r\n#photo{\r\n    background-size: cover !important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZTEvaG9tZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQ0FBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQztBQUNBLGFBQWE7QUFDYjtJQUNJLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsMENBQWtDO1lBQWxDLGtDQUFrQztFQUNwQztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtFQUM1QjtBQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLHlDQUFpQztZQUFqQyxpQ0FBaUM7RUFDbkM7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsU0FBUztJQUNULGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUNBQXFDO0VBQ3ZDO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0E7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7R0FDbkI7SUFDQztNQUNFLGVBQWU7TUFDZixZQUFZO0dBQ2Y7SUFDQztNQUNFLGVBQWU7R0FDbEI7SUFDQztNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxNQUFNO01BQ04sU0FBUztNQUNULFdBQVc7R0FDZDtJQUNDO01BQ0UsMkJBQTJCO0dBQzlCO0lBQ0M7TUFDRSxhQUFhO01BQ2IsWUFBWTtNQUNaLDZCQUFxQjtjQUFyQixxQkFBcUI7R0FDeEI7SUFDQztNQUNFLGtCQUFrQjtHQUNyQjtFQUNEO0FBQ0E7SUFDRSxpQ0FBaUM7RUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lMS9ob21lMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2YmFye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIzAwOGVkNiAzcHggc29saWQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuI2hvbWUtc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy8yMC5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3NTBweDtcclxufVxyXG4jaG9tZS1zZWN0aW9uIC5kYXJrLW92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDgxMHB4O1xyXG59XHJcbi5pbmZvLWhlYWRlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4vKlBFTiBTVFlMRVMqL1xyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5ibG9nZ2VycyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNiU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgYSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgLmJsb2ctY2FyZCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNWFkNjdkO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkOmhvdmVyIC5waG90byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5tZXRhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5waG90byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMsIC5ibG9nLWNhcmQgLmRldGFpbHMgdWwge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnM7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5kZXRhaWxzIC5hdXRob3I6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDA3XCI7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgLmRhdGU6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTMzXCI7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgLnRhZ3MgdWw6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDJiXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgLnRhZ3MgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRldGFpbHMgLnRhZ3MgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb24gaDEsIC5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiBoMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiBoMiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiAucmVhZC1tb3JlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiAucmVhZC1tb3JlIGEge1xyXG4gICAgY29sb3I6ICM1YWQ2N2Q7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgLmRlc2NyaXB0aW9uIC5yZWFkLW1vcmUgYTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcZjA2MVwiO1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcywgb3BhY2l0eSAwLjNzO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiAucmVhZC1tb3JlIGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQgcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIHA6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xyXG4gIH1cclxuICAuYmxvZy1jYXJkIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVhZDY3ZDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgdG9wOiAtMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLmJsb2ctY2FyZDpob3ZlciAuZGV0YWlscyB7XHJcbiAgICBsZWZ0OiAwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuYmxvZy1jYXJkIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgfVxyXG4gICAgLmJsb2ctY2FyZCAubWV0YSB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDQwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICB9XHJcbiAgICAuYmxvZy1jYXJkIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgfVxyXG4gICAgLmJsb2ctY2FyZCAuZGVzY3JpcHRpb246YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgIH1cclxuICAgIC5ibG9nLWNhcmQuYWx0IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICB9XHJcbiAgICAuYmxvZy1jYXJkLmFsdCAuZGVzY3JpcHRpb246YmVmb3JlIHtcclxuICAgICAgbGVmdDogaW5oZXJpdDtcclxuICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XHJcbiAgIH1cclxuICAgIC5ibG9nLWNhcmQuYWx0IC5kZXRhaWxzIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICB9XHJcbiAgfVxyXG4gICNwaG90b3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/home/home1/home1.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/home/home1/home1.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"conta\">\n      <div class=\"row\">\n        <div class=\"col-md-6 text-center mx-auto text-white\">\n          <h1 class=\"display-2 mt-5 pt-5\">\n              Find All About Our Bloggers\n          </h1>\n          <p class=\"lead\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nemo esse sint eaque veniam adipisci officiis assumenda facilis</p>\n          <a href=\"#bloggers\" class=\"btn btn-outline-secondary btn-lg text-white\">\n            <i class=\"fa fa-arrow-right\"></i>Read more</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<section id=\"bloggers\" class=\"my-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"info-header mb-5 text-center\">\n          <h1 class=\"text-primary pb-3\">\n            Meet The Blogger\n          </h1>\n          <p class=\"lead pb-3\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit, totam odit maiores porro laudantium blanditiis dignissimos alias fugit enim ea voluptatum reprehenderit officia sit cumque?\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section>\n  <div class=\"row bloggers\">\n    <div class=\"blog-card col-lg-6\" *ngFor=\"let post of posts | slice: -2\">\n            <div class=\"meta\">\n              <div class=\"photo\" id=\"photo\" style=\"background:cover\" [ngStyle]=\"{'background': '#fff url(' + post.photo + ') no-repeat 0 0'}\" ></div>\n              <ul class=\"details\">\n                <li class=\"author\"><a href=\"#\">{{post.autorName}}</a></li>\n                <li class=\"date\">{{post.dateCreated}}</li>\n                <li class=\"tags\">\n                  <ul>\n                    <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\n                    <li><a href=\"#\"><i class=\"fab fa-facebook\"></i></a></li>\n                    <li><a href=\"#\"><i class=\"fab fa-twitter-square\"></i></a></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n            <div class=\"description\">\n              <h1>{{post.name}}</h1>\n              <h2>{{post.subtitle}}</h2>\n              <p> {{post.about | slice:0:150}}</p>\n              <p class=\"read-more\">\n                <a routerLink=\"/post/{{post.id}}\">Read More</a>\n              </p>\n              <p><i class=\"fas fa-pen\"></i></p>\n            </div>\n          </div>\n\n        </div>\n</section>\n"

/***/ }),

/***/ "./src/app/component/home/home1/home1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/home/home1/home1.component.ts ***!
  \*********************************************************/
/*! exports provided: Home1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Component", function() { return Home1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data-api.service */ "./src/app/services/data-api.service.ts");



var Home1Component = /** @class */ (function () {
    function Home1Component(dataApi) {
        this.dataApi = dataApi;
    }
    Home1Component.prototype.ngOnInit = function () {
        this.getPosts();
    };
    Home1Component.prototype.getPosts = function () {
        var _this = this;
        this.dataApi.getAllPosts().subscribe(function (post) {
            _this.posts = post;
        });
    };
    Home1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home1',
            template: __webpack_require__(/*! ./home1.component.html */ "./src/app/component/home/home1/home1.component.html"),
            styles: [__webpack_require__(/*! ./home1.component.css */ "./src/app/component/home/home1/home1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]])
    ], Home1Component);
    return Home1Component;
}());



/***/ }),

/***/ "./src/app/component/list-posts/list-posts.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/list-posts/list-posts.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9saXN0LXBvc3RzL2xpc3QtcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/list-posts/list-posts.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/list-posts/list-posts.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row mt-5\">\n  <div class=\"col\">\n    <button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\" data-target=\"#modalPost\">New Post</button>\n    Admin {{isAdmin}}\n    <table class=\"table table-hover\" id=\"table-list\">\n\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n           <th scope=\"col\">Id</th>\n          <th scope=\"col\">Naslov</th>\n          <th scope=\"col\">Podnaslov</th>\n        <!--  <th scope=\"col\">Autor</th>-->\n          <!-- <th scope=\"col\">Id Autora</th> -->\n          <th scope=\"col\">Datum</th>\n          <th scope=\"col\">Photo url</th>\n          <th scope=\"col\">Blog</th>\n          <th scope=\"col\">&nbsp;</th>\n          <th scope=\"col\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let post of posts; let i=index\">\n          <th scope=\"row\">{{i+1}}</th>\n           <td>{{post.id}}</td>\n          <td>{{post.name}}</td>\n          <td>{{post.subtitle}}</td>\n          <!-- <td>{{post.autorName}}</td> -->\n          <!-- <td>{{post.userUID}}</td>-->\n           <td>{{post.dateCreated}}</td>\n          <td>{{post.photo}}</td>\n          <td>{{post.about}}</td>\n          <td *ngIf=\"post.userUID == userUID || isAdmin == true; else noOwner\">\n            <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalPost\" (click)=\"changePostModal(post)\" >Update</button>\n          </td>\n           <ng-template #noOwner>\n            <td>\n              <button class=\"btn btn-secondary\" disabled=\"true\">Update</button>\n            </td>\n          </ng-template>\n          <td *ngIf=\"isAdmin == true; else noAdmin\">\n            <button class=\"btn btn-danger\" (click)=\" deletePost(post.id)\" >Delete</button>\n          </td>\n          <ng-template #noAdmin>\n            <td>\n              <button class=\"btn btn-danger\" disabled=\"true\">Delete</button>\n            </td>\n          </ng-template>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n<app-modal [userUID]=\"userUID\"></app-modal>\n"

/***/ }),

/***/ "./src/app/component/list-posts/list-posts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/list-posts/list-posts.component.ts ***!
  \**************************************************************/
/*! exports provided: ListPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPostsComponent", function() { return ListPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var ListPostsComponent = /** @class */ (function () {
    function ListPostsComponent(dataApi, authService) {
        this.dataApi = dataApi;
        this.authService = authService;
        this.isAdmin = null;
        this.userUID = null;
    }
    ListPostsComponent.prototype.ngOnInit = function () {
        this.getListPost();
        this.getCurrentBlogger();
    };
    ListPostsComponent.prototype.getCurrentBlogger = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            console.log('auth', auth);
            if (auth) {
                console.log(_this.isAdmin);
                _this.userUID = auth.uid;
                _this.authService.isUserAdmin(_this.userUID).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                });
            }
        });
    };
    ListPostsComponent.prototype.getListPost = function () {
        var _this = this;
        this.dataApi.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    ListPostsComponent.prototype.deletePost = function (idPost) {
        var potvrda = confirm('Da li sigurno zelite da obrisete ovaj post?');
        if (potvrda) {
            this.dataApi.deletePost(idPost);
            console.log('Delete post', idPost);
        }
    };
    ListPostsComponent.prototype.changePostModal = function (posts) {
        this.dataApi.selectedPost = Object.assign({}, posts);
    };
    ListPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-posts',
            template: __webpack_require__(/*! ./list-posts.component.html */ "./src/app/component/list-posts/list-posts.component.html"),
            styles: [__webpack_require__(/*! ./list-posts.component.css */ "./src/app/component/list-posts/list-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ListPostsComponent);
    return ListPostsComponent;
}());



/***/ }),

/***/ "./src/app/component/modal/modal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/modal/modal.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/modal/modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/modal/modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalPost\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          {{ !this.dataApi.selectedPost.id ? 'Upisite novi post' : 'Izmenite post'}}\n        </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form name=\"formPost\" #formPost=\"ngForm\" (ngSubmit)=\"onSavePost(formPost)\">\n          <input type=\"hidden\" name=\"id\" [(ngModel)]=\"dataApi.selectedPost.id\">\n          <input type=\"hidden\" name=\"userUID\" [value]=\"userUID\">\n          <div class=\"form-group\">\n            <label for=\"naslov\" class=\"col-form-label\">Naslov:</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"dataApi.selectedPost.name\" required>\n          </div>\n          <div class=\"form-row\">\n              <label for=\"podnaslov\" class=\"col-form-label\">Podnaslov:</label>\n              <input type=\"text\" class=\"form-control\" name=\"subtitle\" [(ngModel)]=\"dataApi.selectedPost.subtitle\" required>\n          </div>\n          <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n              <label for=\"autor\">Datum:</label>\n              <input type=\"date\" name=\"dateCreated\" class=\"form-control\" placeholder=\"Datum\" [(ngModel)]=\"dataApi.selectedPost.dateCreated\" required>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"autor\">Link slike:</label>\n                <input type=\"text\" name=\"photo\" class=\"form-control\" placeholder=\"photo\" [(ngModel)]=\"dataApi.selectedPost.photo\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"about\" class=\"col-form-label\">Blogg:</label>\n            <textarea class=\"form-control\" name=\"about\" [(ngModel)]=\"dataApi.selectedPost.about\" required></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" #btnClose data-dismiss=\"modal\">Close</button>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formPost.valid\">Save Post</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(dataApi) {
        this.dataApi = dataApi;
        this.selectedPost = this.dataApi.selectedPost;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.dataApi.getDate();
    };
    ModalComponent.prototype.onSavePost = function (postForm) {
        console.log('postFormId', postForm.value.id);
        if (postForm.value.id == null) {
            postForm.value.userUID = this.userUID;
            postForm.value.dateCreated = this.dataApi.date;
            this.dataApi.addPost(postForm.value);
        }
        else {
            postForm.value.date = this.dataApi.date;
            this.dataApi.updatePost(postForm.value);
        }
        postForm.resetForm();
        this.btnClose.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnClose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalComponent.prototype, "btnClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "userUID", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/component/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/component/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><span style=\"font-size: 2em;\"><i class=\"fab fa-blogger-b\"></i> </span>&nbsp;{{appName}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n        LOGGED: {{isLogged}}\n      <li class=\"nav-item\" *ngIf=\"isAdmin\">\n        <a class=\"nav-link\" routerLink=\"/admin/list\">Admin list\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <button class=\"btn btn-success float-right mb-3\" data-toggle=\"modal\" data-target=\"#modalPost\">New Post</button>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/register\">Register\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/profil\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/home\">Posts</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/bloggers\">Bloggers</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/login\">Login\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a href=\"#\" class=\"nav-link\" (click)=\"onLogOut()\">Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<app-modal [userUID]=\"userUID\"></app-modal>\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, afAuth, dataApi) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.appName = 'Bloggers';
        this.isLogged = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.getCurrentBlogger();
    };
    NavbarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                console.log('user logged');
                _this.isLogged = true;
            }
            else {
                console.log('user is not logged');
                _this.isLogged = false;
            }
        });
    };
    NavbarComponent.prototype.onLogOut = function () {
        this.afAuth.auth.signOut();
    };
    NavbarComponent.prototype.getCurrentBlogger = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            console.log('auth', auth);
            if (auth) {
                console.log(_this.isAdmin);
                _this.userUID = auth.uid;
                _this.authService.isUserAdmin(_this.userUID).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                });
            }
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/page-not-found/page-not-found.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/page-not-found/page-not-found.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/page-not-found/page-not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/page-not-found/page-not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/page-not-found/page-not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/component/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/component/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/component/post-detils/post-detils.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/post-detils/post-detils.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wb3N0LWRldGlscy9wb3N0LWRldGlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/post-detils/post-detils.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/post-detils/post-detils.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\">\n\n  <!-- Title -->\n  <h1 class=\"mt-4\">{{post.name}}</h1>\n\n  <!-- Author -->\n  <p class=\"lead\">\n    by\n    <a href=\"#\">{{blogger.name}}</a>\n  </p>\n\n  <hr>\n\n  <!-- Date/Time -->\n  <p>{{post.dateCreated}}</p>\n\n  <hr>\n\n  <!-- Preview Image -->\n  <img class=\"img-fluid rounded\" src=\"{{post.photo}}\" alt=\"\">\n\n  <hr>\n\n  <!-- Post Content -->\n  <p class=\"lead\">{{post.about}}</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae hic quos asperiores libero totam quae est saepe accusantium voluptatum id consequuntur ad natus nemo, in vel eligendi eaque! Animi.</p>\n  <hr>\n\n      </div>\n"

/***/ }),

/***/ "./src/app/component/post-detils/post-detils.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/post-detils/post-detils.component.ts ***!
  \****************************************************************/
/*! exports provided: PostDetilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetilsComponent", function() { return PostDetilsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");





var PostDetilsComponent = /** @class */ (function () {
    function PostDetilsComponent(dataApi, route, bloggerService) {
        this.dataApi = dataApi;
        this.route = route;
        this.bloggerService = bloggerService;
        this.post = {};
    }
    PostDetilsComponent.prototype.ngOnInit = function () {
        var idPost = this.route.snapshot.params['id'];
        this.getDetails(idPost);
    };
    PostDetilsComponent.prototype.getDetails = function (idPost) {
        var _this = this;
        this.dataApi.getOnePost(idPost).subscribe(function (post) {
            console.log('Detaljni POST', post);
            _this.post = post;
            _this.getBloggerDetail(post.userUID);
        });
    };
    PostDetilsComponent.prototype.getBloggerDetail = function (blogerID) {
        var _this = this;
        this.bloggerService.getOneBlogger(blogerID).subscribe(function (blogger) {
            _this.blogger = blogger;
            console.log(blogger);
        });
    };
    PostDetilsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-detils',
            template: __webpack_require__(/*! ./post-detils.component.html */ "./src/app/component/post-detils/post-detils.component.html"),
            styles: [__webpack_require__(/*! ./post-detils.component.css */ "./src/app/component/post-detils/post-detils.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_bloggers_service__WEBPACK_IMPORTED_MODULE_4__["BloggersService"]])
    ], PostDetilsComponent);
    return PostDetilsComponent;
}());



/***/ }),

/***/ "./src/app/component/users/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/users/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#login{\r\n  background: url('20.jpg') no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  top: -18px;\r\n  min-height: 700px;\r\n}\r\n#login div div div{\r\n  background-color: beige;\r\n  border-radius: 10px;\r\n}\r\n.form-control.login-user {\r\n    border: 0 solid rgb(60, 17, 179) !important;\r\n  }\r\n.btn-social{\r\nposition: relative;\r\npadding-left: 44px;\r\ntext-align: center;\r\nwhite-space: nowrap;\r\noverflow: hidden;\r\ncolor: #fff;\r\nborder-color: rgba(0,0,0,0.2);\r\ntext-overflow: ellipsis;\r\n  }\r\n.btn-facebook{\r\nbackground:#3b5998;\r\n  }\r\n.btn-google{\r\nbackground:#dd4b39;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUNBQXNEO0VBQ3RELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFHQTtJQUNJLDJDQUEyQztFQUM3QztBQUVBO0FBQ0Ysa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsNkJBQTZCO0FBQzdCLHVCQUF1QjtFQUNyQjtBQUNBO0FBQ0Ysa0JBQWtCO0VBQ2hCO0FBQ0E7QUFDRixrQkFBa0I7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbG9naW57XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzLzIwLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xOHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcbiNsb2dpbiBkaXYgZGl2IGRpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcclxuICAgIGJvcmRlcjogMCBzb2xpZCByZ2IoNjAsIDE3LCAxNzkpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLXNvY2lhbHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5wYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxud2hpdGUtc3BhY2U6IG5vd3JhcDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuY29sb3I6ICNmZmY7XHJcbmJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLmJ0bi1mYWNlYm9va3tcclxuYmFja2dyb3VuZDojM2I1OTk4O1xyXG4gIH1cclxuICAuYnRuLWdvb2dsZXtcclxuYmFja2dyb3VuZDojZGQ0YjM5O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/component/users/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/users/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_login\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formLogin=\"ngForm\" (submit)=\"onEmailLogin()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\n                <div class=\"form-group\">\n                  <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\"  required>\n                </div>\n                <div class=\"form-group\">\n                  <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\n                    required>\n                </div>\n                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n                <div class=\"form-group\">\n                  <a routerLink=\"/user/register\" class=\"form-control login-user\">Are you new ?</a>\n                </div>\n              </form>\n                <div class=\"form-group\">\n                  <button class=\"btn btn-social btn-block btn-facebook\" (click)=\"onLoginFb()\">\n                      <i class=\"fab fa-facebook-f\"></i>\n                    Facebook</button>\n                  <button class=\"btn btn-social btn-block btn-google\" (click)=\"onLoginGoogle()\">\n                  <i class=\"fab fa-google\"></i>\n                  Google</button>\n                </div>\n                <a href=\"#\" (click)=\"onLogOut()\">Logout</a>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/component/users/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/users/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.password = '';
        this.email = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onEmailLogin = function () {
        var _this = this;
        console.log('email', this.email);
        console.log('password', this.password);
        this.authService.loginEmailUser(this.email, this.password)
            .then(function (res) {
            _this.OnLoginRoute();
        }).catch(function (err) { return console.log('err', err.message); });
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            console.log('resUser', res);
            _this.OnLoginRoute();
        }).catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.onLoginFb = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            console.log('resUser', res);
            _this.OnLoginRoute();
        }).catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.onLogOut = function () {
        this.authService.logOutUser();
    };
    LoginComponent.prototype.OnLoginRoute = function () {
        this.router.navigate(['/']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/users/profil/modal-profil/modal-profil.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/component/users/profil/modal-profil/modal-profil.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2Vycy9wcm9maWwvbW9kYWwtcHJvZmlsL21vZGFsLXByb2ZpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/users/profil/modal-profil/modal-profil.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/component/users/profil/modal-profil/modal-profil.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalProfil\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n        Popunite profil\n        </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form name=\"formBlogger\" #formBlogger=\"ngForm\" (ngSubmit)=\"onSaveBlogger(formBlogger)\">\n          <input type=\"hidden\" name=\"id\" [(ngModel)]=\"blogger.id\">\n          <div class=\"form-group\">\n            <label for=\"ime\" class=\"col-form-label\">Ime</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"blogger.name\" >\n          </div>\n            <div class=\"form-group\">\n              <label for=\"facebook\">Unesite link vaseg Facebook profila</label>\n              <input [(ngModel)]=\"blogger.facebook\" type=\"text\" name=\"facebook\" class=\"form-control\" placeholder=\"Facebook\" >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"instagram\">Unesite link vaseg Instagram profila</label>\n              <input [(ngModel)]=\"blogger.instagram\" type=\"text\" name=\"instagram\" class=\"form-control\" placeholder=\"Instagram\" >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"twiter\">Unesite link vaseg Twiter profila</label>\n              <input [(ngModel)]=\"blogger.twiter\" type=\"text\" name=\"twiter\" class=\"form-control\" placeholder=\"Twiter\" >\n            </div>\n              <div class=\"form-group \">\n                <label for=\"photoURL\">Unesite link vase  profilne slike</label>\n                <input [(ngModel)]=\"blogger.photoURL\" type=\"text\" name=\"photoURL\" class=\"form-control\" placeholder=\"Link Profilne sllike\" >\n\n              </div>\n            <div class=\"form-group\">\n               <label for=\"about\" class=\"col-form-label\" >Napisite nesto o sebi:</label>\n              <textarea class=\"form-control\" name=\"about\" [(ngModel)]=\"blogger.about\" ></textarea>\n          </div>\n          <div class=\"modal-footer\">\n            <button id=\"btnCloseModal\" type=\"button\" class=\"btn btn-secondary\" #btnCloseModal data-dismiss=\"modal\">Odustani</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Sacuvaj izmene</button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/users/profil/modal-profil/modal-profil.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/users/profil/modal-profil/modal-profil.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProfilComponent", function() { return ModalProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");



var ModalProfilComponent = /** @class */ (function () {
    function ModalProfilComponent(bloggerService) {
        this.bloggerService = bloggerService;
    }
    ModalProfilComponent.prototype.ngOnInit = function () {
        console.log('modal', this.blogger);
    };
    ModalProfilComponent.prototype.onChangeBlogger = function (formBlogger) {
        console.log(formBlogger);
        console.log(this.blogger);
    };
    ModalProfilComponent.prototype.onSaveBlogger = function (formBlogger) {
        this.blogger = formBlogger.value;
        console.log(this.blogger);
        this.bloggerService.updateBlogger(this.blogger);
        this.btnClose.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalProfilComponent.prototype, "bloggerUID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalProfilComponent.prototype, "blogger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnCloseModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalProfilComponent.prototype, "btnClose", void 0);
    ModalProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-profil',
            template: __webpack_require__(/*! ./modal-profil.component.html */ "./src/app/component/users/profil/modal-profil/modal-profil.component.html"),
            styles: [__webpack_require__(/*! ./modal-profil.component.css */ "./src/app/component/users/profil/modal-profil/modal-profil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_2__["BloggersService"]])
    ], ModalProfilComponent);
    return ModalProfilComponent;
}());



/***/ }),

/***/ "./src/app/component/users/profil/profil.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/users/profil/profil.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** Sass Variables ****/\r\n\r\n#profil{\r\n  background: url('20.jpg') no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  min-height: 700px;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open Sans', sans-serif;\r\n  background: #333;\r\n}\r\n\r\n.container {\r\n  max-width: 900px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin: 0 auto;\r\n}\r\n\r\n.card-wrapper {\r\n  width: 400px;\r\n  height: 500px;\r\n  position: relative;\r\n}\r\n\r\n.card {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 350px;\r\n  height: 450px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-radius: 16px;\r\n  overflow: hidden;\r\n  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n}\r\n\r\n.card .card-image {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  background-color: #000;\r\n  transition: 0.5s;\r\n}\r\n\r\n.card:hover img {\r\n  opacity: 0.4;\r\n  transition: 0.5s;\r\n}\r\n\r\n.card:hover .card-image {\r\n  -webkit-transform: translateY(-100px);\r\n          transform: translateY(-100px);\r\n  transition: all 0.9s;\r\n}\r\n\r\n/**** Social Icons *****/\r\n\r\n.social-icons {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 3;\r\n  display: flex;\r\n}\r\n\r\n.social-icons li {\r\n  list-style: none;\r\n}\r\n\r\n.social-icons li a {\r\n  position: relative;\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  background: #fff;\r\n  font-size: 23px;\r\n  color: #333;\r\n  font-weight: bold;\r\n  margin: 0 6px;\r\n  transition: 0.4s;\r\n  -webkit-transform: translateY(200px);\r\n          transform: translateY(200px);\r\n  opacity: 0;\r\n}\r\n\r\n.card:hover .social-icons li a {\r\n  -webkit-transform: translateY(0px);\r\n          transform: translateY(0px);\r\n  opacity: 1;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  background: #000;\r\n  transition: 0.2s;\r\n}\r\n\r\n.social-icons li a:hover .fab {\r\n  color: #fff;\r\n}\r\n\r\n.social-icons li a .fab {\r\n  transition: 0.8s;\r\n}\r\n\r\n.social-icons li a .fab:hover {\r\n  -webkit-transform: rotateY(360deg);\r\n          transform: rotateY(360deg);\r\n  color: #fff;\r\n}\r\n\r\n.card:hover li:nth-child(1) a {\r\n  transition-delay: 0.1s;\r\n}\r\n\r\n.card:hover li:nth-child(2) a {\r\n  transition-delay: 0.2s;\r\n}\r\n\r\n.card:hover li:nth-child(3) a {\r\n  transition-delay: 0.3s;\r\n}\r\n\r\n.card:hover li:nth-child(4) a {\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n/**** Personal Details ****/\r\n\r\n.details {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: #fff;\r\n  width: 100%;\r\n  height: 120px;\r\n  z-index: 1;\r\n  padding: 10px;\r\n}\r\n\r\n.details h2 {\r\n  margin: 30px 0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\n.details h2 .job-title {\r\n  font-size: 1rem;\r\n  line-height: 2.5rem;\r\n  color: #333;\r\n  font-weight: 300;\r\n}\r\n\r\n.jane {\r\n  position: absolute;\r\n  bottom: -120px;\r\n  margin-top: 100px;\r\n  left: 0;\r\n  opacity: 0;\r\n  background: #fff;\r\n  width: 100%;\r\n  height: 120px;\r\n  z-index: 3;\r\n  padding: 10px;\r\n  transition: 0.4s;\r\n}\r\n\r\n.profile-two .social-icons li a {\r\n  border-radius: 50%;\r\n}\r\n\r\n.card:hover .p\r\nrofile-img--two {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n.card:hover .jane {\r\n  bottom: 0;\r\n  left: 0;\r\n  transition-delay: 0.5s;\r\n  opacity: 1;\r\n}\r\n\r\n.btn-update{\r\n  position: relative;\r\n  float: right;\r\n  top:30px;\r\n  margin-top:10px;\r\n  margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXJzL3Byb2ZpbC9wcm9maWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7O0FBRXpCO0VBQ0UsbUNBQXNEO0VBQ3RELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFDQSx3QkFBd0I7O0FBQ3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQSwyQkFBMkI7O0FBQzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsT0FBTztFQUNQLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2Vycy9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBTYXNzIFZhcmlhYmxlcyAqKioqL1xyXG5cclxuI3Byb2ZpbHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvMjAuanBnXCIpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY2FyZC13cmFwcGVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jYXJkIC5jYXJkLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uY2FyZDpob3ZlciBpbWcge1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkLWltYWdlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC45cztcclxufVxyXG4vKioqKiBTb2NpYWwgSWNvbnMgKioqKiovXHJcbi5zb2NpYWwtaWNvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zb2NpYWwtaWNvbnMgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNvY2lhbC1pY29ucyBsaSBhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDAgNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5jYXJkOmhvdmVyIC5zb2NpYWwtaWNvbnMgbGkgYSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG4uc29jaWFsLWljb25zIGxpIGE6aG92ZXIgLmZhYiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNvY2lhbC1pY29ucyBsaSBhIC5mYWIge1xyXG4gIHRyYW5zaXRpb246IDAuOHM7XHJcbn1cclxuLnNvY2lhbC1pY29ucyBsaSBhIC5mYWI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jYXJkOmhvdmVyIGxpOm50aC1jaGlsZCgxKSBhIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG59XHJcbi5jYXJkOmhvdmVyIGxpOm50aC1jaGlsZCgyKSBhIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcbi5jYXJkOmhvdmVyIGxpOm50aC1jaGlsZCgzKSBhIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbi5jYXJkOmhvdmVyIGxpOm50aC1jaGlsZCg0KSBhIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcbi8qKioqIFBlcnNvbmFsIERldGFpbHMgKioqKi9cclxuLmRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kZXRhaWxzIGgyIHtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGV0YWlscyBoMiAuam9iLXRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5qYW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4ucHJvZmlsZS10d28gLnNvY2lhbC1pY29ucyBsaSBhIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNhcmQ6aG92ZXIgLnBcclxucm9maWxlLWltZy0tdHdvIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG4uY2FyZDpob3ZlciAuamFuZSB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5idG4tdXBkYXRle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdG9wOjMwcHg7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/users/profil/profil.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/users/profil/profil.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"profil\">\n\n<button class=\"btn btn-danger float-right mb-3 btn-update\" data-toggle=\"modal\" data-target=\"#modalProfil\">Edit Profil</button>\n\n<div class=\"container\">\n\n<div class=\"card-wrapper\">\n\n      <div class=\"card profile-two\">\n\n        <div class=\"card-image profile-img--two\">\n          <img src=\"{{blogger.photoURL}}\" alt=\"profile two\" style=\"max-width: 100%;   max-height: 100%;\">\n        </div>\n\n        <ul class=\"social-icons\">\n          <li>\n            <a href=\"{{blogger.facebook}}\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"{{blogger.instagram}}\">\n              <i class=\"fab fa-instagram\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"{{blogger.twiter}}\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </li>\n        </ul>\n\n        <div class=\"details jane\">\n            <h2>{{blogger.name}}\n              <br>\n              <span class=\"job-title\">{{blogger.email}}</span>\n            </h2>\n            <p>{{blogger.about}}</p>\n        </div>\n    </div>\n </div><!-- END box wrapper -->\n\n </div><!-- END container -->\n <app-modal-profil [blogger]=\"blogger\"></app-modal-profil>\n\n</section>\n"

/***/ }),

/***/ "./src/app/component/users/profil/profil.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/users/profil/profil.component.ts ***!
  \************************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");




var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(authService, bloggerService) {
        this.authService = authService;
        this.bloggerService = bloggerService;
        this.blogger = {
            name: '',
            email: '',
            photoURL: '',
            facebook: '',
            twiter: '',
            roles: {}
        };
        this.blogger1 = {};
        this.providerId = null;
        this.bloggerUID = null;
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (blogger) {
            if (blogger) {
                _this.blogger.name = blogger.displayName;
                _this.blogger.email = blogger.email;
                _this.blogger.photoURL = blogger.providerData[0].photoURL;
                _this.providerId = blogger.providerData[0].providerId;
                _this.bloggerUID = blogger.uid;
                _this.getBlogger(_this.bloggerUID);
            }
        });
    };
    ProfilComponent.prototype.getBlogger = function (bloggerId) {
        var _this = this;
        this.bloggerService.getOneBlogger(bloggerId).subscribe(function (blogger) {
            _this.blogger = blogger;
            console.log('Blogger1', _this.blogger);
        });
    };
    ProfilComponent.prototype.changeProfilModal = function (blogger) {
        return this.blogger;
    };
    ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil',
            template: __webpack_require__(/*! ./profil.component.html */ "./src/app/component/users/profil/profil.component.html"),
            styles: [__webpack_require__(/*! ./profil.component.css */ "./src/app/component/users/profil/profil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_bloggers_service__WEBPACK_IMPORTED_MODULE_3__["BloggersService"]])
    ], ProfilComponent);
    return ProfilComponent;
}());



/***/ }),

/***/ "./src/app/component/users/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/users/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#register{\r\n  background: url('20.jpg') no-repeat;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  top: -18px;\r\n  min-height: 700px;\r\n}\r\n#register div div div{\r\n  background-color: beige;\r\n  border-radius: 10px;\r\n}\r\n.form-control.login-user {\r\n    border: 0px solid #fff !important;\r\n  }\r\n.btn-social{\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    border-color: rgba(0,0,0,0.2);\r\n    text-overflow: ellipsis;\r\n      }\r\n.btn-facebook{\r\n    background:#3b5998;\r\n      }\r\n.btn-google{\r\n    background:#dd4b39;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUNBQXNEO0VBQ3RELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztFQUNuQztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHVCQUF1QjtNQUNyQjtBQUNBO0lBQ0Ysa0JBQWtCO01BQ2hCO0FBQ0E7SUFDRixrQkFBa0I7TUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdXNlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jcmVnaXN0ZXJ7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzLzIwLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xOHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcbiNyZWdpc3RlciBkaXYgZGl2IGRpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wubG9naW4tdXNlciB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tc29jaWFse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1mYWNlYm9va3tcclxuICAgIGJhY2tncm91bmQ6IzNiNTk5ODtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLWdvb2dsZXtcclxuICAgIGJhY2tncm91bmQ6I2RkNGIzOTtcclxuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/component/users/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/users/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"register\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_register\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formRegister=\"ngForm\" (ngSubmit)=\"onRegisterUser()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                  {{msgError}}\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.email\" required\n                    minlength=\"8\">\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\n                  <div *ngIf=\"email.errors.minlength\">Email must be at least 8 characters</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\"\n                    required minlength=\"5\" maxlength=\"10\">\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\n                </div>\n                <hr>\n                <div class=\"form-group\">\n                  <h6>Unesite sliku :</h6>\n                  <input type=\"file\" accept=\".png , .jpg\" (change)=\"onUpload($event)\">\n                </div>\n                <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" role=\"progressbar\"\n                    [style.width]=\"(uploadProcenat | async)+'%'\">\n                  </div>\n                </div>\n                <br>\n                <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n                <button *ngIf=\"urlImage | async; else btnDisabled\"  type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">\n                    Register</button> \n                  <ng-template #btnDisabled>\n                        <button  disabled=true type=\"submit\" class=\"btn btn-lg btn-secondary btn-block\">\n                            Register</button> \n                   </ng-template>\n                <div class=\"form-group\">\n                  <a routerLink=\"/user/login\" class=\"form-control login-user\">Do you have account?</a>\n                </div>\n              </form>\n                <div class=\"form-group\">\n                  <button  class=\"btn btn-social btn-block btn-facebook\" (click)=\"onLoginFb()\">\n                    \n                      <i class=\"fab fa-facebook-f\"></i>\n                    Facebook</button>\n                  <button class=\"btn btn-social btn-block btn-google\" (click)=\"onLoginGoogle()\">\n                  <i class=\"fab fa-google\"></i>\n                  Google</button>\n                </div>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/component/users/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/users/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_6__);







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, storage) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.email = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onUpload = function (e) {
        var _this = this;
        console.log('subir', e);
        var id = Math.random().toString(36).substring(2);
        var file = e.target.files[0];
        this.filePath = "upload/profilnaSlika_" + id;
        var ref = this.storage.ref(this.filePath);
        var task = this.storage.upload(this.filePath, file);
        this.uploadProcenat = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
        console.log(this.uploadProcenat);
        console.log(this.urlImage);
    };
    RegisterComponent.prototype.onRegisterUser = function () {
        var _this = this;
        this.authService.registerUser(this.email, this.password)
            .then(function (res) {
            _this.authService.isAuth().subscribe(function (user) {
                if (user) {
                    console.log('User je logovan', user);
                    user.updateProfile({
                        displayName: 'Goran ',
                        photoURL: _this.filePath
                    }).then(function () {
                        _this.router.navigate(['home']);
                        console.log('user updated');
                    }).catch(function (err) { return console.log('error', _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_6__["error"]); });
                }
            });
        }).catch(function (err) { return console.log('err', err.message); });
    };
    RegisterComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            console.log('resUser', res);
            _this.OnLoginRoute();
        }).catch(function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.onLoginFb = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            console.log('resUser', res);
            _this.OnLoginRoute();
        }).catch(function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.OnLoginRoute = function () {
        this.router.navigate(['/home']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUser'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "inputImageUser", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/component/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afsAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) { return !!authState; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (auths) {
            if (!auths) {
                _this.router.navigate(['/user/login']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, toastr) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.toastr = toastr;
    }
    AuthService.prototype.registerUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) {
                resolve(userData),
                    _this.updateBloggerData(userData.user);
                _this.toastr.success('You are registered');
            }).catch(function (error) {
                console.log(reject(error));
                _this.toastr.warning(error);
            });
        });
    };
    AuthService.prototype.loginEmailUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginFacebookUser = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
            .then((function (bloggerDetails) {
            _this.updateBloggerData(bloggerDetails.user);
        }));
    };
    AuthService.prototype.loginGoogleUser = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider())
            .then((function (bloggerDetails) { return _this.updateBloggerData(bloggerDetails.user); }));
    };
    AuthService.prototype.logOutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.updateBloggerData = function (blogger) {
        var bloggerRef = this.afs.doc("bloggers/" + blogger.uid);
        console.log('podaci', blogger);
        var data = {
            name: blogger.displayName,
            photoURL: blogger.photoURL,
            id: blogger.uid,
            email: blogger.email
        };
        return bloggerRef.set(data, { merge: true });
    };
    AuthService.prototype.isUserAdmin = function (bloggerID) {
        return this.afs.doc("bloggers/" + bloggerID).valueChanges();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/bloggers.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/bloggers.service.ts ***!
  \**********************************************/
/*! exports provided: BloggersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersService", function() { return BloggersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BloggersService = /** @class */ (function () {
    function BloggersService(afs) {
        this.afs = afs;
        this.currentBlogger = {
            id: null
        };
    }
    BloggersService.prototype.getAllBloggers = function () {
        this.bloggerCollection = this.afs.collection('bloggers');
        return this.bloggers = this.bloggerCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    BloggersService.prototype.getOneBlogger = function (bloggerId) {
        this.bloggerDoc = this.afs.doc("bloggers/" + bloggerId);
        return this.blogger = this.bloggerDoc.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            var data = action.payload.data();
            data.id = action.payload.id;
            console.log('service blogger', data);
            return data;
        }));
    };
    BloggersService.prototype.updateBlogger = function (blogger) {
        var idBlogger = blogger.id;
        this.bloggerDoc = this.afs.doc("bloggers/" + idBlogger);
        this.bloggerDoc.update(blogger);
    };
    BloggersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], BloggersService);
    return BloggersService;
}());



/***/ }),

/***/ "./src/app/services/data-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/bloggers.service */ "./src/app/services/bloggers.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var DataApiService = /** @class */ (function () {
    function DataApiService(afs, bloggerService, toastr) {
        this.afs = afs;
        this.bloggerService = bloggerService;
        this.toastr = toastr;
        this.selectedPost = {
            id: null
        };
        this.posts2 = [];
    }
    DataApiService.prototype.getAllPosts = function () {
        this.postsCollection = this.afs.collection('posts');
        return this.posts = this.postsCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DataApiService.prototype.getOnePost = function (idPost) {
        this.postDoc = this.afs.doc("posts/" + idPost);
        return this.post = this.postDoc.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    };
    DataApiService.prototype.addPost = function (post) {
        var _this = this;
        this.postsCollection.add(post)
            .then(function () { return _this.toastr.success('Add post'); })
            .catch(function (err) { return _this.toastr.warning(err); });
    };
    DataApiService.prototype.updatePost = function (post) {
        var _this = this;
        var idPost = post.id;
        this.postDoc = this.afs.doc("posts/" + idPost);
        this.postDoc.update(post)
            .then(function () { return _this.toastr.success('Edit Post'); })
            .catch(function (err) { return _this.toastr.error(err); });
    };
    DataApiService.prototype.deletePost = function (idPost) {
        var _this = this;
        this.postDoc = this.afs.doc("posts/" + idPost);
        this.postDoc.delete()
            .then(function (succ) { return _this.toastr.warning('Deleted Posts'); })
            .catch(function (err) { return _this.toastr.error(err); });
    };
    DataApiService.prototype.getDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        var yyyy = today.getFullYear();
        var today1 = mm + '/' + dd + '/' + yyyy;
        this.date = today1;
    };
    DataApiService.prototype.getPostBloggers = function () {
        var _this = this;
        var postBloggers = this.afs.collection('posts');
        return postBloggers.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (posts) {
            return _this.afs.doc("bloggers/" + posts[0].userUID)
                .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (bloggers2) { return Object.assign({}, { posts: posts, bloggers2: bloggers2 }); }));
        }));
    };
    DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_bloggers_service__WEBPACK_IMPORTED_MODULE_4__["BloggersService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyACrCF7Q0zjcM3hNzTdU7gxNEayiOh7UDc',
        authDomain: 'bloggerscloud-45ddf.firebaseapp.com',
        databaseURL: 'https://bloggerscloud-45ddf.firebaseio.com',
        projectId: 'bloggerscloud-45ddf',
        storageBucket: 'bloggerscloud-45ddf.appspot.com',
        messagingSenderId: '528566735332'
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wuki\Desktop\zavrsni rad\bloggers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map