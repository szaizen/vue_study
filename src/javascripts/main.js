
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