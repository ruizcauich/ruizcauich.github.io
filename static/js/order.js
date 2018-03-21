var items = document.getElementsByClassName("order-item");
items = [].slice.call(items) 
console.log(items)
items.sort( (a,b)=>{ new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date")) } )
console.log(items)

var list = document.getElementsByClassName("order-menu")[0];
list.innerHTML="";
items.forEach(element => {
    list.appendChild(element)
});