$(document).ready(function(){

    $('.filtro').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.contenedor-galeria-individual').show('1000');
        } else {
            $('.contenedor-galeria-individual').not('.' + valor).hide('1000');
            $('.contenedor-galeria-individual').filter('.' + valor).show('1000');
        }
    });
})