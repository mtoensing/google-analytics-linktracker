(function($) {

  $(window).bind("load", function() {
    if ((window.__gaTracker && __gaTracker.create) || ('undefined' !== typeof _paq)) {
      trackLink('.shortscore-widget a', 'playagain');
      trackLink('.yarpp-related .teaserbox-post-a', 'related');
      trackLink('.recentpostsbox .teaserbox-post-a', 'recentposts');
      trackLink("a[href*='/out/']", 'out');
      trackLink(".comment-content a[href*='/marc.tv/']", 'commentlink');
      trackLink(".menu-hauptnavigation-container a", 'menu');
      trackLink(".site-branding a", 'logo-home');
      trackLink("#respond #submit", 'comment');
      trackLink("a.cld-like-dislike-trigger", 'likedislike');
      trackLink("a.socialbutton", 'socialbutton');
      trackLink(".tags-links a", 'tags');
      trackLink(".older-posts a", 'posts-older');
      trackLink(".next.page-numbers", 'posts-next');
      trackLink(".prev.page-numbers", 'posts-prev');
      trackLink(".lastcommented a", 'last-commented');
      trackLink(".gtc-link", 'most-popular');
      trackLink("a.post-category", 'post-category');
      trackLink("a.preview-lazyload", 'video-click');
      trackLink(".is-type-wp-embed a", 'wp-embed');
      trackLink("a.ytchannelteaser", 'youtube-channel');
      trackLink("#cookie-notice button", 'cookie-accepted');
      trackLink(".simpletoc a", 'simpletoc');
      trackLink(".mailpoet_submit",'mailpoet');
      trackLink("#mailpoet_subscribe_on_comment",'mailpoet-comment');
    }

    function trackLink(selector, category) {

      $(selector).each(function() {

        var action = 'click';
        var label = '';

        switch (category) {
          case 'youtube-channel':
            label = window.location.href;
            break;
          case 'simpletoc':
            label = $(this).text();
            break;
          case 'video-click':
            label = $(this).find('.titletext').text();
            break;
          case 'out':
            label = $(this).attr('href');
            $(this).attr('target','_blank');
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
          case 'recentposts':
              label = $(this).attr("title");
              break;
          default:
            label = $(this).text();
            if (label === '') {
              label = 'na';
            }
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

    }

  });

}(jQuery));
