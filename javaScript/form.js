class Form{
    constructor(){
        this.input = createInput("Enter Name");
        this.button = createButton("Click To Play");
        this.greeting = createElement("h3");
        this.greeting1 = createElement("h2"); 
       
    }
 display(){
     var title = createElement("h2");
     title.html("Race Car Game");
     title.position(100,100);

     
     this.input.position(50,200);

     
     this.button.position(50,275);
     
    this.button.mousePressed(function(){
         this.input.hide();
         this.button.hide();
         
         player.name = this.input.value();

         playerCount = playerCount + 1;
         player.position = playerCount;
        player.update();
        player.updateCount(playerCount);
         this.greeting.html("Are You The Greatest Racer?");
         this.greeting1.html(name);
         this.greeting.position(200,150);
         this.greeting1.position(50,100);
     })
  }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.greeting1.hide();
        this.button.hide();
     }   
}