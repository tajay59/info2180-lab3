
 window.onload = (event) => {
    console.log('DOM fully loaded and parsed');
    nextplay = false;                                                   // Used to keep track of whether to play 'X' or 'O' next

    boardplays = new Array(9);                                          // Array used to store each play
    const board = document.querySelectorAll('#board > div');  
    board.forEach((item,index ) => {item.classList.add("square");});    // Add .square class to each child div of #board

    board.forEach((item,index ) => { 
        item.addEventListener("click",()=> {
            let play = (nextplay == false)?  "X" : "O"                   // Toggle between 'X' and 'O' for each play
            item.classList.add(play);                                    // Add appropriate styling to each 'X' or 'O' play based on class in css file
            boardplays[index] = play;                                    // Update array with current play 
            nextplay = !nextplay;                                        // Toggle next play
            item.innerHTML = play;                                       // Print cuurent play to clicked square    
            });
        
        item.addEventListener("mouseover",()=> { 
            item.classList.add("hover");                                 // Add appropriate styling to each square on mouseover   
            } );     
 
        item.addEventListener("mouseout",()=> { 
            item.classList.remove("hover");                               // Add appropriate styling to each square on mouseout   
            } ); 
        
        });
};


 
 
