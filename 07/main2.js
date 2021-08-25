$(document).ready(function(){
    
    $('.search-icon').on('click', () => {
        $('.search-input').toggleClass('active');
        
    });
    
    $('.menu-icon').on('click', () => {
        $('.panel').toggleClass('show-menu');
        $('.menu').toggleClass('active');
    });



});