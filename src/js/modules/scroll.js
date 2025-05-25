export default function scroll() {
  $(function () {
    console.log("ready!");
    $("h2").css("color", "blue");
      $(window).scroll(function () {
        $(".slideanim").each(function () {
          // для кожного блоку с класом slideanim
          let pos = $(this).offset().top; // координата по у
          if (pos < $(window).scrollTop() + 400) {
            //якщо до верху сторінки залишається 400px,
            $(this).addClass("slide"); //додаємо до блоку класс slide с анімацією
          }
        });
      });
  });
}
