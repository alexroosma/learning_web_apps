var main = function() {
  "use strict";

  var $content = $("<div>Some Content Here</div>").hide();
  var $moreContent = $("<div>More Stuff Here</div>");

  $("body").append($content);


  $content.slideDown(2000, function() {

      $("body").append($moreContent);

      $moreContent.fadeIn();    
  });

};

$(document).ready(main);
