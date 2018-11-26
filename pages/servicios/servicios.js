function serviciosOnInit() {
    $('.card').first().tooltip('show');

    setTimeout(function() {
        $('.card').first().tooltip('hide');
        $('.card').first().tooltip('disable');
    }, 2000);
}