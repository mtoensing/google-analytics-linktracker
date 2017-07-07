(function ($) {

    $(document).ready(function ($) {

        if ((window.__gaTracker && __gaTracker.create) || ('undefined' !== typeof _paq)) {
            trackLink('.arpw-title', 'playagain');
            trackLink('.jp-relatedposts-post-a', 'related');
            trackLink("a[href*='/out/']", 'out');
            trackLink(".comment-content a[href*='/marc.tv/']", 'commentlink');
            trackLink(".menu-hauptnavigation-container a", 'menu');
            trackLink(".site-branding a", 'logo-home');
            trackLink("#respond #submit", 'comment');
            trackLink("a.cld-like-dislike-trigger", 'likedislike');
            trackLink("a.socialbutton", 'socialbutton');
            trackLink(".tags-links a", 'tags');
        }

        function trackLink(selector, category) {

            $(selector).each(function () {

                var action = 'click';
                var label = '';

                switch (category) {
                    case 'out':
                        label = $(this).text();
                        break;
                    case 'tags':
                        label = $(this).text();
                        break;
                    case 'socialbutton':
                        label = $(this).text();
                        break;
                    case 'likedislike':
                        label = $(this).data('trigger-type');
                        break;
                    case 'logo-home':
                        label = "logo-home";
                        break;
                    case 'comment':
                        label = "submit";
                        break;
                    case 'menu':
                        label = $(this).text();
                        break;
                    case 'commentlink':
                        label = $(this).text();
                        break;
                    case 'related':
                        label = $(this).attr("title");
                        break;
                    default:
                        label = $(this).text();
                        if (label == '') {
                            label = 'not available';
                        }
                }

                label = label.replace('"', '');

                $(this).click(function () {

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
