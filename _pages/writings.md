---
layout: page
title: writings
permalink: /writings
---
*a collection of writings on things i find interesting, challenges i’m facing or what i’m learning.*

essentially actual journal entries but more developed.

with less ranting and brain dumping.

well, maybe i’ll share a couple.

these are the things i wanna tell my younger self, in no particular order.

[[a season of growth and reflection]]
[[what does it mean to be grateful]]

<ul>

  {% for post in site.posts %}

    <li>

      <a href="{{ post.url }}">{{ post.title }}</a>

    </li>

  {% endfor %}

</ul>

  

