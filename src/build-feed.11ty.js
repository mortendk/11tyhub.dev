module.exports = class {
  data() {
    return {
      permalink: "/feed.rss",
      layout: false,
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    const { ActivityFeed } = await import("@11ty/eleventy-activity-feed");

    let feed = new ActivityFeed();
    feed.setCacheDuration("1h");


    // atom
    feed.addSource("atom", "11ty Rocks", "https://11ty.rocks/feed/");
    feed.addSource("atom", "11ty", "https://11ty.dev//blog/feed.xml");
    feed.addSource("atom", "11ty Meetup", "https://11tymeetup.dev/feed.xml");
    feed.addSource("atom", "Darek Kay", "https://darekkay.com/feeds/tag-11ty-atom.xml");

    //gh releases
    // feed.addSource("atom", "GH eleventy", "https://github.com/11ty/eleventy/releases.atom");
    // feed.addSource("atom", "GH eleventy img", "https://github.com/11ty/eleventy-img/releases.atom");
    // feed.addSource("atom", "GH eleventy fetch", "https://github.com/11ty/eleventy-fetch/releases.atom");
    // // feed.addSource("atom", "GH eleventy fetch", "https://github.com/11ty/eleventy-fetch/releases.atom");
    // feed.addSource("atom", "GH eleventy syntaxhighlight", "https://github.com/11ty/eleventy-plugin-syntaxhighlight/releases.atom");
    // feed.addSource("atom", "GH eleventy navigation", "https://github.com/11ty/eleventy-navigation/releases.atom");
    // feed.addSource("atom", "GH eleventy rss", "https://github.com/11ty/eleventy-plugin-rss/releases.atom");
    // feed.addSource("atom", "GH eleventy vue", "https://github.com/11ty/eleventy-plugin-vue/releases.atom");
    // feed.addSource("atom", "GH 11ty/eleventy", "https://github.com/11ty/eleventy/releases.atom");

    // YouTube
    // playlist
    feed.addSource("atom", "11ty Second 11ty ", "https://www.youtube.com/feeds/videos.xml?playlist_id=PLOSLUtJ_J3rrNiBBN-wn2BJ11OHiBuC1n");
    // accounts

    feed.addSource("youtubeUser", "Eleventy Meetup", "UC1QVD9VQPteu0E5Qq5vZAQA");
    feed.addSource("youtubeUser", "11ty Rocks", "UCTuSQg_Ol4shhSYQ1EfpHiQ");
    feed.addSource("youtubeUser", "Eleventy youtube", "UCskGTioqrMBcw8pd14_334A");

    // Mastodon
    // feed.addSource("rss", "saga11 Mastodon", "https://fosstodon.org/users/saga11.rss");

    // twitter
    return feed.toRssFeed({
      title: "Eleventy Hub",
      language: "en",
      url: "https://www.11tyhub.dev/feed.rss",
      subtitle: "A collection of Eleventy feeds",
    });
  }
};
