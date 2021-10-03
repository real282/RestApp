fetch("/api/getAuthorizedUser").then((response) => {
    console.log("PAGE HEADER!")
    response.json().then((user) => {
        document.getElementById("headerMail").innerText = user.email
        let rolesUser = user.roles
        let strRoles=""
        for (let j = 0; j < rolesUser.length; j++) {
            strRoles += rolesUser[j].role + " "
        }
        document.getElementById("headerRole").innerText = strRoles
    })
})