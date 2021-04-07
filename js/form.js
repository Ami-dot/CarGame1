class Form{
constructor(){

}
display(){
    var title = createElement("h2")
    title.html("Car Racing Game")
    title.position(130,0)
    var imput = createInput("name")
    var button = createButton("play")
    var greeting = createElement("h3")
    button.mousePressed(function(){
        imput.hide()
        button.hide()
        var name = imput.value()
        playerCount = playerCount+1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("hello "+name)
        greeting.position(130,160)
    })
}
}