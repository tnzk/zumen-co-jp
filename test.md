---
# YAML Front Matter
layout: sub
title: testテスト試験てすと123abc
---
<div class="row">
  <div class="col-12">

  {% for category in site.categories %}
    <h3>{{ category[0] }}</h3>
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}

# ※これはテスト.md(sub召喚)です。

↓テスト
<h1>元</h1>
{% for category in site.categories %}
<h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li>{{ post.url }}★{{ post.title }}</li>
    {% endfor %}
  </ul>
{% endfor %}

<h1>limit:1</h1>
{% for category in site.categories limit:1 %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li>{{ post.url }}★{{ post.title }}</li>
    {% endfor %}
  </ul>
{% endfor %}


<h1>べすとあんさ</h1>

    {% for post in site.categories.AI %}
        <li>{{ post.title }}</li>
    {% endfor %}    

<h1>改変★べすとあんさ</h1>
        {% for post in site.categories.{{ category }} %}
            <li>{{ post.title }}</li>
        {% endfor %}   

<h1>前のテスト</h1>


<ul>
  {% for post in site.posts %}
    <li>
    post.image:::{{ post.image }}<br>
    post.url:::{{ post.url }}<br>
    post.title:::{{ post.title }}<br>
    post.excerpt:::{{ post.excerpt }}<br>
    post.outline:::{{ post.outline }}<br>
    post.categories:::{{ post.categories }}<br>
    page.image:::{{ page.image }}<br>
    </li>
  {% endfor %}
</ul>
↑テスト
<h1>最初の段落呼び出し</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
↑テスト

<h1>outline呼び出し</h1>

<ul>
{% for post in site.posts %}
<li>
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>{{post.outline}}</p>
</li>
{% endfor %}
</ul>
</div></div>


# h1見出しあいうえカキクケabc09876

見出しのしたのテキスト

-   見出しのしたのリスト
-   見出しのしたのリスト
-   見出しのしたのリスト

{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}

## h2見出しあいうえカキクケabc09876

見出しのしたのテキスト

-   見出しのしたのリスト
-   見出しのしたのリスト
-   見出しのしたのリスト

{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}

### h3見出しあいうえカキクケabc09876

見出しのしたのテキスト

-   見出しのしたのリスト
-   見出しのしたのリスト
-   見出しのしたのリスト

{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}

#### h4見出しあいうえカキクケabc09876

見出しのしたのテキスト

-   見出しのしたのリスト
-   見出しのしたのリスト
-   見出しのしたのリスト

{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}

##### h5見出しあいうえカキクケabc09876

見出しのしたのテキスト

-   見出しのしたのリスト
-   見出しのしたのリスト
-   見出しのしたのリスト

{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}

###### h6見出しあいうえカキクケabc09876

見出しのしたのテキスト

-   見出しのしたのリスト
-   見出しのしたのリスト
-   見出しのしたのリスト

{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}

![poyo](/assets/img/poyo.png)

こんにちは。
