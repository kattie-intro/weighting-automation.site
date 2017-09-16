(function($, weightapp) {
    var contentCache = [];

    var appModule = {
        cashedGetHtml: function(url) {
            var dfd = $.Deferred();
            if (!contentCache[url]) {
                $.get(url).done(function(content) {
                    contentCache[url] = content;
                    dfd.resolve(content);
                });
            } else {
                dfd.resolve(contentCache[url]);
            }
            return dfd.promise();
        }
    };

    $.extend(weightapp, appModule);

})(jQuery, window.weightapp = window.weightapp || {});


