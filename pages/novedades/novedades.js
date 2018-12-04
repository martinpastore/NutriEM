function novedadesOnInit() {
    httpRequest('GET', '/news')
        .then(
            (data) => {
                console.log(data);
            }
        )
}