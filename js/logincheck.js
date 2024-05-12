
function validateForm(callback) 
{
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    if (uname !== "admin" || password !== "12345") 
    {
        // If login fails, display an error message
        alert("Invalid username or password");
        return false; // Return false to prevent form submission
    } 
    else 
    {
        $(".loginform").load("home.html", function() {
            // This function will be executed after main.html is loaded
            callback(); // Call the provided callback function
        });
        
    }
    
}
function checkuname() {
    var uname = document.getElementById("uname").value;
    var error = document.querySelector(".error-text1");

    if (uname === "") 
    {
        error.style.display = "none"; 
    } 
    else if (uname !== "admin")
    {
        error.innerHTML = "Invalid username";
        error.style.display = "block";
    } 
    else 
    {
        error.style.display = "none";
    }
}

function checkpass() 
{
    var password = document.getElementById("password").value;
    var error = document.querySelector(".error-text2");

    if (password === "") 
    {
        error.style.display = "none"; 
    } 
    else if (password !== "12345") 
    {
        error.innerHTML = "Invalid password";
        error.style.display = "block";
    } else 
    {
        error.style.display = "none";
    }
}


