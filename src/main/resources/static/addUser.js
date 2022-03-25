
function addNewUser() {

    let form = window.formNewUser.nRoles;
    let newUserRoles = [];
    let rolesList = document.createElement('ul');

    for(const role in form.roles){
        newUserRoles.push(role);
    }


    fetch('http://localhost:8080/admin/new', {
        method: 'POST',
        body: JSON.stringify({
            firstName: window.formNewUser.nFirstName.value,
            lastName: window.formNewUser.nLastName.value,
            age: window.formNewUser.nAge.value,
            email: window.formNewUser.nEmail.value,

        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(user => {

            $(`#app tr:last`).after(`<tr id=` + user.id + `>` +
                `<td>` + user.id + `</td>` +
                `<td>` + window.formNewUser.nFirstName.value + `</td>` +
                `<td>` + window.formNewUser.nLastName.value + `</td>` +
                `<td>` + window.formNewUser.nAge.value + `</td>` +
                `<td>` + window.formNewUser.nEmail.value + `</td>` +
                `<td>` + rolesList.textContent + `</td>` +
                `<td> <button type="button" onclick="getModalEdit(` + user.id + `)" ` +
                `class="btn btn-info">Edit</button> </td>` +
                `<td> <button type="button" onclick="getModalDelete(` + user.id + `)" ` +
                `class="btn btn-danger">Delete</button> </td>` +
                `</tr>`);

            window.formNewUser.nFirstName.value = "";
            window.formNewUser.nLastName.value = "";
            window.formNewUser.nAge.value = "";
            window.formNewUser.nEmail.value = "";
            window.formNewUser.nRoles.value = "";

            const users_table = document.getElementById("usersTab");
            const new_user = document.getElementById("newUser");
            new_user.classList.remove("active");
            users_table.classList.add("active");

            const users_table_main = document.getElementById("users_table");
            const new_user_main = document.getElementById("new_user");
            new_user_main.classList.remove("active", "show");
            users_table_main.classList.add("active", "show");
        });
}