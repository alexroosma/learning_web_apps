var main = function () {
  "use strict";

  $(".comment-input button").on("click", function (event){
    $(".comments").append("<p>this is a new comment</p>");
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
