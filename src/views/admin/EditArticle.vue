<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" maxlength="16" show-word-limit/>
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <el-tag :key="tag"
                v-for="tag in form.tags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput" :style="{marginLeft: this.inputTagMargin}">+ 标签</el-button>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-input v-model="form.category" maxlength="16" show-word-limit/>
      </el-form-item>
      <el-form-item label="封面图">
        <el-input v-model="form.cover"/>
      </el-form-item>
      <el-form-item label="是否可以评论">
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
<!--      <el-form-item v-if="form.publish" label="即刻发布">-->
<!--        <el-switch v-model="form.publishNow"></el-switch>-->
<!--      </el-form-item>-->
<!--      <el-form-item v-if="!form.publishNow" label="发布日期时间" prop="publishTime">-->
<!--        <el-date-picker v-model="form.publishTime"-->
<!--                        type="datetime"-->
<!--                        placeholder="选择发布日期时间"/>-->
<!--      </el-form-item>-->
      <el-form-item label="内容">
        <el-upload style="margin-bottom: 16px" action="" :before-upload="beforeUpload">
          <el-button slot="trigger" size="small" type="primary" round><i class="el-icon-upload el-icon--right"></i> 上传文件
          </el-button>
          <div slot="tip" class="el-upload__tip">选择 <b>Markdown</b> 文件上传</div>
        </el-upload>
        <mavon-editor style="min-height: 400px" v-model="form.content"></mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('form')" round>立即创建</el-button>
        <el-button @click="reset('form')" round>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
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
</style>
