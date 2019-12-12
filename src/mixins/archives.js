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
      const scrollTop = scrollTop();
      const windowHeight = clientHeight();
      const scrollHeight = scrollHeight();
      if (scrollTop + windowHeight === scrollHeight) {
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
          this.archives.push(...archives);
          if (archives.length < this.size) {
            this.hasMore = false;
          }
          archives.forEach(it => {
            if (Array.isArray(it.articles)) {
              this.skip += it.articles.length;
            }
          });
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
