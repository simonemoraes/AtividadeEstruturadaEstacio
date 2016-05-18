/**/

$(document).ready(function () {
    /* Inicializador do navBar */
    $(".button-collapse").sideNav();
    $(document).off('click', '.chip .material-icons');

    /* componentes do Menu */
    $("#navMobile_nossaHistoria").click(function () {
        $('html,body').animate({scrollTop: $('.nossaHistoria').offset().top - 50}, 1000);
    });
    $("#navMobile_produtos").click(function () {
        $('html, body').animate({scrollTop: $('.produtos').offset().top - 20}, 1000);
    });
    $("#navMobile_planos").click(function () {
        $('html,body').animate({scrollTop: $('.planos').offset().top - 50}, 1000);
    });
    
    $("#navMobile_faleConosco").click(function () {
        $('html,body').animate({scrollTop: $('.fale-conosco').offset().top - 50}, 1000);
    });

    /* componentes do Menu Mobile */
    $("#mobileDemo_nossaHistoria").click(function () {
        $('html,body').animate({scrollTop: $('.nossaHistoria').offset().top - 50}, 1000);
    });
    $("#mobileDemo_produtos").click(function () {
        $('html,body').animate({scrollTop: $('.produtos').offset().top - 40}, 1000);
    });
    $("#mobileDemo_planos").click(function () {
        $('html,body').animate({scrollTop: $('.planos').offset().top - 50}, 1000);
    });
    
    $("#mobileDemo_faleConosco").click(function () {
        $('html,body').animate({scrollTop: $('.fale-conosco').offset().top - 50}, 1000);
    });

    /* componentes do Menu rodape */
    $("#link_rodape_prod").click(function () {
        $('html,body').animate({scrollTop: $('.produtos').offset().top - 10}, 1000);
    });
    $("#link_rodape_planos").click(function () {
        $('html,body').animate({scrollTop: $('.planos').offset().top - 50}, 1000);
    });
    $("#link_rodape_corretor").click(function () {
        $('html,body').animate({scrollTop: $('.sobre-o-corretor').offset().top - 50}, 1000);
    });
    $("#link_rodape_faleConosco").click(function () {
        $('html,body').animate({scrollTop: $('.fale-conosco').offset().top - 50}, 1000);
    });

    /* É feito a chamada do metodo 'preventDefault()' que desabilita a ação do link */
    $("#nav-mobile > li > a").click(function (e) {
        e.preventDefault();
    });

    /* Configucao slider */
    $('.slider').slider({
        full_width: true,
        indicators: false,
        transition: 2000,
        interval: 4000
    });

    /* Configura a visualização das sessões por demanda */
    var options = [
        {selector: '.nossaHistoria', offset: 40, callback: 'Materialize.fadeInImage(".nossaHistoria")'},       
        {selector: '.fale-conosco', offset: 40, callback: 'Materialize.fadeInImage(".fale-conosco")'},
        {selector: '.rodape', offset: 40, callback: 'Materialize.fadeInImage(".rodape")'}
    ];
    Materialize.scrollFire(options);

    $(document).ready(function () {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });


    /* Configuração do formulario_orcamento.html */
    $('.select_formulario').material_select();

});

