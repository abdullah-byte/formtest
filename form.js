console.log(document)
function passwordVerify(){
    let pass = document.getElementById('password1').value;
    let pass2 = document.getElementById('password2').value;

    if (pass === pass2){
        alert("password match")
    }else(
        alert("Password do not match")
    )

}
