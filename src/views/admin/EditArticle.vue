<template :key="$route.fullPath">
  <el-form :model="form" :rules="rules" ref="form" label-width="80px">
    <el-form-item label="标题" prop="title">
      <el-input ref="title" v-model="form.title" maxlength="64" show-word-limit />
    </el-form-item>
    <el-form-item label="标签" prop="tags">
      <el-tag
        :key="tag"
        v-for="tag in form.tags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="tagInput"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <el-button
        v-else
        class="button-new-tag"
        size="small"
        :style="{marginLeft: this.inputTagMargin}"
        @click="showInput"
      >
        + 标签
      </el-button>
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <el-select v-model="form.type">
        <el-option label="原创" value="原创" />
        <el-option label="转载" value="转载" />
        <el-option label="翻译" value="翻译" />
        <el-option label="其他" value="其他" />
      </el-select>
    </el-form-item>
    <el-form-item label="封面图">
      <el-input v-model="form.cover" />
    </el-form-item>
    <el-form-item label="启用评论">
      <el-radio-group v-model="form.canComment">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否发布">
      <el-radio-group v-model="form.publish">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="内容" style="margin-bottom: -8px">
      <el-upload style="margin-bottom: 16px" action="" :before-upload="beforeUpload">
        <el-button slot="trigger" size="small" type="primary" round>
          <i class="el-icon-upload el-icon--right" /> 上传文件
        </el-button>
        <div slot="tip" class="el-upload__tip">或者选择 <b>Markdown</b> 文件上传</div>
      </el-upload>
    </el-form-item>
    <mavon-editor style="min-height: 800px; margin-bottom: 72px" v-model="form.content" />
    <div class="action">
      <el-button type="primary" @click="submit('form')" :loading="submitting" round>
        {{ submitting ? '提交中' : '立即' + (isCreate ? '创建' : '更新') }}
      </el-button>
      <el-button @click="reset('form')" :loading="submitting" round>重置</el-button>
    </div>
  </el-form>
</template>

<script>
import mixin from "@/mixins/admin/EditArticle";

export default {
  name: "EditArticle",
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.action {
  height: 64px;
  line-height: 64px;
  padding: 0 80px;
  position: fixed;
  bottom: 0;
  z-index: 2000;
}
</style>
