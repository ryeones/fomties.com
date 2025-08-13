---
layout: page
title: index
id: home
permalink: /
---

welcome to ***[[fomties™]]***, which is a stylised version of the phrase [[figuring out my twenties]].
it is also the fancy name i gave to this side project of mine.

this is [[my little corner of the internet]] where i share my ideas and thoughts in public. this is also known as [[digital gardening]] or a form of [[learning in public]].

the site has a diverse ecosystem of interlinked notes evolving at very different rates. most of the notes fall within these [[topics]] i'm interested in, but the most common attribute between all of these notes is the fact that they will always be a [[work in progress]], regardless of how evolved they appear.

this project is built upon a couple of [[personal values]] i hold dearly to.

so these notes are written for myself to aid my thinking, learning and creativity.

<strong>Recently updated notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
