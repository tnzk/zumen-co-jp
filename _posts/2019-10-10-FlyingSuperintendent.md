---
layout: post
title: 「空飛ぶ現場監督」！？　BIM×AI×ドローンでプロジェクト管理を自動化した事例
author: hamaguchi
outline:  Flying Superintendent ＝「空飛ぶ現場監督」……！？厳しい現場監督がふわふわと飛んでいる不思議なイメージが頭に浮かびますが…その正体とは？
categories: BIM
jacategories: 
image: ../assets/img/20191010.png
tags:
---

みなさんこんにちは！ ZUMEN CTO の濱口です。

このブログでは、海外建設業界での BIM や AI についてのニュースを、米国・英国メディアの記事を中心に紹介しています。

そのテーマを探すためにたくさんの記事を流し読みしているのですが、その中で、おもしろい言葉を目にしました。

**"Flying Superintendent"**という言葉です。

みなさんは見たことありますか？

後半の "Superintendent" は「最高指導者」や「責任者」といった意味です。変わった言葉ではないですね。建設の分野では、**現場監督**という意味で使われることが多いと思います。

めずらしいのは、頭に「空飛ぶ」を意味する "Flying" がつくことです。

つまり、 "Flying Superintendent" ＝**「空飛ぶ現場監督」**……！？

厳しい現場監督がふわふわと飛んでいる不思議なイメージが頭に浮かびますね。

いったい、その正体は何なのでしょうか？

## 「空飛ぶ現場監督」の正体とは！？

気になる「空飛ぶ現場監督」の姿は……こちらです！！

![Flying Superintendent](../../../../assets/img/20191010.png)

そう、みなさんお馴染みの**ドローン**なのでした！

## BIM とドローンでプロジェクトの進捗状況をチェック！

「空飛ぶ現場監督」を導入したのは、米建設大手ターナー。その舞台は、カリフォルニアの州都サクラメントにスポーツスタジアム「ゴールデン 1 センター」を建設するプロジェクトでした。

まず、 BIM で 3D の建設設計をしました。その結果できあがったスタジアムの 3D モデルを、いくつかに分割。各部分が、プロジェクトのフェーズに対応するようにしておきました。

そして工事が開始すると、ドローンの 3D レーザーカメラによる空撮で工事の進行状況を 3D モデル化。内部構造も同様に、ローバーで撮影し 3D モデル化しました。ここでは、 SfM(Structure from Motion) という画像認識の技術が使われています。

## 膨大な情報からプロジェクトの行方を予測。遅れそうなエリアをアラート通知

建設途中の 3D モデルは、分割された 3D モデルと比較することができます。

すると、工事がプロジェクト計画上のフェーズに合致しているか、遅れていたり、今後遅れるリスクが高いのはどのエリアなのかを分析することができます。

この分析は、いわゆるビックデータの文脈で「予測分析」と呼ばれる手法です。これも SfM と同じく、広い意味で AI のひとつですね。

こうした情報に加え、これまで活用が進まなかった BIM データへのアクセス、多くの関係者にを認めました。それにより、定例会議の運営や工程の管理など、多くの部分が効率化の効果が得られたといいます。

## BIM×AI× ドローン……全部入りプロジェクトの凄みと歴史

ターナーのゴールデン 1 センター建設計画は、建設を IT の視点から見る私たちにとって非常に興味深い事例です。なぜなら、

- **BIM**を導入し、関係者全体で自由にアクセスできるようにしたことで、情報共有を円滑にした。
- **ドローン**を導入し、手間のかかるモニタリング業務を自動化した。
- それら両方を最大限活用し、予測分析という**AI**の手法により工事遅延リスクを可視化した。

という、建設業界を現代化しようという取り組みが全部入りとなっていて、しかもそのどれもがお飾りではなく、活用し切られているからです。

しかし、これらの最新技術をここまで使いこなすのは、一朝一夕のことではなさそうです。

というのも、ターナーは 2002 年には既に BIM を導入していたといいます。ゴールデン 1 センター起工は 2014 年 10 月のことなので、12 年以上の運用実績があったのですね。

それから 20 年が経とうとしている今でも、日本の建設業界では BIM の採用に多くの課題が山積しているといいます。国交省が i-Construction を唱えるなど、徐々に導入の兆しは見えつつありますが、本格的に普及するには、もう一段階のブレークスルーが必要なのかもしれません。

## 参考記事・タイムライン

- (2013 年 9 月 25 日) [BIM でワークフロー改革！設計サイクルを 6 割短縮](https://tech.nikkeibp.co.jp/kn/article/it/column/20130920/632969/){:target="\_blank"}
- (2014 年 10 月 29 日) [ゴールデン 1 センター　起工](https://en.wikipedia.org/wiki/Golden_1_Center){:target="\_blank"}
- (2015 年 7 月 23 日) [BIM と UAV で施工管理！米サクラメントのスタジアム現場を直撃](http://ieiri-lab.jp/it/2015/07/sacramento_stadium.html){:target="\_blank"}
- (2015 年 7 月 29 日) [ドローンと BIM で高速施工！米サクラメントのスタジアム現場](https://tech.nikkeibp.co.jp/kn/article/it/column/20150723/706910/){:target="\_blank"}
- (2016 年 3 月 18 日) [Drones and BIM combine to spot trouble on big building projects](http://www.globalconstructionreview.com/trends/drones-and-bim-combine-sp7ot-trou7ble-bi7g/){:target="\_blank"}
- (2016 年 9 月 30 日) [ゴールデン 1 センター　竣工](https://en.wikipedia.org/wiki/Golden_1_Center){:target="\_blank"}
- (2019 年 9 月 11 日) [Analytics in BIM: A Case Study](https://themagnumgroup.net/Blog/analytics-in-bim-a-case-study/){:target="\_blank"}
