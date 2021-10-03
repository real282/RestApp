let userList =[]
let newRoles =[]
let role = {id: "1", role: "ROLE_ADMIN"}
newRoles.push(role)

function actionScryptEdit(id) {
    let options = []
    fetch("/api/user/" + id).then((response) => {
        response.json().then((user) => {
            document.getElementById("idEdit").value = user.id
            document.getElementById("nameEdit").value = user.name
            document.getElementById("lastNameEdit").value = user.lastName
            document.getElementById("emailEdit").value = user.email
            document.getElementById("passwordEdit").value = user.password
            let select = document.getElementById("selectEdit")

            let rolesUser = user.roles
            for (let j = 0; j < rolesUser.length; j++) {
                options.push(rolesUser[j].role)
            }
            console.log(options)

        })
    })
}

function editButton() {
    let user = {
        id: document.getElementById("idEdit").value,
        name: document.getElementById("nameEdit").value,
        lastName: document.getElementById("lastNameEdit").value,
        email: document.getElementById("emailEdit").value,
        password: document.getElementById("passwordEdit").value,
        roles: newRoles
    }
    fetch("/api/user/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
    })
        .then((response) => {
            response.json().then((userNew) => {
                userList.push(userNew)
                document.querySelector('#closeEdit').click()
                let idTable = document.getElementById("usersListTable")
                idTable.innerHTML = ""
                listUser()

            })
        })
}



