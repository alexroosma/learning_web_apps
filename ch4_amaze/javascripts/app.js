var main = function() {
  "use strict";

  $(".tabs a:nth-child(1)").on("click", function () {
    activateTab(1);
    return false;   // so we don't follow the link
  });

  $(".tabs a:nth-child(2)").on("click", function () {
    activateTab(2);
    return false;
  });

  $(".tabs a:nth-child(3)").on("click", function () {
    activateTab(3);
    return false;
  });
};

var activateTab = function(number) {
  // make all of the tabs inactive
  $(".tabs span").removeClass("active");

  // make the applicalbe tab active
  $(".tabs a:nth-child("+number+") span").addClass("active");

  // empty the main content so it can be re-created
  $("main .content").empty();
};

$(document).ready(main);
