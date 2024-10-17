// main.js

let visitors = [
    {month: "January", visitors: 100},
    {month: "February", visitors: 200},
    {month: "March", visitors: 300},
    {month: "April", visitors: 400},
    {month: "May", visitors: 500 },
    {month: "June", visitors: 600 }
];

console.log(visitors)

function generateTable() {
    
    
    let table = document.querySelector("#Table");
    
    
    for (let i = 0; i < visitors.length; i++) {
        
        let row = document.createElement("tr");

        //for the month

        let month = document.createElement("td");
        month.textContent = visitors[i].month; 
        row.appendChild(month);
        
        console.log(month)

        //for the visitors
       
        let visitor = document.createElement("td");
        visitor.textContent = visitors[i].visitors; 
        row.appendChild(visitor);
        console.log(visitor);

       
        table.appendChild(row);
        console.log(row);
    }
}

generateTable();


let cookieAlert = document.getElementById("cookieAlert");
 
let cookieButtonThing = document.getElementById("acceptCookies");


function acceptCookies() {
    cookieAlert.textContent = "Cooookies were accepted. Would you like to revoke?";
    cookieButtonThing.textContent = "Revoke Access";
}

// acceptCookies();

function revokeCookies() {
    cookieAlert.textContent = "This website uses cookies to store your data, of course.";
    cookieButtonThing.textContent = "Accept Cookies";
}

// revokeCookies();

cookieButtonThing.addEventListener("click", function() {
    if (cookieButtonThing.textContent == "Accept Cookies") {
        acceptCookies();
    } else {
        revokeCookies();
    }
});



let toggleButton = document.getElementById("toggleButton");
console.log(toggleButton)

toggleButton.textContent = "High Contrast"; 

toggleButton.addEventListener("click", function(){
    document.body.classList.toggle("highContrast");


if (document.body.classList.contains("highContrast")) {
    toggleButton.textContent = "Low Contrast";
} else {
    toggleButton.textContent = "High Contrast";
};
});


document.addEventListener("keydown", function(event) {
    
    if ((event.ctrlKey || event.metaKey) && event.key == 'a') {
       
        console.log("Command + A pressed to check as I am using Mac");
       
        document.body.classList.toggle("highContrast");
        
        event.preventDefault();


        if (document.body.classList.contains("highContrast")) {
            toggleButton.textContent = "Low Contrast";
        } else {
            toggleButton.textContent = "High Contrast";
        }
    
    }
});


