import { getTags } from "@/apis/tag";

const mixin = {
  data() {
    return {
      tags: []
    }
  },
  created() {
    this.getTags();
    document.title = "Tags";
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
      return window.encodeURI(val);
    }
  }
};

export default mixin;
