---
title: 11ty Hub Info
permalink: info/index.html
eleventyExcludeFromCollections: false

layout: page.njk
---

# A collection of 11ty feeds
The 11th Hub is a list of blogs, post & microblogs from the 11ty community so we can all keep up with whats going on with our favorite possum

## PRs welcome
This is hacked(tm) together so PRs and ideas etc are more than welcome over at github

## Submit your feed!
The door is always open for any rss/atom/whatever feed that we can parse in and out

Please make sure its only 11ty stuff thats in the feed

/mortendk

<form
	class=""
	name="feed"
	method="POST"
	data-netlify="true"
	netlify-honeypot="bot-field"
	action="/thanx/"
>
<div>
	<label>Name</label>
	<input name="name" id="name"/>
</div>

<div>
	<label>RSS Feed</label>
	<input name="feed" id="feed" required/>
</div>

<div>
	<label>Message</label>
	<textarea></textarea>
</div>

<button aria-label="Submit">
	Send
</button>

<div class="hidden" hidden>
	<label for="supersecret">secret</label>
	<input name="bot-field" id="supersecret" />
</div>

</form>
