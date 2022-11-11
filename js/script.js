const app = new Vue({
  el: "#root",
  data: {
    title: "Bada Che Titolo!!!",
    img: "img/Hello-V.png",
    colorStr: "secondColor",
    isSecond: true,
  },
  methods: {
    colorSwap() {
      this.isSecond = !this.isSecond;
    },
  },
});
