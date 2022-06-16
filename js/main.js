// Create a scope to limit variables

{
    // Set the navbar to dark by replacing the word light with dark in className
    // let body = document.body;
    // let children = body.children;
    // console.log(children);
    // let navBar = children[0];
    // let navBar = document.getElementsByTagName('nav')[0];
    let navBar = document.querySelector('nav');
    navBar.className = navBar.className.replaceAll('light', 'dark');

    // Set the buttons to be bootstrap style colors
    let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    let myButtons = document.querySelectorAll('.col-2 > button');
    
    // Loop through buttons and apply button color to class name
    for (let i = 0; i < myButtons.length; i++){
        myButtons[i].className = `btn btn-${buttonColors[i]}`
    }

    // Add a header under the buttons in the container
    // First create the header
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader';
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by Brian with the help of JavaScript';
    newHeader.style.color = 'black';


    // Get the row of buttons
    let buttonRow = document.getElementsByClassName('row')[0];
    // Add the new header AFTER the row of buttons (as opposed to being appended as the last child of the row)
    buttonRow.after(newHeader);

}

// Create a new scope

{
    // Get the header
    let myHeader = document.getElementById('myHeader');
    console.log(myHeader);

    // Create a function to be executed when the event is triggered
    function handleHeaderEvent(e){
        // console.log(e)
        let elementToChange = e.target;
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'red';
        } else {
            elementToChange.style.color = 'black'
        }

    }

    // Add the handleHeaderEvent function to trigger when event happens to myHeader
    myHeader.addEventListener('click', handleHeaderEvent)
}

// Add event listeners for our buttons
{
    let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    let myButtons = document.querySelectorAll('.col-2 > button');

    for (let i = 0; i < myButtons.length; i++){
        let button = myButtons[i];
        button.addEventListener('click', () => {
            let body = document.body;
            body.className = `bg-${buttonColors[i]}`
        })
    }
}