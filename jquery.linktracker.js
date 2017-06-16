(function ($) {

    $(document).ready(function ($) {

        trackLink('.arpw-title', 'playagain');
        trackLink('.jp-relatedposts-post-a', 'related');
        trackLink("a[href*='/out/']", 'out');
        trackLink("#comments a[href*='/marc.tv/']", 'commentlink');
        trackLink(".menu-hauptnavigation-container a",'menu');
        trackLink(".site-branding a",'logo-home');

        function trackLink(selector, category) {

            $(selector).each(function () {

                var el = $(this);

                var label = $(this).attr('title');

                if ( label == null ) {
                    label = $(this).attr('rel');
                }

                if ( label == null ) {
                    label = $(this).text();
                }

                label = label.replace('"', '');

                $(el).click(function () {
                    $(this).preventDefault();
                    __gaTracker('send', 'event', {
                        eventCategory: category,
                        eventAction: 'click',
                        eventLabel: label
                    });
                });

            });

        };

    });

}(jQuery));
