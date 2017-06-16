(function ($) {

    $(document).ready(function ($) {

        trackLink('.arpw-title', 'playagain');
        trackLink('.jp-relatedposts-post-a', 'related');
        trackLink("a[href*='/out/']", 'out');
        trackLink("#comments a[href*='/marc.tv/']", 'commentlink');
        trackLink(".menu-hauptnavigation-container a",'menu');
        trackLink(".site-branding a",'logo-home');
        trackLink("#respond #submit",'comment');

        function trackLink(selector, label) {

            $(selector).each(function () {

                var title = $(this).attr('title');

                if ( title == null ) {
                    title = $(this).attr('rel');
                }

                if ( title == null ) {
                    title = $(this).text();
                }

                if ( title == null ) {
                    title = 'not available';
                }

                title = title.replace('"', '');

                $(this).attr("onclick", "__gaTracker('send', 'event', {eventCategory: '" + label + "', eventAction: 'click', eventLabel: '" + title + "'});");

            });

        };

    });

}(jQuery));
