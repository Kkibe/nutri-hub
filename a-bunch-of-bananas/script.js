$("ul li").each(function () {
  var alt = $(this).children("img").attr("alt");
  $(this).append(
    '<span class="top"><span class="title">水果</span>' + alt + "</span>"
  );
});