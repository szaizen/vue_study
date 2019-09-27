
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