<template>
  <div class="skeleton">
    <div class="zz">{{ datas.title }}</div>

    <div class="font1">
      <div v-if="datas.large_image_url">
        <div class="right" ref="lazyImg">
          <img src :data-img="datas.large_image_url" />
        </div>
        <div class="al">{{ datas.source }}</div>
      </div>
      <div v-else></div>
      <br />
    </div>
    <div class="font2">
      <div v-for="(item, index) in datas.image_list" :key="index" ref="lazyImg">
        <img src :data-img="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      require: "true",
    },

    datas: {
      type: Object,
      require: "true",
    },
  },
  mounted() {
    var lazyImg = this.$refs.lazyImg;
    if (!lazyImg) return;

    let ob = new IntersectionObserver(
      (changes) => {
        changes.forEach((item) => {
          if (item.isIntersecting) {
            let target = item.target;
            this.lazyFun(target);
            ob.unobserve(target);
          }
        });
      },
      {
        threshold: [1],
      }
    );
    if (Array.isArray(lazyImg)) {
      lazyImg.forEach((item) => ob.observe(item));
    }
    ob.observe(this.$refs.lazyImg);
  },

  methods: {
    lazyFun(ele) {
      let img = ele.querySelector("img");
      let true_img = img.getAttribute("data-img");
      img.onload = () => {
        img.style.opacity = 1;
      };
      img.src = true_img;
      img.removeAttribute("data-img");
    },
  },
};
</script>

<style lang="less">
.skeleton {
  .zz {
    position: relative;
    top: 50px;
  }
  img {
    width: 100px;
    height: 70px;
    box-shadow: 1px 1px 2px #888888;
    border-radius: 10px;
    margin: 5px;
    position: relative;
    top: 50px;
  }

  .zi {
    color: #ccc;
    font-size: 12px;
  }

  .timera {
    position: relative;
    top: 50px;
  }

  .fft {
    display: flex;
    flex-flow: nowrap;
  }

  .font2 {
    display: flex;
  }

  .al {
    font-size: 12px;
    color: #ccc;
    position: relative;
    top: 50px;
    left: 10px;
  }
}
</style>
