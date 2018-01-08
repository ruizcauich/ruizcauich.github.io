
var enlace_contacto = document.getElementById('contacto');

enlace_contacto.addEventListener("click", desplegarContacto)
var c;
function desplegarContacto(){
  var contacto = document.createElement("div");
  var span_close = document.createElement("span");
  var iframe = document.createElement("iframe");
  span_close.classList.add("close_window");
  contacto.classList.add("contact_window");
  iframe.src="https://docs.google.com/forms/d/e/1FAIpQLSeZ_w9wQelPk2AWB1mL9hdnCVDfC0KIdzUR9HWc7UwMVdbcWg/viewform?embedded=true"
  /*<iframe src="" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>*/
  span_close.innerHTML="Close";


  contacto.appendChild(span_close);
  contacto.appendChild(iframe);
  document.body.appendChild(contacto);

  span_close.addEventListener("click",
    function(){
      document.body.removeChild(this.parentNode);
    }
  )
}
