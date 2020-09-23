class Cloud {
  constructor(_cloudx, _cloudy, _size) { 
    this.cloudx = _cloudx;
    this.cloudy = _cloudy;
    this.size = _size;
}
  
  display() {
  fill(250)
  noStroke();
  ellipse(this.cloudx, this.cloudy, 70,50);
  ellipse(this.cloudx +10,  this.cloudy + 10,70,50);
  ellipse(this.cloudx - 20, this.cloudy +10,70,50);     
}
   
  move(){ 
   if(this.cloudx <= width){ 
      this.cloudx += 0.2;
   } else {
      this.cloudx = 0;
   }
  }
}