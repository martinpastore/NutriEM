function novedadesOnInit() {
    if ($('.novedades__content-new')) {
        $('.novedades__content-new').remove();
    }
    httpRequest('GET', '/news')
        .then(
            (response) => {
                response = JSON.parse(response);
                for (let i = response.data.length - 1; i >= 0; i--) {
                    const info = JSON.parse(response.data[i]);
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