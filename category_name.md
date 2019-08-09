---
# YAML Front Matter
layout: cate-list
title: category_name
---

{% for post in site.categories.category_name %}
<div class="pickup article-card col-12">
  <p>
    <a class="inlink" href="">{{ post.categories }}</a>
  </p>
  <a href="{{ post.url }}">
  <img src="{{ post.image }}" alt="">
  <p class="article-card__title">
    {{ post.title }}
  </p>
  <p class="article-card__info">
    {{ post.outline }}
  </p>
  </a>
</div>
{% endfor %}
