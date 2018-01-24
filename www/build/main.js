webpackJsonp([0],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_admob_free_provider__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, platform, admobFree) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.admobFree = admobFree;
        this.bannerSizeOpts = {};
        this.bannerAtTop = false;
        this.bannerOverlap = true;
        this.adAutoShow = false;
        //console.log(this.admobFree.bannerSizes[0]['android']);
        this.platform.ready().then(function () {
            if (_this.platform.is('android')) {
                _this.bannerSizeOpts = _this.admobFree.bannerSizes[0]['android'];
            }
            else if (_this.platform.is('android')) {
                _this.bannerSizeOpts = _this.admobFree.bannerSizes[1]['ios'];
            }
            _this.keys = Object.keys(_this.bannerSizeOpts);
        });
    }
    HomePage.prototype.prepareBanner = function () {
        this.admobFree.bannerConfig = {
            size: this.bannerSize,
            bannerAtTop: this.bannerAtTop,
            // overlap: this.bannerOverlap, // Not sure if deprecated, it bugs out if set to 'false' then back to 'true'. Waiting confirmation from developer.
            autoShow: this.adAutoShow
        };
        this.admobFree.prepareBanner();
        console.log('prepareBanner() called.');
    };
    HomePage.prototype.showBanner = function () {
        this.admobFree.bannerConfig = {
            size: this.bannerSize,
            bannerAtTop: this.bannerAtTop,
            // overlap: this.bannerOverlap, // Not sure if deprecated, it bugs out if set to 'false' then back to 'true'. Waiting confirmation from developer.
            autoShow: true
        };
        this.admobFree.showBanner();
        console.log('showBanner() called.');
    };
    HomePage.prototype.hideBanner = function () {
        this.admobFree.hideBanner();
        console.log('hideBanner() called.');
    };
    HomePage.prototype.removeBanner = function () {
        this.admobFree.removeBanner();
        console.log('removeBanner() called.');
    };
    HomePage.prototype.prepareInterstitial = function () {
        this.admobFree.interstitialConfig = {
            autoShow: this.adAutoShow
        };
        this.admobFree.prepareInterstitial();
        console.log('prepareInterstitial() called.');
    };
    HomePage.prototype.showInterstitial = function () {
        this.admobFree.interstitialConfig = {
            autoShow: this.adAutoShow
        };
        this.admobFree.showInterstitial();
        console.log('showInterstitial() called.');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Катя\Admob\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter test</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button><br>\n  <ion-item>\n    <ion-input type="text" placeholder="Input1" id="inp1" [(ngModel)]="inp1" ></ion-input>\n  </ion-item>\n <br>\n   <ion-item>\n    <ion-input type="text" placeholder="Input2" id="inp2" [(ngModel)]="inp2" ></ion-input>\n  </ion-item>\n  <br>\n  <button ion-button block color="dark" (click)="doAlert()">Show Basic Alert</button>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Катя\Admob\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_admob_free_provider__["a" /* AdmobFreeProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobFreeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdmobFreeProvider = (function () {
    function AdmobFreeProvider(platform, admobFree, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.admobFree = admobFree;
        this.alertCtrl = alertCtrl;
        this.bannerPrepared = false;
        this.interstitialPrepared = false;
        this.bannerSizes = [
            {
                android: {
                    BANNER: 'BANNER',
                    IAB_BANNER: 'IAB_BANNER',
                    IAB_LEADERBOARD: 'IAB_LEADERBOARD',
                    IAB_MRECT: 'IAB_MRECT',
                    LARGE_BANNER: 'LARGE_BANNER',
                    SMART_BANNER: 'SMART_BANNER',
                    FLUID: 'FLUID',
                    FULL_BANNER: 'FULL_BANNER',
                    LEADERBOARD: 'LEADERBOARD',
                    MEDIUM_RECTANGLE: 'MEDIUM_RECTANGLE',
                    SEARCH: 'SEARCH',
                    WIDE_SKYSCRAPER: 'WIDE_SKYSCRAPER'
                }
            },
            {
                ios: {
                    BANNER: 'BANNER',
                    IAB_BANNER: 'IAB_BANNER',
                    IAB_LEADERBOARD: 'IAB_LEADERBOARD',
                    IAB_MRECT: 'IAB_MRECT',
                    LARGE_BANNER: 'LARGE_BANNER',
                    SMART_BANNER: 'SMART_BANNER',
                    FLUID: 'FLUID'
                }
            }
        ];
        console.log('Hello AdmobFree Provider');
        this.platform.ready().then(function () {
            // For Android
            if (platform.is('android')) {
                _this.admobId = {
                    banner: 'ca-app-pub-3940256099942544/6300978111',
                    interstitial: 'ca-app-pub-5764598489193881/3258851252'
                };
            }
            // For iOS
            if (platform.is('ios')) {
                _this.admobId = {
                    banner: 'ca-app-pub-5764598489193881/2700448056',
                    interstitial: 'ca-app-pub-5764598489193881/5653914453'
                };
            }
            _this.init();
        });
    }
    // Initialise AdMob Free
    AdmobFreeProvider.prototype.init = function () {
        console.log("AdMob initialising");
        if (!this.admobFree) {
            console.log("No AdMob?");
            return;
        }
        // Subscribe to AdMob banner events
        this.admobFree.on('BANNER_LOAD').subscribe(function () {
            console.log('BANNER_LOAD');
        });
        this.admobFree.on('BANNER_LOAD_FAIL').subscribe(function () {
            console.log('BANNER_LOAD_FAIL');
        });
        this.admobFree.on('BANNER_OPEN').subscribe(function () {
            console.log('BANNER_OPEN');
        });
        this.admobFree.on('BANNER_CLOSE').subscribe(function () {
            console.log('BANNER_CLOSE');
        });
        this.admobFree.on('BANNER_EXIT_APP').subscribe(function () {
            console.log('BANNER_EXIT_APP');
        });
        // Subscribe to AdMob interstitial events
        this.admobFree.on('INTERSTITIAL_LOAD').subscribe(function () {
            console.log('INTERSTITIAL_LOAD');
        });
        this.admobFree.on('INTERSTITIAL_LOAD_FAIL').subscribe(function () {
            console.log('INTERSTITIAL_LOAD_FAIL');
        });
        this.admobFree.on('INTERSTITIAL_OPEN').subscribe(function () {
            console.log('INTERSTITIAL_OPEN');
        });
        this.admobFree.on('INTERSTITIAL_CLOSE').subscribe(function () {
            console.log('INTERSTITIAL_CLOSE');
        });
        this.admobFree.on('INTERSTITIAL_EXIT_APP').subscribe(function () {
            console.log('INTERSTITIAL_EXIT_APP');
        });
        // Initialise other default config options
        this.bannerConfig = {
            overlap: true,
            // offsetTopBar: true, // For iOS 7 status bar overlap, if this happens, you need to set it to true.
            id: 'ca-app-pub-3940256099942544/6300978111',
            autoShow: true,
            isTesting: true
        };
        this.admobFree.banner.config(this.bannerConfig);
        this.interstitialConfig = {
            id: 'ca-app-pub-3940256099942544/6300978111',
            isTesting: true
        };
        this.admobFree.interstitial.config(this.interstitialConfig);
    };
    AdmobFreeProvider.prototype.prepareBanner = function () {
        var _this = this;
        this.bannerConfig.id = this.admobId.banner;
        this.admobFree.banner.config(this.bannerConfig);
        return this.admobFree.banner.prepare()
            .then(function () {
            _this.bannerPrepared = true;
            console.log('AdMob Banner Ad is prepared, will be presented if autoShow is true, otherwise, call showBanner().');
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    AdmobFreeProvider.prototype.showBanner = function () {
        var _this = this;
        if (this.bannerConfig.autoShow) {
            this.prepareBanner()
                .then(function () {
                _this.bannerPrepared = false;
            });
        }
        else if (this.bannerPrepared) {
            this.admobFree.banner.show()
                .then(function () {
                _this.bannerPrepared = false;
                console.log('Banner Ad is successfully shown.');
            })
                .catch(function (err) {
                console.error(err);
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Banner Ad Error',
                message: 'The Prepare Banner button needs to be clicked first.',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    AdmobFreeProvider.prototype.hideBanner = function () {
        var _this = this;
        this.admobFree.banner.hide()
            .then(function () {
            _this.bannerPrepared = true;
            console.log('Banner Ad is successfully hidden.');
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    AdmobFreeProvider.prototype.removeBanner = function () {
        var _this = this;
        this.admobFree.banner.remove()
            .then(function () {
            _this.bannerPrepared = false;
            console.log('Banner Ad is successfully removed.');
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    AdmobFreeProvider.prototype.prepareInterstitial = function () {
        var _this = this;
        this.interstitialConfig.id = this.admobId.interstitial;
        this.admobFree.interstitial.config(this.interstitialConfig);
        return this.admobFree.interstitial.prepare()
            .then(function () {
            _this.interstitialPrepared = true;
            console.log('AdMob Interstitial Ad is prepared, will be presented if autoShow is true, otherwise, call showInterstitial().');
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    AdmobFreeProvider.prototype.showInterstitial = function () {
        var _this = this;
        if (this.interstitialConfig.autoShow) {
            this.prepareInterstitial()
                .then(function () {
                _this.interstitialPrepared = false;
            });
        }
        else if (this.interstitialPrepared) {
            this.admobFree.interstitial.show()
                .then(function () {
                _this.interstitialPrepared = false;
                console.log('Interstitial Ad is successfully shown.');
            })
                .catch(function (err) {
                console.error(err);
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Interstitial Ad Error',
                message: 'The Prepare Interstitial button needs to be clicked first.',
                buttons: ['Ok']
            });
            alert_2.present();
        }
    };
    AdmobFreeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AdmobFreeProvider);
    return AdmobFreeProvider;
}());

//# sourceMappingURL=admob-free-provider.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Катя\Admob\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Катя\Admob\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_admob_free_provider__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_9__providers_admob_free_provider__["a" /* AdmobFreeProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, admobFree) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.admobFree = admobFree;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.showAdmobBannerAds();
        });
    };
    MyApp.prototype.showAdmobBannerAds = function () {
        var bannerConfig = {
            isTesting: true,
            autoShow: true
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Катя\Admob\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Катя\Admob\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map