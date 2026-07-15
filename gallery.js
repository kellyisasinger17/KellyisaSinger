import PhotoSwipeLightbox from "/photoswipe/photoswipe-lightbox.esm.js";

const options = {
  gallery: "#gallery--responsive-images",
  children: "a",
  pswpModule: () => import("/photoswipe/photoswipe.esm.js"),
};

const lightbox = new PhotoSwipeLightbox(options);
lightbox.init();
