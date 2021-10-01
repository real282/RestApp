function addNewUser() {
    let user
    let newUser = []
    let select = document.getElementById("newRoles")
    let newRoles = []
    let selected = Array.from(select.options)
        .filter(option => option.selected)
        .map(option => option.value)
    fetch("/api/roles").then((response) => {
        response.json().then((roles) => {
            let listRoles = roles
            for (let i = 0; i < selected.length; i++) {
                let role = {id: listRoles[selected[i] - 1].id, role: listRoles[selected[i] - 1].role}
                newRoles.push(role)
            }
            sendDataUser()
        })
    })

    function sendDataUser() {
        user = {
            name: document.getElementById("newName").value,
            lastName: document.getElementById("newLastName").value,
            email: document.getElementById("newEmail").value,
            password: document.getElementById("newPasswd").value,
            roles: newRoles
        }
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then((response) => {
                response.json().then((userNew) => {
                    newUser.push(userNew)
                    outputUserInfoTable(newUser)
                })
            })
    }
}