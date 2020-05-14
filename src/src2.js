
let currentDroppable = null;
let droppableBelow = null;


/*TODO: MAKE  a universal function that does this based off the variable 
**BUG:On first mouse down The arrow must first move before mouse up happens 
** As long as this is done first time there is no bug after that. 
*/
var inputs = null;
inputs = document.getElementsByTagName("img");
//console.log(inputs.name);



/* 5 dollar chip */


  chip2.onmousedown = function(event) { // (1) start the process
  
    // Can place in moveAt()
    let shiftX = event.clientX - chip2.getBoundingClientRect().left;
    let shiftY = event.clientY - chip2.getBoundingClientRect().top;
      // (2) prepare to moving: make absolute and on top by z-index
     
      chip2.style.position = 'absolute';
      chip2.style.zIndex = 1000;
      // move it out of any current parents directly into body
      // to make it positioned relative to the body
      document.body.append(chip2);
      //document.getElementsByClassName('red').style.backgroundColor = "purple";
      // ...and put that absolutely positioned ball under the pointer
      // centers the ball at (pageX, pageY) coordinates
      function moveAt(pageX, pageY) {
        chip2.style.left = pageX - chip2.offsetWidth / 2 + 'px';
        chip2.style.top = pageY - chip2.offsetHeight / 2 + 'px';
        // Shrink for handle usages
        chip2.style.height = '20px';
        chip2.style.width = '20px';
  /* TODO: if user presses esc while moving reset it */
  
      }
      moveAt(event.pageX, event.pageY);
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        chip2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        chip2.hidden = false;
  
        if (!elemBelow) return;
  
         droppableBelow = elemBelow.closest('.droppable');
        
  
  
      }
      
    
      
     
    
      // (3) move the ball on mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // (4) drop the ball, remove unneeded handlers
      chip2.onmouseup = function() {
// VAlue of the chip entering the dropable area
        var chp2=document.getElementById('chip2').getAttribute('value');
//console.log(product+'hi');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable,chp2);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
        document.removeEventListener('mousemove', onMouseMove);
        chip2.onmouseup = null;
         //document.getElementsByClassName('.red').style.backgroundColor = "purple";
      };
    
    };



/* 10 dollar chip */


chip3.onmousedown = function(event) { // (1) start the process
  
    // Can place in moveAt()
    let shiftX = event.clientX - chip3.getBoundingClientRect().left;
    let shiftY = event.clientY - chip3.getBoundingClientRect().top;
      // (2) prepare to moving: make absolute and on top by z-index
     
      chip3.style.position = 'absolute';
      chip3.style.zIndex = 1000;
      // move it out of any current parents directly into body
      // to make it positioned relative to the body
      document.body.append(chip3);
      //document.getElementsByClassName('red').style.backgroundColor = "purple";
      // ...and put that absolutely positioned ball under the pointer
      // centers the ball at (pageX, pageY) coordinates
      function moveAt(pageX, pageY) {
        chip3.style.left = pageX - chip3.offsetWidth / 2 + 'px';
        chip3.style.top = pageY - chip3.offsetHeight / 2 + 'px';
        // Shrink for handle usages
        chip3.style.height = '20px';
        chip3.style.width = '20px';
  /* TODO: if user presses esc while moving reset it */
  
      }
      moveAt(event.pageX, event.pageY);
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        chip3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        chip3.hidden = false;
  
        if (!elemBelow) return;
  
         droppableBelow = elemBelow.closest('.droppable');
        
  
  
      }
      
    
      
     
    
      // (3) move the ball on mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // (4) drop the ball, remove unneeded handlers
      chip3.onmouseup = function() {
// VAlue of the chip entering the dropable area
        var chp2=document.getElementById('chip3').getAttribute('value');
//console.log(product+'hi');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable,chp2);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
        document.removeEventListener('mousemove', onMouseMove);
        chip3.onmouseup = null;
         //document.getElementsByClassName('.red').style.backgroundColor = "purple";
      };
    
    };



    /* 20 dollar chip */


chip4.onmousedown = function(event) { // (1) start the process
  
  // Can place in moveAt()
  let shiftX = event.clientX - chip4.getBoundingClientRect().left;
  let shiftY = event.clientY - chip4.getBoundingClientRect().top;
    // (2) prepare to moving: make absolute and on top by z-index
   
    chip4.style.position = 'absolute';
    chip4.style.zIndex = 1000;
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(chip4);
    //document.getElementsByClassName('red').style.backgroundColor = "purple";
    // ...and put that absolutely positioned ball under the pointer
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      chip4.style.left = pageX - chip4.offsetWidth / 2 + 'px';
      chip4.style.top = pageY - chip4.offsetHeight / 2 + 'px';
      // Shrink for handle usages
      chip4.style.height = '20px';
      chip4.style.width = '20px';
/* TODO: if user presses esc while moving reset it */

    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
      chip4.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      chip4.hidden = false;

      if (!elemBelow) return;

       droppableBelow = elemBelow.closest('.droppable');
      


    }
    
  
    
   
  
    // (3) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) drop the ball, remove unneeded handlers
    chip4.onmouseup = function() {
// VAlue of the chip entering the dropable area
      var chp2=document.getElementById('chip4').getAttribute('value');
//console.log(product+'hi');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { // null when we were not over a droppable before this event
          leaveDroppable(currentDroppable,chp2);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // null if we're not coming over a droppable now
          // (maybe just left the droppable)
          enterDroppable(currentDroppable);
        }
      }
      document.removeEventListener('mousemove', onMouseMove);
      chip4.onmouseup = null;
       //document.getElementsByClassName('.red').style.backgroundColor = "purple";
    };
  
  };



  function enterDroppable(elem) {
    elem.style.background = 'pink';
  }

  function leaveDroppable(elem,val) {

  // ToDO: minus the val from the player stack
    console.log('yowie'+val+'yodal');


    elem.style.background = 'purple';
  }
// 5 dollar
  chip2.ondragstart = function() {
    return false;
  };
  // 10 dollar
  chip3.ondragstart = function() {
    return false;
  };
  // 20 dollar
  chip4.ondragstart = function() {
    return false;
  };
  //50 dollar
  chip5.ondragstart = function() {
    return false;
  };
  // 100 dollar
  chip6.ondragstart = function() {
    return false;
  };
  

  /* 1 dollar chip */
  
function oneclick(e){
  //var ff=e.value();
  var f = e.getAttribute("value");
  console.log(f);
  console.log("hi");



ball.onmousedown = function(event) { // (1) start the process
  
  // Can place in moveAt()
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;
    // (2) prepare to moving: make absolute and on top by z-index
   
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
    //document.getElementsByClassName('red').style.backgroundColor = "purple";
    // ...and put that absolutely positioned ball under the pointer
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
      // Shrink for handle usages
      ball.style.height = '20px';
      ball.style.width = '20px';
/* TODO: if user presses esc while moving reset it */

    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
      ball.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;

      if (!elemBelow) return;

       droppableBelow = elemBelow.closest('.droppable');
      


    }
    
  
    
   
  
    // (3) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { // null when we were not over a droppable before this event
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // null if we're not coming over a droppable now
          // (maybe just left the droppable)
          enterDroppable(currentDroppable);
        }
      }
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
       //document.getElementsByClassName('.red').style.backgroundColor = "purple";
    };
  
  };
  ball.ondragstart = function() {
    return false;
  };
  }

