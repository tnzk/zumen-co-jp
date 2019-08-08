---
# YAML Front Matter
layout: default
title: 建設プロジェクト効率化のためのクラウドサービスの開発・運営
---

<!-- メインカラム -->

<div class="col-12 col-sm-7 col-md maincol">

  <!-- メインカラム中身 -->

  <div class="row">

  <!-- カードA 画像-タイトル-導入分 -->

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

    <!-- カードB タイトル/画像 -->
    <!-- <div class="article-card col-12">
      <div class="row">
        <div class="col order-2">
          <img src="/assets/img/sample4.jpg" alt="">
        </div>
        <div class="col order-1">
          <p class="article-card__tags">
            <span>loT</span>
          </p>
          <p class="article-card__title">
            右画像タイプ
          </p>
        </div>
      </div>
    </div> -->

  </div>
  <!-- //メインカラム中身 -->

</div>
<!-- //メインカラム 終了-->

<!-- 右カラム -->

<div class="col-sm-5 col-md-4 d-none d-sm-block subcol-right">
  <!-- 右カラム中身 -->
  <div class="row mt-15">

  {% include pr-pu.html %}
  {% include col-rank.html %}

  <div class="w-100"></div>
  <div class="col-12">
    <div class="fb-page" data-href="https://www.facebook.com/5thfloorinc/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
      <blockquote cite="https://www.facebook.com/5thfloorinc/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/5thfloorinc/">フィフス・フロア株式会社</a></blockquote>
    </div>
  </div>


  </div>

</div>
