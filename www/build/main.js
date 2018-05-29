webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ss = {};
        this.bg = "../assets/imgs/samp1.jpg";
        this.startSlides = false;
        this.resetFlag = false;
        this.lang = '';
        this.ss.imgs = [];
        console.log(navParams.get('id'));
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var self = this;
        var imgld = new Image;
        imgld.onload = function () {
            setTimeout(function () {
                self.launchSlides();
            }, 2000);
        };
        imgld.src = this.bg;
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.launchSlides = function () {
        var _this = this;
        var preload = localStorage.preload.split(",");
        this.ss.imgs = this.ss.imgs.concat(preload);
        this.startSlides = true;
        setTimeout(function () {
            _this.slider.autoplay = 2000;
        }, 500);
    };
    HomePage.prototype.check = function ($event) {
        if (this.resetFlag)
            return;
        if ($event.realIndex == 0) {
        }
    };
    HomePage.prototype.proceedFlow = function (lang) {
        this.lang = lang;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/home/home.html"*/'<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="main">\n	 <!-- [ngStyle]="{\'background-image\':\'url(\'+ss?.imgs[bgInd]+\')\'}" -->\n		<img class="bg" [src]="bg" [ngClass]="{\'blocked\':startSlides}"/>\n		<ion-slides autoplay="3000" loop="true" speed="2000" effect="fade" initialSlide="0" *ngIf="startSlides">\n			<!--  (ionSlideWillChange)="check($event)" -->\n			<ion-slide *ngFor="let img of ss?.imgs; let i = index;">\n				<img [src]="img">\n		    </ion-slide>\n		</ion-slides>\n		<div class="part1" *ngIf="lang?.length <= 0 && purchased && !postpurchase">\n			<p class="text-top">\n				Congratulations on your <br/>\n				polo ralph lauren purchase.\n			</p>\n\n			<h2 (click)="launchSlides()">Welcome</h2>\n			<ion-row>\n				<ion-col col-6 (click)="proceedFlow(\'eng\')">\n					<p class="text">\n						ENGLISH\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n				<ion-col col-6 (click)="proceedFlow(\'pinyin\')">\n					<p class="text">\n						漢語\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		</div>\n		<!-- end of part 1 -->\n\n		<div class="part2" *ngIf="lang?.length > 0 && purchased && !postpurchase">\n			<span class="texter">\n				<p class="sm-txt">\n					Choose an occasion to win a\n				</p>\n				<p class="lrg-txt">\n					Polo Ralph Lauren<br/>\n					Wardrobe\n				</p>\n				<p class="sm-txt">\n					tailored for you specifically<br/>\n					for that event.\n				</p>\n			</span>\n			<ion-row>\n				<ion-col col-12 (click)="proceedFlow(\'eng\')">\n					<p class="text">\n						PROCEED\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		</div>\n		<!-- end of part 2 -->\n\n		 <div class="part2 unpurchased" *ngIf = "!purchased && !postpurchase">\n			\n			<span class="texter">\n				<p class="sm-txt">\n					Unlock an\n				</p>\n				<p class="lrg-txt">\n					Exclusive<br/>\n					Experience\n				</p>\n				<p class="sm-txt">\n					when you purchase this<br/>\n					classic fit polo shirt.\n				</p>\n			</span>\n			<ion-row>\n				<ion-col col-12>\n					<p class="text">\n						PROCEED TO OUR WEBSITE\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		 </div>\n		<!-- end of unpurchased -->\n\n\n		 <div class="part2 postpurchase" *ngIf = "postpurchase">\n			\n			<span class="texter">\n				<p class="lrg-txt">\n					Congratulations\n				</p>\n				<p class="sm-txt">\n					on your ralph lauren purchase\n				</p>\n			</span>\n			<ion-row>\n				<ion-col col-12>\n					<p class="text">\n						PROCEED TO OUR WEBSITE\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		 </div>\n		<!-- end of postpurchase -->\n\n	</section>\n</ion-content>\n'/*ion-inline-end:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_evt_evt__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wardrobe_wardrobe__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// providers

// pages




var pages = [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__["a" /* RegistrationPage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_wardrobe_wardrobe__["a" /* WardrobePage */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: pages,
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__["a" /* RegistrationPage */], name: 'RegistrationPage', segment: 'register' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_wardrobe_wardrobe__["a" /* WardrobePage */], name: 'WardrobePage', segment: 'wardrobe' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: pages,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__providers_evt_evt__["a" /* EvtProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvtProvider = /** @class */ (function () {
    function EvtProvider(http) {
        this.http = http;
        console.log(EVT);
    }
    EvtProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EvtProvider);
    return EvtProvider;
}());

//# sourceMappingURL=evt.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.images = [
            "../assets/imgs/Slides-2.jpg",
            "../assets/imgs/Slides-3.jpg",
            "../assets/imgs/Slides-5.jpg",
            "../assets/imgs/Slides-6.jpg",
            "../assets/imgs/Slides-7.jpg"
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.preloader();
        });
    }
    MyApp.prototype.preloader = function () {
        this.images.map(function (a) {
            var i = new Image();
            i.src = a;
        });
        localStorage.preload = this.images;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lei/Documents/projects/dummyapp/rl-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/lei/Documents/projects/dummyapp/rl-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topSizes = ['S', 'M', 'L'];
        this.pantsSizes = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        this.shoeSizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/registration/registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="form">\n		<p class="title-top">\n			a few details please?<br/>\n			it will be kept confidential\n		</p>\n\n		<ion-row>\n			<ion-col col-4>\n				<a class="label">\n					title\n				</a>\n				<span class="select-container">\n					<select name="gender">\n						<option value="mr">Mr.</option>\n						<option value="ms">Ms.</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n			<ion-col col-8>\n				<a class="label">\n					surname\n				</a>\n				<input type="text" name="surname"/>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<a class="label">\n					email\n				</a>\n				<input type="email" name="email"/>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<a class="label">\n					age range\n				</a>\n				<span class="select-container">\n					<select name="agerange">\n						<option value="2636">26 - 36 years old</option>\n						<option value="3747">37 - 47 years old</option>\n						<option value="4858">48 - 58 years old</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<p>fitting details</p>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-4>\n				<a class="label">\n					top size\n				</a>\n				<span class="select-container">\n					<select name="topsize">\n						<option *ngFor = "let ts of topSizes" value="{{ts}}">{{ts}}</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n			<ion-col col-4>\n				<a class="label">\n					pants size\n				</a>\n				<span class="select-container">\n					<select name="pantssize">\n						<option *ngFor = "let ps of pantsSizes" value="{{ps}}">{{ps}}"</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n			<ion-col col-4>\n				<a class="label">\n					shoe size\n				</a>\n				<span class="select-container">\n					<select name="shoesize">\n						<option *ngFor = "let ss of shoeSizes" value="ss">{{ss}} US</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n		</ion-row>\n\n		<p class="note-bottom">\n			By tapping submit, you confirm that you <br/>\n			have read and agreed to the <a class="link" href="">Terms and Conditions</a>\n		</p>\n\n\n			<ion-row class="footer">\n				<ion-col col-12 (click)="proceed()">\n					<p class="text">\n						SUBMIT\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		\n	</section>\n</ion-content>\n'/*ion-inline-end:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WardrobePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WardrobePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WardrobePage = /** @class */ (function () {
    function WardrobePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WardrobePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WardrobePage');
    };
    WardrobePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wardrobe',template:/*ion-inline-start:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/wardrobe/wardrobe.html"*/'<ion-content >\n	<ion-slides pager direction="vertical">\n\n	  <ion-slide class="passage1">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>Sunday<br>Beach Classics</h2>\n			</div>\n			<div class="navigation">\n				<p>\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage2">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>Opening<br>Night Mod</h2>\n			</div>\n			<div class="navigation">\n				<p>\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage3">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>A Casual<br>Chic Holiday</h2>\n			</div>\n			<div class="navigation">\n				<p>\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage4">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>Explorers of<br>Leisure</h2>\n			</div>\n			<div class="navigation">\n				<p class="text">SELECT</p>\n				<p class="caret" ><ion-icon name="ios-arrow-forward"></ion-icon> </p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage5">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>A Professional<br>Fit</h2>\n			</div>\n			<div class="navigation">\n				<p>\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n\n	 </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/wardrobe/wardrobe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], WardrobePage);
    return WardrobePage;
}());

//# sourceMappingURL=wardrobe.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map