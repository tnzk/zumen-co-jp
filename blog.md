---
# YAML Front Matter
layout: blog
title: 一覧テスト
---

<!-- <div class="row list-page"> -->
  {% for post in site.posts %}
  <div class="pickup article-card col-12">
    <p class="article-card__tags">
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


  <div class="article-card col-12">
  {% for post in site.posts %}
    <div class="row list-page">
      <div class="col order-2">
      <a href="{{ post.url }}">
        <img src="{{ post.image }}" alt="">
      </a>
      </div>
      <div class="col order-1">
        <p class="article-card__tags">
          <a class="inlink" href="">{{ post.categories }}</a>
        </p>
        <p class="article-card__title">
          {{ post.title }}
        </p>
      </div>
    </div>
    {% endfor %}
  </div>
