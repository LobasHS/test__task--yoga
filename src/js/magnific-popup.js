$(document).ready(function () {
    $('.gallery__link').magnificPopup({
        type:'image',
        zoom: {
            enabled: true,
            duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    })
});
    
