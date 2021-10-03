let idUser

function actionScryptDelete(id) {
    let options = []
    fetch("/api/user/" + id).then((response) => {
        response.json().then((user) => {
            idUser = id
            document.getElementById("idDelete").value = user.id
            document.getElementById("nameDelete").value = user.name
            document.getElementById("lastNameDelete").value = user.lastName
            document.getElementById("emailDelete").value = user.email
            let select = document.getElementById("selectDelete")

            let rolesUser = user.roles
            for (let j = 0; j < rolesUser.length; j++) {
                options.push(rolesUser[j].role)
            }
            console.log(options)

        })
    })
}

function deleteButton() {

    fetch("/api/user/" + idUser, {
        method: "DELETE"
    }).then((response) =>{
        console.log(response)
        document.querySelector('#closeDelete').click()
        let idTable = document.getElementById("usersListTable")
        idTable.innerHTML = ""
        listUser()
    })

}
