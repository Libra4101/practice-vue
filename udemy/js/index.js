
new Vue({
  el: '#app',
  data: {
    message: "hello",
    count: 0,
    fruits: ['りんご', 'バナナ', 'ぶどう'],
    books: ['Ruby本', 'Java本', 'JavaScript本']
  },
  computed: {
    lessThanThree: function() {
      return this.count > 5 ? "5より上" : "5より下"
    }
  },
  methods: {
    joinFruits: function() {
      document.getElementById('fruitList').textContent = this.fruits.join(',');
    }
  }
})