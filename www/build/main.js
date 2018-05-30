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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passage_select_passage_select__ = __webpack_require__(276);
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
        this.purchased = true;
        this.postpurchase = false;
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
    HomePage.prototype.ionViewWillLeave = function () {
        clearTimeout(this.timeout);
    };
    HomePage.prototype.launchSlides = function () {
        var _this = this;
        var preload = localStorage.preload.split(",");
        this.ss.imgs = this.ss.imgs.concat(preload);
        this.startSlides = true;
        this.timeout = setTimeout(function () {
            try {
                _this.slider.autoplay = 2000;
            }
            catch (e) {
                console.info(e);
            }
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
    HomePage.prototype.toPassage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__passage_select_passage_select__["a" /* PassageSelectPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/home/home.html"*/'<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="main">\n	 <!-- [ngStyle]="{\'background-image\':\'url(\'+ss?.imgs[bgInd]+\')\'}" -->\n		<img class="bg" [src]="bg" [ngClass]="{\'blocked\':startSlides}"/>\n		<ion-slides autoplay="3000" loop="true" speed="2000" effect="fade" initialSlide="0" *ngIf="startSlides">\n			<!--  (ionSlideWillChange)="check($event)" -->\n			<ion-slide *ngFor="let img of ss?.imgs; let i = index;">\n				<img [src]="img">\n		    </ion-slide>\n		</ion-slides>\n		<div class="part1" *ngIf="lang?.length <= 0 && purchased && !postpurchase">\n			<p class="text-top">\n				Congratulations on your <br/>\n				polo ralph lauren purchase.\n			</p>\n\n			<h2 (tap)="launchSlides()">Welcome<br/>\n				<a class="small">歡迎</a>\n			</h2>\n			<ion-row>\n				<ion-col col-6 (tap)="proceedFlow(\'eng\')">\n					<p class="text">\n						ENGLISH\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n				<ion-col col-6 (tap)="proceedFlow(\'pinyin\')">\n					<p class="text">\n						中文\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		</div>\n		<!-- end of part 1 -->\n\n		<div class="part2" *ngIf="lang?.length > 0 && purchased && !postpurchase">\n			<span class="texter">\n				<p class="sm-txt">\n					Choose an occasion to win a\n				</p>\n				<p class="lrg-txt">\n					Polo Ralph Lauren<br/>\n					Wardrobe\n				</p>\n				<p class="sm-txt">\n					tailored for you specifically<br/>\n					for that event.\n				</p>\n			</span>\n			<ion-row>\n				<ion-col col-12 (tap)="toPassage()">\n					<p class="text">\n						PROCEED\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		</div>\n		<!-- end of part 2 -->\n\n		 <div class="part2 unpurchased" *ngIf = "!purchased && !postpurchase">\n			\n			<span class="texter">\n				<p class="sm-txt">\n					Unlock an\n				</p>\n				<p class="lrg-txt">\n					Exclusive<br/>\n					Experience\n				</p>\n				<p class="sm-txt">\n					when you purchase this<br/>\n					classic fit polo shirt.\n				</p>\n			</span>\n			<ion-row>\n				<ion-col col-12>\n					<p class="text">\n						PROCEED TO OUR WEBSITE\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		 </div>\n		<!-- end of unpurchased -->\n\n\n		 <div class="part2 postpurchase" *ngIf = "postpurchase">\n			\n			<span class="texter">\n				<p class="lrg-txt">\n					Congratulations\n				</p>\n				<p class="sm-txt">\n					on your ralph lauren purchase\n				</p>\n			</span>\n			<ion-row>\n				<ion-col col-12>\n					<p class="text">\n						PROCEED TO OUR WEBSITE\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		 </div>\n		<!-- end of postpurchase -->\n\n	</section>\n</ion-content>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WardrobePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WardrobePage = /** @class */ (function () {
    function WardrobePage(navCtrl, navParams, myElement) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myElement = myElement;
        this.selection = {
            "sunday-beach": "../assets/imgs/passages/BGSundayBeachClassics.jpg",
            "opening-night": "../assets/imgs/passages/BGOpeningNightMod.jpg",
            "casual-chic": "../assets/imgs/passages/BGACasualChicHoliday.jpg",
            "explorers-leisure": "../assets/imgs/passages/BGExplorersOfLeisure.jpg",
            "professional-fit": "../assets/imgs/passages/BGAProfessionalFit.jpg"
        };
    }
    WardrobePage.prototype.ionViewDidLoad = function () {
    };
    WardrobePage.prototype.ionViewWillEnter = function () {
        var activeSlide = this.navParams.get("activeSlide");
        this.slides.slideTo(activeSlide);
    };
    WardrobePage.prototype.ngOnInit = function () {
    };
    WardrobePage.prototype.choose = function (garment) {
        localStorage.wardrobe = this.selection[garment];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]) === "function" && _a || Object)
    ], WardrobePage.prototype, "slides", void 0);
    WardrobePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wardrobe',template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/wardrobe/wardrobe.html"*/'<ion-content >\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<ion-slides pager direction="vertical">\n\n	  <ion-slide class="passage1">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>Sunday<br>Beach Classics</h2>\n			</div>\n			<div class="navigation">\n				<p (tap)="choose(\'sunday-beach\')">\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage2">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>Opening<br>Night Mod</h2>\n			</div>\n			<div class="navigation">\n				<p (tap)="choose(\'opening-night\')">\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage3">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>A Casual<br>Chic Holiday</h2>\n			</div>\n			<div class="navigation">\n				<p (tap)="choose(\'casual-chic\')">\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage4">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>Explorers of<br>Leisure</h2>\n			</div>\n			<div class="navigation">\n				<p class="text" (tap)="choose(\'explorers-leisure\')">SELECT</p>\n				<p class="caret" ><ion-icon name="ios-arrow-forward"></ion-icon> </p>\n			</div>\n		  </div>\n	  </ion-slide>\n	  <ion-slide class="passage5">\n	      <div class="segment">\n			<div class="content vertical-center">\n				<h2>A Professional<br>Fit</h2>\n			</div>\n			<div class="navigation">\n				<p (tap)="choose(\'professional-fit\')">\n					SELECT<br>\n					<ion-icon name="ios-arrow-forward"></ion-icon>\n				</p>\n			</div>\n		  </div>\n	  </ion-slide>\n\n	 </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/wardrobe/wardrobe.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _d || Object])
    ], WardrobePage);
    return WardrobePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=wardrobe.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thank_you_thank_you__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
