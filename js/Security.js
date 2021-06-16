class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  
        this.access1.style('width', '200px');  
        this.access1.style('height', '50px'); 
        this.access1.style('font-size', '40px');

        this.button1 = createButton('Check');
        this.button1.position(140,150);
        this.button1.style('background', 'lightgrey');    
        this.button1.style('width', '100px');   
        this.button1.style('height', '40px');   
        this.button1.style('font-size', '30px');   

        this.access2 = createInput("Code2")
        this.access2.position(1100,90);
        this.access2.style('background', 'white');  
        this.access2.style('width', '200px');  
        this.access2.style('height', '50px'); 
        this.access2.style('font-size', '40px');

        this.button2 = createButton('Check');
        this.button2.position(1140,150);
        this.button2.style('background', 'lightgrey');
        this.button2.style('width', '100px');   
        this.button2.style('height', '40px');   
        this.button2.style('font-size', '30px');

//add code for creating and positioning the third input box and button

        this.access3 = createInput("Code3")
        this.access3.position(750,550);
        this.access3.style('background', 'white');  
        this.access3.style('width', '200px');  
        this.access3.style('height', '50px'); 
        this.access3.style('font-size', '40px');

        this.button3 = createButton('Check');
        this.button3.position(790,610);
        this.button3.style('background', 'lightgrey');
        this.button3.style('width', '100px');   
        this.button3.style('height', '40px');   
        this.button3.style('font-size', '30px');
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }
  
}