new Vue({
    // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
    el: '#app',
    // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
    data: {
        name: 'A山B郎',
        course: 'Cours d\'Ingénieur Web',
        acceptancePeriod: '2019年01月期',
        defaultLastId: 3,
        students: [
            { id: 1, name: '野呂浩良', course: '機械学習Cours', acceptancePeriod: '2019年01月期' },
            {
                id: 2, name: '富永修司', course: 'Cours d\'Ingénieur Web', acceptancePeriod: '2017年11月期'
            },
            { id: 3, name: '斉藤一起', course: 'Cours d\'Ingénieur Web', acceptancePeriod: '2017年11月期' }
        ]
    },
    // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
    methods: {
        addStudent: function () {
            this.defaultLastId = this.defaultLastId + 1
            this.students.push({ id: this.defaultLastId, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })
        }
    }
})