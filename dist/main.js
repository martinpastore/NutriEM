const mod=[{order:"0",route:"/quienes-somos"},{order:"1",route:"/servicios"},{order:"2",route:"/empresa"},{order:"3",route:"/novedades"},{order:"4",route:"/contacto"}];let history="/quienes-somos",routeParams={};function mapUrl(e){redirect("/empresa",{id:e},"empresa")}function showText(e){}function hideText(e){}function serviciosOnInit(){$(".card").first().tooltip("show"),setTimeout(function(){$(".card").first().tooltip("hide"),$(".card").first().tooltip("disable")},2e3)}function empresaOnInit(){switch(routeParams.id){case"mision":document.getElementById("mision").style.display="block",document.getElementById("vision").style.display="none",document.getElementById("valores").style.display="none",document.getElementById("objetivos").style.display="none";break;case"vision":document.getElementById("mision").style.display="none",document.getElementById("vision").style.display="block",document.getElementById("valores").style.display="none",document.getElementById("objetivos").style.display="none";break;case"valores":document.getElementById("mision").style.display="none",document.getElementById("vision").style.display="none",document.getElementById("valores").style.display="block",document.getElementById("objetivos").style.display="none";break;case"objetivos":document.getElementById("mision").style.display="none",document.getElementById("vision").style.display="none",document.getElementById("valores").style.display="none",document.getElementById("objetivos").style.display="block"}}function novedadesOnInit(){$(".spinner").removeClass("hide"),$(".novedades__content-new")&&$(".novedades__content-new").remove(),httpRequest("GET","/news").then(e=>{let n=0;e=JSON.parse(e);for(let t in e.data){const o=JSON.parse(e.data[t]);o.fecha&&($("#novedades").append(`<div class="novedades__content-new">\n                <span>${o.fecha}</span>\n                <img id="novedadesImagen" class="novedades__image" src="${o.image}" alt="">\n                <h5 class="novedades__text-title">${o.titulo}</h5>\n                <p class="novedades__text-content" id="novedadesText">${o.contenido}</p>\n            </div>`),n++)}n<=0&&$("#novedades").append('<span style="width:100%;float:left;text-align:center;padding: 3rem 0;">Todavía no hay novedades.</span>'),$(".spinner").addClass("hide")})}httpRequest=function(e,n,t,o){return new Promise(function(s,i){var a=new XMLHttpRequest;o&&a.overrideMimeType(o),a.open(e,n),a.onload=function(){s(a.responseText)},a.onerror=function(){i(a.responseText)},t?(a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(t))):a.send()})},$(".navbar-nav>li>a").on("click",function(){$(".navbar-collapse").collapse("hide")}),$(".dropdown-item").on("click",function(){$(".navbar-collapse").collapse("hide")}),$(".navbar-collapse").on("shown.bs.collapse",function(e){$(".dropdown").dropdown("toggle","open").show()}),$(".contact").submit(function(e){e.preventDefault();const n=e.currentTarget.id,t={empresa:$(`#${n} #inputEmpresa`).val(),email:$(`#${n} #inputEmail`).val(),telefono:$(`#${n} #inputTelefono`).val(),direccion:$(`#${n} #inputDireccion`).val(),barrio:$(`#${n} #inputBarrio`).val(),mensaje:$(`#${n} #inputMensaje`).val()};""!==t.empresa&&""!==t.email&&""!==t.telefono?httpRequest("POST","/contact",t).then(e=>{console.log(e)}).catch(e=>{}):(""===t.empresa&&$(`#${n} #inputEmpresa`).addClass("is-invalid"),""===t.email&&$(`#${n} #inputEmail`).addClass("is-invalid"),""===t.telefono&&$(`#${n} #inputTelefono`).addClass("is-invalid"))}),redirect=function(e,n,t){let o=history;t&&-1!==t.indexOf("-")&&(t=(t=t.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,n)=>0===n?e.toLowerCase():e.toUpperCase()).replace(/\s+/g,"")).replace(/-/g,""));for(let s in mod)mod[s].route===e&&(document.getElementById(mod[s].order).style.display="block",routeParams=n,history=e,window[t+"OnInit"]&&window[t+"OnInit"]()),mod[s].route===o&&o!==e&&(document.getElementById(mod[s].order).style.display="none")};