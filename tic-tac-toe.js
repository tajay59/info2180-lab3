
 window.onload = (event) => {
    console.log('DOM fully loaded and parsed');
    nextplay = false;                                                   // Used to keep track of whether to play 'X' or 'O' next
    const status = document.querySelector("#status");
    boardplays  = new Array(9);                                         // Array used to store each play
    const board = document.querySelectorAll('#board > div');  
    board.forEach((item,index ) => {item.classList.add("square");});    // Add .square class to each child div of #board

    board.forEach((item,index ) => { 
        item.addEventListener("click",()=> {
            let play = (nextplay == false)?  "X" : "O"                   // Toggle between 'X' and 'O' for each play
            item.classList.add(play);                                    // Add appropriate styling to each 'X' or 'O' play based on class in css file
            boardplays[index] = play;                                    // Update array with current play 
            nextplay = !nextplay;                                        // Toggle next play
            item.innerHTML = play;                                       // Print cuurent play to clicked square  
            const winner =  WhoWon(boardplays); 
            if(winner) {
                status.classList.add("you-won");
                status.innerHTML = `Congratulations! ${winner} is the Winner!`;
            }
            console.log(winner);
            });
        
        item.addEventListener("mouseover",()=> { 
            item.classList.add("hover");                                 // Add appropriate styling to each square on mouseover   
            } );     
 
        item.addEventListener("mouseout",()=> { 
            item.classList.remove("hover");                               // Add appropriate styling to each square on mouseout   
            } ); 
        
        });
};



 WhoWon = (squares)=> {
    const lines = Array([0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8], [0, 4, 8], [2, 4, 6]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
 
 
