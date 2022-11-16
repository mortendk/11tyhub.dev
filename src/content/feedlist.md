---
title: 11ty Hub feed
permalink: feedlist/index.html
eleventyExcludeFromCollections: false

layout: page.njk
---

## Blogs
- https://11ty.rocks/feed/
- https://www.11ty.dev/blog/feed.xml

## microblogs
- https://fosstodon.org/users/saga11.rss

### Submit yours

<form name="contact" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="feed">

<div>
	<label>RSS Feed</label>
	<input name="feed" id="feed" required/>
</div>

<div>
	<label>Name</label>
	<input name="name" id="name"/>
</div>


<div>
	<label>Message</label>
	<textarea name="message" id="message"></textarea>
</div>

<button aria-label="Submit">
	Send
</button>

<div class="hidden" hidden>
	<label for="supersecret">secret</label>
	<input name="bot-field" id="supersecret" />
</div>

</form>
