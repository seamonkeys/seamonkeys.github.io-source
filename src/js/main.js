$(document).ready(function() {

  // fancybox
  /* This is basic - uses default settings */
  $("a.fb").fancybox();
  $("a#single_image").fancybox();
  $("a#inline").fancybox({
    'zoomSpeedIn':    300,
    'zoomSpeedOut':   300,
    'hideOnContentClick': true
  });
  /* Using custom settings */
  $("a.group").fancybox({
    'zoomSpeedIn':    300,
    'zoomSpeedOut':   300,
    'overlayShow':    true
  });
  $("a.iframe").fancybox({
    'width': '75%',
    'height': '75%',
    'autoScale': true,
    'transitionIn': 'fade',
    'transitionOut': 'fade',
    'type': 'iframe',
    'hideOnContentClick': false
  });

  /* generic toggle for next element */
  $(".toggle").click(function () {
    $(this).parent().next('div.toggle-content').slideToggle();
    $(this).hide();
  });
  $(".togglenormal").click(function () {
    $(this).parent().next('div.toggle-content').slideToggle();
  });

  // generic select content
  $("textarea.selectall").click(function() {
   $(this).select();
  });

  $('ul#filter a').click(function() {
    $(this).css('outline','none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');

    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    if(filterVal === 'all') {
      $('#filterlist .frow.hidden').removeClass('hidden');
    } else {
      $('#filterlist .frow').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });
    }
    return false;
  });


});

