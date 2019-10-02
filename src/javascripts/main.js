
// 宣言的レンタリング
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

// 要素の属性を束縛（バインディング）
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

// 条件分岐とループ
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

// ユーザ入力の制御
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'test'
  },
  methods: {
    reverseMessage: function() {
      this.message = '本番だよん'
    }
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello! Vue!!'
  }
})

// コンポーネントによる構成
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('test-component', {
  template: '<div>コンポーネントテストです</div>'
})

new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})


