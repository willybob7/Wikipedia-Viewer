$(document).ready(function() {
  var url = "https://en.wikipedia.org/w/api.php";
  var val;
  $("#search").on("click", function search(input) {
    var a;
    var b="";
    $(".info").children().html("");
    input.preventDefault();
    val = $(".input").val();
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      data: {
        search: val,
        origin: "*",
        action: "opensearch"
      },
      error: function() {
        $(".one").html("your code sucks");
      },
      success: function(data) {
            for (var h=0; h <= 9; h++){
            a = "." + h.toString();
            b += "<a href=" + data[3][h] + ' target="_blank">';
            b += "<strong>" + data[1][h] + "</strong>";
            b += "<br><br><blockquote>" + data[2][h] + "</blockquote></a>";
            $(a).html(b);
            $(a).addClass("pop");
            b = "";
          }
        $("#blk").removeClass("block");
        $("#cntr").removeCLass("centered");
      }
    });
  });
});
