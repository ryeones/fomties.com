---
layout: page
title: writings
permalink: /writings
---
*a collection of more developed writings on things i find interesting, challenges i’m facing or what i’m learning.*

essentially actual journal entries but more developed.

with less ranting and brain dumping.

well, maybe i’ll share a couple.

these are the things i wanna tell my younger self, in no particular order.

*latest*

{% assign latest = site.posts.first %}
<h4><a href="{{ latest.url }}">{{ latest.title }}</a></h4>
<p>{{ latest.date | date: "%B %-d, %Y" | downcase }}• {{ latest.content | number_of_words | divided_by:180 }} minute read</p>

<p>{{ latest.excerpt }}</p>

<hr>

*[[tags|topics]]*

<div class="topics">
{% assign tags_list = site.tags | sort %}
{% for tag in tags_list %}
  <a href="{{ site.baseurl }}/tag/{{ tag[0] | slugify }}/">{{ tag[0] }}</a>{% if forloop.last == false %}, {% endif %}
{% endfor %}
</div>

<hr>

*writings*

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a class="post-link" href="{{ post.url }}">
        <span class="post-date">{{ post.date | date: "%Y · %m" }}</span>
        <span class="post-title">{{ post.title }}</span>
      </a>
    </li>
  {% endfor %}
</ul>