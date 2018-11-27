$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.dropdown-item').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-collapse').on('shown.bs.collapse', function(e) {
    $('.dropdown').dropdown('toggle', 'open').show();
});

function mapUrl(id) {
    redirect('/empresa', {id: id}, 'empresa');
}