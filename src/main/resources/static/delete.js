
function getModalDelete(id){

    fetch('http://localhost:8080/admin/edit/'+ id)
        .then(response => response.json())
        .then(user => {

            let adminSelect = " ";
            let userSelect = " ";

            for(const role in user.roles){
                if(role.role === "ADMIN"){
                    adminSelect = "selected";
                }
                if(role.role === "USER"){
                    userSelect = "selected";
                }
            }

            let modal = document.getElementById("modalWindow");

            modal.innerHTML =
                '<div id="modalDelete" class="modal fade" tabindex="-1" role="dialog"' +
                '     aria-labelledby="TitleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">' +
                '    <div class="modal-dialog">' +
                '        <div class="modal-content">' +

                '            <div class="modal-header">' +
                '                <h6 class="modal-title" id="TitleModalLabel">Delete user</h6>' +
                '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '                    <span aria-hidden="true">&times;</span>' +
                '                </button>' +
                '            </div>' +

                '            <div class="modal-body">' +
                '               <div class="form-group row justify-content-center align-items-center">' +
                '                <form id="formEditUser" class="form-signin mx-auto font-weight-bold text-center">' +
                '                    <p>' +
                '                        <strong><label for="Id">ID: </label></strong>' +
                '                        <input class="form-control" type="text" id="Id" ' +
                '                               name="id" value="' + user.id + '" readonly>' +
                '                    </p>' +
                '                    <p>' +
                '                        <strong><label for="FirstName">FirstName: </label></strong>' +
                '                        <input class="form-control" type="text" id="FirstName" ' +
                '                               name="firstName" value="' + user.firstName + '"' +
                '                               placeholder="FirstName" aria-describedby="nameHelpInline" ' +
                '                               autofocus required> ' +
                '                    </p>' +
                '                    <p>' +
                '                        <strong><label for="Lastname">Lastname: </label></strong>' +
                '                        <input class="form-control" type="text" id="Lastname" ' +
                '                               name="lastName" value="' + user.lastName + '"' +
                '                               placeholder="Lastname" autofocus required> ' +
                '                    </p>' +
                '                    <p>' +
                '                        <strong><label for="Age">Age: </label></strong>' +
                '                        <input class="form-control" type="text" id="Age" ' +
                '                               name="age" value="' + user.age + '" ' +
                '                               placeholder="Age" autofocus required>' +
                '                    </p>' +
                '                    <p>' +
                '                        <strong><label for="Email">Email: </label></strong>' +
                '                        <input class="form-control" type="text" id="Email" ' +
                '                               name="email" value="' + user.email + '" ' +
                '                               placeholder="Email" autofocus required>' +
                '                    </p>' +
                '                    <p>' +
                '                        <strong><label>Role</label></strong>' +
                '                        <select id="eRoles" name="roles" multiple size="2" ' +
                '                               class="form-control" required>' +
                '                            <option value="ADMIN" >ADMIN</option>' +
                '                            <option value="USER"' + userSelect + ' selected>USER</option>' +
                '                        </select>' +
                '                    </p>' +
                '                </form>' +
                '               </div>' +
                '            </div>' +

                '            <div class="modal-footer">' +
                '                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                '                <button class="btn btn-danger" data-dismiss="modal" onclick="deleteUser('+ user.id+ ')">Delete</button>' +
                '            </div>' +

                '        </div>' +
                '    </div>' +
                '</div>';
            $("#modalDelete").modal();
        });

}

  function deleteUser(id){

    fetch('http://localhost:8080/admin/delete/'+id, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => {
        $('#' + id).remove();
    });
}


