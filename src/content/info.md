---
title: Info
permalink: info/index.html
eleventyExcludeFromCollections: false

layout: page.njk

tags: page
date: Last Modified
---


An aggregation of feeds, blogs & releases from the <a href="https://11ty.dev">11ty Project</a>


<input value="https://11ty.dev/feed.rss" class="superawesome">


## PRs & Ideas are more than welcome
 The repo is open for PRs [Github](https://github.com/mortendk/11tyhub.dev)

## Submit your feed
The hub takes anything that is eleventy specific, please make sure
your feed is only containing content of relevans for the 11ty project



<form name="contact" method="POST" data-netlify="true">
	<input type="hidden" name="form-name" value="feed">

	<label for="feed">RSS Feed</label>
	<input type="url" name="feed" id="feed" required/>


	<label for="message">Message</label>
	<textarea name="message" id="message"></textarea>


<button aria-label="Submit">
	Submit
</button>

<div hidden>
	<label for="supersecret">secret</label>
	<input name="bot-field" id="supersecret" />
</div>

</form>
