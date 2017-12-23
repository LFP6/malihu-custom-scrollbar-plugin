var mCustomScrollbar =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery_mousewheel__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery_mousewheel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery_mousewheel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/*
== malihu jquery custom scrollbar plugin == 
Version: 3.1.5 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/




module.exports = function($) {
	__WEBPACK_IMPORTED_MODULE_0_jquery_mousewheel___default()($);

	/* 
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
	----------------------------------------
	*/

	var pluginNS = "mCustomScrollbar",
			pluginPfx = "mCS",
			defaultSelector = ".mCustomScrollbar",


	/* 
	----------------------------------------
	DEFAULT OPTIONS 
	----------------------------------------
	*/

	defaults = {
		/*
		set element/content width/height programmatically 
		values: boolean, pixels, percentage 
			option						default
			-------------------------------------
			setWidth					false
			setHeight					false
		*/
		/*
		set the initial css top property of content  
		values: string (e.g. "-100px", "10%" etc.)
		*/
		setTop: 0,
		/*
		set the initial css left property of content  
		values: string (e.g. "-100px", "10%" etc.)
		*/
		setLeft: 0,
		/* 
		scrollbar axis (vertical and/or horizontal scrollbars) 
		values (string): "y", "x", "yx"
		*/
		axis: "y",
		/*
		position of scrollbar relative to content  
		values (string): "inside", "outside" ("outside" requires elements with position:relative)
		*/
		scrollbarPosition: "inside",
		/*
		scrolling inertia
		values: integer (milliseconds)
		*/
		scrollInertia: 950,
		/* 
		auto-adjust scrollbar dragger length
		values: boolean
		*/
		autoDraggerLength: true,
		/*
		auto-hide scrollbar when idle 
		values: boolean
			option						default
			-------------------------------------
			autoHideScrollbar			false
		*/
		/*
		auto-expands scrollbar on mouse-over and dragging
		values: boolean
			option						default
			-------------------------------------
			autoExpandScrollbar			false
		*/
		/*
		always show scrollbar, even when there's nothing to scroll 
		values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
		*/
		alwaysShowScrollbar: 0,
		/*
		scrolling always snaps to a multiple of this number in pixels
		values: integer, array ([y,x])
			option						default
			-------------------------------------
			snapAmount					null
		*/
		/*
		when snapping, snap with this number in pixels as an offset 
		values: integer
		*/
		snapOffset: 0,
		/* 
		mouse-wheel scrolling
		*/
		mouseWheel: {
			/* 
			enable mouse-wheel scrolling
			values: boolean
			*/
			enable: true,
			/* 
			scrolling amount in pixels
			values: "auto", integer 
			*/
			scrollAmount: "auto",
			/* 
			mouse-wheel scrolling axis 
			the default scrolling direction when both vertical and horizontal scrollbars are present 
			values (string): "y", "x" 
			*/
			axis: "y",
			/* 
			prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
			values: boolean
				option						default
				-------------------------------------
				preventDefault				null
			*/
			/*
			the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
			values: "auto", integer 
			"auto" uses the default OS/browser value 
			*/
			deltaFactor: "auto",
			/*
			normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
			values: boolean
				option						default
				-------------------------------------
				normalizeDelta				null
			*/
			/*
			invert mouse-wheel scrolling direction 
			values: boolean
				option						default
				-------------------------------------
				invert						null
			*/
			/*
			the tags that disable mouse-wheel when cursor is over them
			*/
			disableOver: ["select", "option", "keygen", "datalist", "textarea"]
		},
		/* 
		scrollbar buttons
		*/
		scrollButtons: {
			/*
			enable scrollbar buttons
			values: boolean
				option						default
				-------------------------------------
				enable						null
			*/
			/*
			scrollbar buttons scrolling type 
			values (string): "stepless", "stepped"
			*/
			scrollType: "stepless",
			/*
			scrolling amount in pixels
			values: "auto", integer 
			*/
			scrollAmount: "auto"
			/*
			tabindex of the scrollbar buttons
			values: false, integer
				option						default
				-------------------------------------
				tabindex					null
			*/
		},
		/* 
		keyboard scrolling
		*/
		keyboard: {
			/*
			enable scrolling via keyboard
			values: boolean
			*/
			enable: true,
			/*
			keyboard scrolling type 
			values (string): "stepless", "stepped"
			*/
			scrollType: "stepless",
			/*
			scrolling amount in pixels
			values: "auto", integer 
			*/
			scrollAmount: "auto"
		},
		/*
		enable content touch-swipe scrolling 
		values: boolean, integer, string (number)
		integer values define the axis-specific minimum amount required for scrolling momentum
		*/
		contentTouchScroll: 25,
		/*
		enable/disable document (default) touch-swipe scrolling 
		*/
		documentTouchScroll: true,
		/*
		advanced option parameters
		*/
		advanced: {
			/*
			auto-expand content horizontally (for "x" or "yx" axis) 
			values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
				option						default
				-------------------------------------
				autoExpandHorizontalScroll	null
			*/
			/*
			auto-scroll to elements with focus
			*/
			autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
			/*
			auto-update scrollbars on content, element or viewport resize 
			should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
			values: boolean
			*/
			updateOnContentResize: true,
			/*
			auto-update scrollbars each time each image inside the element is fully loaded 
			values: "auto", boolean
			*/
			updateOnImageLoad: "auto",
			/*
			auto-update scrollbars based on the amount and size changes of specific selectors 
			useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
			values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
			a value of true (boolean) will auto-update scrollbars each time any element is changed
				option						default
				-------------------------------------
				updateOnSelectorChange		null
			*/
			/*
			extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
				option						default
				-------------------------------------
				extraDraggableSelectors		null
			*/
			/*
			extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
				option						default
				-------------------------------------
				releaseDraggableSelectors	null
			*/
			/*
			auto-update timeout 
			values: integer (milliseconds)
			*/
			autoUpdateTimeout: 60
		},
		/* 
		scrollbar theme 
		values: string (see CSS/plugin URI for a list of ready-to-use themes)
		*/
		theme: "light",
		/*
		user defined callback functions
		*/
		callbacks: {
			/*
			Available callbacks: 
				callback					default
				-------------------------------------
				onCreate					null
				onInit						null
				onScrollStart				null
				onScroll					null
				onTotalScroll				null
				onTotalScrollBack			null
				whileScrolling				null
				onOverflowY					null
				onOverflowX					null
				onOverflowYNone				null
				onOverflowXNone				null
				onImageLoad					null
				onSelectorChange			null
				onBeforeUpdate				null
				onUpdate					null
			*/
			onTotalScrollOffset: 0,
			onTotalScrollBackOffset: 0,
			alwaysTriggerOffsets: true
		}
		/*
		add scrollbar(s) on all elements matching the current selector, now and in the future 
		values: boolean, string 
		string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
		liveSelector values: string (selector)
			option						default
			-------------------------------------
			live						false
			liveSelector				null
		*/
	},


	/* 
	----------------------------------------
	VARS, CONSTANTS 
	----------------------------------------
	*/

	totalInstances = 0,
	/* plugin instances amount */
	liveTimers = {},
	/* live option timers */
	oldIE = (window.attachEvent && !window.addEventListener) ? 1 : 0,
	/* detect IE < 9 */
	touchActive = false,
	touchable, /* global touch vars (for touch and pointer events) */
	/* general plugin classes */
	classes = [
		"mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar",
		"mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer",
		"mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"
	],


	/* 
	----------------------------------------
	METHODS 
	----------------------------------------
	*/

	methods = {

		/* 
		plugin initialization method 
		creates the scrollbar(s), plugin data object and options
		----------------------------------------
		*/

		init: function(options) {

			var options = $.extend(true, {}, defaults, options),
				selector = _selector.call(this); /* validate selector */

			/* 
			if live option is enabled, monitor for elements matching the current selector and 
			apply scrollbar(s) when found (now and in the future) 
			*/
			if (options.live) {
				var liveSelector = options.liveSelector || this.selector || defaultSelector,
					/* live selector(s) */
					$liveSelector = $(liveSelector); /* live selector(s) as jquery object */
				if (options.live === "off") {
					/* 
					disable live if requested 
					usage: $(selector).mCustomScrollbar({live:"off"}); 
					*/
					removeLiveTimers(liveSelector);
					return;
				}
				liveTimers[liveSelector] = setTimeout(function() {
					/* call mCustomScrollbar fn on live selector(s) every half-second */
					$liveSelector.mCustomScrollbar(options);
					if (options.live === "once" && $liveSelector.length) {
						/* disable live after first invocation */
						removeLiveTimers(liveSelector);
					}
				}, 500);
			} else {
				removeLiveTimers(liveSelector);
			}

			/* options backward compatibility (for versions < 3.0.0) and normalization */
			options.setWidth = (options.set_width) ? options.set_width : options.setWidth;
			options.setHeight = (options.set_height) ? options.set_height : options.setHeight;
			options.axis = (options.horizontalScroll) ? "x" : _findAxis(options.axis);
			options.scrollInertia = options.scrollInertia > 0 && options.scrollInertia < 17 ? 17 : options.scrollInertia;
			if (typeof options.mouseWheel !== "object" && options.mouseWheel == true) { /* old school mouseWheel option (non-object) */
				options.mouseWheel = {
					enable: true,
					scrollAmount: "auto",
					axis: "y",
					preventDefault: false,
					deltaFactor: "auto",
					normalizeDelta: false,
					invert: false
				}
			}
			options.mouseWheel.scrollAmount = !options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
			options.mouseWheel.normalizeDelta = !options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
			options.scrollButtons.scrollType = _findScrollButtonsType(options.scrollButtons.scrollType);

			_theme(options); /* theme-specific options */

			/* plugin constructor */
			return $(selector).each(function() {

				var $this = $(this);

				if (!$this.data(pluginPfx)) { /* prevent multiple instantiations */

					/* store options and create objects in jquery data */
					$this.data(pluginPfx, {
						idx: ++totalInstances,
						/* instance index */
						opt: options,
						/* options */
						scrollRatio: {
							y: null,
							x: null
						},
						/* scrollbar to content ratio */
						overflowed: null,
						/* overflowed axis */
						contentReset: {
							y: null,
							x: null
						},
						/* object to check when content resets */
						bindEvents: false,
						/* object to check if events are bound */
						tweenRunning: false,
						/* object to check if tween is running */
						sequential: {},
						/* sequential scrolling object */
						langDir: $this.css("direction"),
						/* detect/store direction (ltr or rtl) */
						cbOffsets: null,
						/* object to check whether callback offsets always trigger */
						/* 
						object to check how scrolling events where last triggered 
						"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
						usage: object.data("mCS").trigger
						*/
						trigger: null,
						/* 
						object to check for changes in elements in order to call the update method automatically 
						*/
						poll: {
							size: {
								o: 0,
								n: 0
							},
							img: {
								o: 0,
								n: 0
							},
							change: {
								o: 0,
								n: 0
							}
						}
					});

					var d = $this.data(pluginPfx),
						o = d.opt,
						/* HTML data attributes */
						htmlDataAxis = $this.data("mcs-axis"),
						htmlDataSbPos = $this.data("mcs-scrollbar-position"),
						htmlDataTheme = $this.data("mcs-theme");

					if (htmlDataAxis) {
						o.axis = htmlDataAxis;
					} /* usage example: data-mcs-axis="y" */
					if (htmlDataSbPos) {
						o.scrollbarPosition = htmlDataSbPos;
					} /* usage example: data-mcs-scrollbar-position="outside" */
					if (htmlDataTheme) { /* usage example: data-mcs-theme="minimal" */
						o.theme = htmlDataTheme;
						_theme(o); /* theme-specific options */
					}

					_pluginMarkup.call(this); /* add plugin markup */

					if (d && o.callbacks.onCreate && typeof o.callbacks.onCreate === "function") {
						o.callbacks.onCreate.call(this);
					} /* callbacks: onCreate */

					$("#mCSB_" + d.idx + "_container img:not(." + classes[2] + ")").addClass(classes[2]); /* flag loaded images */

					methods.update.call(null, $this); /* call the update method */

				}

			});

		},
		/* ---------------------------------------- */



		/* 
		plugin update method 
		updates content and scrollbar(s) values, events and status 
		----------------------------------------
		usage: $(selector).mCustomScrollbar("update");
		*/

		update: function(el, cb) {

			var selector = el || _selector.call(this); /* validate selector */

			return $(selector).each(function() {

				var $this = $(this);

				if ($this.data(pluginPfx)) { /* check if plugin has initialized */

					var d = $this.data(pluginPfx),
						o = d.opt,
						mCSB_container = $("#mCSB_" + d.idx + "_container"),
						mCustomScrollBox = $("#mCSB_" + d.idx),
						mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];

					if (!mCSB_container.length) {
						return;
					}

					if (d.tweenRunning) {
						_stop($this);
					} /* stop any running tweens while updating */

					if (cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate === "function") {
						o.callbacks.onBeforeUpdate.call(this);
					} /* callbacks: onBeforeUpdate */

					/* if element was disabled or destroyed, remove class(es) */
					if ($this.hasClass(classes[3])) {
						$this.removeClass(classes[3]);
					}
					if ($this.hasClass(classes[4])) {
						$this.removeClass(classes[4]);
					}

					/* css flexbox fix, detect/set max-height */
					mCustomScrollBox.css("max-height", "none");
					if (mCustomScrollBox.height() !== $this.height()) {
						mCustomScrollBox.css("max-height", $this.height());
					}

					_expandContentHorizontally.call(this); /* expand content horizontally */

					if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
						mCSB_container.css("width", _contentWidth(mCSB_container));
					}

					d.overflowed = _overflowed.call(this); /* determine if scrolling is required */

					_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */

					/* auto-adjust scrollbar dragger length analogous to content */
					if (o.autoDraggerLength) {
						_setDraggerLength.call(this);
					}

					_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */

					_bindEvents.call(this); /* bind scrollbar events */

					/* reset scrolling position and/or events */
					var to = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)];
					if (o.axis !== "x") { /* y/yx axis */
						if (!d.overflowed[0]) { /* y scrolling is not required */
							_resetContentPosition.call(this); /* reset content position */
							if (o.axis === "y") {
								_unbindEvents.call(this);
							} else if (o.axis === "yx" && d.overflowed[1]) {
								_scrollTo($this, to[1].toString(), {
									dir: "x",
									dur: 0,
									overwrite: "none",
									callbacks: false
								});
							}
						} else if (mCSB_dragger[0].height() > mCSB_dragger[0].parent().height()) {
							_resetContentPosition.call(this); /* reset content position */
						} else { /* y scrolling is required */
							_scrollTo($this, to[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none",
								callbacks: false
							});
							d.contentReset.y = null;
						}
					}
					if (o.axis !== "y") { /* x/yx axis */
						if (!d.overflowed[1]) { /* x scrolling is not required */
							_resetContentPosition.call(this); /* reset content position */
							if (o.axis === "x") {
								_unbindEvents.call(this);
							} else if (o.axis === "yx" && d.overflowed[0]) {
								_scrollTo($this, to[0].toString(), {
									dir: "y",
									dur: 0,
									overwrite: "none",
									callbacks: false
								});
							}
						} else if (mCSB_dragger[1].width() > mCSB_dragger[1].parent().width()) {
							_resetContentPosition.call(this); /* reset content position */
						} else { /* x scrolling is required */
							_scrollTo($this, to[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none",
								callbacks: false
							});
							d.contentReset.x = null;
						}
					}

					/* callbacks: onImageLoad, onSelectorChange, onUpdate */
					if (cb && d) {
						if (cb === 2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad === "function") {
							o.callbacks.onImageLoad.call(this);
						} else if (cb === 3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange === "function") {
							o.callbacks.onSelectorChange.call(this);
						} else if (o.callbacks.onUpdate && typeof o.callbacks.onUpdate === "function") {
							o.callbacks.onUpdate.call(this);
						}
					}

					_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */

				}

			});

		},
		/* ---------------------------------------- */



		/* 
		plugin scrollTo method 
		triggers a scrolling event to a specific value
		----------------------------------------
		usage: $(selector).mCustomScrollbar("scrollTo",value,options);
		*/

		scrollTo: function(val, options) {

			/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
			if (typeof val == "undefined" || val == null) {
				return;
			}

			var selector = _selector.call(this); /* validate selector */

			return $(selector).each(function() {

				var $this = $(this);

				if ($this.data(pluginPfx)) { /* check if plugin has initialized */

					var d = $this.data(pluginPfx),
						o = d.opt,
						/* method default options */
						methodDefaults = {
							trigger: "external",
							/* method is by default triggered externally (e.g. from other scripts) */
							scrollInertia: o.scrollInertia,
							/* scrolling inertia (animation duration) */
							scrollEasing: "mcsEaseInOut",
							/* animation easing */
							moveDragger: false,
							/* move dragger instead of content */
							timeout: 60,
							/* scroll-to delay */
							callbacks: true,
							/* enable/disable callbacks */
							onStart: true,
							onUpdate: true,
							onComplete: true
						},
						methodOptions = $.extend(true, {}, methodDefaults, options),
						to = _arr.call(this, val),
						dur = methodOptions.scrollInertia > 0 && methodOptions.scrollInertia < 17 ? 17 : methodOptions.scrollInertia;

					/* translate yx values to actual scroll-to positions */
					to[0] = _to.call(this, to[0], "y");
					to[1] = _to.call(this, to[1], "x");

					/* 
					check if scroll-to value moves the dragger instead of content. 
					Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
					*/
					if (methodOptions.moveDragger) {
						to[0] *= d.scrollRatio.y;
						to[1] *= d.scrollRatio.x;
					}

					methodOptions.dur = _isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden

					setTimeout(function() {
						/* do the scrolling */
						if (to[0] !== null && typeof to[0] !== "undefined" && o.axis !== "x" && d.overflowed[0]) { /* scroll y */
							methodOptions.dir = "y";
							methodOptions.overwrite = "all";
							_scrollTo($this, to[0].toString(), methodOptions);
						}
						if (to[1] !== null && typeof to[1] !== "undefined" && o.axis !== "y" && d.overflowed[1]) { /* scroll x */
							methodOptions.dir = "x";
							methodOptions.overwrite = "none";
							_scrollTo($this, to[1].toString(), methodOptions);
						}
					}, methodOptions.timeout);

				}

			});

		},
		/* ---------------------------------------- */



		/*
		plugin stop method 
		stops scrolling animation
		----------------------------------------
		usage: $(selector).mCustomScrollbar("stop");
		*/
		stop: function() {

			var selector = _selector.call(this); /* validate selector */

			return $(selector).each(function() {

				var $this = $(this);

				if ($this.data(pluginPfx)) { /* check if plugin has initialized */

					_stop($this);

				}

			});

		},
		/* ---------------------------------------- */



		/*
		plugin disable method 
		temporarily disables the scrollbar(s) 
		----------------------------------------
		usage: $(selector).mCustomScrollbar("disable",reset); 
		reset (boolean): resets content position to 0 
		*/
		disable: function(r) {

			var selector = _selector.call(this); /* validate selector */

			return $(selector).each(function() {

				var $this = $(this);

				if ($this.data(pluginPfx)) { /* check if plugin has initialized */

					var d = $this.data(pluginPfx);

					_autoUpdate.call(this, "remove"); /* remove automatic updating */

					_unbindEvents.call(this); /* unbind events */

					if (r) {
						_resetContentPosition.call(this);
					} /* reset content position */

					_scrollbarVisibility.call(this, true); /* show/hide scrollbar(s) */

					$this.addClass(classes[3]); /* add disable class */

				}

			});

		},
		/* ---------------------------------------- */



		/*
		plugin destroy method 
		completely removes the scrollbar(s) and returns the element to its original state
		----------------------------------------
		usage: $(selector).mCustomScrollbar("destroy"); 
		*/
		destroy: function() {

			var selector = _selector.call(this); /* validate selector */

			return $(selector).each(function() {

				var $this = $(this);

				if ($this.data(pluginPfx)) { /* check if plugin has initialized */

					var d = $this.data(pluginPfx),
						o = d.opt,
						mCustomScrollBox = $("#mCSB_" + d.idx),
						mCSB_container = $("#mCSB_" + d.idx + "_container"),
						scrollbar = $(".mCSB_" + d.idx + "_scrollbar");

					if (o.live) {
						removeLiveTimers(o.liveSelector || $(selector).selector);
					} /* remove live timers */

					_autoUpdate.call(this, "remove"); /* remove automatic updating */

					_unbindEvents.call(this); /* unbind events */

					_resetContentPosition.call(this); /* reset content position */

					$this.removeData(pluginPfx); /* remove plugin data object */

					_delete(this, "mcs"); /* delete callbacks object */

					/* remove plugin markup */
					scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
					mCSB_container.find("img." + classes[2]).removeClass(classes[2]); /* remove loaded images flag */
					mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
					/* remove plugin classes from the element and add destroy class */
					$this.removeClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + classes[6] + " " + classes[7] + " " + classes[5] + " " + classes[3]).addClass(classes[4]);

				}

			});

		}
		/* ---------------------------------------- */

	},


	/* 
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/

	/* validates selector (if selector is invalid or undefined uses the default one) */
	_selector = function() {
		return (typeof $(this) !== "object" || $(this).length < 1) ? defaultSelector : this;
	},
	/* -------------------- */


	/* changes options according to theme */
	_theme = function(obj) {
		var fixedSizeScrollbarThemes = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
			nonExpandedScrollbarThemes = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
			disabledScrollButtonsThemes = ["minimal", "minimal-dark"],
			enabledAutoHideScrollbarThemes = ["minimal", "minimal-dark"],
			scrollbarPositionOutsideThemes = ["minimal", "minimal-dark"];
		obj.autoDraggerLength = $.inArray(obj.theme, fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
		obj.autoExpandScrollbar = $.inArray(obj.theme, nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
		obj.scrollButtons.enable = $.inArray(obj.theme, disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
		obj.autoHideScrollbar = $.inArray(obj.theme, enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
		obj.scrollbarPosition = $.inArray(obj.theme, scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
	},
	/* -------------------- */


	/* live option timers removal */
	removeLiveTimers = function(selector) {
		if (liveTimers[selector]) {
			clearTimeout(liveTimers[selector]);
			_delete(liveTimers, selector);
		}
	},
	/* -------------------- */


	/* normalizes axis option to valid values: "y", "x", "yx" */
	_findAxis = function(val) {
		return (val === "yx" || val === "xy" || val === "auto") ? "yx" : (val === "x" || val === "horizontal") ? "x" : "y";
	},
	/* -------------------- */


	/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
	_findScrollButtonsType = function(val) {
		return (val === "stepped" || val === "pixels" || val === "step" || val === "click") ? "stepped" : "stepless";
	},
	/* -------------------- */


	/* generates plugin markup */
	_pluginMarkup = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			expandClass = o.autoExpandScrollbar ? " " + classes[1] + "_expand" : "",
			scrollbar = ["<div id='mCSB_" + d.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + d.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
			wrapperClass = o.axis === "yx" ? "mCSB_vertical_horizontal" : o.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
			scrollbars = o.axis === "yx" ? scrollbar[0] + scrollbar[1] : o.axis === "x" ? scrollbar[1] : scrollbar[0],
			contentWrapper = o.axis === "yx" ? "<div id='mCSB_" + d.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
			autoHideClass = o.autoHideScrollbar ? " " + classes[6] : "",
			scrollbarDirClass = (o.axis !== "x" && d.langDir === "rtl") ? " " + classes[7] : "";
		if (o.setWidth) {
			$this.css("width", o.setWidth);
		} /* set element width */
		if (o.setHeight) {
			$this.css("height", o.setHeight);
		} /* set element height */
		o.setLeft = (o.axis !== "y" && d.langDir === "rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
		$this.addClass(pluginNS + " _" + pluginPfx + "_" + d.idx + autoHideClass + scrollbarDirClass).wrapInner("<div id='mCSB_" + d.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + wrapperClass + "'><div id='mCSB_" + d.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + d.langDir + "' /></div>");
		var mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container");
		if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
			mCSB_container.css("width", _contentWidth(mCSB_container));
		}
		if (o.scrollbarPosition === "outside") {
			if ($this.css("position") === "static") { /* requires elements with non-static position */
				$this.css("position", "relative");
			}
			$this.css("overflow", "visible");
			mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
		} else {
			mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
			mCSB_container.wrap(contentWrapper);
		}
		_scrollButtons.call(this); /* add scrollbar buttons */
		/* minimum dragger length */
		var mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
		mCSB_dragger[0].css("min-height", mCSB_dragger[0].height());
		mCSB_dragger[1].css("min-width", mCSB_dragger[1].width());
	},
	/* -------------------- */


	/* calculates content width */
	_contentWidth = function(el) {
		var val = [el[0].scrollWidth, Math.max.apply(Math, el.children().map(function() {
				return $(this).outerWidth(true);
			}).get())],
			w = el.parent().width();
		return val[0] > w ? val[0] : val[1] > w ? val[1] : "100%";
	},
	/* -------------------- */


	/* expands content horizontally */
	_expandContentHorizontally = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			mCSB_container = $("#mCSB_" + d.idx + "_container");
		if (o.advanced.autoExpandHorizontalScroll && o.axis !== "y") {
			/* calculate scrollWidth */
			mCSB_container.css({
				"width": "auto",
				"min-width": 0,
				"overflow-x": "scroll"
			});
			var w = Math.ceil(mCSB_container[0].scrollWidth);
			if (o.advanced.autoExpandHorizontalScroll === 3 || (o.advanced.autoExpandHorizontalScroll !== 2 && w > mCSB_container.parent().width())) {
				mCSB_container.css({
					"width": w,
					"min-width": "100%",
					"overflow-x": "inherit"
				});
			} else {
				/* 
				wrap content with an infinite width div and set its position to absolute and width to auto. 
				Setting width to auto before calculating the actual width is important! 
				We must let the browser set the width as browser zoom values are impossible to calculate.
				*/
				mCSB_container.css({
						"overflow-x": "inherit",
						"position": "absolute"
					})
					.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
					.css({ /* set actual width, original position and un-wrap */
						/* 
						get the exact width (with decimals) and then round-up. 
						Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
						*/
						"width": (Math.ceil(mCSB_container[0].getBoundingClientRect().right + 0.4) - Math.floor(mCSB_container[0].getBoundingClientRect().left)),
						"min-width": "100%",
						"position": "relative"
					}).unwrap();
			}
		}
	},
	/* -------------------- */


	/* adds scrollbar buttons */
	_scrollButtons = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			mCSB_scrollTools = $(".mCSB_" + d.idx + "_scrollbar:first"),
			tabindex = !_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='" + o.scrollButtons.tabindex + "'",
			btnHTML = [
				"<a href='#' class='" + classes[13] + "' " + tabindex + " />",
				"<a href='#' class='" + classes[14] + "' " + tabindex + " />",
				"<a href='#' class='" + classes[15] + "' " + tabindex + " />",
				"<a href='#' class='" + classes[16] + "' " + tabindex + " />"
			],
			btn = [(o.axis === "x" ? btnHTML[2] : btnHTML[0]), (o.axis === "x" ? btnHTML[3] : btnHTML[1]), btnHTML[2], btnHTML[3]];
		if (o.scrollButtons.enable) {
			mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
		}
	},
	/* -------------------- */


	/* auto-adjusts scrollbar dragger length */
	_setDraggerLength = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
			ratio = [mCustomScrollBox.height() / mCSB_container.outerHeight(false), mCustomScrollBox.width() / mCSB_container.outerWidth(false)],
			l = [
				parseInt(mCSB_dragger[0].css("min-height")), Math.round(ratio[0] * mCSB_dragger[0].parent().height()),
				parseInt(mCSB_dragger[1].css("min-width")), Math.round(ratio[1] * mCSB_dragger[1].parent().width())
			],
			h = oldIE && (l[1] < l[0]) ? l[0] : l[1],
			w = oldIE && (l[3] < l[2]) ? l[2] : l[3];
		mCSB_dragger[0].css({
			"height": h,
			"max-height": (mCSB_dragger[0].parent().height() - 10)
		}).find(".mCSB_dragger_bar").css({
			"line-height": l[0] + "px"
		});
		mCSB_dragger[1].css({
			"width": w,
			"max-width": (mCSB_dragger[1].parent().width() - 10)
		});
	},
	/* -------------------- */


	/* calculates scrollbar to content ratio */
	_scrollRatio = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
			scrollAmount = [mCSB_container.outerHeight(false) - mCustomScrollBox.height(), mCSB_container.outerWidth(false) - mCustomScrollBox.width()],
			ratio = [
				scrollAmount[0] / (mCSB_dragger[0].parent().height() - mCSB_dragger[0].height()),
				scrollAmount[1] / (mCSB_dragger[1].parent().width() - mCSB_dragger[1].width())
			];
		d.scrollRatio = {
			y: ratio[0],
			x: ratio[1]
		};
	},
	/* -------------------- */


	/* toggles scrolling classes */
	_onDragClasses = function(el, action, xpnd) {
		var expandClass = xpnd ? classes[0] + "_expanded" : "",
			scrollbar = el.closest(".mCSB_scrollTools");
		if (action === "active") {
			el.toggleClass(classes[0] + " " + expandClass);
			scrollbar.toggleClass(classes[1]);
			el[0]._draggable = el[0]._draggable ? 0 : 1;
		} else {
			if (!el[0]._draggable) {
				if (action === "hide") {
					el.removeClass(classes[0]);
					scrollbar.removeClass(classes[1]);
				} else {
					el.addClass(classes[0]);
					scrollbar.addClass(classes[1]);
				}
			}
		}
	},
	/* -------------------- */


	/* checks if content overflows its container to determine if scrolling is required */
	_overflowed = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			contentHeight = d.overflowed == null ? mCSB_container.height() : mCSB_container.outerHeight(false),
			contentWidth = d.overflowed == null ? mCSB_container.width() : mCSB_container.outerWidth(false),
			h = mCSB_container[0].scrollHeight,
			w = mCSB_container[0].scrollWidth;
		if (h > contentHeight) {
			contentHeight = h;
		}
		if (w > contentWidth) {
			contentWidth = w;
		}
		return [contentHeight > mCustomScrollBox.height(), contentWidth > mCustomScrollBox.width()];
	},
	/* -------------------- */


	/* resets content position to 0 */
	_resetContentPosition = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
		_stop($this); /* stop any current scrolling before resetting */
		if ((o.axis !== "x" && !d.overflowed[0]) || (o.axis === "y" && d.overflowed[0])) { /* reset y */
			mCSB_dragger[0].add(mCSB_container).css("top", 0);
			_scrollTo($this, "_resetY");
		}
		if ((o.axis !== "y" && !d.overflowed[1]) || (o.axis === "x" && d.overflowed[1])) { /* reset x */
			var cx = dx = 0;
			if (d.langDir === "rtl") { /* adjust left position for rtl direction */
				cx = mCustomScrollBox.width() - mCSB_container.outerWidth(false);
				dx = Math.abs(cx / d.scrollRatio.x);
			}
			mCSB_container.css("left", cx);
			mCSB_dragger[1].css("left", dx);
			_scrollTo($this, "_resetX");
		}
	},
	/* -------------------- */


	/* binds scrollbar events */
	_bindEvents = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt;
		if (!d.bindEvents) { /* check if events are already bound */
			_draggable.call(this);
			if (o.contentTouchScroll) {
				_contentDraggable.call(this);
			}
			_selectable.call(this);
			if (o.mouseWheel.enable) { /* bind mousewheel fn when plugin is available */
				function _mwt() {
					mousewheelTimeout = setTimeout(function() {
						if (!$.event.special.mousewheel) {
							_mwt();
						} else {
							clearTimeout(mousewheelTimeout);
							_mousewheel.call($this[0]);
						}
					}, 100);
				}
				var mousewheelTimeout;
				_mwt();
			}
			_draggerRail.call(this);
			_wrapperScroll.call(this);
			if (o.advanced.autoScrollOnFocus) {
				_focus.call(this);
			}
			if (o.scrollButtons.enable) {
				_buttons.call(this);
			}
			if (o.keyboard.enable) {
				_keyboard.call(this);
			}
			d.bindEvents = true;
		}
	},
	/* -------------------- */


	/* unbinds scrollbar events */
	_unbindEvents = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			namespace = pluginPfx + "_" + d.idx,
			sb = ".mCSB_" + d.idx + "_scrollbar",
			sel = $("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + sb + " ." + classes[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + sb + ">a"),
			mCSB_container = $("#mCSB_" + d.idx + "_container");
		if (o.advanced.releaseDraggableSelectors) {
			sel.add($(o.advanced.releaseDraggableSelectors));
		}
		if (o.advanced.extraDraggableSelectors) {
			sel.add($(o.advanced.extraDraggableSelectors));
		}
		if (d.bindEvents) { /* check if events are bound */
			/* unbind namespaced events from document/selectors */
			var doc = _canAccessIFrame() ? top.document : document;
			$(document).add($(doc)).unbind("." + namespace);
			sel.each(function() {
				$(this).unbind("." + namespace);
			});
			/* clear and delete timeouts/objects */
			clearTimeout($this[0]._focusTimeout);
			_delete($this[0], "_focusTimeout");
			clearTimeout(d.sequential.step);
			_delete(d.sequential, "step");
			clearTimeout(mCSB_container[0].onCompleteTimeout);
			_delete(mCSB_container[0], "onCompleteTimeout");
			d.bindEvents = false;
		}
	},
	/* -------------------- */


	/* toggles scrollbar visibility */
	_scrollbarVisibility = function(disabled) {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			contentWrapper = $("#mCSB_" + d.idx + "_container_wrapper"),
			content = contentWrapper.length ? contentWrapper : $("#mCSB_" + d.idx + "_container"),
			scrollbar = [$("#mCSB_" + d.idx + "_scrollbar_vertical"), $("#mCSB_" + d.idx + "_scrollbar_horizontal")],
			mCSB_dragger = [scrollbar[0].find(".mCSB_dragger"), scrollbar[1].find(".mCSB_dragger")];
		if (o.axis !== "x") {
			if (d.overflowed[0] && !disabled) {
				scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display", "block");
				content.removeClass(classes[8] + " " + classes[10]);
			} else {
				if (o.alwaysShowScrollbar) {
					if (o.alwaysShowScrollbar !== 2) {
						mCSB_dragger[0].css("display", "none");
					}
					content.removeClass(classes[10]);
				} else {
					scrollbar[0].css("display", "none");
					content.addClass(classes[10]);
				}
				content.addClass(classes[8]);
			}
		}
		if (o.axis !== "y") {
			if (d.overflowed[1] && !disabled) {
				scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display", "block");
				content.removeClass(classes[9] + " " + classes[11]);
			} else {
				if (o.alwaysShowScrollbar) {
					if (o.alwaysShowScrollbar !== 2) {
						mCSB_dragger[1].css("display", "none");
					}
					content.removeClass(classes[11]);
				} else {
					scrollbar[1].css("display", "none");
					content.addClass(classes[11]);
				}
				content.addClass(classes[9]);
			}
		}
		if (!d.overflowed[0] && !d.overflowed[1]) {
			$this.addClass(classes[5]);
		} else {
			$this.removeClass(classes[5]);
		}
	},
	/* -------------------- */


	/* returns input coordinates of pointer, touch and mouse events (relative to document) */
	_coordinates = function(e) {
		var t = e.type,
			o = e.target.ownerDocument !== document && frameElement !== null ? [$(frameElement).offset().top, $(frameElement).offset().left] : null,
			io = _canAccessIFrame() && e.target.ownerDocument !== top.document && frameElement !== null ? [$(e.view.frameElement).offset().top, $(e.view.frameElement).offset().left] : [0, 0];
		switch (t) {
			case "pointerdown":
			case "MSPointerDown":
			case "pointermove":
			case "MSPointerMove":
			case "pointerup":
			case "MSPointerUp":
				return o ? [e.originalEvent.pageY - o[0] + io[0], e.originalEvent.pageX - o[1] + io[1], false] : [e.originalEvent.pageY, e.originalEvent.pageX, false];
				break;
			case "touchstart":
			case "touchmove":
			case "touchend":
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
					touches = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
				return e.target.ownerDocument !== document ? [touch.screenY, touch.screenX, touches > 1] : [touch.pageY, touch.pageX, touches > 1];
				break;
			default:
				return o ? [e.pageY - o[0] + io[0], e.pageX - o[1] + io[1], false] : [e.pageY, e.pageX, false];
		}
	},
	/* -------------------- */


	/* 
	SCROLLBAR DRAG EVENTS
	scrolls content via scrollbar dragging 
	*/
	_draggable = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			namespace = pluginPfx + "_" + d.idx,
			draggerId = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			mCSB_dragger = $("#" + draggerId[0] + ",#" + draggerId[1]),
			draggable, dragY, dragX,
			rds = o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
			doc = _canAccessIFrame() ? top.document : document,
			eds = o.advanced.extraDraggableSelectors ? $(doc).add($(o.advanced.extraDraggableSelectors)) : $(doc);
		mCSB_dragger.bind("contextmenu." + namespace, function(e) {
			e.preventDefault(); //prevent right click
		}).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function(e) {
			e.stopImmediatePropagation();
			e.preventDefault();
			if (!_mouseBtnLeft(e)) {
				return;
			} /* left mouse button only */
			touchActive = true;
			if (oldIE) {
				document.onselectstart = function() {
					return false;
				}
			} /* disable text selection for IE < 9 */
			_iframe.call(mCSB_container, false); /* enable scrollbar dragging over iframes by disabling their events */
			_stop($this);
			draggable = $(this);
			var offset = draggable.offset(),
				y = _coordinates(e)[0] - offset.top,
				x = _coordinates(e)[1] - offset.left,
				h = draggable.height() + offset.top,
				w = draggable.width() + offset.left;
			if (y < h && y > 0 && x < w && x > 0) {
				dragY = y;
				dragX = x;
			}
			_onDragClasses(draggable, "active", o.autoExpandScrollbar);
		}).bind("touchmove." + namespace, function(e) {
			e.stopImmediatePropagation();
			e.preventDefault();
			var offset = draggable.offset(),
				y = _coordinates(e)[0] - offset.top,
				x = _coordinates(e)[1] - offset.left;
			_drag(dragY, dragX, y, x);
		});
		$(document).add(eds).bind("mousemove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, function(e) {
			if (draggable) {
				var offset = draggable.offset(),
					y = _coordinates(e)[0] - offset.top,
					x = _coordinates(e)[1] - offset.left;
				if (dragY === y && dragX === x) {
					return;
				} /* has it really moved? */
				_drag(dragY, dragX, y, x);
			}
		}).add(rds).bind("mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function(e) {
			if (draggable) {
				_onDragClasses(draggable, "active", o.autoExpandScrollbar);
				draggable = null;
			}
			touchActive = false;
			if (oldIE) {
				document.onselectstart = null;
			} /* enable text selection for IE < 9 */
			_iframe.call(mCSB_container, true); /* enable iframes events */
		});

		function _drag(dragY, dragX, y, x) {
			mCSB_container[0].idleTimer = o.scrollInertia < 233 ? 250 : 0;
			if (draggable.attr("id") === draggerId[1]) {
				var dir = "x",
					to = ((draggable[0].offsetLeft - dragX) + x) * d.scrollRatio.x;
			} else {
				var dir = "y",
					to = ((draggable[0].offsetTop - dragY) + y) * d.scrollRatio.y;
			}
			_scrollTo($this, to.toString(), {
				dir: dir,
				drag: true
			});
		}
	},
	/* -------------------- */


	/* 
	TOUCH SWIPE EVENTS
	scrolls content via touch swipe 
	Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
	*/
	_contentDraggable = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			namespace = pluginPfx + "_" + d.idx,
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
			draggable, dragY, dragX, touchStartY, touchStartX, touchMoveY = [],
			touchMoveX = [],
			startTime, runningTime, endTime, distance, speed, amount,
			durA = 0,
			durB, overwrite = o.axis === "yx" ? "none" : "all",
			touchIntent = [],
			touchDrag, docDrag,
			iframe = mCSB_container.find("iframe"),
			events = [
				"touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, //start
				"touchmove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, //move
				"touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace //end
			],
			touchAction = document.body.style.touchAction !== undefined && document.body.style.touchAction !== "";
		mCSB_container.bind(events[0], function(e) {
			_onTouchstart(e);
		}).bind(events[1], function(e) {
			_onTouchmove(e);
		});
		mCustomScrollBox.bind(events[0], function(e) {
			_onTouchstart2(e);
		}).bind(events[2], function(e) {
			_onTouchend(e);
		});
		if (iframe.length) {
			iframe.each(function() {
				$(this).bind("load", function() {
					/* bind events on accessible iframes */
					if (_canAccessIFrame(this)) {
						$(this.contentDocument || this.contentWindow.document).bind(events[0], function(e) {
							_onTouchstart(e);
							_onTouchstart2(e);
						}).bind(events[1], function(e) {
							_onTouchmove(e);
						}).bind(events[2], function(e) {
							_onTouchend(e);
						});
					}
				});
			});
		}

		function _onTouchstart(e) {
			if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
				touchable = 0;
				return;
			}
			touchable = 1;
			touchDrag = 0;
			docDrag = 0;
			draggable = 1;
			$this.removeClass("mCS_touch_action");
			var offset = mCSB_container.offset();
			dragY = _coordinates(e)[0] - offset.top;
			dragX = _coordinates(e)[1] - offset.left;
			touchIntent = [_coordinates(e)[0], _coordinates(e)[1]];
		}

		function _onTouchmove(e) {
			if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
				return;
			}
			if (!o.documentTouchScroll) {
				e.preventDefault();
			}
			e.stopImmediatePropagation();
			if (docDrag && !touchDrag) {
				return;
			}
			if (draggable) {
				runningTime = _getTime();
				var offset = mCustomScrollBox.offset(),
					y = _coordinates(e)[0] - offset.top,
					x = _coordinates(e)[1] - offset.left,
					easing = "mcsLinearOut";
				touchMoveY.push(y);
				touchMoveX.push(x);
				touchIntent[2] = Math.abs(_coordinates(e)[0] - touchIntent[0]);
				touchIntent[3] = Math.abs(_coordinates(e)[1] - touchIntent[1]);
				if (d.overflowed[0]) {
					var limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
						prevent = ((dragY - y) > 0 && (y - dragY) > -(limit * d.scrollRatio.y) && (touchIntent[3] * 2 < touchIntent[2] || o.axis === "yx"));
				}
				if (d.overflowed[1]) {
					var limitX = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
						preventX = ((dragX - x) > 0 && (x - dragX) > -(limitX * d.scrollRatio.x) && (touchIntent[2] * 2 < touchIntent[3] || o.axis === "yx"));
				}
				if (prevent || preventX) { /* prevent native document scrolling */
					if (!touchAction) {
						e.preventDefault();
					}
					touchDrag = 1;
				} else {
					docDrag = 1;
					$this.addClass("mCS_touch_action");
				}
				if (touchAction) {
					e.preventDefault();
				}
				amount = o.axis === "yx" ? [(dragY - y), (dragX - x)] : o.axis === "x" ? [null, (dragX - x)] : [(dragY - y), null];
				mCSB_container[0].idleTimer = 250;
				if (d.overflowed[0]) {
					_drag(amount[0], durA, easing, "y", "all", true);
				}
				if (d.overflowed[1]) {
					_drag(amount[1], durA, easing, "x", overwrite, true);
				}
			}
		}

		function _onTouchstart2(e) {
			if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
				touchable = 0;
				return;
			}
			touchable = 1;
			e.stopImmediatePropagation();
			_stop($this);
			startTime = _getTime();
			var offset = mCustomScrollBox.offset();
			touchStartY = _coordinates(e)[0] - offset.top;
			touchStartX = _coordinates(e)[1] - offset.left;
			touchMoveY = [];
			touchMoveX = [];
		}

		function _onTouchend(e) {
			if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
				return;
			}
			draggable = 0;
			e.stopImmediatePropagation();
			touchDrag = 0;
			docDrag = 0;
			endTime = _getTime();
			var offset = mCustomScrollBox.offset(),
				y = _coordinates(e)[0] - offset.top,
				x = _coordinates(e)[1] - offset.left;
			if ((endTime - runningTime) > 30) {
				return;
			}
			speed = 1000 / (endTime - startTime);
			var easing = "mcsEaseOut",
				slow = speed < 2.5,
				diff = slow ? [touchMoveY[touchMoveY.length - 2], touchMoveX[touchMoveX.length - 2]] : [0, 0];
			distance = slow ? [(y - diff[0]), (x - diff[1])] : [y - touchStartY, x - touchStartX];
			var absDistance = [Math.abs(distance[0]), Math.abs(distance[1])];
			speed = slow ? [Math.abs(distance[0] / 4), Math.abs(distance[1] / 4)] : [speed, speed];
			var a = [
				Math.abs(mCSB_container[0].offsetTop) - (distance[0] * _m((absDistance[0] / speed[0]), speed[0])),
				Math.abs(mCSB_container[0].offsetLeft) - (distance[1] * _m((absDistance[1] / speed[1]), speed[1]))
			];
			amount = o.axis === "yx" ? [a[0], a[1]] : o.axis === "x" ? [null, a[1]] : [a[0], null];
			durB = [(absDistance[0] * 4) + o.scrollInertia, (absDistance[1] * 4) + o.scrollInertia];
			var md = parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
			amount[0] = absDistance[0] > md ? amount[0] : 0;
			amount[1] = absDistance[1] > md ? amount[1] : 0;
			if (d.overflowed[0]) {
				_drag(amount[0], durB[0], easing, "y", overwrite, false);
			}
			if (d.overflowed[1]) {
				_drag(amount[1], durB[1], easing, "x", overwrite, false);
			}
		}

		function _m(ds, s) {
			var r = [s * 1.5, s * 2, s / 1.5, s / 2];
			if (ds > 90) {
				return s > 4 ? r[0] : r[3];
			} else if (ds > 60) {
				return s > 3 ? r[3] : r[2];
			} else if (ds > 30) {
				return s > 8 ? r[1] : s > 6 ? r[0] : s > 4 ? s : r[2];
			} else {
				return s > 8 ? s : r[3];
			}
		}

		function _drag(amount, dur, easing, dir, overwrite, drag) {
			if (!amount) {
				return;
			}
			_scrollTo($this, amount.toString(), {
				dur: dur,
				scrollEasing: easing,
				dir: dir,
				overwrite: overwrite,
				drag: drag
			});
		}
	},
	/* -------------------- */


	/* 
	SELECT TEXT EVENTS 
	scrolls content when text is selected 
	*/
	_selectable = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			seq = d.sequential,
			namespace = pluginPfx + "_" + d.idx,
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			wrapper = mCSB_container.parent(),
			action;
		mCSB_container.bind("mousedown." + namespace, function(e) {
			if (touchable) {
				return;
			}
			if (!action) {
				action = 1;
				touchActive = true;
			}
		}).add(document).bind("mousemove." + namespace, function(e) {
			if (!touchable && action && _sel()) {
				var offset = mCSB_container.offset(),
					y = _coordinates(e)[0] - offset.top + mCSB_container[0].offsetTop,
					x = _coordinates(e)[1] - offset.left + mCSB_container[0].offsetLeft;
				if (y > 0 && y < wrapper.height() && x > 0 && x < wrapper.width()) {
					if (seq.step) {
						_seq("off", null, "stepped");
					}
				} else {
					if (o.axis !== "x" && d.overflowed[0]) {
						if (y < 0) {
							_seq("on", 38);
						} else if (y > wrapper.height()) {
							_seq("on", 40);
						}
					}
					if (o.axis !== "y" && d.overflowed[1]) {
						if (x < 0) {
							_seq("on", 37);
						} else if (x > wrapper.width()) {
							_seq("on", 39);
						}
					}
				}
			}
		}).bind("mouseup." + namespace + " dragend." + namespace, function(e) {
			if (touchable) {
				return;
			}
			if (action) {
				action = 0;
				_seq("off", null);
			}
			touchActive = false;
		});

		function _sel() {
			return window.getSelection ? window.getSelection().toString() :
				document.selection && document.selection.type != "Control" ? document.selection.createRange().text : 0;
		}

		function _seq(a, c, s) {
			seq.type = s && action ? "stepped" : "stepless";
			seq.scrollAmount = 10;
			_sequentialScroll($this, a, c, "mcsLinearOut", s ? 60 : null);
		}
	},
	/* -------------------- */


	/* 
	MOUSE WHEEL EVENT
	scrolls content via mouse-wheel 
	via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
	*/
	_mousewheel = function() {
		if (!$(this).data(pluginPfx)) {
			return;
		} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			namespace = pluginPfx + "_" + d.idx,
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
			iframe = $("#mCSB_" + d.idx + "_container").find("iframe");
		if (iframe.length) {
			iframe.each(function() {
				$(this).bind("load", function() {
					/* bind events on accessible iframes */
					if (_canAccessIFrame(this)) {
						$(this.contentDocument || this.contentWindow.document).bind("mousewheel." + namespace, function(e, delta) {
							_onMousewheel(e, delta);
						});
					}
				});
			});
		}
		mCustomScrollBox.bind("mousewheel." + namespace, function(e, delta) {
			_onMousewheel(e, delta);
		});

		function _onMousewheel(e, delta) {
			_stop($this);
			if (_disableMousewheel($this, e.target)) {
				return;
			} /* disables mouse-wheel when hovering specific elements */
			var deltaFactor = o.mouseWheel.deltaFactor !== "auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor < 100) ? 100 : e.deltaFactor || 100,
				dur = o.scrollInertia;
			if (o.axis === "x" || o.mouseWheel.axis === "x") {
				var dir = "x",
					px = [Math.round(deltaFactor * d.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
					amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.width() ? mCustomScrollBox.width() * 0.9 : px[0],
					contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetLeft),
					draggerPos = mCSB_dragger[1][0].offsetLeft,
					limit = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
					dlt = o.mouseWheel.axis === "y" ? (e.deltaY || delta) : e.deltaX;
			} else {
				var dir = "y",
					px = [Math.round(deltaFactor * d.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
					amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.height() ? mCustomScrollBox.height() * 0.9 : px[0],
					contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetTop),
					draggerPos = mCSB_dragger[0][0].offsetTop,
					limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
					dlt = e.deltaY || delta;
			}
			if ((dir === "y" && !d.overflowed[0]) || (dir === "x" && !d.overflowed[1])) {
				return;
			}
			if (o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) {
				dlt = -dlt;
			}
			if (o.mouseWheel.normalizeDelta) {
				dlt = dlt < 0 ? -1 : 1;
			}
			if ((dlt > 0 && draggerPos !== 0) || (dlt < 0 && draggerPos !== limit) || o.mouseWheel.preventDefault) {
				e.stopImmediatePropagation();
				e.preventDefault();
			}
			if (e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta) {
				//very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
				amount = e.deltaFactor;
				dur = 17;
			}
			_scrollTo($this, (contentPos - (dlt * amount)).toString(), {
				dir: dir,
				dur: dur
			});
		}
	},
	/* -------------------- */


	/* checks if iframe can be accessed */
	_canAccessIFrameCache = new Object(),
	_canAccessIFrame = function(iframe) {
		var result = false,
			cacheKey = false,
			html = null;
		if (iframe === undefined) {
			cacheKey = "#empty";
		} else if ($(iframe).attr("id") !== undefined) {
			cacheKey = $(iframe).attr("id");
		}
		if (cacheKey !== false && _canAccessIFrameCache[cacheKey] !== undefined) {
			return _canAccessIFrameCache[cacheKey];
		}
		if (!iframe) {
			try {
				var doc = top.document;
				html = doc.body.innerHTML;
			} catch (err) { /* do nothing */ }
			result = (html !== null);
		} else {
			try {
				var doc = iframe.contentDocument || iframe.contentWindow.document;
				html = doc.body.innerHTML;
			} catch (err) { /* do nothing */ }
			result = (html !== null);
		}
		if (cacheKey !== false) {
			_canAccessIFrameCache[cacheKey] = result;
		}
		return result;
	},
	/* -------------------- */


	/* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
	_iframe = function(evt) {
		var el = this.find("iframe");
		if (!el.length) {
			return;
		} /* check if content contains iframes */
		var val = !evt ? "none" : "auto";
		el.css("pointer-events", val); /* for IE11, iframe's display property should not be "block" */
	},
	/* -------------------- */


	/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
	_disableMousewheel = function(el, target) {
		var tag = target.nodeName.toLowerCase(),
			tags = el.data(pluginPfx).opt.mouseWheel.disableOver,
			/* elements that require focus */
			focusTags = ["select", "textarea"];
		return $.inArray(tag, tags) > -1 && !($.inArray(tag, focusTags) > -1 && !$(target).is(":focus"));
	},
	/* -------------------- */


	/* 
	DRAGGER RAIL CLICK EVENT
	scrolls content via dragger rail 
	*/
	_draggerRail = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			namespace = pluginPfx + "_" + d.idx,
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			wrapper = mCSB_container.parent(),
			mCSB_draggerContainer = $(".mCSB_" + d.idx + "_scrollbar ." + classes[12]),
			clickable;
		mCSB_draggerContainer.bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function(e) {
			touchActive = true;
			if (!$(e.target).hasClass("mCSB_dragger")) {
				clickable = 1;
			}
		}).bind("touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function(e) {
			touchActive = false;
		}).bind("click." + namespace, function(e) {
			if (!clickable) {
				return;
			}
			clickable = 0;
			if ($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")) {
				_stop($this);
				var el = $(this),
					mCSB_dragger = el.find(".mCSB_dragger");
				if (el.parent(".mCSB_scrollTools_horizontal").length > 0) {
					if (!d.overflowed[1]) {
						return;
					}
					var dir = "x",
						clickDir = e.pageX > mCSB_dragger.offset().left ? -1 : 1,
						to = Math.abs(mCSB_container[0].offsetLeft) - (clickDir * (wrapper.width() * 0.9));
				} else {
					if (!d.overflowed[0]) {
						return;
					}
					var dir = "y",
						clickDir = e.pageY > mCSB_dragger.offset().top ? -1 : 1,
						to = Math.abs(mCSB_container[0].offsetTop) - (clickDir * (wrapper.height() * 0.9));
				}
				_scrollTo($this, to.toString(), {
					dir: dir,
					scrollEasing: "mcsEaseInOut"
				});
			}
		});
	},
	/* -------------------- */


	/* 
	FOCUS EVENT
	scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
	*/
	_focus = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			namespace = pluginPfx + "_" + d.idx,
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			wrapper = mCSB_container.parent();
		mCSB_container.bind("focusin." + namespace, function(e) {
			var el = $(document.activeElement),
				nested = mCSB_container.find(".mCustomScrollBox").length,
				dur = 0;
			if (!el.is(o.advanced.autoScrollOnFocus)) {
				return;
			}
			_stop($this);
			clearTimeout($this[0]._focusTimeout);
			$this[0]._focusTimer = nested ? (dur + 17) * nested : 0;
			$this[0]._focusTimeout = setTimeout(function() {
				var to = [_childPos(el)[0], _childPos(el)[1]],
					contentPos = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
					isVisible = [
						(contentPos[0] + to[0] >= 0 && contentPos[0] + to[0] < wrapper.height() - el.outerHeight(false)),
						(contentPos[1] + to[1] >= 0 && contentPos[0] + to[1] < wrapper.width() - el.outerWidth(false))
					],
					overwrite = (o.axis === "yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
				if (o.axis !== "x" && !isVisible[0]) {
					_scrollTo($this, to[0].toString(), {
						dir: "y",
						scrollEasing: "mcsEaseInOut",
						overwrite: overwrite,
						dur: dur
					});
				}
				if (o.axis !== "y" && !isVisible[1]) {
					_scrollTo($this, to[1].toString(), {
						dir: "x",
						scrollEasing: "mcsEaseInOut",
						overwrite: overwrite,
						dur: dur
					});
				}
			}, $this[0]._focusTimer);
		});
	},
	/* -------------------- */


	/* sets content wrapper scrollTop/scrollLeft always to 0 */
	_wrapperScroll = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			namespace = pluginPfx + "_" + d.idx,
			wrapper = $("#mCSB_" + d.idx + "_container").parent();
		wrapper.bind("scroll." + namespace, function(e) {
			if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
				$(".mCSB_" + d.idx + "_scrollbar").css("visibility", "hidden"); /* hide scrollbar(s) */
			}
		});
	},
	/* -------------------- */


	/* 
	BUTTONS EVENTS
	scrolls content via up, down, left and right buttons 
	*/
	_buttons = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			seq = d.sequential,
			namespace = pluginPfx + "_" + d.idx,
			sel = ".mCSB_" + d.idx + "_scrollbar",
			btn = $(sel + ">a");
		btn.bind("contextmenu." + namespace, function(e) {
			e.preventDefault(); //prevent right click
		}).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace + " mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace + " mouseout." + namespace + " pointerout." + namespace + " MSPointerOut." + namespace + " click." + namespace, function(e) {
			e.preventDefault();
			if (!_mouseBtnLeft(e)) {
				return;
			} /* left mouse button only */
			var btnClass = $(this).attr("class");
			seq.type = o.scrollButtons.scrollType;
			switch (e.type) {
				case "mousedown":
				case "touchstart":
				case "pointerdown":
				case "MSPointerDown":
					if (seq.type === "stepped") {
						return;
					}
					touchActive = true;
					d.tweenRunning = false;
					_seq("on", btnClass);
					break;
				case "mouseup":
				case "touchend":
				case "pointerup":
				case "MSPointerUp":
				case "mouseout":
				case "pointerout":
				case "MSPointerOut":
					if (seq.type === "stepped") {
						return;
					}
					touchActive = false;
					if (seq.dir) {
						_seq("off", btnClass);
					}
					break;
				case "click":
					if (seq.type !== "stepped" || d.tweenRunning) {
						return;
					}
					_seq("on", btnClass);
					break;
			}

			function _seq(a, c) {
				seq.scrollAmount = o.scrollButtons.scrollAmount;
				_sequentialScroll($this, a, c);
			}
		});
	},
	/* -------------------- */


	/* 
	KEYBOARD EVENTS
	scrolls content via keyboard 
	Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
	*/
	_keyboard = function() {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			seq = d.sequential,
			namespace = pluginPfx + "_" + d.idx,
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			wrapper = mCSB_container.parent(),
			editables = "input,textarea,select,datalist,keygen,[contenteditable='true']",
			iframe = mCSB_container.find("iframe"),
			events = ["blur." + namespace + " keydown." + namespace + " keyup." + namespace];
		if (iframe.length) {
			iframe.each(function() {
				$(this).bind("load", function() {
					/* bind events on accessible iframes */
					if (_canAccessIFrame(this)) {
						$(this.contentDocument || this.contentWindow.document).bind(events[0], function(e) {
							_onKeyboard(e);
						});
					}
				});
			});
		}
		mCustomScrollBox.attr("tabindex", "0").bind(events[0], function(e) {
			_onKeyboard(e);
		});

		function _onKeyboard(e) {
			switch (e.type) {
				case "blur":
					if (d.tweenRunning && seq.dir) {
						_seq("off", null);
					}
					break;
				case "keydown":
				case "keyup":
					var code = e.keyCode ? e.keyCode : e.which,
						action = "on";
					if ((o.axis !== "x" && (code === 38 || code === 40)) || (o.axis !== "y" && (code === 37 || code === 39))) {
						/* up (38), down (40), left (37), right (39) arrows */
						if (((code === 38 || code === 40) && !d.overflowed[0]) || ((code === 37 || code === 39) && !d.overflowed[1])) {
							return;
						}
						if (e.type === "keyup") {
							action = "off";
						}
						if (!$(document.activeElement).is(editables)) {
							e.preventDefault();
							e.stopImmediatePropagation();
							_seq(action, code);
						}
					} else if (code === 33 || code === 34) {
						/* PgUp (33), PgDn (34) */
						if (d.overflowed[0] || d.overflowed[1]) {
							e.preventDefault();
							e.stopImmediatePropagation();
						}
						if (e.type === "keyup") {
							_stop($this);
							var keyboardDir = code === 34 ? -1 : 1;
							if (o.axis === "x" || (o.axis === "yx" && d.overflowed[1] && !d.overflowed[0])) {
								var dir = "x",
									to = Math.abs(mCSB_container[0].offsetLeft) - (keyboardDir * (wrapper.width() * 0.9));
							} else {
								var dir = "y",
									to = Math.abs(mCSB_container[0].offsetTop) - (keyboardDir * (wrapper.height() * 0.9));
							}
							_scrollTo($this, to.toString(), {
								dir: dir,
								scrollEasing: "mcsEaseInOut"
							});
						}
					} else if (code === 35 || code === 36) {
						/* End (35), Home (36) */
						if (!$(document.activeElement).is(editables)) {
							if (d.overflowed[0] || d.overflowed[1]) {
								e.preventDefault();
								e.stopImmediatePropagation();
							}
							if (e.type === "keyup") {
								if (o.axis === "x" || (o.axis === "yx" && d.overflowed[1] && !d.overflowed[0])) {
									var dir = "x",
										to = code === 35 ? Math.abs(wrapper.width() - mCSB_container.outerWidth(false)) : 0;
								} else {
									var dir = "y",
										to = code === 35 ? Math.abs(wrapper.height() - mCSB_container.outerHeight(false)) : 0;
								}
								_scrollTo($this, to.toString(), {
									dir: dir,
									scrollEasing: "mcsEaseInOut"
								});
							}
						}
					}
					break;
			}

			function _seq(a, c) {
				seq.type = o.keyboard.scrollType;
				seq.scrollAmount = o.keyboard.scrollAmount;
				if (seq.type === "stepped" && d.tweenRunning) {
					return;
				}
				_sequentialScroll($this, a, c);
			}
		}
	},
	/* -------------------- */


	/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
	_sequentialScroll = function(el, action, trigger, e, s) {
		var d = el.data(pluginPfx),
			o = d.opt,
			seq = d.sequential,
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			once = seq.type === "stepped" ? true : false,
			steplessSpeed = o.scrollInertia < 26 ? 26 : o.scrollInertia,
			/* 26/1.5=17 */
			steppedSpeed = o.scrollInertia < 1 ? 17 : o.scrollInertia;
		switch (action) {
			case "on":
				seq.dir = [
					(trigger === classes[16] || trigger === classes[15] || trigger === 39 || trigger === 37 ? "x" : "y"),
					(trigger === classes[13] || trigger === classes[15] || trigger === 38 || trigger === 37 ? -1 : 1)
				];
				_stop(el);
				if (_isNumeric(trigger) && seq.type === "stepped") {
					return;
				}
				_on(once);
				break;
			case "off":
				_off();
				if (once || (d.tweenRunning && seq.dir)) {
					_on(true);
				}
				break;
		}

		/* starts sequence */
		function _on(once) {
			if (o.snapAmount) {
				seq.scrollAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0] === "x" ? o.snapAmount[1] : o.snapAmount[0];
			} /* scrolling snapping */
			var c = seq.type !== "stepped",
				/* continuous scrolling */
				t = s ? s : !once ? 1000 / 60 : c ? steplessSpeed / 1.5 : steppedSpeed,
				/* timer */
				m = !once ? 2.5 : c ? 7.5 : 40,
				/* multiplier */
				contentPos = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)],
				ratio = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
				amount = seq.dir[0] === "x" ? contentPos[1] + (seq.dir[1] * (ratio[1] * m)) : contentPos[0] + (seq.dir[1] * (ratio[0] * m)),
				px = seq.dir[0] === "x" ? contentPos[1] + (seq.dir[1] * parseInt(seq.scrollAmount)) : contentPos[0] + (seq.dir[1] * parseInt(seq.scrollAmount)),
				to = seq.scrollAmount !== "auto" ? px : amount,
				easing = e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
				onComplete = !once ? false : true;
			if (once && t < 17) {
				to = seq.dir[0] === "x" ? contentPos[1] : contentPos[0];
			}
			_scrollTo(el, to.toString(), {
				dir: seq.dir[0],
				scrollEasing: easing,
				dur: t,
				onComplete: onComplete
			});
			if (once) {
				seq.dir = false;
				return;
			}
			clearTimeout(seq.step);
			seq.step = setTimeout(function() {
				_on();
			}, t);
		}
		/* stops sequence */
		function _off() {
			clearTimeout(seq.step);
			_delete(seq, "step");
			_stop(el);
		}
	},
	/* -------------------- */


	/* returns a yx array from value */
	_arr = function(val) {
		var o = $(this).data(pluginPfx).opt,
			vals = [];
		if (typeof val === "function") {
			val = val();
		} /* check if the value is a single anonymous function */
		/* check if value is object or array, its length and create an array with yx values */
		if (!(val instanceof Array)) { /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
			vals[0] = val.y ? val.y : val.x || o.axis === "x" ? null : val;
			vals[1] = val.x ? val.x : val.y || o.axis === "y" ? null : val;
		} else { /* array value (e.g. [100,100]) */
			vals = val.length > 1 ? [val[0], val[1]] : o.axis === "x" ? [null, val[0]] : [val[0], null];
		}
		/* check if array values are anonymous functions */
		if (typeof vals[0] === "function") {
			vals[0] = vals[0]();
		}
		if (typeof vals[1] === "function") {
			vals[1] = vals[1]();
		}
		return vals;
	},
	/* -------------------- */


	/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
	_to = function(val, dir) {
		if (val == null || typeof val == "undefined") {
			return;
		}
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			wrapper = mCSB_container.parent(),
			t = typeof val;
		if (!dir) {
			dir = o.axis === "x" ? "x" : "y";
		}
		var contentLength = dir === "x" ? mCSB_container.outerWidth(false) - wrapper.width() : mCSB_container.outerHeight(false) - wrapper.height(),
			contentPos = dir === "x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
			cssProp = dir === "x" ? "left" : "top";
		switch (t) {
			case "function":
				/* this currently is not used. Consider removing it */
				return val();
				break;
			case "object":
				/* js/jquery object */
				var obj = val.jquery ? val : $(val);
				if (!obj.length) {
					return;
				}
				return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
				break;
			case "string":
			case "number":
				if (_isNumeric(val)) { /* numeric value */
					return Math.abs(val);
				} else if (val.indexOf("%") !== -1) { /* percentage value */
					return Math.abs(contentLength * parseInt(val) / 100);
				} else if (val.indexOf("-=") !== -1) { /* decrease value */
					return Math.abs(contentPos - parseInt(val.split("-=")[1]));
				} else if (val.indexOf("+=") !== -1) { /* inrease value */
					var p = (contentPos + parseInt(val.split("+=")[1]));
					return p >= 0 ? 0 : Math.abs(p);
				} else if (val.indexOf("px") !== -1 && _isNumeric(val.split("px")[0])) { /* pixels string value (e.g. "100px") */
					return Math.abs(val.split("px")[0]);
				} else {
					if (val === "top" || val === "left") { /* special strings */
						return 0;
					} else if (val === "bottom") {
						return Math.abs(wrapper.height() - mCSB_container.outerHeight(false));
					} else if (val === "right") {
						return Math.abs(wrapper.width() - mCSB_container.outerWidth(false));
					} else if (val === "first" || val === "last") {
						var obj = mCSB_container.find(":" + val);
						return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
					} else {
						if ($(val).length) { /* jquery selector */
							return dir === "x" ? _childPos($(val))[1] : _childPos($(val))[0];
						} else { /* other values (e.g. "100em") */
							mCSB_container.css(cssProp, val);
							methods.update.call(null, $this[0]);
							return;
						}
					}
				}
				break;
		}
	},
	/* -------------------- */


	/* calls the update method automatically */
	_autoUpdate = function(rem) {
		var $this = $(this),
			d = $this.data(pluginPfx),
			o = d.opt,
			mCSB_container = $("#mCSB_" + d.idx + "_container");
		if (rem) {
			/* 
			removes autoUpdate timer 
			usage: _autoUpdate.call(this,"remove");
			*/
			clearTimeout(mCSB_container[0].autoUpdate);
			_delete(mCSB_container[0], "autoUpdate");
			return;
		}
		upd();

		function upd() {
			clearTimeout(mCSB_container[0].autoUpdate);
			if ($this.parents("html").length === 0) {
				/* check element in dom tree */
				$this = null;
				return;
			}
			mCSB_container[0].autoUpdate = setTimeout(function() {
				/* update on specific selector(s) length and size change */
				if (o.advanced.updateOnSelectorChange) {
					d.poll.change.n = sizesSum();
					if (d.poll.change.n !== d.poll.change.o) {
						d.poll.change.o = d.poll.change.n;
						doUpd(3);
						return;
					}
				}
				/* update on main element and scrollbar size changes */
				if (o.advanced.updateOnContentResize) {
					d.poll.size.n = $this[0].scrollHeight + $this[0].scrollWidth + mCSB_container[0].offsetHeight + $this[0].offsetHeight + $this[0].offsetWidth;
					if (d.poll.size.n !== d.poll.size.o) {
						d.poll.size.o = d.poll.size.n;
						doUpd(1);
						return;
					}
				}
				/* update on image load */
				if (o.advanced.updateOnImageLoad) {
					if (!(o.advanced.updateOnImageLoad === "auto" && o.axis === "y")) { //by default, it doesn't run on vertical content
						d.poll.img.n = mCSB_container.find("img").length;
						if (d.poll.img.n !== d.poll.img.o) {
							d.poll.img.o = d.poll.img.n;
							mCSB_container.find("img").each(function() {
								imgLoader(this);
							});
							return;
						}
					}
				}
				if (o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) {
					upd();
				}
			}, o.advanced.autoUpdateTimeout);
		}
		/* a tiny image loader */
		function imgLoader(el) {
			if ($(el).hasClass(classes[2])) {
				doUpd();
				return;
			}
			var img = new Image();

			function createDelegate(contextObject, delegateMethod) {
				return function() {
					return delegateMethod.apply(contextObject, arguments);
				}
			}

			function imgOnLoad() {
				this.onload = null;
				$(el).addClass(classes[2]);
				doUpd(2);
			}
			img.onload = createDelegate(img, imgOnLoad);
			img.src = el.src;
		}
		/* returns the total height and width sum of all elements matching the selector */
		function sizesSum() {
			if (o.advanced.updateOnSelectorChange === true) {
				o.advanced.updateOnSelectorChange = "*";
			}
			var total = 0,
				sel = mCSB_container.find(o.advanced.updateOnSelectorChange);
			if (o.advanced.updateOnSelectorChange && sel.length > 0) {
				sel.each(function() {
					total += this.offsetHeight + this.offsetWidth;
				});
			}
			return total;
		}
		/* calls the update method */
		function doUpd(cb) {
			clearTimeout(mCSB_container[0].autoUpdate);
			methods.update.call(null, $this[0], cb);
		}
	},
	/* -------------------- */


	/* snaps scrolling to a multiple of a pixels number */
	_snapAmount = function(to, amount, offset) {
		return (Math.round(to / amount) * amount - offset);
	},
	/* -------------------- */


	/* stops content and scrollbar animations */
	_stop = function(el) {
		var d = el.data(pluginPfx),
			sel = $("#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal");
		sel.each(function() {
			_stopTween.call(this);
		});
	},
	/* -------------------- */


	/* 
	ANIMATES CONTENT 
	This is where the actual scrolling happens
	*/
	_scrollTo = function(el, to, options) {
		var d = el.data(pluginPfx),
			o = d.opt,
			defaults = {
				trigger: "internal",
				dir: "y",
				scrollEasing: "mcsEaseOut",
				drag: false,
				dur: o.scrollInertia,
				overwrite: "all",
				callbacks: true,
				onStart: true,
				onUpdate: true,
				onComplete: true
			},
			options = $.extend(defaults, options),
			dur = [options.dur, (options.drag ? 0 : options.dur)],
			mCustomScrollBox = $("#mCSB_" + d.idx),
			mCSB_container = $("#mCSB_" + d.idx + "_container"),
			wrapper = mCSB_container.parent(),
			totalScrollOffsets = o.callbacks.onTotalScrollOffset ? _arr.call(el, o.callbacks.onTotalScrollOffset) : [0, 0],
			totalScrollBackOffsets = o.callbacks.onTotalScrollBackOffset ? _arr.call(el, o.callbacks.onTotalScrollBackOffset) : [0, 0];
		d.trigger = options.trigger;
		if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) { /* always reset scrollTop/Left */
			$(".mCSB_" + d.idx + "_scrollbar").css("visibility", "visible");
			wrapper.scrollTop(0).scrollLeft(0);
		}
		if (to === "_resetY" && !d.contentReset.y) {
			/* callbacks: onOverflowYNone */
			if (_cb("onOverflowYNone")) {
				o.callbacks.onOverflowYNone.call(el[0]);
			}
			d.contentReset.y = 1;
		}
		if (to === "_resetX" && !d.contentReset.x) {
			/* callbacks: onOverflowXNone */
			if (_cb("onOverflowXNone")) {
				o.callbacks.onOverflowXNone.call(el[0]);
			}
			d.contentReset.x = 1;
		}
		if (to === "_resetY" || to === "_resetX") {
			return;
		}
		if ((d.contentReset.y || !el[0].mcs) && d.overflowed[0]) {
			/* callbacks: onOverflowY */
			if (_cb("onOverflowY")) {
				o.callbacks.onOverflowY.call(el[0]);
			}
			d.contentReset.x = null;
		}
		if ((d.contentReset.x || !el[0].mcs) && d.overflowed[1]) {
			/* callbacks: onOverflowX */
			if (_cb("onOverflowX")) {
				o.callbacks.onOverflowX.call(el[0]);
			}
			d.contentReset.x = null;
		}
		if (o.snapAmount) { /* scrolling snapping */
			var snapAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : options.dir === "x" ? o.snapAmount[1] : o.snapAmount[0];
			to = _snapAmount(to, snapAmount, o.snapOffset);
		}
		switch (options.dir) {
			case "x":
				var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_horizontal"),
					property = "left",
					contentPos = mCSB_container[0].offsetLeft,
					limit = [
						mCustomScrollBox.width() - mCSB_container.outerWidth(false),
						mCSB_dragger.parent().width() - mCSB_dragger.width()
					],
					scrollTo = [to, to === 0 ? 0 : (to / d.scrollRatio.x)],
					tso = totalScrollOffsets[1],
					tsbo = totalScrollBackOffsets[1],
					totalScrollOffset = tso > 0 ? tso / d.scrollRatio.x : 0,
					totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.x : 0;
				break;
			case "y":
				var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_vertical"),
					property = "top",
					contentPos = mCSB_container[0].offsetTop,
					limit = [
						mCustomScrollBox.height() - mCSB_container.outerHeight(false),
						mCSB_dragger.parent().height() - mCSB_dragger.height()
					],
					scrollTo = [to, to === 0 ? 0 : (to / d.scrollRatio.y)],
					tso = totalScrollOffsets[0],
					tsbo = totalScrollBackOffsets[0],
					totalScrollOffset = tso > 0 ? tso / d.scrollRatio.y : 0,
					totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.y : 0;
				break;
		}
		if (scrollTo[1] < 0 || (scrollTo[0] === 0 && scrollTo[1] === 0)) {
			scrollTo = [0, 0];
		} else if (scrollTo[1] >= limit[1]) {
			scrollTo = [limit[0], limit[1]];
		} else {
			scrollTo[0] = -scrollTo[0];
		}
		if (!el[0].mcs) {
			_mcs(); /* init mcs object (once) to make it available before callbacks */
			if (_cb("onInit")) {
				o.callbacks.onInit.call(el[0]);
			} /* callbacks: onInit */
		}
		clearTimeout(mCSB_container[0].onCompleteTimeout);
		_tweenTo(mCSB_dragger[0], property, Math.round(scrollTo[1]), dur[1], options.scrollEasing);
		if (!d.tweenRunning && ((contentPos === 0 && scrollTo[0] >= 0) || (contentPos === limit[0] && scrollTo[0] <= limit[0]))) {
			return;
		}
		_tweenTo(mCSB_container[0], property, Math.round(scrollTo[0]), dur[0], options.scrollEasing, options.overwrite, {
			onStart: function() {
				if (options.callbacks && options.onStart && !d.tweenRunning) {
					/* callbacks: onScrollStart */
					if (_cb("onScrollStart")) {
						_mcs();
						o.callbacks.onScrollStart.call(el[0]);
					}
					d.tweenRunning = true;
					_onDragClasses(mCSB_dragger);
					d.cbOffsets = _cbOffsets();
				}
			},
			onUpdate: function() {
				if (options.callbacks && options.onUpdate) {
					/* callbacks: whileScrolling */
					if (_cb("whileScrolling")) {
						_mcs();
						o.callbacks.whileScrolling.call(el[0]);
					}
				}
			},
			onComplete: function() {
				if (options.callbacks && options.onComplete) {
					if (o.axis === "yx") {
						clearTimeout(mCSB_container[0].onCompleteTimeout);
					}
					var t = mCSB_container[0].idleTimer || 0;
					mCSB_container[0].onCompleteTimeout = setTimeout(function() {
						/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
						if (_cb("onScroll")) {
							_mcs();
							o.callbacks.onScroll.call(el[0]);
						}
						if (_cb("onTotalScroll") && scrollTo[1] >= limit[1] - totalScrollOffset && d.cbOffsets[0]) {
							_mcs();
							o.callbacks.onTotalScroll.call(el[0]);
						}
						if (_cb("onTotalScrollBack") && scrollTo[1] <= totalScrollBackOffset && d.cbOffsets[1]) {
							_mcs();
							o.callbacks.onTotalScrollBack.call(el[0]);
						}
						d.tweenRunning = false;
						mCSB_container[0].idleTimer = 0;
						_onDragClasses(mCSB_dragger, "hide");
					}, t);
				}
			}
		});
		/* checks if callback function exists */
		function _cb(cb) {
			return d && o.callbacks[cb] && typeof o.callbacks[cb] === "function";
		}
		/* checks whether callback offsets always trigger */
		function _cbOffsets() {
			return [o.callbacks.alwaysTriggerOffsets || contentPos >= limit[0] + tso, o.callbacks.alwaysTriggerOffsets || contentPos <= -tsbo];
		}
		/* 
		populates object with useful values for the user 
		values: 
			content: this.mcs.content
			content top position: this.mcs.top 
			content left position: this.mcs.left 
			dragger top position: this.mcs.draggerTop 
			dragger left position: this.mcs.draggerLeft 
			scrolling y percentage: this.mcs.topPct 
			scrolling x percentage: this.mcs.leftPct 
			scrolling direction: this.mcs.direction
		*/
		function _mcs() {
			var cp = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
				/* content position */
				dp = [mCSB_dragger[0].offsetTop, mCSB_dragger[0].offsetLeft],
				/* dragger position */
				cl = [mCSB_container.outerHeight(false), mCSB_container.outerWidth(false)],
				/* content length */
				pl = [mCustomScrollBox.height(), mCustomScrollBox.width()]; /* content parent length */
			el[0].mcs = {
				content: mCSB_container,
				/* original content wrapper as jquery object */
				top: cp[0],
				left: cp[1],
				draggerTop: dp[0],
				draggerLeft: dp[1],
				topPct: Math.round((100 * Math.abs(cp[0])) / (Math.abs(cl[0]) - pl[0])),
				leftPct: Math.round((100 * Math.abs(cp[1])) / (Math.abs(cl[1]) - pl[1])),
				direction: options.dir
			};
			/* 
			this refers to the original element containing the scrollbar(s)
			usage: this.mcs.top, this.mcs.leftPct etc. 
			*/
		}
	},
	/* -------------------- */


	/* 
	CUSTOM JAVASCRIPT ANIMATION TWEEN 
	Lighter and faster than jquery animate() and css transitions 
	Animates top/left properties and includes easings 
	*/
	_tweenTo = function(el, prop, to, duration, easing, overwrite, callbacks) {
		if (!el._mTween) {
			el._mTween = {
				top: {},
				left: {}
			};
		}
		var callbacks = callbacks || {},
			onStart = callbacks.onStart || function() {},
			onUpdate = callbacks.onUpdate || function() {},
			onComplete = callbacks.onComplete || function() {},
			startTime = _getTime(),
			_delay, progress = 0,
			from = el.offsetTop,
			elStyle = el.style,
			_request, tobj = el._mTween[prop];
		if (prop === "left") {
			from = el.offsetLeft;
		}
		var diff = to - from;
		tobj.stop = 0;
		if (overwrite !== "none") {
			_cancelTween();
		}
		_startTween();

		function _step() {
			if (tobj.stop) {
				return;
			}
			if (!progress) {
				onStart.call();
			}
			progress = _getTime() - startTime;
			_tween();
			if (progress >= tobj.time) {
				tobj.time = (progress > tobj.time) ? progress + _delay - (progress - tobj.time) : progress + _delay - 1;
				if (tobj.time < progress + 1) {
					tobj.time = progress + 1;
				}
			}
			if (tobj.time < duration) {
				tobj.id = _request(_step);
			} else {
				onComplete.call();
			}
		}

		function _tween() {
			if (duration > 0) {
				tobj.currVal = _ease(tobj.time, from, diff, duration, easing);
				elStyle[prop] = Math.round(tobj.currVal) + "px";
			} else {
				elStyle[prop] = to + "px";
			}
			onUpdate.call();
		}

		function _startTween() {
			_delay = 1000 / 60;
			tobj.time = progress + _delay;
			_request = (!window.requestAnimationFrame) ? function(f) {
				_tween();
				return setTimeout(f, 0.01);
			} : window.requestAnimationFrame;
			tobj.id = _request(_step);
		}

		function _cancelTween() {
			if (tobj.id == null) {
				return;
			}
			if (!window.requestAnimationFrame) {
				clearTimeout(tobj.id);
			} else {
				window.cancelAnimationFrame(tobj.id);
			}
			tobj.id = null;
		}

		function _ease(t, b, c, d, type) {
			switch (type) {
				case "linear":
				case "mcsLinear":
					return c * t / d + b;
					break;
				case "mcsLinearOut":
					t /= d;
					t--;
					return c * Math.sqrt(1 - t * t) + b;
					break;
				case "easeInOutSmooth":
					t /= d / 2;
					if (t < 1) return c / 2 * t * t + b;
					t--;
					return -c / 2 * (t * (t - 2) - 1) + b;
					break;
				case "easeInOutStrong":
					t /= d / 2;
					if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
					t--;
					return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
					break;
				case "easeInOut":
				case "mcsEaseInOut":
					t /= d / 2;
					if (t < 1) return c / 2 * t * t * t + b;
					t -= 2;
					return c / 2 * (t * t * t + 2) + b;
					break;
				case "easeOutSmooth":
					t /= d;
					t--;
					return -c * (t * t * t * t - 1) + b;
					break;
				case "easeOutStrong":
					return c * (-Math.pow(2, -10 * t / d) + 1) + b;
					break;
				case "easeOut":
				case "mcsEaseOut":
				default:
					var ts = (t /= d) * t,
						tc = ts * t;
					return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
			}
		}
	},
	/* -------------------- */


	/* returns current time */
	_getTime = function() {
		if (window.performance && window.performance.now) {
			return window.performance.now();
		} else {
			if (window.performance && window.performance.webkitNow) {
				return window.performance.webkitNow();
			} else {
				if (Date.now) {
					return Date.now();
				} else {
					return new Date().getTime();
				}
			}
		}
	},
	/* -------------------- */


	/* stops a tween */
	_stopTween = function() {
		var el = this;
		if (!el._mTween) {
			el._mTween = {
				top: {},
				left: {}
			};
		}
		var props = ["top", "left"];
		for (var i = 0; i < props.length; i++) {
			var prop = props[i];
			if (el._mTween[prop].id) {
				if (!window.requestAnimationFrame) {
					clearTimeout(el._mTween[prop].id);
				} else {
					window.cancelAnimationFrame(el._mTween[prop].id);
				}
				el._mTween[prop].id = null;
				el._mTween[prop].stop = 1;
			}
		}
	},
	/* -------------------- */


	/* deletes a property (avoiding the exception thrown by IE) */
	_delete = function(c, m) {
		try {
			delete c[m];
		} catch (e) {
			c[m] = null;
		}
	},
	/* -------------------- */


	/* detects left mouse button */
	_mouseBtnLeft = function(e) {
		return !(e.which && e.which !== 1);
	},
	/* -------------------- */


	/* detects if pointer type event is touch */
	_pointerTouch = function(e) {
		var t = e.originalEvent.pointerType;
		return !(t && t !== "touch" && t !== 2);
	},
	/* -------------------- */


	/* checks if value is numeric */
	_isNumeric = function(val) {
		return !isNaN(parseFloat(val)) && isFinite(val);
	},
	/* -------------------- */


	/* returns element position according to content */
	_childPos = function(el) {
		var p = el.parents(".mCSB_container");
		return [el.offset().top - p.offset().top, el.offset().left - p.offset().left];
	},
	/* -------------------- */


	/* checks if browser tab is hidden/inactive via Page Visibility API */
	_isTabHidden = function() {
		var prop = _getHiddenProp();
		if (!prop) return false;
		return document[prop];

		function _getHiddenProp() {
			var pfx = ["webkit", "moz", "ms", "o"];
			if ("hidden" in document) return "hidden"; //natively supported
			for (var i = 0; i < pfx.length; i++) { //prefixed
				if ((pfx[i] + "Hidden") in document)
					return pfx[i] + "Hidden";
			}
			return null; //not supported
		}
	};
	/* -------------------- */


	/* 
	----------------------------------------
	PLUGIN SETUP 
	----------------------------------------
	*/

	/* plugin constructor functions */
	$.fn[pluginNS] = function(method) { /* usage: $(selector).mCustomScrollbar(); */
	if (methods[method]) {
		return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	} else if (typeof method === "object" || !method) {
		return methods.init.apply(this, arguments);
	} else {
		$.error("Method " + method + " does not exist");
	}
	};
	$[pluginNS] = function(method) { /* usage: $.mCustomScrollbar(); */
	if (methods[method]) {
		return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	} else if (typeof method === "object" || !method) {
		return methods.init.apply(this, arguments);
	} else {
		$.error("Method " + method + " does not exist");
	}
	};

	/* 
	allow setting plugin default options. 
	usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
	to apply any changed default options on default selectors (below), use inside document ready fn 
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
	$[pluginNS].defaults = defaults;

	/* 
	add window object (window.mCustomScrollbar) 
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
	window[pluginNS] = true;

	$(window).bind("load", function() {

		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */

		/* extend jQuery expressions */
		$.extend($.expr[":"], {
			/* checks if element is within scrollable viewport */
			mcsInView: $.expr[":"].mcsInView || function(el) {
				var $el = $(el),
					content = $el.parents(".mCSB_container"),
					wrapper, cPos;
				if (!content.length) {
					return;
				}
				wrapper = content.parent();
				cPos = [content[0].offsetTop, content[0].offsetLeft];
				return cPos[0] + _childPos($el)[0] >= 0 && cPos[0] + _childPos($el)[0] < wrapper.height() - $el.outerHeight(false) &&
					cPos[1] + _childPos($el)[1] >= 0 && cPos[1] + _childPos($el)[1] < wrapper.width() - $el.outerWidth(false);
			},
			/* checks if element or part of element is in view of scrollable viewport */
			mcsInSight: $.expr[":"].mcsInSight || function(el, i, m) {
				var $el = $(el),
					elD, content = $el.parents(".mCSB_container"),
					wrapperView, pos, wrapperViewPct,
					pctVals = m[3] === "exact" ? [
						[1, 0],
						[1, 0]
					] : [
						[0.9, 0.1],
						[0.6, 0.4]
					];
				if (!content.length) {
					return;
				}
				elD = [$el.outerHeight(false), $el.outerWidth(false)];
				pos = [content[0].offsetTop + _childPos($el)[0], content[0].offsetLeft + _childPos($el)[1]];
				wrapperView = [content.parent()[0].offsetHeight, content.parent()[0].offsetWidth];
				wrapperViewPct = [elD[0] < wrapperView[0] ? pctVals[0] : pctVals[1], elD[1] < wrapperView[1] ? pctVals[0] : pctVals[1]];
				return pos[0] - (wrapperView[0] * wrapperViewPct[0][0]) < 0 && pos[0] + elD[0] - (wrapperView[0] * wrapperViewPct[0][1]) >= 0 &&
					pos[1] - (wrapperView[1] * wrapperViewPct[1][0]) < 0 && pos[1] + elD[1] - (wrapperView[1] * wrapperViewPct[1][1]) >= 0;
			},
			/* checks if element is overflowed having visible scrollbar(s) */
			mcsOverflow: $.expr[":"].mcsOverflow || function(el) {
				var d = $(el).data(pluginPfx);
				if (!d) {
					return;
				}
				return d.overflowed[0] || d.overflowed[1];
			}
		});

	});
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = jquery;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/*\n== malihu jquery custom scrollbar plugin ==\nPlugin URI: http://manos.malihu.gr/jquery-custom-content-scroller\n*/\n\n\n\n/*\nCONTENTS: \n\t1. BASIC STYLE - Plugin's basic/essential CSS properties (normally, should not be edited). \n\t2. VERTICAL SCROLLBAR - Positioning and dimensions of vertical scrollbar. \n\t3. HORIZONTAL SCROLLBAR - Positioning and dimensions of horizontal scrollbar.\n\t4. VERTICAL AND HORIZONTAL SCROLLBARS - Positioning and dimensions of 2-axis scrollbars. \n\t5. TRANSITIONS - CSS3 transitions for hover events, auto-expanded and auto-hidden scrollbars. \n\t6. SCROLLBAR COLORS, OPACITY AND BACKGROUNDS \n\t\t6.1 THEMES - Scrollbar colors, opacity, dimensions, backgrounds etc. via ready-to-use themes.\n*/\n\n\n\n/* \n------------------------------------------------------------------------------------------------------------------------\n1. BASIC STYLE  \n------------------------------------------------------------------------------------------------------------------------\n*/\n\n\t.mCustomScrollbar{ -ms-touch-action: pinch-zoom; touch-action: pinch-zoom; /* direct pointer events to js */ }\n\t.mCustomScrollbar.mCS_no_scrollbar, .mCustomScrollbar.mCS_touch_action{ -ms-touch-action: auto; touch-action: auto; }\n\t\n\t.mCustomScrollBox{ /* contains plugin's markup */\n\t\tposition: relative;\n\t\toverflow: hidden;\n\t\theight: 100%;\n\t\tmax-width: 100%;\n\t\toutline: none;\n\t\tdirection: ltr;\n\t}\n\n\t.mCSB_container{ /* contains the original content */\n\t\toverflow: hidden;\n\t\twidth: auto;\n\t\theight: auto;\n\t}\n\n\n\n/* \n------------------------------------------------------------------------------------------------------------------------\n2. VERTICAL SCROLLBAR \ny-axis\n------------------------------------------------------------------------------------------------------------------------\n*/\n\n\t.mCSB_inside > .mCSB_container{ margin-right: 30px; }\n\n\t.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden{ margin-right: 0; } /* non-visible scrollbar */\n\t\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_container{ /* RTL direction/left-side scrollbar */\n\t\tmargin-right: 0;\n\t\tmargin-left: 30px;\n\t}\n\t\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden{ margin-left: 0; } /* RTL direction/left-side scrollbar */\n\n\t.mCSB_scrollTools{ /* contains scrollbar markup (draggable element, dragger rail, buttons etc.) */\n\t\tposition: absolute;\n\t\twidth: 16px;\n\t\theight: auto;\n\t\tleft: auto;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t}\n\n\t.mCSB_outside + .mCSB_scrollTools{ right: -26px; } /* scrollbar position: outside */\n\t\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_scrollTools, \n\t.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools{ /* RTL direction/left-side scrollbar */\n\t\tright: auto;\n\t\tleft: 0;\n\t}\n\t\n\t.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools{ left: -26px; } /* RTL direction/left-side scrollbar (scrollbar position: outside) */\n\n\t.mCSB_scrollTools .mCSB_draggerContainer{ /* contains the draggable element and dragger rail markup */\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tright: 0; \n\t\theight: auto;\n\t}\n\n\t.mCSB_scrollTools a + .mCSB_draggerContainer{ margin: 20px 0; }\n\n\t.mCSB_scrollTools .mCSB_draggerRail{\n\t\twidth: 2px;\n\t\theight: 100%;\n\t\tmargin: 0 auto;\n\t\t-webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px;\n\t}\n\n\t.mCSB_scrollTools .mCSB_dragger{ /* the draggable element */\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\theight: 30px; /* minimum dragger height */\n\t\tz-index: 1;\n\t}\n\n\t.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ /* the dragger element */\n\t\tposition: relative;\n\t\twidth: 4px;\n\t\theight: 100%;\n\t\tmargin: 0 auto;\n\t\t-webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px;\n\t\ttext-align: center;\n\t}\n\t\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{ width: 12px; /* auto-expanded scrollbar */ }\n\t\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{ width: 8px; /* auto-expanded scrollbar */ }\n\n\t.mCSB_scrollTools .mCSB_buttonUp,\n\t.mCSB_scrollTools .mCSB_buttonDown{\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\theight: 20px;\n\t\twidth: 100%;\n\t\toverflow: hidden;\n\t\tmargin: 0 auto;\n\t\tcursor: pointer;\n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonDown{ bottom: 0; }\n\n\n\n/* \n------------------------------------------------------------------------------------------------------------------------\n3. HORIZONTAL SCROLLBAR \nx-axis\n------------------------------------------------------------------------------------------------------------------------\n*/\n\n\t.mCSB_horizontal.mCSB_inside > .mCSB_container{\n\t\tmargin-right: 0;\n\t\tmargin-bottom: 30px;\n\t}\n\t\n\t.mCSB_horizontal.mCSB_outside > .mCSB_container{ min-height: 100%; }\n\n\t.mCSB_horizontal > .mCSB_container.mCS_no_scrollbar_x.mCS_x_hidden{ margin-bottom: 0; } /* non-visible scrollbar */\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal{\n\t\twidth: auto;\n\t\theight: 16px;\n\t\ttop: auto;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t}\n\n\t.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal,\n\t.mCustomScrollBox + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal{ bottom: -26px; } /* scrollbar position: outside */\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal a + .mCSB_draggerContainer{ margin: 0 20px; }\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\twidth: 100%;\n\t\theight: 2px;\n\t\tmargin: 7px 0;\n\t}\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger{\n\t\twidth: 30px; /* minimum dragger width */\n\t\theight: 100%;\n\t\tleft: 0;\n\t}\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 100%;\n\t\theight: 4px;\n\t\tmargin: 6px auto;\n\t}\n\t\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{\n\t\theight: 12px; /* auto-expanded scrollbar */\n\t\tmargin: 2px auto;\n\t}\n\t\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\n\t\theight: 8px; /* auto-expanded scrollbar */\n\t\tmargin: 4px 0;\n\t}\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft,\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight{\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\twidth: 20px;\n\t\theight: 100%;\n\t\toverflow: hidden;\n\t\tmargin: 0 auto;\n\t\tcursor: pointer;\n\t}\n\t\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft{ left: 0; }\n\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight{ right: 0; }\n\n\n\n/* \n------------------------------------------------------------------------------------------------------------------------\n4. VERTICAL AND HORIZONTAL SCROLLBARS \nyx-axis \n------------------------------------------------------------------------------------------------------------------------\n*/\n\n\t.mCSB_container_wrapper{\n\t\tposition: absolute;\n\t\theight: auto;\n\t\twidth: auto;\n\t\toverflow: hidden;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tmargin-right: 30px;\n\t\tmargin-bottom: 30px;\n\t}\n\t\n\t.mCSB_container_wrapper > .mCSB_container{\n\t\tpadding-right: 30px;\n\t\tpadding-bottom: 30px;\n\t\t-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\n\t}\n\t\n\t.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_vertical{ bottom: 20px; }\n\t\n\t.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_horizontal{ right: 20px; }\n\t\n\t/* non-visible horizontal scrollbar */\n\t.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden + .mCSB_scrollTools.mCSB_scrollTools_vertical{ bottom: 0; }\n\t\n\t/* non-visible vertical scrollbar/RTL direction/left-side scrollbar */\n\t.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal, \n\t.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal{ right: 0; }\n\t\n\t/* RTL direction/left-side scrollbar */\n\t.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal{ left: 20px; }\n\t\n\t/* non-visible scrollbar/RTL direction/left-side scrollbar */\n\t.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal{ left: 0; }\n\t\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_container_wrapper{ /* RTL direction/left-side scrollbar */\n\t\tmargin-right: 0;\n\t\tmargin-left: 30px;\n\t}\n\t\n\t.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden > .mCSB_container{ padding-right: 0; }\n\t\n\t.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden > .mCSB_container{ padding-bottom: 0; }\n\t\n\t.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden{\n\t\tmargin-right: 0; /* non-visible scrollbar */\n\t\tmargin-left: 0;\n\t}\n\t\n\t/* non-visible horizontal scrollbar */\n\t.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden{ margin-bottom: 0; }\n\n\n\n/* \n------------------------------------------------------------------------------------------------------------------------\n5. TRANSITIONS  \n------------------------------------------------------------------------------------------------------------------------\n*/\n\n\t.mCSB_scrollTools, \n\t.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCSB_scrollTools .mCSB_buttonUp,\n\t.mCSB_scrollTools .mCSB_buttonDown,\n\t.mCSB_scrollTools .mCSB_buttonLeft,\n\t.mCSB_scrollTools .mCSB_buttonRight{\n\t\t-webkit-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;\n\t\t-moz-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;\n\t\t-o-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;\n\t\ttransition: opacity .2s ease-in-out, background-color .2s ease-in-out;\n\t}\n\t\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, /* auto-expanded scrollbar */\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail, \n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, \n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail{\n\t\t-webkit-transition: width .2s ease-out .2s, height .2s ease-out .2s, \n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \n\t\t-moz-transition: width .2s ease-out .2s, height .2s ease-out .2s, \n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \n\t\t-o-transition: width .2s ease-out .2s, height .2s ease-out .2s, \n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \n\t\ttransition: width .2s ease-out .2s, height .2s ease-out .2s, \n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \n\t}\n\n\n\n/* \n------------------------------------------------------------------------------------------------------------------------\n6. SCROLLBAR COLORS, OPACITY AND BACKGROUNDS  \n------------------------------------------------------------------------------------------------------------------------\n*/\n\n\t/* \n\t----------------------------------------\n\t6.1 THEMES \n\t----------------------------------------\n\t*/\n\t\n\t/* default theme (\"light\") */\n\n\t.mCSB_scrollTools{ opacity: 0.75; filter: \"alpha(opacity=75)\"; -ms-filter: \"alpha(opacity=75)\"; }\n\t\n\t.mCS-autoHide > .mCustomScrollBox > .mCSB_scrollTools,\n\t.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools{ opacity: 0; filter: \"alpha(opacity=0)\"; -ms-filter: \"alpha(opacity=0)\"; }\n\t\n\t.mCustomScrollbar > .mCustomScrollBox > .mCSB_scrollTools.mCSB_scrollTools_onDrag,\n\t.mCustomScrollbar > .mCustomScrollBox ~ .mCSB_scrollTools.mCSB_scrollTools_onDrag,\n\t.mCustomScrollBox:hover > .mCSB_scrollTools,\n\t.mCustomScrollBox:hover ~ .mCSB_scrollTools,\n\t.mCS-autoHide:hover > .mCustomScrollBox > .mCSB_scrollTools,\n\t.mCS-autoHide:hover > .mCustomScrollBox ~ .mCSB_scrollTools{ opacity: 1; filter: \"alpha(opacity=100)\"; -ms-filter: \"alpha(opacity=100)\"; }\n\n\t.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.4);\n\t\tfilter: \"alpha(opacity=40)\"; -ms-filter: \"alpha(opacity=40)\"; \n\t}\n\n\t.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.75);\n\t\tfilter: \"alpha(opacity=75)\"; -ms-filter: \"alpha(opacity=75)\"; \n\t}\n\n\t.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.85);\n\t\tfilter: \"alpha(opacity=85)\"; -ms-filter: \"alpha(opacity=85)\"; \n\t}\n\t.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.9);\n\t\tfilter: \"alpha(opacity=90)\"; -ms-filter: \"alpha(opacity=90)\"; \n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonUp,\n\t.mCSB_scrollTools .mCSB_buttonDown,\n\t.mCSB_scrollTools .mCSB_buttonLeft,\n\t.mCSB_scrollTools .mCSB_buttonRight{\n\t\tbackground-image: url(" + __webpack_require__(7) + "); /* css sprites */\n\t\tbackground-repeat: no-repeat;\n\t\topacity: 0.4; filter: \"alpha(opacity=40)\"; -ms-filter: \"alpha(opacity=40)\"; \n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonUp{\n\t\tbackground-position: 0 0;\n\t\t/* \n\t\tsprites locations \n\t\tlight: 0 0, -16px 0, -32px 0, -48px 0, 0 -72px, -16px -72px, -32px -72px\n\t\tdark: -80px 0, -96px 0, -112px 0, -128px 0, -80px -72px, -96px -72px, -112px -72px\n\t\t*/\n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonDown{\n\t\tbackground-position: 0 -20px;\n\t\t/* \n\t\tsprites locations\n\t\tlight: 0 -20px, -16px -20px, -32px -20px, -48px -20px, 0 -92px, -16px -92px, -32px -92px\n\t\tdark: -80px -20px, -96px -20px, -112px -20px, -128px -20px, -80px -92px, -96px -92px, -112 -92px\n\t\t*/\n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonLeft{\n\t\tbackground-position: 0 -40px;\n\t\t/* \n\t\tsprites locations \n\t\tlight: 0 -40px, -20px -40px, -40px -40px, -60px -40px, 0 -112px, -20px -112px, -40px -112px\n\t\tdark: -80px -40px, -100px -40px, -120px -40px, -140px -40px, -80px -112px, -100px -112px, -120px -112px\n\t\t*/\n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonRight{\n\t\tbackground-position: 0 -56px;\n\t\t/* \n\t\tsprites locations \n\t\tlight: 0 -56px, -20px -56px, -40px -56px, -60px -56px, 0 -128px, -20px -128px, -40px -128px\n\t\tdark: -80px -56px, -100px -56px, -120px -56px, -140px -56px, -80px -128px, -100px -128px, -120px -128px\n\t\t*/\n\t}\n\n\t.mCSB_scrollTools .mCSB_buttonUp:hover,\n\t.mCSB_scrollTools .mCSB_buttonDown:hover,\n\t.mCSB_scrollTools .mCSB_buttonLeft:hover,\n\t.mCSB_scrollTools .mCSB_buttonRight:hover{ opacity: 0.75; filter: \"alpha(opacity=75)\"; -ms-filter: \"alpha(opacity=75)\"; }\n\n\t.mCSB_scrollTools .mCSB_buttonUp:active,\n\t.mCSB_scrollTools .mCSB_buttonDown:active,\n\t.mCSB_scrollTools .mCSB_buttonLeft:active,\n\t.mCSB_scrollTools .mCSB_buttonRight:active{ opacity: 0.9; filter: \"alpha(opacity=90)\"; -ms-filter: \"alpha(opacity=90)\"; }\n\t\n\n\t/* theme: \"dark\" */\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.15); }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: rgba(0,0,0,0.85); }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: rgba(0,0,0,0.9); }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -80px 0; }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -80px -20px; }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -80px -40px; }\n\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonRight{ background-position: -80px -56px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\n\n\t/* theme: \"light-2\", \"dark-2\" */\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail{\n\t\twidth: 4px;\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.1);\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\n\t}\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 4px;\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.75);\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\n\t}\n\n\t.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 100%;\n\t\theight: 4px;\n\t\tmargin: 6px auto;\n\t}\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.85); }\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.9); }\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px 0; }\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonDown{\tbackground-position: -32px -20px; }\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonLeft{\tbackground-position: -40px -40px; }\n\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -56px; }\n\t\n\t\n\t/* theme: \"dark-2\" */\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.1);\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\n\t}\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.75);\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\n\t}\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px 0; }\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -20px; }\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -40px; }\n\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -56px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\n\n\t/* theme: \"light-thick\", \"dark-thick\" */\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail{\n\t\twidth: 4px;\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.1);\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\n\t}\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 6px;\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.75);\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\n\t}\n\n\t.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\twidth: 100%;\n\t\theight: 4px;\n\t\tmargin: 6px 0;\n\t}\n\n\t.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 100%;\n\t\theight: 6px;\n\t\tmargin: 5px auto;\n\t}\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.85); }\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.9); }\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonUp{ background-position: -16px 0; }\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonDown{\tbackground-position: -16px -20px; }\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonLeft{\tbackground-position: -20px -40px; }\n\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonRight{ background-position: -20px -56px; }\n\n\n\t/* theme: \"dark-thick\" */\n\t\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.1);\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\n\t}\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.75);\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\n\t}\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonUp{ background-position: -96px 0; }\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonDown{ background-position: -96px -20px; }\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -100px -40px; }\n\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -100px -56px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\n\n\t/* theme: \"light-thin\", \"dark-thin\" */\n\t\n\t.mCS-light-thin.mCSB_scrollTools .mCSB_draggerRail{ background-color: #fff; background-color: rgba(255,255,255,0.1); }\n\n\t.mCS-light-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ width: 2px; }\n\n\t.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail{ width: 100%; }\n\n\t.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 100%;\n\t\theight: 2px;\n\t\tmargin: 7px auto;\n\t}\n\n\n\t/* theme \"dark-thin\" */\n\t\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.15); }\n\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\n\t\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\t\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\t\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonUp{\tbackground-position: -80px 0; }\n\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonDown{ background-position: -80px -20px; }\n\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -80px -40px; }\n\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonRight{ background-position: -80px -56px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\t\n\t\n\t/* theme \"rounded\", \"rounded-dark\", \"rounded-dots\", \"rounded-dots-dark\" */\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail{ background-color: #fff; background-color: rgba(255,255,255,0.15); }\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_dragger, \n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger, \n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger{ height: 14px; }\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 14px;\n\t\tmargin: 0 1px;\n\t}\n\t\n\t.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger, \n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger, \n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger{ width: 14px; }\n\t\n\t.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\theight: 14px;\n\t\tmargin: 1px 0;\n\t}\n\t\n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 16px; /* auto-expanded scrollbar */\n\t\theight: 16px;\n\t\tmargin: -1px 0;\n\t}\n\t\n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{ width: 4px; /* auto-expanded scrollbar */ }\n\t\n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{\n\t\theight: 16px; /* auto-expanded scrollbar */\n\t\twidth: 16px;\n\t\tmargin: 0 -1px;\n\t}\n\t\n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\n\t\theight: 4px; /* auto-expanded scrollbar */\n\t\tmargin: 6px 0;\n\t}\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp{ background-position: 0 -72px; }\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown{ background-position: 0 -92px; }\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft{ background-position: 0 -112px; }\n\t\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight{ background-position: 0 -128px; }\n\t\n\t\n\t/* theme \"rounded-dark\", \"rounded-dots-dark\" */\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.15); }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -80px -72px; }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -80px -92px; }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -80px -112px; }\n\t\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonRight{ background-position: -80px -128px; }\n\t\n\t\n\t/* theme \"rounded-dots\", \"rounded-dots-dark\" */\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools_vertical .mCSB_draggerRail, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools_vertical .mCSB_draggerRail{ width: 4px; }\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\tbackground-color: transparent;\n\t\tbackground-position: center;\n\t}\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYiVbw//9/Y6DiM1ANJoyMjGdBbLgJQAX/kU0DKgDLkaQAvxW4HEvQFwCRcxIJK1XznAAAAABJRU5ErkJggg==\");\n\t\tbackground-repeat: repeat-y;\n\t\topacity: 0.3;\n\t\tfilter: \"alpha(opacity=30)\"; -ms-filter: \"alpha(opacity=30)\"; \n\t}\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\theight: 4px;\n\t\tmargin: 6px 0;\n\t\tbackground-repeat: repeat-x;\n\t}\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonUp{ background-position: -16px -72px; }\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonDown{ background-position: -16px -92px; }\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -20px -112px; }\n\t\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonRight{ background-position: -20px -128px; }\n\t\n\t\n\t/* theme \"rounded-dots-dark\" */\n\t\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQYV2NkIAAYSVFgDFR8BqrBBEifBbGRTfiPZhpYjiQFBK3A6l6CvgAAE9kGCd1mvgEAAAAASUVORK5CYII=\");\n\t}\n\t\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -96px -72px; }\n\t\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -96px -92px; }\n\t\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -100px -112px; }\n\t\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonRight{ background-position: -100px -128px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\t\n\t\n\t/* theme \"3d\", \"3d-dark\", \"3d-thick\", \"3d-thick-dark\" */\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-repeat: repeat-y;\n\t\tbackground-image: -moz-linear-gradient(left, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);\n\t\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0.5)), color-stop(100%,rgba(255,255,255,0)));\n\t\tbackground-image: -webkit-linear-gradient(left, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t\tbackground-image: -o-linear-gradient(left, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t\tbackground-image: -ms-linear-gradient(left, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t\tbackground-image: linear-gradient(to right, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t}\n\t\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-repeat: repeat-x;\n\t\tbackground-image: -moz-linear-gradient(top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);\n\t\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0.5)), color-stop(100%,rgba(255,255,255,0)));\n\t\tbackground-image: -webkit-linear-gradient(top, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t\tbackground-image: -o-linear-gradient(top, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t\tbackground-image: -ms-linear-gradient(top, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t\tbackground-image: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\n\t}\n\t\n\t\n\t/* theme \"3d\", \"3d-dark\" */\n\t\n\t.mCS-3d.mCSB_scrollTools_vertical .mCSB_dragger, \n\t.mCS-3d-dark.mCSB_scrollTools_vertical .mCSB_dragger{ height: 70px; }\n\t\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger, \n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger{ width: 70px; }\n\t\n\t.mCS-3d.mCSB_scrollTools, \n\t.mCS-3d-dark.mCSB_scrollTools{\n\t\topacity: 1;\n\t\tfilter: \"alpha(opacity=30)\"; -ms-filter: \"alpha(opacity=30)\"; \n\t}\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ -webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px; }\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail{\n\t\twidth: 8px;\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\n\t\tbox-shadow: inset 1px 0 1px rgba(0,0,0,0.5), inset -1px 0 1px rgba(255,255,255,0.2);\n\t}\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \t \n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #555; }\n\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ width: 8px; }\n\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\twidth: 100%;\n\t\theight: 8px;\n\t\tmargin: 4px 0;\n\t\tbox-shadow: inset 0 1px 1px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.2);\n\t}\n\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\twidth: 100%;\n\t\theight: 8px;\n\t\tmargin: 4px auto;\n\t}\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\n\t\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -128px; }\n\t\n\t\n\t/* theme \"3d-dark\" */\n\t\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.1);\n\t\tbox-shadow: inset 1px 0 1px rgba(0,0,0,0.1);\n\t}\n\t\n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{ box-shadow: inset 0 1px 1px rgba(0,0,0,0.1); }\n\t\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\n\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\n\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\n\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\t\n\t\n\t/* theme: \"3d-thick\", \"3d-thick-dark\" */\n\t\n\t.mCS-3d-thick.mCSB_scrollTools, \n\t.mCS-3d-thick-dark.mCSB_scrollTools{\n\t\topacity: 1;\n\t\tfilter: \"alpha(opacity=30)\"; -ms-filter: \"alpha(opacity=30)\"; \n\t}\n\t\n\t.mCS-3d-thick.mCSB_scrollTools, \n\t.mCS-3d-thick-dark.mCSB_scrollTools, \n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer, \n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer{ -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }\n\t\n\t.mCSB_inside + .mCS-3d-thick.mCSB_scrollTools_vertical, \n\t.mCSB_inside + .mCS-3d-thick-dark.mCSB_scrollTools_vertical{ right: 1px; }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools_vertical, \n\t.mCS-3d-thick-dark.mCSB_scrollTools_vertical{ box-shadow: inset 1px 0 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.5); }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal, \n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal{\n\t\tbottom: 1px;\n\t\tbox-shadow: inset 0 1px 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.5);\n\t}\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbox-shadow: inset 1px 0 0 rgba(255,255,255,0.4);\n\t\twidth: 12px;\n\t\tmargin: 2px;\n\t\tposition: absolute;\n\t\theight: auto;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t}\n\t\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{ box-shadow: inset 0 1px 0 rgba(255,255,255,0.4); }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,  \n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #555; }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\theight: 12px;\n\t\twidth: auto;\n\t}\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.05);\n\t\tbox-shadow: inset 1px 1px 16px rgba(0,0,0,0.1);\n\t}\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerRail{ background-color: transparent; }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\n\t\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\n\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\n\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -40px -128px; }\n\t\n\t\n\t/* theme: \"3d-thick-dark\" */\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools{ box-shadow: inset 0 0 14px rgba(0,0,0,0.2); }\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal{ box-shadow: inset 0 1px 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.2); }\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ box-shadow: inset 1px 0 0 rgba(255,255,255,0.4), inset -1px 0 0 rgba(0,0,0,0.2); }\n\t \n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{ box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2); }\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,  \n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #777; }\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer{\n\t\tbackground-color: #fff; background-color: rgba(0,0,0,0.05);\n\t\tbox-shadow: inset 1px 1px 16px rgba(0,0,0,0.1);\n\t}\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: transparent; }\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\n\t\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\n\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\n\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\t\n\t\n\t/* theme: \"minimal\", \"minimal-dark\" */\n\t\n\t.mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical, \n\t.mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical{\n\t\tright: 0; \n\t\tmargin: 12px 0; \n\t}\n\t\n\t.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools.mCSB_scrollTools_horizontal, \n\t.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal, \n\t.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools.mCSB_scrollTools_horizontal, \n\t.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal{\n\t\tbottom: 0; \n\t\tmargin: 0 12px; \n\t}\n\t\n\t/* RTL direction/left-side scrollbar */\n\t.mCS-dir-rtl > .mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical, \n\t.mCS-dir-rtl > .mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical{\n\t\tleft: 0; \n\t\tright: auto;\n\t}\n\t\n\t.mCS-minimal.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: transparent; }\n\t\n\t.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger, \n\t.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger{ height: 50px; }\n\t\n\t.mCS-minimal.mCSB_scrollTools_horizontal .mCSB_dragger, \n\t.mCS-minimal-dark.mCSB_scrollTools_horizontal .mCSB_dragger{ width: 50px; }\n\t\n\t.mCS-minimal.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.2);\n\t\tfilter: \"alpha(opacity=20)\"; -ms-filter: \"alpha(opacity=20)\"; \n\t}\n\t\n\t.mCS-minimal.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-minimal.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.5);\n\t\tfilter: \"alpha(opacity=50)\"; -ms-filter: \"alpha(opacity=50)\"; \n\t}\n\t\n\t\n\t/* theme: \"minimal-dark\" */\n\t\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\n\t\tfilter: \"alpha(opacity=20)\"; -ms-filter: \"alpha(opacity=20)\"; \n\t}\n\t\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.5);\n\t\tfilter: \"alpha(opacity=50)\"; -ms-filter: \"alpha(opacity=50)\"; \n\t}\n\t\n\t/* ---------------------------------------- */\n\t\n\t\n\t\n\t/* theme \"light-3\", \"dark-3\" */\n\t\n\t.mCS-light-3.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail{\n\t\twidth: 6px;\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\n\t}\n\n\t.mCS-light-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ width: 6px; }\n\n\t.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\twidth: 100%;\n\t\theight: 6px;\n\t\tmargin: 5px 0;\n\t}\n\t\n\t.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \n\t.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\n\t\twidth: 12px;\n\t}\n\t\n\t.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \n\t.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \n\t.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\n\t\theight: 12px;\n\t\tmargin: 2px 0;\n\t}\n\t\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\n\t\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\n\t\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\n\t\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -128px; }\n\t\n\t\n\t/* theme \"dark-3\" */\n\t\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\n\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\t\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.1); }\n\t\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\n\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\n\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\n\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\n\t\n\t/* ---------------------------------------- */\n\t\n\t\n\t\n\t/* theme \"inset\", \"inset-dark\", \"inset-2\", \"inset-2-dark\", \"inset-3\", \"inset-3-dark\" */\n\t\n\t.mCS-inset.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{\n\t\twidth: 12px;\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\n\t}\n\n\t.mCS-inset.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ \n\t\twidth: 6px;\n\t\tmargin: 3px 5px;\n\t\tposition: absolute;\n\t\theight: auto;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t}\n\n\t.mCS-inset.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\n\t\theight: 6px;\n\t\tmargin: 5px 3px;\n\t\tposition: absolute;\n\t\twidth: auto;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t}\n\t\n\t.mCS-inset.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_draggerRail, \n\t.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\n\t\twidth: 100%;\n\t\theight: 12px;\n\t\tmargin: 2px 0;\n\t}\n\t\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonUp, \n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonUp, \n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\n\t\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonDown, \n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonDown, \n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\n\t\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonLeft, \n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonLeft, \n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\n\t\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonRight, \n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonRight, \n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -128px; }\n\t\n\t\n\t/* theme \"inset-dark\", \"inset-2-dark\", \"inset-3-dark\" */\n\t\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\n\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\t\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.1); }\n\t\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonUp, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonUp, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\n\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonDown, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonDown, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\n\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonLeft, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonLeft, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\n\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonRight, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonRight, \n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\n\t\n\t\n\t/* theme \"inset-2\", \"inset-2-dark\" */\n\t\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail, \n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail{\n\t\tbackground-color: transparent;\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tborder-color: #fff;\n\t\tborder-color: rgba(255,255,255,0.2);\n\t\t-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\n\t}\n\t\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail{ border-color: #000; border-color: rgba(0,0,0,0.2); }\n\t\n\t\n\t/* theme \"inset-3\", \"inset-3-dark\" */\n\t\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail{ background-color: #fff; background-color: rgba(255,255,255,0.6); }\n\t\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.6); }\n\t\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\n\t\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\n\t\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\n\t\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.75); }\n\t\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.85); }\n\t\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.9); }\n\t\n\t/* ---------------------------------------- */\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAYAAACPtWCAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMURDMzE5NzIzQkNFMTExOTY0QkYwNzFDNzkwNTlDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOTMwRUZENEMxMUUxMUUzOUYxQkJGN0E1MDMzNTg1MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOTMwRUZEM0MxMUUxMUUzOUYxQkJGN0E1MDMzNTg1MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MGJlMjMyZC1hNzgzLTI1NGQtOTI4Yy02NDI0YmQxNTg0YWEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTFEQzMxOTcyM0JDRTExMTk2NEJGMDcxQzc5MDU5QzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZvSKsAAAH5ElEQVR42uyd3Y3jNhRGpZSQ7SJA3lyACtg+psEUoAL2zZjtIgtMBYqcWBsvh5e8/Cel8wECPLZ5JZMHpHj5UTNv2zYh1EozACIARACIUI8AHh/Oja6v9fnTKnee/73+vY7nK54/FUDzg7kRfNOIEB6N//PHVIag9flTAZSonBvBNxSEZuPXhqD1+VMB9N0UzhEgzRngq3X+Io0fA0HMENr6/KkAbkZDb5bX2gaNGUK1M6JS588G36PRXhvQ/KzEEOqDr/T5cwI4K//OPYTmArDJEG72GL6/cw+huQCsOYSXmAXbesotAoLYHiznEF59FmrrKUN7z5QeLOcQ3gJAF2ijDeHVAXSBNtoQ3hrAOUO8ywIofT8k3lUBLJmKGS4Z3TIRPHoeEAABEAABEAARAkAEgAgBIAJAhAAQASBCAIjODyCJ6JTKJRENgAAIgAAIgNUAxI6VACB2rHwA2spgSA0AAENq/BCMJT9hCL66JZ9NSRmBY1NSPIBHY7EtM/LGn22Z8UMwG9Mzzj5TepErbkxvOoR1dP4iEPJojrBJCA8nyggBDyeqNwsuASGPZxvw/DkARAgAEQAiBIAIABECQASACFUDsGQuLkfsrq+vZC4uR+zW16dNRJdo4Byxu76+GBtVzdg9XJ92Ka53+HJfY3LskeDLfY0hsTVmhBHgc9ZHhtjzmeFzVkbgOWyxQwEMnZXMHcOXcn1RMUIaN7SBa8OXcn0ACIDDAsgQzBDcdAhmEsIkpPkkhDQMaZjmaRizIUhEJzQEieh4ABEqJgBEAIgAECEARACIULcAnj5lUvL6zpAyKREjBsCUBrpsYvssiePcMUKH4J4bOcfSXNHHgfQMYY6luagnekXcA7aGsGsjQu8Q9mREkAAsaXfKAeFl7Vg5ILy6HxAAAZAhmCG47yGYSQiTkC4nIaRhSMM0TcOQiM7QwCSi0+8BEcoHPgAiAEQAiBAAIgBEqDWAt/34uh/Lfvz5fO++H+t+/LUf3zwxU8uPXaHz7Pz9e31/K1l+OD0AfDne9uN9k/X+/M4kHKnlhz52ve3H+/RfPtF2PD57K1V+yDoz4PnY/PoQIEotfwb4PhzwHMeHDaLU8qMDeBN6ruNzW092e/n85un5fOVHh+9m67lePrf1ZDdfeU9PeIr6++05Ej/uOf4wb0eE19Pzu19f/raVP8rZlmXM8uIdwhRuv2qhT7//dTnKsjSlqr9HOWFZS1V/j6WxUPtVbR0ALg74pPcW4bUGYKmMCZ/tdY9aJPgc7znrzwOwt/5ewesZwmMW/Pd+/O6AxQbGj/348nz9Wt4V47UiXsu7vjcp4rae+f78/V7/2/8w/Ni/+8Us74phgPSzvOd7ky9uDz1gzh5odgyhmgrYHEP4MEnL2B7oFRJzCFX564zvm/F6BfCuuO8y378Lr7UA3wNA7v3/Bd99912W9531pwD4rgW55/8XfAC4RpRdhddagFcHeHPA+z0oW/0FALxK4En3oD0PwY8Viu8B5b4/y0yZyo8u6i/DSgiJaBLRTVdCWIpjKa76gRkh/+wXM0JEHhAhAEQAiBAAIgBECADRNQEkDZNSoaRhwkQimkQ0e0JYiksuz54Q9oSwJyTznhCXtHtCtOVHF/UXKWlPiEaL8Frr55POqfUT9qRs9Rfg51uESYzWT9jVLNi2J2RzvH5I2hNis9Db3pP2hNgs/CWfrJpj5vtpT8ijsaXXx++37QmxWegFW711T4jNwl/yyaq5esBJ6LFiGj11T0fqnpJesgtRlvjUPR2pe0paAXhXQqLd07B5ytrKTB7QeobvroFEuydEGkK19afcFtoVgGsEQKvw2vZ9W7w1oCfsvedbIwBy1p9iU9JaogduBaBtT4ILIO2eBmnioN3TME9jDLuffr8HIFX9OSYOqvrrdSOStBJCIppENHtCWIpjTwhmhLSUDGaEiDwgQgCIABAhAEQAWGIycanJSe7JxGknJ5XSKZdKz+ROp5w5PTNVSChfKkGdO6F89gS1+UaqM1obT4qZ6pQ2Yw/ljNbGc8RMckqbsWs6og/5npZvyufMdT09Pyae826igzsa59Pyc9WfI2Z0/bUyq5oALg5QpAtcHPEXD3xbYDwNfC0X3xcJFEcDB9WfIuaSAl9t84I5C059Wr4p19PzpQZxxesZvuSn5bviBQAtxusNPlsPiFBTAF3OaPNG2FZmcsTT9lb3wN/Q079xEJ3Rh7fP87R8Z10oe6ug+mv9bxxMANcIYFZH/DViyFxjRr9OIFwjgAmqP0XM4PprCaEJoM8ZbcrnzHU5pWPiaSFsJaczOlf9OWJG118z5zSJaBLRva2EsBTHUlxTR/QhzAhpKRnMCBF5QIQAEAEgQzBDcLNZMJMQJiH4AUnD4Acs5QeUYsX6AZt6AGv7AR2xovyAUwMPYKgf0LXaEOsHlFYuTucH9Kw2RNefsHJxOj+grXFnZRnpM99a8JKwBNcawsXXuBZwgupPsRYcVH+tzQi1/YAacEL9gFqwa8x8i/oBleAE+QEDwK7SAyLUdAg2/YA2/5/Z24T4ATXD5j3id/Tiiv7FDyj4/6ZYP6By2Ayuv5auaJ8fUAPM6oi/RtyzrYPCJ167B5ig+lPcs62jwGcDUPLvScDE+gEl+E7nB/TMNKPrL+XJqQGz6iYrISSiSUTjB2QpDj8gZoS0lAxmhIg8IEJV9Y8AAwCuz3H3j+GlGwAAAABJRU5ErkJggg=="

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);