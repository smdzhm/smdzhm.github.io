import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
    siteConfig: {
    comment: {
      enable: true
    },
  },
  addons: [
    addonWaline({
      serverURL: 'https://1145.vercel.app/',
    }),
  ],
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '無限進步',
    },

    pages: [
{
        name: 'Friend',
        url: '/links/',
        icon: 'i-ri-friendica-line',
        color: 'dodgerblue',
      },
      {
        name: 'My love',
        url: '/girls/',
        icon: 'i-ri-heart-3-line',
        color: 'hotpink',
      },
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-sort-desc',
        color: 'gray',
      },
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-price-tag-3-line',
        color: 'gray',
      },
    ],
    
	footer: {
      since: 2024,
      icon: {
        enable: true,
        name: 'i-ri-heart-line',
        animated: true,
        color: '#546cd6ff',
        url: 'https://rainbowsky.ggff.net',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
      beian: {
        enable: false,
        icp: 'xxxx',	// 备案
      },
    },
},
   unocss: { safelist },

})