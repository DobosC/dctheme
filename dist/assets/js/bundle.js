/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;
(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};
  Slick = function () {
    var instanceUid = 0;
    function Slick(element, settings) {
      var _ = this,
        dataSettings;
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }
      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;

      // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      _.registerBreakpoints();
      _.init(true);
    }
    return Slick;
  }();
  Slick.prototype.activateADA = function () {
    var _ = this;
    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;
    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }
    _.unload();
    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.animateHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };
  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
      _ = this;
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }
        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';
              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  };
  Slick.prototype.getNavTarget = function () {
    var _ = this,
      asNavFor = _.options.asNavFor;
    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }
    return asNavFor;
  };
  Slick.prototype.asNavFor = function (index) {
    var _ = this,
      asNavFor = _.getNavTarget();
    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };
  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
      transition = {};
    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.autoPlay = function () {
    var _ = this;
    _.autoPlayClear();
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };
  Slick.prototype.autoPlayClear = function () {
    var _ = this;
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };
  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
      slideTo = _.currentSlide + _.options.slidesToScroll;
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;
          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }
      _.slideHandler(slideTo);
    }
  };
  Slick.prototype.buildArrows = function () {
    var _ = this;
    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };
  Slick.prototype.buildDots = function () {
    var _ = this,
      i,
      dot;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');
      dot = $('<ul />').addClass(_.options.dotsClass);
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }
      _.$dots = dot.appendTo(_.options.appendDots);
      _.$dots.find('li').first().addClass('slick-active');
    }
  };
  Slick.prototype.buildOut = function () {
    var _ = this;
    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });
    _.$slider.addClass('slick-slider');
    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
    _.$slideTrack.css('opacity', 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };
  Slick.prototype.buildRows = function () {
    var _ = this,
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');
        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.empty().append(newSlides);
      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };
  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $(window).width();
    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }

      // only trigger breakpoints during an actual break. not on initialize.
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };
  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
      $target = $(event.currentTarget),
      indexOffset,
      slideOffset,
      unevenOffset;

    // If target is a link, prevent default action.
    if ($target.is('a')) {
      event.preventDefault();
    }

    // If target is not the <li> element (ie: a child), find the <li>.
    if (!$target.is('li')) {
      $target = $target.closest('li');
    }
    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;
      default:
        return;
    }
  };
  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
      navigables,
      prevNavigable;
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  Slick.prototype.cleanUpEvents = function () {
    var _ = this;
    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }
    _.$slider.off('focus.slick blur.slick');
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    _.$list.off('click.slick', _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.cleanUpSlideEvents();
    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };
  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;
    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };
  Slick.prototype.cleanUpRows = function () {
    var _ = this,
      originalSlides;
    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.empty().append(originalSlides);
    }
  };
  Slick.prototype.clickHandler = function (event) {
    var _ = this;
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  Slick.prototype.destroy = function (refresh) {
    var _ = this;
    _.autoPlayClear();
    _.touchObject = {};
    _.cleanUpEvents();
    $('.slick-cloned', _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }
    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.$slider.removeClass('slick-dotted');
    _.unslicked = true;
    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };
  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
      transition = {};
    transition[_.transitionType] = '';
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };
  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });
      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  };
  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;
    if (filter !== null) {
      _.$slidesCache = _.$slides;
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.focusHandler = function () {
    var _ = this;
    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');
          _.autoPlay();
        }
      }, 0);
    });
  };
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;
    return _.currentSlide;
  };
  Slick.prototype.getDotCount = function () {
    var _ = this;
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }
    return pagerQty - 1;
  };
  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
      targetLeft,
      verticalHeight,
      verticalOffset = 0,
      targetSlide,
      coef;
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;
        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }
        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }
    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    return targetLeft;
  };
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;
    return _.options[option];
  };
  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }
    return indexes;
  };
  Slick.prototype.getSlick = function () {
    return this;
  };
  Slick.prototype.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      centerOffset;
    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };
  Slick.prototype.init = function (creation) {
    var _ = this;
    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();
    }
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
    if (_.options.autoplay) {
      _.paused = false;
      _.autoPlay();
    }
  };
  Slick.prototype.initADA = function () {
    var _ = this,
      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
      tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
        return val >= 0 && val < _.slideCount;
      });
    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });
    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });
        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });
      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }
    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }
    _.activateADA();
  };
  Slick.prototype.initArrowEvents = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);
      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);
        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };
  Slick.prototype.initDotEvents = function () {
    var _ = this;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);
      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }
    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initSlideEvents = function () {
    var _ = this;
    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };
  Slick.prototype.initializeEvents = function () {
    var _ = this;
    _.initArrowEvents();
    _.initDotEvents();
    _.initSlideEvents();
    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('click.slick', _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };
  Slick.prototype.initUI = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };
  Slick.prototype.keyHandler = function (event) {
    var _ = this;
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };
  Slick.prototype.lazyLoad = function () {
    var _ = this,
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
          imageSource = $(this).attr('data-lazy'),
          imageSrcSet = $(this).attr('data-srcset'),
          imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
          imageToLoad = document.createElement('img');
        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);
              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }
            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });
            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };
        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };
        imageToLoad.src = imageSource;
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
        nextSlide = rangeEnd,
        $slides = _.$slider.find('.slick-slide');
      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };
  Slick.prototype.loadSlider = function () {
    var _ = this;
    _.setPosition();
    _.$slideTrack.css({
      opacity: 1
    });
    _.$slider.removeClass('slick-loading');
    _.initUI();
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };
  Slick.prototype.orientationChange = function () {
    var _ = this;
    _.checkResponsive();
    _.setPosition();
  };
  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;
    _.autoPlayClear();
    _.paused = true;
  };
  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;
    _.autoPlay();
    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };
  Slick.prototype.postSlide = function (index) {
    var _ = this;
    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);
      _.animating = false;
      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }
      _.swipeLeft = null;
      if (_.options.autoplay) {
        _.autoPlay();
      }
      if (_.options.accessibility === true) {
        _.initADA();
        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };
  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;
    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };
  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };
  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;
    var _ = this,
      $imgsToLoad = $('img[data-lazy]', _.$slider),
      image,
      imageSource,
      imageSrcSet,
      imageSizes,
      imageToLoad;
    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');
      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);
          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }
        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
        _.progressiveLazyLoad();
      };
      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
          _.progressiveLazyLoad();
        }
      };
      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };
  Slick.prototype.refresh = function (initializing) {
    var _ = this,
      currentSlide,
      lastVisibleIndex;
    lastVisibleIndex = _.slideCount - _.options.slidesToShow;

    // in non-infinite sliders, we don't want to go past the
    // last visible index.
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }

    // if less slides than to show, go to start.
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    currentSlide = _.currentSlide;
    _.destroy(true);
    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });
    _.init();
    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };
  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = _.options.responsive || null;
    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';
      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

          // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };
  Slick.prototype.reinit = function () {
    var _ = this;
    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    _.setPosition();
    _.focusHandler();
    _.paused = !_.options.autoplay;
    _.autoPlay();
    _.$slider.trigger('reInit', [_]);
  };
  Slick.prototype.resize = function () {
    var _ = this;
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;
    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = _.$slideTrack.children(this.options.slide);
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = _.$slides;
    _.reinit();
  };
  Slick.prototype.setCSS = function (position) {
    var _ = this,
      positionProps = {},
      x,
      y;
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }
  };
  Slick.prototype.setDimensions = function () {
    var _ = this;
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };
  Slick.prototype.setFade = function () {
    var _ = this,
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;
      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };
  Slick.prototype.setHeight = function () {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css('height', targetHeight);
    }
  };
  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */

    var _ = this,
      l,
      item,
      option,
      value,
      refresh = false,
      type;
    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];
      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }
    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;

          // loop through the responsive object and splice out duplicates.
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }
            l--;
          }
          _.options.responsive.push(value[item]);
        }
      }
    }
    if (refresh) {
      _.unload();
      _.reinit();
    }
  };
  Slick.prototype.setPosition = function () {
    var _ = this;
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger('setPosition', [_]);
  };
  Slick.prototype.setProps = function () {
    var _ = this,
      bodyStyle = document.body.style;
    _.positionProp = _.options.vertical === true ? 'top' : 'left';
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };
  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
    _.$slides.eq(index).addClass('slick-current');
    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }
        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }
      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }
    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };
  Slick.prototype.setupInfinite = function () {
    var _ = this,
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }
        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };
  Slick.prototype.interrupt = function (toggle) {
    var _ = this;
    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = toggle;
  };
  Slick.prototype.selectHandler = function (event) {
    var _ = this;
    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);
      return;
    }
    _.slideHandler(index);
  };
  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = null,
      _ = this,
      navTarget;
    sync = sync || false;
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    if (sync === false) {
      _.asNavFor(index);
    }
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    _.animating = true;
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    _.setSlideClasses(_.currentSlide);
    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };
  Slick.prototype.startLoad = function () {
    var _ = this;
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass('slick-loading');
  };
  Slick.prototype.swipeDirection = function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = this;
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }
    return 'vertical';
  };
  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
      slideCount,
      direction;
    _.dragging = false;
    _.swiping = false;
    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }
    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
    if (_.touchObject.curX === undefined) {
      return false;
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();
      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;
        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;
        default:
      }
      if (direction != 'vertical') {
        _.slideHandler(slideCount);
        _.touchObject = {};
        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = {};
      }
    }
  };
  Slick.prototype.swipeHandler = function (event) {
    var _ = this;
    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }
    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }
    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);
        break;
      case 'move':
        _.swipeMove(event);
        break;
      case 'end':
        _.swipeEnd(event);
        break;
    }
  };
  Slick.prototype.swipeMove = function (event) {
    var _ = this,
      edgeWasHit = false,
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches,
      verticalSwipeLength;
    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }
    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }
    swipeDirection = _.swipeDirection();
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }
    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;
    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    _.setCSS(_.swipeLeft);
  };
  Slick.prototype.swipeStart = function (event) {
    var _ = this,
      touches;
    _.interrupted = true;
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }
    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  };
  Slick.prototype.unload = function () {
    var _ = this;
    $('.slick-cloned', _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };
  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
  };
  Slick.prototype.updateArrows = function () {
    var _ = this,
      centerOffset;
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };
  Slick.prototype.updateDots = function () {
    var _ = this;
    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();
      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };
  Slick.prototype.visibility = function () {
    var _ = this;
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };
  $.fn.slick = function () {
    var _ = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      l = _.length,
      i,
      ret;
    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };
});

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxHQUFHemIsQ0FBQyxDQUFDa0IsQ0FBQyxDQUFDLENBQUN5SixLQUFLLENBQUMyTSxHQUFHLENBQUMsQ0FBQ29FLEtBQUssQ0FBQzFiLENBQUMsQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDeUosS0FBSyxFQUFFNFEsSUFBSSxDQUFDO01BQ2pELElBQUksT0FBT0UsR0FBRyxJQUFJLFdBQVcsRUFBRSxPQUFPQSxHQUFHO0lBQzdDO0lBQ0EsT0FBT3piLENBQUM7RUFDWixDQUFDO0FBRUwsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2w4RkY7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGN0aGVtZS8uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyIsIndlYnBhY2s6Ly9kY3RoZW1lL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2RjdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGN0aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kY3RoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kY3RoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGN0aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RjdGhlbWUvLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xyXG4iXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsIlNsaWNrIiwid2luZG93IiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJfIiwiZGF0YVNldHRpbmdzIiwiZGVmYXVsdHMiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwidGV4dCIsImRvdHMiLCJkb3RzQ2xhc3MiLCJkcmFnZ2FibGUiLCJlYXNpbmciLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImZvY3VzT25DaGFuZ2UiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJydGwiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3BlZWQiLCJzd2lwZSIsInN3aXBlVG9TbGlkZSIsInRvdWNoTW92ZSIsInRvdWNoVGhyZXNob2xkIiwidXNlQ1NTIiwidXNlVHJhbnNmb3JtIiwidmFyaWFibGVXaWR0aCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwid2FpdEZvckFuaW1hdGUiLCJ6SW5kZXgiLCJpbml0aWFscyIsImFuaW1hdGluZyIsImRyYWdnaW5nIiwiYXV0b1BsYXlUaW1lciIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50TGVmdCIsImN1cnJlbnRTbGlkZSIsImRpcmVjdGlvbiIsIiRkb3RzIiwibGlzdFdpZHRoIiwibGlzdEhlaWdodCIsImxvYWRJbmRleCIsIiRuZXh0QXJyb3ciLCIkcHJldkFycm93Iiwic2Nyb2xsaW5nIiwic2xpZGVDb3VudCIsInNsaWRlV2lkdGgiLCIkc2xpZGVUcmFjayIsIiRzbGlkZXMiLCJzbGlkaW5nIiwic2xpZGVPZmZzZXQiLCJzd2lwZUxlZnQiLCJzd2lwaW5nIiwiJGxpc3QiLCJ0b3VjaE9iamVjdCIsInRyYW5zZm9ybXNFbmFibGVkIiwidW5zbGlja2VkIiwiZXh0ZW5kIiwiYWN0aXZlQnJlYWtwb2ludCIsImFuaW1UeXBlIiwiYW5pbVByb3AiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRTZXR0aW5ncyIsImNzc1RyYW5zaXRpb25zIiwiZm9jdXNzZWQiLCJpbnRlcnJ1cHRlZCIsImhpZGRlbiIsInBhdXNlZCIsInBvc2l0aW9uUHJvcCIsInJvd0NvdW50Iiwic2hvdWxkQ2xpY2siLCIkc2xpZGVyIiwiJHNsaWRlc0NhY2hlIiwidHJhbnNmb3JtVHlwZSIsInRyYW5zaXRpb25UeXBlIiwidmlzaWJpbGl0eUNoYW5nZSIsIndpbmRvd1dpZHRoIiwid2luZG93VGltZXIiLCJkYXRhIiwib3B0aW9ucyIsIm9yaWdpbmFsU2V0dGluZ3MiLCJkb2N1bWVudCIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiaW5pdCIsInByb3RvdHlwZSIsImFjdGl2YXRlQURBIiwiZmluZCIsImF0dHIiLCJhZGRTbGlkZSIsInNsaWNrQWRkIiwibWFya3VwIiwiaW5kZXgiLCJhZGRCZWZvcmUiLCJ1bmxvYWQiLCJsZW5ndGgiLCJhcHBlbmRUbyIsImluc2VydEJlZm9yZSIsImVxIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJjaGlsZHJlbiIsImRldGFjaCIsImFwcGVuZCIsImVhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiaGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwibGVmdCIsInRvcCIsImFuaW1TdGFydCIsImR1cmF0aW9uIiwic3RlcCIsIm5vdyIsIk1hdGgiLCJjZWlsIiwiY3NzIiwiY29tcGxldGUiLCJjYWxsIiwiYXBwbHlUcmFuc2l0aW9uIiwic2V0VGltZW91dCIsImRpc2FibGVUcmFuc2l0aW9uIiwiZ2V0TmF2VGFyZ2V0Iiwibm90IiwiX3R5cGVvZiIsInRhcmdldCIsInNsaWNrIiwic2xpZGVIYW5kbGVyIiwidHJhbnNpdGlvbiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlVG8iLCJidWlsZEFycm93cyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImFkZCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWluIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNsaWNrIiwicmVmcmVzaCIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwibiIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJyZW1vdmUiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwib24iLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwibWF4IiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiYWJzIiwiZ29UbyIsInNsaWNrR29UbyIsInBhcnNlSW50IiwiY3JlYXRpb24iLCJoYXNDbGFzcyIsInNldFByb3BzIiwic3RhcnRMb2FkIiwibG9hZFNsaWRlciIsImluaXRpYWxpemVFdmVudHMiLCJ1cGRhdGVBcnJvd3MiLCJpbml0QURBIiwibnVtRG90R3JvdXBzIiwidGFiQ29udHJvbEluZGV4ZXMiLCJ2YWwiLCJzbGlkZUNvbnRyb2xJbmRleCIsImluZGV4T2YiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiYWN0aW9uIiwiaW5pdFVJIiwic2hvdyIsInRhZ05hbWUiLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInNsaWNlIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsIm5leHQiLCJzbGlja05leHQiLCJwYXVzZSIsInNsaWNrUGF1c2UiLCJwbGF5Iiwic2xpY2tQbGF5IiwicG9zdFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsImZvY3VzIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJsIiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvbiIsInBvc2l0aW9uUHJvcHMiLCJ4IiwieSIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwib2Zmc2V0Iiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwidmFsdWUiLCJhcmd1bWVudHMiLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0b2dnbGUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJyIiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJBcnJheSIsInJldCIsImFwcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==