;
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topSizes = ['S', 'M', 'L'];
        this.pantsSizes = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        this.shoeSizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
        this.userData = { email: "", lastName: "", gender: "mr", age: "2636" };
        this.fittings = { top: "L", pants: 33, shoe: 7.5 };
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage.prototype.proceed = function () {
        //submit form
        localStorage.userData = JSON.stringify(this.userData);
        localStorage.fittings = JSON.stringify(this.fittings);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__thank_you_thank_you__["a" /* ThankYouPage */]);
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/registration/registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="form">\n		<p class="title-top">\n			a few details please?<br/>\n			it will be kept confidential\n		</p>\n\n		<ion-row>\n			<ion-col col-4>\n				<a class="label">\n					title\n				</a>\n				<span class="select-container">\n					<select name="gender" [(ngModel)] = "userData.gender">\n						<option value="mr">Mr.</option>\n						<option value="ms">Ms.</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n			<ion-col col-8>\n				<a class="label">\n					surname\n				</a>\n				<input type="text" name="surname" [(ngModel)] = "userData.lastName"/>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<a class="label">\n					email\n				</a>\n				<input type="email" name="email" [(ngModel)] = "userData.email"/>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<a class="label">\n					age range\n				</a>\n				<span class="select-container">\n					<select name="agerange"  [(ngModel)] = "userData.age">\n						<option value="2636">26 - 36 years old</option>\n						<option value="3747">37 - 47 years old</option>\n						<option value="4858">48 - 58 years old</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n				<p>fitting details</p>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-4>\n				<a class="label">\n					top size\n				</a>\n				<span class="select-container">\n					<select name="topsize" [(ngModel)] = "fittings.top">\n						<option *ngFor = "let ts of topSizes" value="{{ts}}">{{ts}}</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n			<ion-col col-4>\n				<a class="label">\n					pants size\n				</a>\n				<span class="select-container">\n					<select name="pantssize" [(ngModel)] = "fittings.pants">\n						<option *ngFor = "let ps of pantsSizes" value="{{ps}}">{{ps}}"</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n			<ion-col col-4>\n				<a class="label">\n					shoe size\n				</a>\n				<span class="select-container">\n					<select name="shoesize" [(ngModel)] = "fittings.shoe">\n						<option *ngFor = "let ss of shoeSizes" value="{{ss}}">{{ss}} US</option>\n					</select>\n					<ion-icon ios="ios-arrow-down" md="ios-arrow-down"></ion-icon>\n				</span>\n			</ion-col>\n		</ion-row>\n\n		<p class="note-bottom">\n			By tapping submit, you confirm that you <br/>\n			have read and agreed to the <a class="link" href="">Terms and Conditions</a>\n		</p>\n\n\n			<ion-row class="footer">\n				<ion-col col-12 (tap)="proceed()">\n					<p class="text">\n						SUBMIT\n					</p>\n					<p class="caret">\n						<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n					</p>\n				</ion-col>\n			</ion-row>\n		\n	</section>\n</ion-content>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thank_you2_thank_you2__ = __webpack_require__(198);
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
 * Generated class for the ThankYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.filled = "../assets/imgs/star-filled.svg";
        this.empty = "../assets/imgs/star-empty.svg";
        this.scores = { q1: 0, q2: 0, q3: 0 };
        this.img = "";
        this.img = localStorage.wardrobe || {};
    }
    ThankYouPage.prototype.ngAfterViewInit = function () {
        var self = this;
        //this.mnc.open(this.menu.toggle())
        setTimeout(function () {
            self.menu.open();
        }, 3000);
    };
    ThankYouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankYou2Page');
    };
    ThankYouPage.prototype.setScore = function (text, score) {
        this.scores[text] = score;
        console.log(this.scores);
    };
    ThankYouPage.prototype.lastPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__thank_you2_thank_you2__["a" /* ThankYou2Page */]);
    };
    ThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you',template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/thank-you/thank-you.html"*/'<ion-menu [content]="mycontent" side="right" type="push" enabled="true" swipeEnabled="false">\n	<ion-content>\n		<img id="logo" src="../assets/imgs/Logo.svg"/>\n		<section class="body">\n			<hr id="top-bar">\n\n			<!-- item 1 -->\n			<span class="item">\n				<p class="question">\n					&quot;This experience makes me want to purchase Ralph Lauren products again.&quot;\n				</p>\n				<span class="stars">\n					<div class="star">\n						<img (tap)="setScore(\'q1\',1)" [src]="(scores?.q1<=0 ? empty : filled)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q1\',2)" [src]="(scores?.q1>=2 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q1\',3)" [src]="(scores?.q1>=3 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q1\',4)" [src]="(scores?.q1>=4 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q1\',5)" [src]="(scores?.q1>=5 ? filled : empty)"/>\n					</div>\n				</span>\n			</span>\n			<!-- end of item 1 -->\n\n\n			<!-- item 2 -->\n			<span class="item">\n				<p class="question">\n					&quot;This experience brought me closer to the essence of Ralph Lauren.&quot;\n				</p>\n				<span class="stars">\n					<div class="star">\n						<img (tap)="setScore(\'q2\',1)" [src]="(scores?.q2<=0 ? empty : filled)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q2\',2)" [src]="(scores?.q2>=2 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q2\',3)" [src]="(scores?.q2>=3 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q2\',4)" [src]="(scores?.q2>=4 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q2\',5)" [src]="(scores?.q2>=5 ? filled : empty)"/>\n					</div>\n				</span>\n			</span>\n			<!-- end of item 2 -->\n\n			<!-- item 3 -->\n			<span class="item">\n				<p class="question">\n					&quot;This experience makes me want to scan the QR code to unlock more Ralph Lauren passages.&quot;\n				</p>\n				<span class="stars">\n					<div class="star">\n						<img (tap)="setScore(\'q3\',1)" [src]="(scores?.q3<=0 ? empty : filled)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q3\',2)" [src]="(scores?.q3>=2 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q3\',3)" [src]="(scores?.q3>=3 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q3\',4)" [src]="(scores?.q3>=4 ? filled : empty)"/>\n					</div>\n\n					<div class="star">\n						<img (tap)="setScore(\'q3\',5)" [src]="(scores?.q3>=5 ? filled : empty)"/>\n					</div>\n				</span>\n			</span>\n			<!-- end of item 3 -->\n\n		<ion-row class="footer">\n			<ion-col col-12 (tap)="lastPage()">\n				<p class="text">\n					SUBMIT\n				</p>\n				<p class="caret">\n					<ion-icon ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n				</p>\n			</ion-col>\n		</ion-row>\n\n		</section>\n\n	</ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="ThankYou2Page"></ion-nav>\n\n<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="main" [ngStyle]="{\'background-image\':\'url(\'+img+\')\'}">\n		<p class="content" (tap)="menu.open()">\n			Thank You.<br/>\n			<a class="invite">\n				We invite you to rate your <br/>\n				Polo Ralph Lauren experience\n			</a>\n		</p>\n\n		\n	</section>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/thank-you/thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], ThankYouPage);
    return ThankYouPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYou2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the ThankYou2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankYou2Page = /** @class */ (function () {
    function ThankYou2Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.salutation = "mr";
        this.name = "Maya";
    }
    ThankYou2Page.prototype.ngAfterViewInit = function () {
        var dt = JSON.parse(localStorage.userData);
        this.salutation = dt.gender;
        this.name = dt.lastName;
    };
    ThankYou2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankYou2Page');
    };
    ThankYou2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you2',template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/thank-you2/thank-you2.html"*/'<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n\n\n	<p class="content">\n		Thanks and congratulations,<br/><a class="cap">{{salutation}}</a>. <a class="cap">{{name}}</a>. <br/>\n		Welcome to the exclusive world of Ralph Lauren.\n	</p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/thank-you2/thank-you2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ThankYou2Page);
    return ThankYou2Page;
}());

