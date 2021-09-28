fetch("/api/getAuthorizedUser").then((response) => {
    console.log("PAGE HEADER!")
    response.json().then((user) => {
        let rolesUserI = user.roles
        let strRoles = ""
        for (let j = 0; j < rolesUserI.length; j++) {
            strRoles += rolesUserI[j].role + " "
        }

    })
})