$("button").click(function () {
  $.getJSON("books.json", function (result) {
    $.each(result, function (i, field) {
      $("#books").append(i + " " + field.title + "<br>");
    });
  });
});
