var diastotales=prompt("ingrese dias totales")
var annios=Math.floor(diastotales/365)
var diasrestantes=diastotales-annios*365
var semanas=Math.floor(diasrestantes/7)
var dias=diasrestantes-semanas*7

document.write("Los annios son: ");
document.write(Math.floor(diastotales/365));
document.write(" ");
document.write("Las semanas son: ");
document.write(Math.floor(diasrestantes/7));
document.write(" ");
document.write("Los dias son: ");
document.write(parseInt(dias));
document.write(" ");