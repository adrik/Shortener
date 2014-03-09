(function ($) {
    ShortenerModel = function (controller) {
        var history = [];
        var service = new ShortenerService();

        controller.on('shortenRequest', function (e, p) {
            service.shorten(p.url, function (result) {
                if (result.success) {
                    controller.trigger('shortenSuccess', { url: result.url });

                    var entry = { url: p.url, result: result.url, time: new Date() };
                    history.push(entry);
                    controller.trigger('historyEntryAdded', { entry: entry });
                } else {
                    controller.trigger('shortenFailure', { reason: result.reason });
                }
            });
        });
    };
})(jQuery);