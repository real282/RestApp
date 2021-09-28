let idTableH = document.getElementById("pageHeader")

fetch("/api/getAuthorizedUser").then((response) => {
    console.log("PAGE HEADER!")
    response.json().then((user) => {
        let rolesUserI = user.roles
        let strRoles = ""
        for (let j = 0; j < rolesUserI.length; j++) {
            strRoles += rolesUserI[j].role + " "
        }
        let rowI = idTableI.insertRow()
        let cell0 = rowI.insertCell()
        cell0.innerHTML = '<div className="m-2 font-weight-bold"' + user.email+ '>&nbsp</div>'
        // '<div className="m-2">witch roles:</div>'
        // '<div className="col-9 m-2 text-uppercase"' + strRoles +'></div>'
        // '<a className="m-2 text-right text-secondary text-decoration-none" th:href="@{/logout}"> Logout </a>'

    })
})