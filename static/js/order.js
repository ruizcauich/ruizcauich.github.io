var posts_list = document.getElementById("posts-list");

fetch('/static/js/blog/postsDB.json')
.then(function(response) {
  return response.json();
})
.then(function(db) {
  fillPostList(db);
});

function fillPostList( data ){
    data.forEach(element => {
        var li = document.createElement("li");
        
        li.innerHTML  = "<a href=\""+ element.url+"\">" + element.date  + " - " + element.title + "</a>";
        posts_list.appendChild(li);
    });
    
}


// var items = document.getElementsByClassName("order-item");
// items = [].slice.call(items) 
// console.log(items)
// items.sort( (a,b)=>{ new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date")) } )
// console.log(items)

// var list = document.getElementsByClassName("order-menu")[0];
// list.innerHTML="";
// items.forEach(element => {
//     list.appendChild(element)
// });