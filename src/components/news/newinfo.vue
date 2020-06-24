<template>
    <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
    <comment :newsId='this.id'></comment>
    </div>
</template>
<script>
import comment from '../sub-components/Comment.vue'
export default {
    data(){
        return{
            newsinfo:{}
        }
    },
    created() {
        this.getNewInfo()
    },
    methods:{
        async getNewInfo(){
            const {data} = await this.$http.get('/api/getnew/'+this.id)
            if(data.status===0) this.newsinfo=data.message[0]
        }
    },
    props:['id'],
    components:{
        comment
    }
}
</script>
<style lang="less" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>