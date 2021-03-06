// Store buttons to register click events
let submitButton = document.querySelector('#submit-btn');
let retake = document.querySelector('#retake');

// Selectors
let userName = document.querySelector('#name');
let userPhoto = document.querySelector('#photo');
let selectNodes = document.querySelectorAll('.chosen-select');
let questionList = document.querySelectorAll('.question');
let compatHeader = document.querySelector('#compat-header');
let compatImg = document.querySelector('#compat-img');
let userHeader = document.querySelector('#user-header');

//flag to ensure the correct fields have been filled out
let chosen;
 
//remove the red if the user selects a new option
for (let node in selectNodes) {
    if (selectNodes[node].nodeName === 'SELECT' || selectNodes[node].nodeName === 'INPUT') {
        selectNodes[node].addEventListener("click", function () {
            if (this.style.backgroundColor === 'red') {
                this.style.backgroundColor = 'white';
            }
        });
    }


}

// event handler for clicking submit button
submitButton.onclick = function () {
    event.preventDefault();

    // chosen flag only true if all selected. Background of element becomes red if it is not selected
    for (let i = 0; i < selectNodes.length; i++) {
        if (selectNodes[i].value === '' || selectNodes[i].value === 'select') {
            selectNodes.forEach((element) => {
                if (element.value === '' || element.value === 'select') {
                    element.style.backgroundColor = 'red'
                }
            })
            userHeader.textContent = 'Incomplete Data'
            compatImg.src = './images/placeholder.png';
            compatHeader.textContent = '';
            chosen = false;
            break;
        } else {
            chosen = true;
        } 
    }

    // if the flag is truthy,  all the fields are full and post req can go through
    if (chosen) {
        // array to store results and push all the values into an array
        let scoresArray = []
        questionList.forEach((score) => {
            scoresArray.push(score.value)
        });

        //store the value of the current user in an object
        let currentUser = {
            name: userName.value.trim(),
            photo: userPhoto.value.trim(),
            scores: scoresArray
        };
 
        //post request to route where function finds the best match
        $.post("/api/compat", currentUser)
            .done(function (data) {   
                userHeader.textContent = `${userName.value}'s best match...`
                compatImg.src = data.photo;
                compatHeader.textContent = data.name;

            }); 
 
    }

    // reset the values if the user has inputted all the data. If not modal takes back to selection screen using 'data-dismiss' on retake button
    retake.onclick = function () {
        selectNodes.forEach((element) => {
            if (chosen) {
                element.style.backgroundColor = 'white'
                if (element.nodeName === 'INPUT') {
                    element.value = '';
                } else if (element.nodeName === 'SELECT') {
                    element.value = 'select';
                }
                userHeader.textContent = ''
                compatImg.src = '';
                compatHeader.textContent = '';

            }  
        });

    } 
  
}
