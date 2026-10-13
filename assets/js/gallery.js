// Galería estilo Steam: al tocar una miniatura se muestra arriba en grande.
// Sin JavaScript, cada miniatura sigue funcionando como link a la imagen.
document.querySelectorAll('[data-viewer]').forEach(function (viewer) {
  var video = viewer.querySelector('.viewer-video');
  var link = viewer.querySelector('.viewer-image-link');
  var img = viewer.querySelector('.viewer-image');
  var thumbs = Array.prototype.slice.call(viewer.querySelectorAll('.thumb'));
  if (!thumbs.length) return;

  function current() {
    for (var i = 0; i < thumbs.length; i++) {
      if (thumbs[i].classList.contains('is-active')) return i;
    }
    return 0;
  }

  function show(index) {
    var thumb = thumbs[index];
    if (!thumb) return;

    thumbs.forEach(function (t) {
      t.classList.remove('is-active');
      t.removeAttribute('aria-current');
    });
    thumb.classList.add('is-active');
    thumb.setAttribute('aria-current', 'true');

    if (thumb.dataset.type === 'video') {
      if (link) link.hidden = true;
      if (video.hidden) {
        video.src = video.dataset.src;
        video.hidden = false;
      }
    } else {
      if (video && !video.hidden) {
        video.src = 'about:blank'; // detiene el video al pasar a una imagen
        video.hidden = true;
      }
      var url = thumb.getAttribute('href');
      img.src = url;
      link.href = url;
      link.hidden = false;
    }

    thumb.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  thumbs.forEach(function (thumb, i) {
    thumb.addEventListener('click', function (e) {
      e.preventDefault();
      show(i);
    });
  });

  viewer.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var next = current() + (e.key === 'ArrowRight' ? 1 : -1);
    if (next < 0 || next >= thumbs.length) return;
    e.preventDefault();
    show(next);
    thumbs[next].focus();
  });
});
