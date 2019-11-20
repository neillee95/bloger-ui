import {getArchives} from "@/apis/archive";
import {groupBy} from "@/utils/array";
import {dateFormat} from "@/utils/date";

const mixin = {
  data() {
    return {
      articles: [],
      loading: false,
      hasMore: true,
      page: 1,
      size: 20
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight === scrollHeight) {
        if (this.loading || !this.hasMore) {
          return;
        }
        console.log("loading more..");
        this.loading = true;
        this.getArchives();
      }
    },
    map(item) {
      return {
        "id": item.id,
        "title": item.title,
        "createTime": item.createTime,
        "group": this.toYearMonth(item.createTime)
      };
    },
    toYearMonth(timestamp) {
      const date = new Date(timestamp);
      return date.getFullYear() + " / " + (date.getMonth()+ 1);
    },
    dateFormat(timestamp) {
      return dateFormat(timestamp);
    },
    getArchives() {
      getArchives(this.page, this.size).then(({data}) => {
        if (data) {
          const articles = data.data;
          if (articles.length < this.size) {
            this.hasMore = false;
          }
          for (let i = 0; i < articles.length; i++) {
            articles[i] = this.map(articles[i]);
          }
          this.articles.push(groupBy(articles, "group"));
          this.page++;
        }
      }).finally(() => {
        this.loading = false;
      });
    },
    timestamp(item) {
      return Object.keys(item)[0] + ' (' + Object.values(item)[0].length + ')';
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.getArchives();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
};

export default mixin;
