function novedadesOnInit() {
    $('.spinner').removeClass('hide');
    if ($('.novedades__content-new')) {
        $('.novedades__content-new').remove();
    }
    httpRequest('GET', '/news')
        .then(
            (response) => {
                let c = 0;
                response = JSON.parse(response);
                for (let i in response.data) {
                    const info = JSON.parse(response.data[i]);
                    if (info.fecha) {
                        $('#novedades').append(`<div class="novedades__content-new">
                <span>${info.fecha}</span>
                <img id="novedadesImagen" class="novedades__image" src="${info.image}" alt="">
                <h5 class="novedades__text-title">${info.titulo}</h5>
                <p class="novedades__text-content" id="novedadesText">${info.contenido}</p>
            </div>`);
                        c++;
                    }
                }

                if (c < 0) {
                    $('#novedades').append(`<span style="width:100%;float:left;text-align:center;padding: 3rem 0;">Todavía no hay novedades.</span>`);
                }

                $('.spinner').addClass('hide');
            }
        )
}