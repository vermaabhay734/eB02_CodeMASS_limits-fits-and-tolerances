
var canvas=document.querySelector('canvas');
canvas.width=500;
canvas.height=500;


var c=canvas.getContext('2d');
console.log('canvas');          
       
c.beginPath();
c.moveTo(50,200);
c.lineTo(300,200);
c.strokeStyle='rgb(255,255,255)';
c.stroke();

c.beginPath();
c.moveTo(50,250);
c.lineTo(300,250);
c.strokeStyle='rgb(0,0,0)';
c.stroke();

y=250;
let nominal=prompt("nominal_size",);
let uds=prompt("up_dev_shaft",);
let lds=prompt("low_dev_shaft",);
let tol=(lds+uds)*1000;
let y1=nominal+y-uds;
let udh=prompt('up_dev_hole',);
let ldh=prompt('low_dev_hole',);
let tolh=ldh+y-udh;

//var y2=y-lds;
c.fillStyle='rgb(0,153,0)';
c.fillRect(80,y1,60,tol);
//c.fillStyle='rgb(0,153,0)';
//c.fillRect(400,y2,80,nominal+lls)
c.fillStyle='rgb(0,0,153)';
c.fillRect(160,y2,60,tolh*1000);









