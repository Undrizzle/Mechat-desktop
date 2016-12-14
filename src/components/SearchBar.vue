<template>
  <div class="search_bar" id="search_bar">
    <i class="web_wechat_search"></i>
    <input class="frm_search" type="text" placeholder="搜索">
  </div>
</template>

<script>

export default {
  name: 'searchBar'
}
</script>

<style>
  .search_bar {
    position: relative;
    width: 244px;
    margin: 0 auto 6px;
  }

  .search_bar .web_wechat_search {
    position: absolute;
    z-index: 101;
    top: 1px;
  }

  .web_wechat_search {
    background: url(../images/sprite31e225.png) 0 -1946px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    display: inline-block;
  }

  .search_bar .frm_search {
    width: 214px;
    height: 32px;
    line-height: 32px;
    border: 0;
    border-radius: 2px;
    background-color: #26292e;
    color: #fff;
    padding-left: 30px;
    font-size: 12px;
  }
</style>
