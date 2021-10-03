function actionScryptEdit(id) {
    let options = []
    fetch("/api/user/" + id).then((response) => {
        response.json().then((user) => {
            document.getElementById("idEdit").value = user.id
            document.getElementById("nameEdit").value = user.name
            document.getElementById("lastNameEdit").value = user.lastName
            document.getElementById("emailEdit").value = user.email
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

    fetch("/api/user/" + idUser, {
        method: "DELETE"
    }).then((response) => {
        console.log(response)
        document.querySelector('#closeDelete').click()
        let idTable = document.getElementById("usersListTable")
        idTable.innerHTML = ""
        listUser()
    })
}