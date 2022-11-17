const path = require("path");
const fs = require("fs");

const Parser = require("rss-parser");
let parser = new Parser();

// grad the feed source
const feeds = require("../../feed-source.js");

module.exports = async function () {
  let feeditems = [];

  for (let i = 0; i < feeds.length; i++) {
    // Grap the feed
    let feed = await parser.parseURL(feeds[i]);

    // Get all the items + add the feed into to each
    let items = feed.items.map((item) => {
      // Add the feed data so we have it
      item.feedtitle = feed.title;
      item.feedurl = feed.feedUrl;
      item.feedlink = feed.link;
      item.feedbuild = feed.lastBuildDate;

      return item;
    });

    feeditems.push(...items);
  }

  return feeditems;

};
