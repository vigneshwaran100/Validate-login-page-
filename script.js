function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    //reset the error message
    document.getElementById("nerror").innerHTML = " ";
    document.getElementById("merror").innerHTML = " ";
    //validate
    if (name==="") {
        document.getElementById('nerror').innerHTML = "Name is required";
        return false;
    }
    var emailfrmt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailfrmt.test(email)) {
            document.getElementById('merror').innerHTML = "Invalid input format";
            return false;
            }
    alert("Successfully submitted your form");
    return true;
}