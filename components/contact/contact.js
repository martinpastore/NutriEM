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

    if (contact.empresa !== '' && contact.email !== '' && contact.telefono !== '') {
        httpRequest('POST', 'http://localhost:3008/contact', contact)
            .then(
                (data) => {
                    console.log(data);
                }
            )
            .catch(
                (error) => {
                }
            );
    } else {
        if (contact.empresa === '') {
            $(`#${form} #inputEmpresa`).addClass('is-invalid');
        }
        if (contact.email === '') {
            $(`#${form} #inputEmail`).addClass('is-invalid');
        }
        if (contact.telefono === '') {
            $(`#${form} #inputTelefono`).addClass('is-invalid');
        }
    }
});