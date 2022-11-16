const Parser = require("rss-parser");
let parser = new Parser();

const feeds = ["https://www.11ty.dev/blog/feed.xml", "https://11ty.rocks/feed/"];

module.exports = async function () {
  let feeditems = [];

  // feeds
  for (let i = 0; i < feeds.length; i++) {
    // grap the feed
    let feed = await parser.parseURL(feeds[i]);

    // Feed info
    feedinfo = {
      title: feed.title,
      url: feed.feedUrl,
      link: feed.link,
      date: feed.lastBuildDate,
    };

    // Lets get all the items
    let items = feed.items.map((item) => {
      return item;
    });

    feeditems.push(...items);
  }

  // result = {
  //   info: feedinfo,
  //   feed: feeditems,
  // };
  // sort by date

  return feeditems;
};
