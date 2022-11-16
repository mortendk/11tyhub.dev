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


    // ALL the feeds
    // TODO: this should be done a bit smoother a loop over a bunch of resources or ?

    // rss feed

    // atom
    feed.addSource("atom", "Blog", "https://11ty.rocks/feed/");

    // Mastodon
    feed.addSource("rss", "Mastodon", "https://fosstodon.org/users/eleventy.rss");
    feed.addSource("rss", "Mastodon", "https://fosstodon.org/users/saga11.rss");


    return feed.toRssFeed({
      title: "Eleventy Hub",
      language: "en",
      url: "https://www.11tyhub.dev/feed.rss",
      subtitle: "A collection of Eleventy feeds",
    });
  }
};
