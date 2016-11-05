var main = function () {
  "use strict";

  $(".comment-input button").on("click", function (event){
    // $("<p>") is actually an object, not just a literal char String
    // using a '$' denotes that the variable is a jQuery object
    var $new_comment;

    // checks for empty input before adding a new <p>
    if ($(".comment-input input") !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val()) ;
      // add HTML piece to the page
      $(".comments").append($new_comment);
      // clear out input box
      $(".comment-input input").val("");
    }
  });
};

$(document).ready(main);

//
// var main = function() {
//   "use strict";
//
//   window.alert("Hello World!");
// };
//
// $(document).ready(main);
