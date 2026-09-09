$(function() {
  'use strict';

  /* =======================
  // Toggle Menu and Search
  ======================= */
  var $menuOpenButton = $(".menu-button"),
      $menuCloseButton = $(".menu-close"),
      $navMenu = $(".nav-menu"),

      $searchOpenButton = $(".search-button"),
      $searchCloseButton = $(".search-close-button"),
      $search = $(".search");

  $(window).on("resize", function () {
    var e = $(this);
    if (e.width() >= 991) {
      $navMenu.removeClass("active"); // Remove class - "active" if width window more than 991px
    }
  });

  $menuOpenButton.on("click", function() {
    openMenu();
  });

  $menuCloseButton.on("click", function() {
    closeMenu();
  });

  $searchOpenButton.on("click", function() {
    openSearch();
  });

  $searchCloseButton.on("click", function() {
    closeSearch();
  });

  function openMenu() {
    $navMenu.addClass("active");
  }

  function closeMenu() {
    $navMenu.removeClass("active");
  }

  function openSearch() {
    $search.addClass("active");
  }

  function closeSearch() {
    $search.removeClass("active");
  }


  /* =======================
  // Reveal Image
  // Preloader hides on the native window "load" event instead of waiting
  // for every image on the page to be force-downloaded; reveal-in is
  // driven by IntersectionObserver so it doesn't depend on jQuery or on
  // images that haven't scrolled into view yet.
  ======================= */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('hide');
      }
    }, 200);
  });

  (function () {
    var revealSelector = '.article-box, .article-first, .post-image-box, .page-image-box, .post-body img, .page-body img, .recent-header';
    var revealEls = document.querySelectorAll(revealSelector);

    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px' });

      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add('reveal-in');
      });
    }
  })();


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post-content, .page-content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });


  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function () {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

  /* =======================
  // Lightbox options
  ======================= */
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'wrapAround': true,
      'showImageNumberLabel': false
    });
  }

  /* =======================
  // Simple Jekyll Search
  ======================= */
  if (typeof SimpleJekyllSearch !== 'undefined') {
    var searchInput = document.getElementById("js-search-input");
    var searchJson = $('body').attr('data-search-json');
    if (searchInput && searchJson) {
      SimpleJekyllSearch({
        searchInput: searchInput,
        resultsContainer: document.getElementById("js-results-container"),
        json: searchJson,
        searchResultTemplate:
          '<li class="search-item"><a class="search-link" href="{url}">{title}</a></li>',
        noResultsText: '<li class="search-no-item">No results found</li>'
      });
    }
  }

});
