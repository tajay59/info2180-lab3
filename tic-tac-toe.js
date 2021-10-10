 
 window.onload = (event) => {
    console.log('DOM fully loaded and parsed');
    const board = document.querySelectorAll('#board > div');  
    board.forEach(item => item.classList.add("square"));
};
 
 
 
 