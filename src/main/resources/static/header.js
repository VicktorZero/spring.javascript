
fetch('http://localhost:8080/api/user')
    .then(response => response.json())
    .then(user => {
        document.getElementById("headerName").innerHTML = user.userName;
        document.getElementById("headerRoles").innerHTML = 'with roles: ' + getRoleList(user).textContent.replaceAll("ROLE_", "");
    });