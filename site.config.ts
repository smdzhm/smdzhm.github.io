import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://smdzhm.github.io',
  lang: 'zh-CN',
  title: 'RainbowSky的博客|RainbowSky\'s blog',
  subtitle: '一日一日を无駄なく、强く生きること',
  author: {
    name: 'RainbowSky',
    avatar: 'https://i.postimg.cc/668hjh67/20250111162708.png',
    status:
    {
      emoji: '🤣',
      message: '在线'
  }},
  mode: 'auto',
  lastUpdated: true,
  favicon: 'https://i.postimg.cc/N0mCXgKx/2025-07-30-122426.png',
  description: '终身笔耕，博客可否不朽？',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/smdzhm',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://y.music.163.com/m/user?id=12338724138',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/cnxe0k',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1228387672',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/smdzhm',
      icon: 'i-ri-twitter-x-line',
      color: 'black',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/rainbowsky1145',
      icon: 'i-ri-telegram-2-line',
      color: '#0088CC',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/97RPrfs5U6',
      icon: 'i-ri-discord-line',
      color: '#7B68EE',
    },
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/id/RainbowSky_/',
      icon: 'i-streamline-stream-solid',
      color: '#474747ff',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@rainbowsky1145.ggff.net',
      icon: 'i-ri-mail-ai-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },
  
  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '微信支付',
        url: 'https://i.postimg.cc/52xkpv7d/E81-F46-EFC219-CF13-CD737-F6-DD7438514.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  encrypt: {
    enable: true,
  }
})
