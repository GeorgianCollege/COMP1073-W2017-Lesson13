// IIFE - Immediately Invoked Function Expression
(function () {

  // Function Level Variables
  let canvas: HTMLElement;
  let stage: createjs.Stage;

  let helloLabel: objects.Label;
  let goodByeLabel: objects.Label;

  let clickMeButton: objects.Button;

  /**
   * This method initializes the createjs Stage object and
   * starts the Game Loop
   *
   * @method Start
   * @returns void
   */
  function Start(): void {
    // gets a reference ("hook") into the canvas element
    canvas = document.getElementById("canvas");
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
  function Update(event: createjs.Event): void {

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
  function Main(): void {
    console.log("App Started!!");

    // all objects added to the stage appear in "layer order"

    // add a helloLabel to the stage
    helloLabel = new objects.Label("Hello, World", "20px", "Consolas", "#000000", 125, 125, true);
    stage.addChild(helloLabel);

    // add a goodbyeLabel to the stage
    goodByeLabel = new objects.Label("Good Bye!", "24px", "Arial", "#FF0000", 125, 125, true);
    stage.addChild(goodByeLabel);

    // add a clickMeButton to the stage
    clickMeButton = new objects.Button("../../Assets/images/clickMeButton.png", true, 150, 40, 125, 200);
    stage.addChild(clickMeButton);

    // click button event listener
    clickMeButton.on("click", function (event: createjs.MouseEvent) { // event handler
      helloLabel.text = "Hi Ya!";
      goodByeLabel.text = "See Ya!";
    });
  }

  window.onload = Start;

})();
