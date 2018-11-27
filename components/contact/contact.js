$('.contact').submit(function(e) {
    e.preventDefault();

    const form = e.currentTarget.id;

    const contact = {
        empresa: $(`#${form} #inputEmpresa`).val(),
        email: $(`#${form} #inputEmail`).val(),
        telefono: $(`#${form} #inputTelefono`).val(),
        direccion: $(`#${form} #inputDireccion`).val(),
        barrio: $(`#${form} #inputBarrio`).val(),
        mensaje: $(`#${form} #inputMensaje`).val()
    };

    httpRequest('POST', 'http://localhost:3008/contact', contact)
        .then(
            (data) => {
            }
        )
        .catch(
            (error) => {
            }
        )
});