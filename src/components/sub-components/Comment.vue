<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" v-model="msg" maxlength="120"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list" v-for="(item,i) in comments" :key="i">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [], // 所有的评论数据
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const { data } = await this.$http.get(
        "/api/getcomments/" + this.newsId + "?pageindex=" + this.pageIndex
      );
      if (data.status == 0) this.comments = this.comments.concat(data.message);
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    async postComment() {
      if (this.msg.trim().length == 0) {
        return Toast(
          '请填写评论内容!'
        );
      }
      const { data } = await this.$http.post(
        "/api/postcomment/" + this.newsId,
        {
          content:this.msg.trim()
        }
      );
     if(data.status===0){
         this.comments.unshift({
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
         })
         this.msg = "";
     }
    }
  },
  props: ["newsId"]
};
</script>
<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>