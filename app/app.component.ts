import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';

  drawRectable1() {
 
var c = document.getElementById("stage1");
var ctx = c.getContext("2d");
 
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop("0.3", "magenta");
grd.addColorStop("0.5", "blue");
grd.addColorStop("0.6", "green");
grd.addColorStop("0.8", "yellow");
grd.addColorStop(1, "red");
 
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

  }
    drawRectable2() {
 
var c = document.getElementById("stage2");
var ctx = c.getContext("2d");
 
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop("0.3", "magenta");
grd.addColorStop("0.5", "blue");
grd.addColorStop("0.6", "green");
grd.addColorStop("0.8", "yellow");
grd.addColorStop(1, "red");
 
ctx.fillStyle = grd;
ctx.fillRect(5, 5, 290, 500);




    }
    
    
    function drawClock() {
  var radius = canvas2.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.90

  ctx.arc(0, 0, radius, 0 , 2*Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}

  ngOnInit()  {
    //startGame();
    drawClock();
  }
}
