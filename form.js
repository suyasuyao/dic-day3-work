$(function () {
  $('a img').hover(function () {
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  }, function () {
    if (!$(this).hasClass('currentPage')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
});

$(function () {
  $('.toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

$(function () {
  $(".name-label label").hover(function () {
    $(this).next("span").animate({
      opacity: "show",
    }, "slow");
  }, function () {
    $(this).next("span").animate({
      opacity: "hide",
    }, "fast");
  });
});