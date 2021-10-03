let idTableI = document.getElementById("userInfo")

fetch("/api/getAuthorizedUser").then((response) => {
    response.json().then((user) => {
        let rolesUserI = user.roles
        let strRoles = ""
        let rowI = idTableI.insertRow()
        rowI.setAttribute("id", user.id)
        let cell0 = rowI.insertCell()
        cell0.innerHTML = user.id
        let cell1 = rowI.insertCell()
        cell1.innerHTML = user.name
        let cell2 = rowI.insertCell()
        cell2.innerHTML = user.lastName
        let cell3 = rowI.insertCell()
        cell3.innerHTML = user.email
        let cell4 = rowI.insertCell()
        for (let j = 0; j < rolesUserI.length; j++) {
            strRoles += rolesUserI[j].role + " "
        }
        cell4.innerHTML = strRoles
    })
})

