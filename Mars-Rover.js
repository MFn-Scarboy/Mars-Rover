let rover = {
    direction: "North",
    x: 0,
    y: 0,
    travelLog: []
  };
  
  function turnRight(marsRover) {
    switch(marsRover.direction) {
      case "North":
        marsRover.direction = "East"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
      case "East":
        marsRover.direction = "South"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
      case "South":
        marsRover.direction = "West"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
      case "West":
        marsRover.direction = "North"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
    }
  }
  
  function turnLeft(marsRover) {
    switch(marsRover.direction) {
      case "North":
        marsRover.direction = "West"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
      case "West":
        marsRover.direction = "South"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
      case "South":
        marsRover.direction = "East"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
      case "East":
        marsRover.direction = "North"
        console.log(`Rover is now facing ${marsRover.direction}`);
        break;
    }
  }
  
  function moveForward(marsRover) {
    if(marsRover.x === 0 && marsRover.direction === "West") {
      console.log("Can't move Rover off the grid") 
    } else if(marsRover.x === 9 && marsRover.direction === "East") {
      console.log("Can't move Rover off the grid")
    } else if(marsRover.y === 0 && marsRover.direction === "North") {
      console.log("Can't move Rover off the grid")
    } else if(marsRover.y === 9 && marsRover.direction === "South") {
      console.log("Can't move Rover off the grid")
    } else {
      switch(marsRover.direction) {
        case "North":
          marsRover.y--;
          console.log("Rover moved forward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
        case "West":
          marsRover.x--;
          console.log("Rover moved forward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
        case "South":
          marsRover.y++;
          console.log("Rover moved forward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
        case "East":
        marsRover.x++;
          console.log("Rover moved forward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
      }
    }
    let newPosition = {x: marsRover.x, y: marsRover.y};
    marsRover.travelLog.push(newPosition);
  }
  
  function moveBackward(marsRover) {
    if(marsRover.x === 9 && marsRover.direction === "West") {
      console.log("Can't move Rover off the grid") 
    } else if(marsRover.x === 0 && marsRover.direction === "East") {
      console.log("Can't move Rover off the grid")
    } else if(marsRover.y === 9 && marsRover.direction === "North") {
      console.log("Can't move Rover off the grid")
    } else if(marsRover.y === 0 && marsRover.direction === "South") {
      console.log("Can't move Rover off the grid")
    } else {
      switch(marsRover.direction) {
        case "North":
          marsRover.y++;
          console.log("Rover moved backward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
        case "West":
          marsRover.x++;
          console.log("Rover moved backward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
        case "South":
          marsRover.y--;
          console.log("Rover moved backward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
        case "East":
        marsRover.x--;
          console.log("Rover moved backward");
          console.log(`Rover's coordinates are x:${marsRover.x} & y:${marsRover.y}`);
          break;
      }
    }
    let newPosition = {x: marsRover.x, y: marsRover.y};
    marsRover.travelLog.push(newPosition);
  }
      
  function command(marsRover, commands) {
    for(let i = 0; i < commands.length; i++) {
      let order = commands[i];
      if(order === "l") {
        turnLeft(marsRover);
      } else if(order === "r") {
        turnRight(marsRover);
      } else if(order === "f") {
        moveForward(marsRover);
      } else if(order === "b") {
        moveBackward(marsRover);
      } else {
        console.log("Not a valid command");
      }
    }
  }
  
  //command(rover, "rffrfflfrffbbffflfff");
  
  for(let i = 0; i < rover.travelLog.length; i++) {
      console.log(`Travel Log ${i+1} : x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
  }