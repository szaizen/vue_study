
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



// Vueインスタンス

/*
vueインスタンスが作成されると、地震のdataオブジェクトの全てのプロパティをリアクティブシステムに追加します。
これらのプロパティの値を変更すると、ビューが反応し、新しい値に一致するように更新します。
*/

// データおオブジェクト
var data = { a: 1 }

// Vueインスタンスにオブジェクトを追加する
var vm = new Vue ({
  data: data
})

// インスタンスのプロパティを取得すると元のデータからそのプロパティが返されます
vm.a == data.a // => true

// プロパティへの代入は、元のデータにも反映されます
vm.a = 2
data.a // => 2

// その逆も
data.a = 3
vm.a // => 3


/*
このデータを変更すると、ビューが再レンタリングされます。
dataのプロパティは、インスタンスが作成された時に存在していた場合にのみリアクティブです。
つまり以下のように新しいプロパティを追加する場合、
*/

vm.b = 'hi'

/*
そのあと、bへの変更はビューの更新を引き起こさないでしょう。
あとでプロパティが必要になることがわかっているならば、空でも存在しない場合でも初期値を設定するだけですみます。
*/
/*
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
*/
/*
これに対する唯一の例外は、既存のプロパティの変更を防ぐObject.freeze()の使用です。
これはリアクティブシステムが変更を追跡することができない事も意味します。
*/

/*
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
*/

