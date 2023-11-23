const app = Vue.createApp({
    //  data, functions 
    // template:`<h2> I am the template. </h2>`
    data(){
        return {
            url:"https://reach-events-system.netlify.app/",
            showBooks: true,
            books:[
                {title:"name of the wind", author:"patrick routhfuss",img:"./images/image1.jpg", isFav:true},
                {title:"the way of kings", author:"brancon sandaron",img:"./images/image2.jpg",isFav:false},
                {title:"the final empire", author:"branson sanderson",img:"./images/image3.png",isFav:true}
            ]
            // title: "The final output",
            // author:'Brandon Sandrom',
            // age:45,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        // changeTitle(title){
        //     // this.title = " words of randience"
        //     this.title = title
        // }
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>{
                return book.isFav
            });
        }
    }
});

app.mount("#app");