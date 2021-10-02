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
            for(var i = 0; i < options.length; i++) {
                var opt = options[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }

        })
    })
}