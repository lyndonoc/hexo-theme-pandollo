# Pandollo

[![license-img](https://img.shields.io/github/license/lyndonoc/hexo-theme-pandollo.svg?style=flat-square)](https://raw.githubusercontent.com/lyndonoc/hexo-theme-pandollo/master/LICENSE)
[![devDependency Status"](https://img.shields.io/david/dev/lyndonoc/hexo-theme-pandollo.svg?style=flat-square)](https://david-dm.org/lyndonoc/hexo-theme-pandollo?type=dev)

![hexo-theme-apollo](https://github.com/lyndonoc/hexo-theme-pandollo/raw/master/source/screenshots/pandollo.png)

> Clean and minimal theme for [Hexo](https://hexo.io/ko/index.html), inspired by [Panda Syntax theme](https://github.com/PandaTheme/Panda-Kit) and [Hexo Apollo theme](https://github.com/pinggod/hexo-theme-apollo).

## Demo
[https://lyndonoc.github.io/](https://lyndonoc.github.io/)

## Installation
```
npm install -g hexo-cli
hexo init <site>
cd <site>
git clone https://github.com/lyndonoc/hexo-theme-pandollo.git themes/pandollo
```
Then set your `theme` in `_config.yml` to `pandollo`.

## Features & Configurations

## Features
The following features can be enabled and configured in `_config.yml`.

### Site Menus
```yaml
menu:
    Home: /
    Archive: /archives/
    LinkedIn: url for your linkedin page
    GitHub: url for your github page
```
items in `menu` list will be listed with corresponding urls

### Disqus Comments
```yaml
disqus: your_disqus_shortname
```
replace `your_disqus_shortname` with your disqus shortname to enable disqus on posts.

### Google Analytics
```yaml
googleAnalytics: UA-00000000-0
```
replace `UA-00000000-0` with your google analytics tracking id to enable google analytics.

### Syntax Highlighting
```yaml
syntax_highlight: darkula
```
replace `darkula` with your choice of syntax highlighting within a post.
[Available syntax highlight styles](https://github.com/lyndonoc/yt-studio/tree/master/source/css/highlights)

### Favicon
```yaml
favicon: path_to_favicon
```
replace `path_to_favicon` with the path to a favicon file.
