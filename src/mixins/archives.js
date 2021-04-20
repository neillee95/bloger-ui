import {getArchives} from "@/apis/archive";
import {dateFormat} from "@/utils/date";
import {scrollTop, clientHeight, scrollHeight} from "@/utils/scroll";

const mixin = {
  data() {
    return {
      archives: [],
      loading: false,
      hasMore: true,
      skip: 0,
      size: 5
    }
  },
  methods: {
    dateFormat,
    handleScroll() {
      const sTop = scrollTop();
      const windowHeight = clientHeight();
      const sHeight = scrollHeight();
      if (sTop + windowHeight >= sHeight) {
        if (this.loading || !this.hasMore) {
          return;
        }
        console.log("loading more..");
        this.loading = true;
        this.getArchives();
      }
    },
    getArchives() {
      getArchives(this.page, this.size).then(({data}) => {
        if (data) {
          const archives = data.data;
          if (Array.isArray(archives)) {
            this.archives.push(...archives.reverse());
            if (archives.length < this.size) {
              this.hasMore = false;
            }
            archives.forEach(it => {
              if (Array.isArray(it.articles)) {
                this.skip += it.articles.length;
              }
            });
          } else {
            this.hasMore = false;
          }
        }
      }).finally(() => {
        this.loading = false;
      });
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.getArchives();
    document.title = "Archives";
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
};

export default mixin;
