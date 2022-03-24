
let tBody =document.getElementById('infoUser');

  fetch('http://localhost:8080/api/user')
    .then(response => response.json())
    .then(user =>{
       tBody.innerHTML = "";
       let row = tBody.insertRow(0);
        let cell0 = row.insertCell(0);
        cell0.innerHTML = user.id;
        let cell1 = row.insertCell(1);
        cell1.innerHTML = user.firstName;
        let cell11 = row.insertCell(2);
        cell11.innerHTML = user.lastName;
        let cell2 = row.insertCell(3);
        cell2.innerHTML = user.age;
        let cell3 = row.insertCell(4);
        cell3.innerHTML = user.email;
        let cell5 = row.insertCell(5);
        cell5.innerHTML = getRoleList(user).textContent.replaceAll("ROLE_", "");

    });