<!--  -->
<template>
  <div class>
    <!-- 首页header的开始 -->
    <div class="tt-home-header">
      <span>头条</span>
    </div>
    <!-- 首页header的结束 -->

    <!-- 首页内容content的开始 -->
    <div class="tt-home-content">
      <div class="home-content-left">
        <!-- 插入导航组件 -->
        <Navleft></Navleft>
      </div>
      <div class="home-content-mid">中间</div>
      <div class="home-content-right">右边</div>
    </div>
    <!-- 首页内容content的结束 -->

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Navleft from '../components/Navleft'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Navleft
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  async mounted() {
    let res=await this.$axios.get("/getArticles",{
      params:{
        lastid:0,
        type:'TT',
        page:1,
        number:20
      }
    })
    console.log(res)
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>






<style lang='less' scoped>
.tt-home-header {
  background-color: black;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  span {
    color: white;
  }
}
.tt-home-content {
  display: flex;
  width: 80vw;
  margin: 0 10vw;
  .home-content-left {
    flex: 1;
  } 

  .home-content-mid {
    flex: 3;
  }

  .home-content-right {
    flex: 2;

  }
}
</style>


