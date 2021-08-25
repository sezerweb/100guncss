$(document).ready(function(){
    
    $('.menu-icon').on('click', function() {
		$(this).toggleClass('active');
		$(this).find('div').removeClass('no-animation');
        $('.panel').toggleClass('show-menu');
        $('.menu').toggleClass('active');
	});

    $('.search-icon').on('click', () => {
        $('.search-input').toggleClass('active');
        $('.search-input').val('') ;
    });

});