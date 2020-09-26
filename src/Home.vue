<template>
  <div class="Home">
    <div v-if="list.length == 0">
      <skeleton></skeleton>
    </div>
    <div v-else>
      <div class="header">
        <span class="wz">
          今日头条
        </span>
        <router-link to="/login"
          ><span class="dl">
            登陆
          </span></router-link
        >
      </div>
      <page v-for="(item, index) in list" :key="index" :datas="item"> </page>
    </div>

    <!-- 这个是底部显示下拉更新 -->
    <div class="loadMore" ref="loadMore"></div>
  </div>
</template>
<script>
import { listObj } from "./server";
import page from "./page/page";
import skeleton from "./page/Skeleton";
import { delay } from "./ulits.js";
export default {
  components: { page, skeleton },
  data() {
    return {
      list: [],
    };
  },

  methods: {
    async getalldatas() {
      if (this.list.length == 0) {
        let resolved = await listObj.getalldata();
        this.list = resolved.data;
        console.log(this.list);
      } else {
        this.$refs.loadMore
          ? (this.$refs.loadMore.innerHTML = "正在加载中...")
          : null;
        await delay();
        let result = await listObj.getalldata();
        this.list = Object.freeze([...this.list, ...result.data]);
        this.$refs.loadMore ? (this.$refs.loadMore.innerHTML = "") : null;
      }
    },
  },
  created() {
    this.getalldatas();
  },
  mounted() {
    let ob = new IntersectionObserver(
      (changes) => {
        let item = changes[0];
        if (item.isIntersecting && this.list.length > 0) {
          this.getalldatas();
        }
      },
      {
        threshold: [0],
      }
    );
    ob.observe(this.$refs.loadMore);
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 50px;
  background: red;
  position: fixed;
  z-index: 10;
}

.wz {
  color: #fff;
  font-size: 23px;
  text-align: center;
  line-height: 50px;
  padding-left: 125px;
}

.loadMore {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.16rem;
  color: #999;
}

.dl {
  width: 50px;
  height: 20px;
  background: red;
  padding-left: 95px;
  font-size: 18px;
  color: #fff;
}
</style>
