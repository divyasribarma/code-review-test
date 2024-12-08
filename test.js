function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // Inefficient: Suggest using arr.reduce
        sum += arr[i];
    }
    return sum;
}

function handleClick() {
    let userAge = prompt("Enter your age:");
    if (userAge < 18) { // Potential issue: userAge is a string, needs parsing
        alert("Access denied.");
    } else {
        alert("Access granted.");
    }
}

function fetchData(url) {
    fetch(url) // Missing error handling
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
