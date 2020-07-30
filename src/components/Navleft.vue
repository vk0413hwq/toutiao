
<!-- 首页内容左边的导航条 -->
<template>
  <div class="app-home-nav">
      <h1>头条</h1>
      <section 
      v-for='item,index in navs' :key='item.id'
      class="nav-item">{{ item.text }}</section>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      navs:[
        {id:1,text:"推荐"},
        {id:2,text:"西瓜视频"},
        {id:3,text:"财经"},
        {id:4,text:"热点"},
        {id:5,text:"直播"},
        {id:6,text:"图片"},
        {id:7,text:"科技"},
        {id:8,text:"娱乐"},
        {id:9,text:"热点"},
        {id:10,text:"互动"},
        {id:11,text:"游戏"},
        {id:12,text:"航空"},
      ]
    };
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
  mounted() {},
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
.app-home-nav {
  text-align: center;
  h1 {
    height: 30px;
    line-height: 30px;
    color: #f95242;
    font-size: 16px;
    font-weight: 400;
  }
  section.nav-item {
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    transition: all .2s;
    &:hover{
      cursor: pointer;
      color: white;
      background: #f95242;
      border-radius: 10px;
    }
  }
}
</style>