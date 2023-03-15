const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
}

function route(event) {
    event = event || window.event // Verificar se está passando algum elemento, se não, pegar evento do window
    event.preventDefault() //Faz com que perca o padrão do clique em qualquer link href

    window.history.pushState({}, "", event.target.href) //Colocando no histórico que está ocorrendo uma mudança de página

    handle()
}

function handle(){

    const { pathname } = window.location // Achar aonde está a rota
    const route = routes[pathname] || routes[404] // Procurar se tem alguma rota e se não tiver, mostrar a rota do erro 404


    fetch(route)
    .then(data => data.text()) // Transformar os dados em formato de Texto
    .then(html => {             // Buscar os dados agora em textos
        document.querySelector('#app').innerHTML = html
    })
 }    

 handle()

 window.onpopstate = () => handle()
 window.route = () => route()