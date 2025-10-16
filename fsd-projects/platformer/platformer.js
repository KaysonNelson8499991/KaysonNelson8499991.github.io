$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
    


    // TODO 2 - Create Platforms
     createPlatform(500,800,205,13);
createPlatform(665,467, 135,19);
createPlatform(667,295,300,20);
createPlatform(498,650,290,15);
createPlatform(400,380,199,18);
createPlatform(900,560,200,20);


    // TODO 3 - Create Collectables
createCollectable("max", 800,270);
createCollectable("diamond", 500,340);
createCollectable("steve",730,450);


    
    // TODO 4 - Create Cannons
createCannon("right", 200,1007);
createCannon("bottom" , 600, 1005);
createCannon("top", 300, 1205);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
