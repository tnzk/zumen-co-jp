---
# YAML Front Matter
layout: default
title: ぽよ
---



# hello
world!!!

# 入れたやつ
* bootstrap grid
* ress
* Syntaxhighlight monokai

# post roop
{% for post in site.posts %}
- [{{post.title}}]({{post.url}})
{% endfor %}

こんにちは。

# monokai入れたら1.5hかよ

## \```する
``` javascript
const = ('a', 1, False)
```

## highlightでくくる
### python

{% highlight python %}
python zenzenwakaran.py
print "Hello world!"
{% endhighlight %}

### css + linenos
{% highlight css linenos %}
.sample-img {
  width: 100%
}
{% endhighlight %}


# 画像テスト
```
![poyo](/poyo.png)
```
![poyo](/poyo.png)
