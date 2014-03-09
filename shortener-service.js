(function ($) {
    ShortenerService = function () {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var len = 4;

        this.shorten = function (url, callback) {
            var resultUrl = 'http://zo.om/';
            for (var i = 0; i < len; i++) {
                resultUrl += chars[Math.floor(Math.random() * chars.length)];
            }
            callback({ success: true, url: resultUrl });
        };
    };
})(jQuery);