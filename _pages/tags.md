---
layout: page
title: tags
permalink: /tags
---
*a space to place all my top level mocs - in simpler terms, a way to easily categorise things i'm interested in*

<div class="topics">
{% assign tags_list = site.tags | sort %}
{% for tag in tags_list %}
  <a href="{{ site.baseurl }}/tags/{{ tag[0] | slugify }}/">{{ tag[0] }}</a>{% if forloop.last == false %}, {% endif %}
{% endfor %}
</div>