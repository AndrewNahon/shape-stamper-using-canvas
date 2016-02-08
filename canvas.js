$(function() {
  var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");

  $("a.drawing_method").on("click", function(e) {
    e.preventDefault();
    var $target = $(e.target);
    $(".active").removeClass("active");
    $target.addClass("active");
    });

  $("canvas").on("click", function(e) {
    var x = e.offsetX,
        y = e.offsetY,
        l = 30,
        shape = $(".active").attr("id");

        ctx.fillStyle = $("input").val();

    if (shape === "square") {
      drawSquare(x, y, l, l);
    } else if (shape === "circle") {
      drawCircle(x, y, l / 2);
    } else
    drawTriangle(x, y, l);
  });

  $("#clear").on("click", function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });


  function drawSquare(x, y, l) {
    ctx.fillRect(x - l / 2, y - l / 2, l, l)
  }

  function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawTriangle(x, y, l) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 102, 204, .7)";
    ctx.moveTo(x, y - l / 2);
    ctx.lineTo(x + l / 2, y);
    ctx.lineTo(x - l / 2, y);
    ctx.lineTo(x, y - l / 2);
    ctx.fill();
  }
})



