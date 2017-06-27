(function ($) {

    $(document).ready(function ($) {

        if  ( (window.__gaTracker && __gaTracker.create)  || ('undefined' !== typeof _paq) ) {

            trackLink('.arpw-title', 'playagain');
            trackLink('.jp-relatedposts-post-a', 'related');
            trackLink("a[href*='/out/']", 'out');
            trackLink("#comments a[href*='/marc.tv/']", 'commentlink');
            trackLink(".menu-hauptnavigation-container a",'menu');
            trackLink(".site-branding a",'logo-home');
            trackLink("#respond #submit",'comment');
        }

        function trackLink(selector, category) {

            $(selector).each(function () {

                var label = $(this).attr('title');
                var action = "click";

                if ( label == null ) {
                    label = $(this).attr('rel');
                }

                if ( label == null ) {
                    label = $(this).text();
                }

                if ( label == '' ) {
                    label = 'not available';
                }

                label = label.replace('"', '');

                $(this).click(function() {

                    /* Piwik */
                    if ('undefined' !== typeof _paq) {
                        _paq.push(['trackEvent', category, action, label]);
                    }

                    /* GA Universal */
                    if (window._gaq && _gaq.push) {
                        _gaq.push(['_trackEvent', category, action, label]);
                    }

                    /* GA legacy */
                    if (window.ga && ga.create) {
                        ga('send', 'event', {
                            eventCategory: category,
                            eventAction: action,
                            eventLabel: label
                        });
                    }

                    /* GA Monster Insights  */
                    if (window.__gaTracker && __gaTracker.create) {
                        __gaTracker('send', 'event', {
                            eventCategory: category,
                            eventAction: action,
                            eventLabel: label
                        });
                    }

                });

            });

        };

    });

}(jQuery));
