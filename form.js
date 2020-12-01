class Form{
    constructor(){
       
        this.text=createButton('type')
        this.scan=createButton('scan')
       // this.greeting=createElement('h2')
       this.title=createElement('h2')
        //this.standard=createInput("Standard")
       // this.age=createInput("Age")
       // this.mno=createInput("Mobile Number")
       // this.reset=createButton('next')
        // gamestate 4 buttons
      
    }
    hide(){
        this.button.hide()
        this.name.hide()
        this.scan.hide()
        //this.greeting.hide()
        this.title.hide()
        //this.age.hide()
       // this.nur.hide()
        //.sen.hide()
       // this.jun.hide()
        //this.mno.hide()
       // this.standard.hide()
    }
    display(){
       // var title=createElement('h2')
this.title.html("book recommendation and ratings")
this.title.position(displayWidth/2-50,0)
this.scan.position(displayWidth/2-40,displayHeight/2)
this.text.position(displayWidth/2+40,displayHeight/2)
//this.input.position(displayWidth/2-40,displayHeight/2-80)
//this.standard.position(displayWidth/2-40,displayHeight/2-60)
//this.age.position(displayWidth/2-40,displayHeight/2-40)
//this.mno.position(displayHeight/2-40,displayHeight/2-20)
//this.button.position(displayWidth/2+30,displayHeight/2)

//this.reset.position(displayWidth-100,20)
this.text.mousePressed(()=>{
    this.text.hide()
    this.scan.hide()
    this.title.hide()
    this.name=createInput("Book Name")
    this.button=createInput("author")
    this.con=createButton("continue")
    this.name.position(displayWidth/2,displayHeight/2-50)
    this.button.position(displayWidth/2,displayHeight/2+50)
    this.continue.position(displayWidth/2,displayHeight/2+100)
   // gamestate(1)

    //this.standard.hide()
    //this.mno.hide()
   // this.age.hide()
   // player.name=this.input.value()
    //player.standard=this.standard.value()
    //player.mno=this.mno.value()
    //player.age=this.age.value()
   // playercount+=1
    //player.index=playercount
    //player.update()
    //player.updateCount(playercount)
      // this.nb=createButton('Next')
      // this.nb.mousePressed(()=>{
        //this.nur=createButton('Nursery')
      // this.sen=createButton('Senior K.G.')
       // this.jun=createButton('Junior K.G.')
//this.nur.position(displayWidth/2-50,displayHeight/2-10)
//this.sen.position(displayWidth/2,displayHeight/2+10)
//this.jun.position(displayWidth/2+50,displayHeight/2-10)


/*this.nur.mousePressed(()=>{
    gamestate=5;
    this.jun.hide()
    this.sen.hide()
   
    but.display()
    console.log("nursery clicked")

})


this.sen.mousePressed(()=>{
    gamestate=5;
    this.jun.hide()
    this.sen.hide()
   this.nur.hide()
    but.display()
    console.log("senior clicked")

})

this.jun.mousePressed(()=>{
    gamestate=5;
    this.jun.hide()
    this.sen.hide()
   this.nur.hide()
    but.display()
    console.log("junior clicked")

})

//}) */

   
})






/*
this.scan.mousePressed(()=>{
    scanToJpg()
    textSize(30)
    fill("blue")
    text("scan the front book of the image which has the bookName and the Author name",displayWidth/2,displayHeight/2-80)
    
})*/
//}
/*next(){
    
        this.greeting.html("hello"+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)
    //need to add animations for the welcome .
    //})
    this.nb.mousePressed(()=>{
        //player.updateCount(0)
     //game.update(3)
       gamestate=3
})
}*/
//displayButtons(){
    //this.nur.position(displayWidth/2-50,displayHeight/2-10)
    //this.sen.position(displayWidth/2,displayHeight/2+10)
    //this.jun.position(displayWidth/2+50,displayHeight/2-10)
//}
//nursery()//{
    
    /**/
}


}
