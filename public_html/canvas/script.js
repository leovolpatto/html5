function desenharLinha() {
    var c = document.getElementById("canvas");
    
    c.width = screen.width;
    c.height = screen.height;
    
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function desenharCirculo() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function desenharTexto() {
    var c = document.getElementById("canvas");
    
    c.width = screen.width;
    c.height = screen.height;    
    
    var ctx = c.getContext("2d");
    ctx.font = "20px Arial";
    ctx.strokeText("Hello word, oops, world!", 10, 50);
}

function desenharGradienteLinear() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    //                                x0 y0   x1  y1
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "blue");

    ctx.fillStyle = grd;
    //          x    y   w    h
    ctx.fillRect(10, 10, 150, 80);
}

function desenharGradienteCircular() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
                                    //x0   y0 r0  x1  y1  r1
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "grey");
    grd.addColorStop(1, "black");

    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

