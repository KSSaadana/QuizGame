class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Enter your answer here");
      this.button = createButton('Play');
     
      this.submit = createButton("Submit");
    }
    hide(){
      
      this.button.hide();
      this.input1.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
  
     this.question.html("Question:- David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?")
     this.question.position(150,80);
     this.option1.html("1: Tap ");
     this.option1.position(150,100);
     this.option2.html("2: Rattle");
     this.option2.position(150,120);
     this.option3.html("3: David ");
     this.option3.position(150,140);
     this.option4.html("4: Snap");
     this.option4.position(150,160);

     this.input1.position(150,230);
     
     this.button.mousePressed(()=>{
       this.title.hide();
      this.input1.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  
    }

    
  }
  