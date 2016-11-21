var main = function() {
  "use strict";

  $(".tabs span").toArray().forEach(function (element) {
    // Given the element of the array, create a click handler for it
    // The elements are the <span>'s whose parents are <a>'s under the <div>
    $(element).on("click", function () {
      // the toArray funct return DOM elements, not jQuery objects
      // so we still need to wrap them

      // we'll be using the element jQuery object a few times, so we do the
      // conversion to an object vs DOM element up front
      var $element = $(element);

      $(".tabs span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      // now we determine which of the tabs was clicked on/this element
      // click event that got triggered
      if ($element.parent().is(":nth-child(1)")) {
        console.log("First Tab Clicked!!");
      } else if ($element.parent().is(":nth-child(2)")) {
        console.log("Second Tab Clicked!!");
      } else if ($element.parent().is(":nth-child(3)")) {
        console.log("Third Tab Clicked!!");
      }

      return false;
    });
  });
};

$(document).ready(main);
