function addNewUser() {
    let user = {
        name: document.getElementById("newName").value,
        lastName: document.getElementById("newLastName").value,
        email: document.getElementById("newEmail").value,
        password: document.getElementById("newPasswd").value
    }
    alert(user.name + " " + user.lastName)

}