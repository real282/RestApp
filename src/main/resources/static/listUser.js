let idTable = document.getElementById("usersListTable")
listUser()

function listUser() {
    console.log("run getAllUsers function")
    fetch("/api/users").then((response) => {
        response.json().then((users) => {
            outputUserInfoTable(users)
        })
    })
}


function outputUserInfoTable(users) {
    for (let i = 0; i < users.length; i++) {
        let rolesUser = users[i].roles
        let strRoles = ""
        let row = idTable.insertRow()
        row.setAttribute("id", users[i].id)
        let cell0 = row.insertCell()
        cell0.innerHTML = users[i].id
        let cell1 = row.insertCell()
        cell1.innerHTML = users[i].name
        let cell2 = row.insertCell()
        cell2.innerHTML = users[i].lastName
        let cell3 = row.insertCell()
        cell3.innerHTML = users[i].email
        let cell4 = row.insertCell()
        for (let j = 0; j < rolesUser.length; j++) {
            strRoles += rolesUser[j].role + " "
        }
        cell4.innerHTML = strRoles
        let cell5 = row.insertCell()
        cell5.innerHTML =
            '<button type="button" onclick="actionScryptEdit(' + users[i].id + ')"  data-toggle="modal" data-target="#editModalWindow" class="btn btn-primary btn-sm">Edit</button>'

        let cell6 = row.insertCell()
        cell6.innerHTML =
            '<button type="button" onclick="actionScryptDelete(' + users[i].id + ')" data-toggle="modal" data-target="#deleteModalWindow" class="btn btn-danger btn-sm">Delete</button>'

    }
}
