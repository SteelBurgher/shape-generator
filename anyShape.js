/**
 * @author Brandon Ellis
 */
<canvas width="600" height="300"></canvas>
<script>
  var ctx = document.querySelector("canvas").getContext("2d");
  function anyShape(x,y, sides) {
    ctx.translate(x,y);
    ctx.beginPath();
    ctx.moveTo(0,0);
    for (var i = 0; i < 100; i++) {
      ctx.lineTo(10, 10);
      ctx.translate(10, 10);
      ctx.rotate(Math.PI/(sides/2));
    }
    ctx.stroke();
  }
  anyShape(100, 100, 16);
  // Your code here.
</script>