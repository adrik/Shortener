(function ($) {
    ShortenerView = function (controller, template) {
        var urlBox = template.find('#url');
        var resultBox = template.find('#result');
        var historyContainer = template.find('#history tbody');

        var rx = new RegExp('[-a-zA-Z0-9@:%_\\+.~#?&//=]{2,256}\\.[a-z]{2,4}\\b(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?', 'i');

        template.on('submit', function () {
            var url = urlBox.val();

            if (rx.test(url)) {
                controller.trigger('shortenRequest', { url: url });

                resultBox.removeClass('alert-danger').addClass('alert-success');
                template.removeClass('has-error');
            } else {
                resultBox.html('Please enter a valid url!');

                resultBox.removeClass('alert-success').addClass('alert-danger');
                template.addClass('has-error');
            }

            return false;
        });

        controller.on('shortenSuccess', function (e, p) {
            resultBox.html('Result: <a href="' + p.url + '">' + p.url + '</a>');
        });

        controller.on('shortenFailure', function (e, p) {
            // handle error
        });

        controller.on('historyEntryAdded', function (e, p) {
            historyContainer.prepend('<tr>' +
                '<td>' + p.entry.time.toLocaleString() + '</td>' +
                '<td><a href="' + p.entry.url + '">' + p.entry.url + '</a></td>' +
                '<td><a href="' + p.entry.result + '">' + p.entry.result + '</a></td>' +
                '</tr>');
        });
    };
})(jQuery);