// IIFE - Immediately Invoked Function Expression
(function () {
    // Function Level Variables
    var canvas;
    var canvasWidth;
    var canvasHeight;
    var canvasHalfWidth;
    var canvasHalfHeight;
    var stage;
    var helloLabel;
    var goodByeLabel;
    var clickMeButton;
    var appStarted;
    /**
     * This method initializes the createjs Stage object and
     * starts the Game Loop
     *
     * @method Start
     * @returns void
     */
    function Start() {
        appStarted = false; // app hasn't started yet
        // gets a reference ("hook") into the canvas element
        canvas = document.getElementById("canvas");
        OnResize(); // sets the size of the canvas
        // creates a new stage container - parent container for our app
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // set framerate to 60 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        stage.enableMouseOver(20); // enables our mouseover and mouseout events
        Main(); // call the main function
    }
    /**
     * the main app ("Game") loop - gets called every frame (approx every 16 ms)
     *
     * @method Update
     * @returns void
     */
    function Update(event) {
        helloLabel.rotation -= 5; // rotate counter clockwise every frame
        goodByeLabel.rotation += 5;
        stage.update(); // redraw the stage
    }
    /**
     * This method is where all the fun happens - we add child objects to the stage here
     *
     * @method Main
     * @returns void
     */
    function Main() {
        appStarted = true;
        // all objects added to the stage appear in "layer order"
        // add a helloLabel to the stage
        helloLabel = new objects.Label("Hello, World", "20px", "Consolas", "#000000", canvasHalfWidth, canvasHalfHeight, true);
        stage.addChild(helloLabel);
        // add a goodbyeLabel to the stage
        goodByeLabel = new objects.Label("Good Bye!", "24px", "Arial", "#FF0000", canvasHalfWidth, canvasHalfHeight, true);
        stage.addChild(goodByeLabel);
        // add a clickMeButton to the stage
        clickMeButton = new objects.Button("../../Assets/images/clickMeButton.png", true, 150, 40, canvasHalfWidth, canvasHalfHeight + 100);
        stage.addChild(clickMeButton);
        // click button event listener
        clickMeButton.on("click", function (event) {
            helloLabel.text = "Hi Ya!";
            goodByeLabel.text = "See Ya!";
        });
    }
    function OnResize() {
        canvasWidth = window.innerWidth * 0.64;
        canvasHeight = window.innerHeight * 0.96;
        canvasHalfWidth = canvasWidth * 0.5;
        canvasHalfHeight = canvasHeight * 0.5;
        canvas.setAttribute("width", canvasWidth.toString());
        canvas.setAttribute("height", canvasHeight.toString());
        // check if app started then re-align the labels and buttons
        if (appStarted) {
            helloLabel.x = canvasHalfWidth;
            helloLabel.y = canvasHalfHeight;
            goodByeLabel.x = canvasHalfWidth;
            goodByeLabel.y = canvasHalfHeight;
            clickMeButton.x = canvasHalfWidth;
            clickMeButton.y = canvasHalfHeight + 100;
        }
    }
    window.onload = Start;
    window.onresize = OnResize;
})();
//# sourceMappingURL=app.js.map