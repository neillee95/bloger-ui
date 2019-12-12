import {getTags} from "@/apis/tag";

const mixin = {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    getTags() {
      getTags().then(({data}) => {
        if (data) {
          this.tags = data.data;
        }
      });
    },
    escape(val) {
      return window.escape(val);
    }
  },
  created() {
    this.getTags();
    document.title = "Tags";
  }
};

export default mixin;
