function actionScryptDelete(id) {
    let options = []
    fetch("/api/user/" + id).then((response) => {
        response.json().then((user) => {
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