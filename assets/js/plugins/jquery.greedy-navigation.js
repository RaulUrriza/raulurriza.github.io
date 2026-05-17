/*
* Binary Navigation
* Full menu when space allows; compact Home + theme + hamburger otherwise.
*/

var $nav       = $('#site-nav');
var $vlinks    = $('#site-nav .visible-links');
var $hlinks    = $('#site-nav .hidden-links');
var $compact   = $('#site-nav .nav-compact');
var $hamburger = $('#site-nav .nav-hamburger');

var _fullMenuWidth = null;
var _compactMode   = null; // null = uninitialized

function measureFullWidth() {
  var w = 0;
  $vlinks.children().each(function () { w += $(this).outerWidth(true); });
  return w;
}

function setFullMode() {
  if (_compactMode === false) return;
  _compactMode = false;
  $vlinks.removeClass('nav-hidden');
  $compact.hide();
  // Close dropdown if open
  $hlinks.addClass('hidden');
  $hamburger.removeClass('close').attr('aria-expanded', 'false');
}

function setCompactMode() {
  if (_compactMode === true) return;
  _compactMode = true;
  $vlinks.addClass('nav-hidden');
  $compact.show();
}

function updateNav() {
  // Measure natural (unconstrained) width of full menu on first call,
  // while visible-links is still fully shown in the DOM.
  if (_fullMenuWidth === null) {
    _fullMenuWidth = measureFullWidth();
  }

  var available = $nav.width();

  // 50px buffer: outerWidth(true) misses the inner <a> margins (1rem each side)
  // so switch to compact a bit earlier to keep the theme icon fully visible
  if (_fullMenuWidth + 50 <= available) {
    setFullMode();
  } else {
    setCompactMode();
  }

  // Sync masthead height → body / sidebar padding-top
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }
}

// Resize / orientation listeners
if (window.ResizeObserver) {
  var _navObserver = new ResizeObserver(function () {
    requestAnimationFrame(updateNav);
  });
  _navObserver.observe($nav[0]);
} else {
  var _navResizeTimer;
  $(window).on('resize', function () {
    clearTimeout(_navResizeTimer);
    _navResizeTimer = setTimeout(function () {
      requestAnimationFrame(updateNav);
    }, 100);
  });
}
screen.orientation.addEventListener("change", function () {
  requestAnimationFrame(updateNav);
});

// Hamburger toggles dropdown
$hamburger.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  var expanded = $(this).attr('aria-expanded') === 'true';
  $(this).attr('aria-expanded', !expanded);
});

// Compact theme icon calls toggleTheme (defined in _main.js, same bundle)
$('.nav-compact__theme').on('click', function () {
  toggleTheme();
});

// Close dropdown when clicking outside the nav
$(document).on('click', function (e) {
  if (_compactMode && !$(e.target).closest('#site-nav').length) {
    $hlinks.addClass('hidden');
    $hamburger.removeClass('close').attr('aria-expanded', 'false');
  }
});

updateNav();
