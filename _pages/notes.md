---
layout: page
title: notes
permalink: /notes
---
a collection of thoughts on things i find interesting, challenges i'm facing, and what i'm learning.

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — 
      <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>