new Vue({
el:"#app",
created: function(){
    this.getBlogPosts()
},
data: {
    postList : [],
    showMobileMenu: false
},
methods:{
    getBlogPosts(){
    let postsDbURL = "/static/js/blog/postsDB.json"
    axios.get(postsDbURL).then(response=>{
        
        this.postList = response.data.slice(0,2);
    })
    },

    toggleMenu(){
    this.showMobileMenu = !this.showMobileMenu;
    }
}
})