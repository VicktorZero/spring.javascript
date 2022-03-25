
getAllusers();
function getAllusers(){

    let app = document.getElementById("app");
    app.innerHTML ="";

    fetch('http://localhost:8080/admin/users')
        .then(response => response.json())
        .then(users =>{
            users.forEach(function (user){
              let row = app.insertRow();
              row.setAttribute("id",user.id);
              let line1 = row.insertCell();
              line1.innerHTML = user.id;
              let line2 = row.insertCell();
              line2.innerHTML = user.firstName;
              let line3 = row.insertCell();
              line3.innerHTML = user.lastName;
              let line4 = row.insertCell();
              line4.innerHTML = user.age;
              let line5 = row.insertCell();
              line5.innerHTML = user.email;
              let line6 = row.insertCell();
              line6.innerHTML = getRoleList(user).textContent.replace("ROLE_", "");
                let line7 = row.insertCell();
                line7.innerHTML =
                    '<button type="button" onclick="getModalEdit(' + user.id + ')" '
                    + 'class="btn btn-info">Edit</button>';
                let line8 = row.insertCell();
                line8.innerHTML =
                    '<button type="button" onclick="getModalDelete(' + user.id + ')" '
                    + 'class="btn btn-danger">Delete</button>';

            })});
}





