import md from '@/utils/markdown-it';
import {getAboutMe} from "@/apis/page";

const mixin = {
  data() {
    return {
      markdownContent: ''
    }
  },
  computed: {
    content() {
      return md.render(this.markdownContent);
    }
  },
  methods: {
    getAboutMe() {
      getAboutMe().then(({data}) => {
        if (data) {
          this.markdownContent = data.data;
        }
      });
    }
  },
  created() {
    this.getAboutMe();
    document.title = "AboutMe";
  }
};

export default mixin;
