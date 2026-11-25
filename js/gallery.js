// Photo viewer: opens any <a data-lightbox="group"> link in PhotoSwipe.
// Links that share the same data-lightbox value open as one swipeable set.
import PhotoSwipeLightbox from '../photoswipe/photoswipe-lightbox.esm.min.js';

// Full-size photos on this site are exported at 1400px on the long edge.
// The real size is checked once each photo loads and corrected if it differs.
var LONG_EDGE = 1400;

function guessSize(img) {
  var ratio = img && img.naturalWidth ? img.naturalWidth / img.naturalHeight : 1.5;
  return ratio >= 1
    ? { width: LONG_EDGE, height: Math.round(LONG_EDGE / ratio) }
    : { width: Math.round(LONG_EDGE * ratio), height: LONG_EDGE };
}

// Gallery thumbnails use the file name as alt text; only show real descriptions.
function captionFor(img) {
  var alt = img ? img.getAttribute('alt') || '' : '';
  return /\s/.test(alt.trim()) ? alt.trim() : '';
}

function toSlide(link) {
  var img = link.querySelector('img');
  var w = Number(link.getAttribute('data-pswp-width'));
  var h = Number(link.getAttribute('data-pswp-height'));
  var size = w && h ? { width: w, height: h } : guessSize(img);
  return {
    src: link.getAttribute('href'),
    width: size.width,
    height: size.height,
    msrc: img ? img.currentSrc || img.src : undefined,
    alt: img ? img.getAttribute('alt') || '' : '',
    caption: captionFor(img),
    element: link
  };
}

var lightbox = new PhotoSwipeLightbox({
  pswpModule: function () { return import('../photoswipe/photoswipe.esm.min.js'); },
  bgOpacity: 1,
  showHideAnimationType: 'zoom',
  loop: true,
  wheelToZoom: true,
  imageClickAction: 'zoom-or-close',
  tapAction: 'toggle-controls',
  paddingFn: function (viewport) {
    return viewport.x < 700
      ? { top: 0, bottom: 0, left: 0, right: 0 }
      : { top: 30, bottom: 60, left: 50, right: 50 };
  }
});

lightbox.on('uiRegister', function () {
  lightbox.pswp.ui.registerElement({
    name: 'caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    onInit: function (el, pswp) {
      pswp.on('change', function () {
        var text = pswp.currSlide.data.caption;
        el.textContent = text;
        el.hidden = !text;
      });
    }
  });
});

// Fix the slide size if a photo isn't the size we guessed (e.g. an inline photo whose
// thumbnail hadn't loaded yet). Photos preloaded in the background only get a slide
// later, so check again whenever the viewer moves to a new photo.
function fixSize(content, slide) {
  var el = content && content.element;
  if (!el || !el.naturalWidth) return;
  if (el.naturalWidth === content.width && el.naturalHeight === content.height) return;
  content.width = content.data.width = el.naturalWidth;
  content.height = content.data.height = el.naturalHeight;
  if (slide) {
    slide.width = el.naturalWidth;
    slide.height = el.naturalHeight;
    slide.resize();
  }
}

lightbox.on('loadComplete', function (e) {
  fixSize(e.content, e.slide);
});

lightbox.on('change', function () {
  var slide = lightbox.pswp && lightbox.pswp.currSlide;
  if (slide) fixSize(slide.content, slide);
});

lightbox.init();

document.addEventListener('click', function (e) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var link = e.target.closest('a[data-lightbox]');
  if (!link) return;
  e.preventDefault();
  var group = link.getAttribute('data-lightbox');
  var links = Array.prototype.filter.call(
    document.querySelectorAll('a[data-lightbox]'),
    function (a) { return a.getAttribute('data-lightbox') === group; }
  );
  lightbox.loadAndOpen(links.indexOf(link), links.map(toSlide));
});
