---
title: 我的小伙伴们
keywords: 链接
description: 云游的小伙伴们
links:
  - url: https://www.yunyoujun.cn
    avatar: https://www.yunyoujun.cn/images/avatar.jpg
    name: 云游君
    blog: 云游君的小站
    desc: 希望能成为一个有趣的人。
    email: me@yunyoujun.cn
    color: "#0078e7"
  - url: https://valaxy.site
    avatar: https://valaxy.site/favicon.svg
    name: Valaxy Org
    blog: Valaxy Site
    desc: 下一代静态博客框架
    email: i@valaxy.site
    color: "#6058d9"
# 也可以是一个 JSON 链接
# links: https://friends.yunyoujun.cn/links.json
random: true
---

<YunLinks :links="frontmatter.links" :random="frontmatter.random" />

### 申请友链格式如下：

- 通过邮箱发给我

```html
url: 你的网址
avatar: 你的头像
name: 你的名字
blog: xxx's blog #与name项可以只写一个 
desc: 描述你的站点
color: "#6058d9" # 想要使用的边框颜色
email: # 非选填
```

已经加了友链的可以随时提出修改自己的信息
