<template>
  <div id="app">
    <!-- 配置 路径为'/'的唯一出口 -->
    <router-view/>
  </div>
</template>

<style>
/* 不加scoped  不然引进来的组件样式reset不生效 */
html,body,div,section,p,span,h1,h2,h3,h4,h5,h6,ol,ul{
  margin: 0;
  padding: 0;
  box-sizing:border-box ;
}
</style>
