import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]
export default defineValaxyConfig<UserThemeConfig>({

  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '無限進步',
    },

    pages: [
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
        url: 'https://mizzlelume.qzz.io',	//图标链接
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