### ![en](https://flagcdn.com/20x15/gb.png) [English Here](README.en.md)

# FreeVDH

ウェブから動画をダウンロードするためのブラウザ拡張機能．

## 概要

FreeVDHは，Video DownloadHelper ([Chrome](https://chromewebstore.google.com/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk?hl=ja) / [Firefox](https://addons.mozilla.org/ja/firefox/addon/video-downloadhelper/)) をベースにカスタマイズしたオープンソースプロジェクトで，ウェブページ上の動画を検出し，ダウンロードできるようにするChromiumベースのブラウザ拡張機能です．

<table><tr>
<td><a href="https://raw.githubusercontent.com/Atamol/FreeVDH/main/docs/sample-1_light.png"><img src="docs/sample-1_light.png" width="300"></a></td>
<td><a href="https://raw.githubusercontent.com/Atamol/FreeVDH/main/docs/sample-2_light.png"><img src="docs/sample-2_light.png" width="300"></a></td>
<td><a href="https://raw.githubusercontent.com/Atamol/FreeVDH/main/docs/sample-3_dark.png"><img src="docs/sample-3_dark.png" width="300"></a></td>
</tr></table>

## 機能

- ウェブページ上の動画を自動検出
- 複数フォーマット・品質でのダウンロード
- HLS，DASHストリーミングのダウンロード
- YouTubeを含む多数のサイトに対応
  - Twitchアーカイブ
  - ニコ生タイムシフト
- BetterSmartNamingによるファイル名の自動整形
  - Twitch: `[アカウント名_配信タイトル_配信日].mp4`
  - ニコニコ: `[動画タイトル_動画ID].mp4`，`[投稿者_配信タイトル_配信年月日].mp4`
- ダウンロード履歴の管理
- サイドパネル，ポップアップの両モード対応
- ダウンロード回数・品質の制限なし

## インストール (Google Chrome)

1. [Release](https://github.com/Atamol/FreeVDH/releases)から`FreeVDH-<VERSION>.zip`をダウンロード (解凍しない)
2. `chrome://extensions`を開く
3. 「デベロッパーモード」が有効になっていなければ，それを有効にする
5. 「パッケージ化されていない拡張機能を読み込む」をクリックし，ダウンロードしたReleaseのzipを選択

## ライセンス

MIT License