//# sourceMappingURL=thank-you2.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_evt_evt__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_thank_you2_thank_you2__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_thank_you_thank_you__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_wardrobe_wardrobe__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_passage_select_passage_select__ = __webpack_require__(276);
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
    __WEBPACK_IMPORTED_MODULE_10__pages_thank_you_thank_you__["a" /* ThankYouPage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_thank_you2_thank_you2__["a" /* ThankYou2Page */],
    __WEBPACK_IMPORTED_MODULE_11__pages_wardrobe_wardrobe__["a" /* WardrobePage */],
    __WEBPACK_IMPORTED_MODULE_12__pages_passage_select_passage_select__["a" /* PassageSelectPage */]
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
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_thank_you_thank_you__["a" /* ThankYouPage */], name: 'ThankYouPage', segment: 'thank-you' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_thank_you2_thank_you2__["a" /* ThankYou2Page */], name: 'ThankYou2Page', segment: 'thank-you-2' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_wardrobe_wardrobe__["a" /* WardrobePage */], name: 'WardrobePage', segment: 'wardrobe' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_passage_select_passage_select__["a" /* PassageSelectPage */], name: 'PassageSelectPage', segment: 'passage' }
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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(274);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        this.slides = [
            "../assets/imgs/Slides-2.jpg",
            "../assets/imgs/Slides-3.jpg",
            "../assets/imgs/Slides-5.jpg",
            "../assets/imgs/Slides-6.jpg",
            "../assets/imgs/Slides-7.jpg"
        ];
        this.images = [
            "../assets/imgs/bg-ender.jpg",
            "../assets/imgs/bg-registration.jpg",
            "../assets/imgs/bg-survey.jpg",
            "../assets/imgs/star-empty.svg",
            "../assets/imgs/star-filled.svg",
            "../assets/imgs/passages/BGACasualChicHoliday.jpg",
            "../assets/imgs/passages/BGAProfessionalFit.jpg",
            "../assets/imgs/passages/BGExplorersOfLeisure.jpg",
            "../assets/imgs/passages/BGOpeningNightMod.jpg",
            "../assets/imgs/passages/BGPassageSelection.jpg",
            "../assets/imgs/passages/BGSundayBeachClassics.jpg",
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.preloader(_this.slides, "slides");
            _this.preloader(_this.images);
        });
    }
    MyApp.prototype.preloader = function (arr, name) {
        if (arr === void 0) { arr = []; }
        if (name === void 0) { name = ""; }
        Promise.all(arr.map(function (a) {
            var i = new Image();
            i.src = a;
        })).then(function (a) {
            if (name != "" && name.trim().length > 0)
                localStorage.preload = arr;
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassageSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wardrobe_wardrobe__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassageSelectPage = /** @class */ (function () {
    function PassageSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PassageSelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PassageSelectPage');
    };
    PassageSelectPage.prototype.choose = function (option) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__wardrobe_wardrobe__["a" /* WardrobePage */], { activeSlide: option });
    };
    PassageSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-passage-select',template:/*ion-inline-start:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/passage-select/passage-select.html"*/'<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="main">\n		<ion-row class="vertical-center" (tap)="choose(0)">\n			<h2>Sunday<br>Beach Classics</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center" (tap)="choose(1)">\n			<h2>Opening<br>Night Mod</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center" (tap)="choose(2)">\n			<h2>A Casual<br>Chic Holiday</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center" (tap)="choose(3)">\n			<h2>Explorers of<br>Leisure</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center" (tap)="choose(4)">\n			<h2>A Professional<br>Fit</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lei/Documents/projects/dummyapp/rl-app/src/pages/passage-select/passage-select.html"*/,
=======
            selector: 'page-passage-select',template:/*ion-inline-start:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/passage-select/passage-select.html"*/'<ion-content>\n	<img id="logo" src="../assets/imgs/Logo.svg"/>\n	<section class="main">\n		<ion-row class="vertical-center">\n			<h2>Sunday<br>Beach Classics</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center">\n			<h2>Opening<br>Night Mod</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center">\n			<h2>A Casual<br>Chic Holiday</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center">\n			<h2>Explorers of<br>Leisure</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n		<ion-row class="vertical-center">\n			<h2>A Professional<br>Fit</h2>\n			<ion-icon name="ios-arrow-forward"></ion-icon>\n		</ion-row>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/raysantos/ralph-lauren-dev/ralph-lauren-dev/src/pages/passage-select/passage-select.html"*/,
>>>>>>> master
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], PassageSelectPage);
    return PassageSelectPage;
    var _a, _b;
}());

//# sourceMappingURL=passage-select.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map