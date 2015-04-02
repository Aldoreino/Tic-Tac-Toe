// rotates the background between 4 different options

(function() {
    var curImgId = 0;
    var numberOfImages = 4; // Change this to the number of background images
    window.setInterval(function() {
        document.getElementsByTagName('body')[0].background = 'images/background' + curImgId + '.png';
        curImgId = (curImgId + 1) % numberOfImages;
    }, 10 * 1000);
})();