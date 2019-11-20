const mixin = {
  data() {
    return {
      scrollTop: 0,
      toc: null,
    }
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop;
    },
    generateToc(html) {
      this.toc = html;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
};

export default mixin;
