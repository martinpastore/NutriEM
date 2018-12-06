function novedadesOnInit() {
    httpRequest('GET', '/news')
        .then(
            (data) => {
                data = JSON.parse(data);
                for (let i in data) {
                    const info = JSON.parse(data[i]);
                    $('#novedades').append(`<div class="novedades__content-new">
                <span>${info.fecha}</span>
                <img id="novedadesImagen" class="novedades__image" src="${info.image}" alt="">
                <h5 class="novedades__text-title">${info.titulo}</h5>
                <p class="novedades__text-content" id="novedadesText">${info.contenido}</p>
            </div>`)
                }
            }
        )
}