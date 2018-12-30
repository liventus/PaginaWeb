var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");

 function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(x_inicial, y_inicial);
   lienzo.lineTo(x_final, y_final);
   lienzo.stroke();
   lienzo.closePath();
 }

 function dibujarCuadrado(color, x_verticeOrigen, y_verticeOrigen, ladoCuadrado)
 {
       dibujarlinea( color , x_verticeOrigen, y_verticeOrigen, x_verticeOrigen, y_verticeOrigen + ladoCuadrado);
       dibujarlinea( color , x_verticeOrigen, y_verticeOrigen, x_verticeOrigen + ladoCuadrado, y_verticeOrigen);
       dibujarlinea( color , x_verticeOrigen + ladoCuadrado, y_verticeOrigen , x_verticeOrigen + ladoCuadrado, y_verticeOrigen + ladoCuadrado);
       dibujarlinea( color , x_verticeOrigen, y_verticeOrigen + ladoCuadrado, x_verticeOrigen + ladoCuadrado, y_verticeOrigen + ladoCuadrado);
 }

dibujarlinea("red",100,100,200,200);
dibujarCuadrado("blue",1,1,298);


var i = 0;
do {
  dibujarlinea("blue",1,i*10+10,i*10+10,300);
  dibujarlinea("red",i*10+10,1,300,i*10+10);  
  i++;
}
while (i < 30);
