
new Vue({
  el: '#app',
  data: {
    message: "hello",
    count: 0
  },
  computed: {
    lessThanThree: function() {
      return this.count > 5 ? "5より上" : "5より下"
    }
  }
})