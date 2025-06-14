import Twikoo from './components/Twikoo.vue';

export default {
  Layout: DefaultLayout,
  enhanceApp({ app, router, siteData }) {
    app.component("Twikoo", Twikoo);
  },
} satisfies Theme;