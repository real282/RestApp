function addNewUser() {
    let user
    let select = document.getElementById("newRoles")
    let newRoles = []
    let selected = Array.from(select.options)
        .filter(option => option.selected)
        .map(option => option.value)
    fetch("/api/roles").then((response) => {
        response.json().then((roles) => {
            let listRoles = roles
            for (let i = 0; i < selected.length; i++) {
                let role = {id: listRoles[selected[i] - 1].id, name: listRoles[selected[i] - 1].role}
                newRoles.push(role)
            }
            console.log(newRoles)
            createUser()
            sendFetch().then(r =>
                console.log(r))
            alert("sendFetch")

        })
    })

    function createUser() {
        user = {
            name: document.getElementById("newName").value,
            lastName: document.getElementById("newLastName").value,
            email: document.getElementById("newEmail").value,
            password: document.getElementById("newPasswd").value,
            roles: newRoles
        }
    }

    function sendFetch() {
        alert("JSON " + JSON.stringify(user))
        console.log(user);

        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then((response) => {
                response.json().then((userNew) => {
                    alert(userNew)
                })
            })
        listUser()
    }
}