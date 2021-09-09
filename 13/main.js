$(document).ready(function () {
  $(".detail_button").bind("click", function () {
    var character_name = $(this).parent().parent().attr("data-character-name");
    var character_img_id= $(this).parent().parent().attr("data-img-id");
    var new_img_src = "https://starwars-visualguide.com/assets/img/characters/"+character_img_id+".jpg" ;
    $(".detail_character img").attr("src",new_img_src);
    $(".character_name").html(character_name);
    $(".detail").addClass("active");
  });

  $(".close_detail").bind("click", function () {
    $(".detail").removeClass("active");
  });
});
