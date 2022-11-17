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

    // rss feed

    // atom
    feed.addSource("atom", "11ty Rocks", "https://11ty.rocks/feed/");
    feed.addSource("atom", "11ty", "https://11ty.dev//blog/feed.xml");
    feed.addSource("atom", "11ty Meetup", "https://11tymeetup.dev/feed.xml");

    // YouTube
    // feed.addSource("youtubeUser", "YouTube", "UCskGTioqrMBcw8pd14_334A");

    // Mastodon
    feed.addSource("rss", "saga11 Mastodon", "https://fosstodon.org/users/saga11.rss");

    // twitter

    return feed.toRssFeed({
      title: "Eleventy Hub",
      language: "en",
      url: "https://www.11tyhub.dev/feed.rss",
      subtitle: "A collection of Eleventy feeds",
    });
  }
};
