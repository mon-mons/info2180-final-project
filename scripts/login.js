window.onload = function() {
    var httpRequest;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var submit_from = document.getElementById("submit_form");

    submit_from.onclick = mkrequest;
    
    function mkrequest() {
        event.preventDefault();
        httpRequest = new XMLHttpRequest();
        var url = "login.php";
        httpRequest.onreadystatechange = login;
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.send('email=' + encodeURIComponent(email) + "&password=" + encodeURIComponent(password));
    }

    function login() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                if(response) {
                    alert("Login successful");
                    window.location = "test.html";
                }
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}