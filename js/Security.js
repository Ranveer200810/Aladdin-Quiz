class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code2")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        //add code for creating and positioning the third input box and button
        this.access3 = createInput("Code3");
        this.access3.position(227, 332); 
        this.access3.style('background', 'white');
        
        this.button3 = createButton('Check');
        this.button3.position(227, 362);
        this.button3.style('background', 'lightgrey');
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(this.access1.value() === accessCode1){
                this.button1.hide();
                this.access1.hide();
                score++;

                right = createSprite(188, 124, 10, 10);
                right.addImage("1", rightImg);
                right.scale = 0.3;
                right.lifetime = 50;

                rightSound.play();

            }else if (this.access1.value() !== accessCode1) {
                wrong = createSprite(320, 105, 10, 10);
                wrong.addImage("2", wrongImg);
                wrong.scale = 0.3;
                wrong.lifetime = 20;

                wrongSound.play();
            }
        });

        this.button2.mousePressed(() => {
            if(this.access2.value() === accessCode2){
                this.button2.hide();
                this.access2.hide();
                score++;
                
                right = createSprite(788, 224, 10, 10);
                right.addImage("1", rightImg);
                right.scale = 0.3;
                right.lifetime = 50;

                rightSound.play();

            }else if (this.access2.value() !== accessCode2) {
                wrong = createSprite(920, 205, 10, 10);
                wrong.addImage("2", wrongImg);
                wrong.scale = 0.3;
                wrong.lifetime = 20;

                wrongSound.play();
            }
        });
        
        //add code for what happens when the third button is pressed
        this.button3.mousePressed(() => {
            if (this.access3.value() === accessCode3) {
                this.button3.hide();
                this.access3.hide();
                score++;
                
                right = createSprite(315, 376, 10, 10);
                right.addImage("1", rightImg);
                right.scale = 0.3;
                right.lifetime = 50;

                rightSound.play();

            }else if (this.access3.value() !== accessCode3) {
                wrong = createSprite(447, 350, 10, 10);
                wrong.addImage("2", wrongImg);
                wrong.scale = 0.3;
                wrong.lifetime = 20;

                wrongSound.play();
            }
        })

    }
}