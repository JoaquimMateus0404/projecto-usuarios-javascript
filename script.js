var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

function addLine(data) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
                    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                    <td>${data.name}</td>
                    <td>${data.email}</td>
                    <td>${data.admin}</td>
                    <td>${data.birth}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
                `;
    document.getElementById("table-users").appendChild(tr);
}
function validateFields() {
    fields.forEach(function(field, index) {
        if (field.value == "") {
            field.classList.add("invalid");
        } else {
            field.classList.remove("invalid");
        }
    });
}

document.querySelector("#form-user-create").addEventListener("submit", function(event){
    event.preventDefault();

    fields.forEach(function(field, index){
        if (field.name == "gender") { 
            if (field.checked)  user[field.name] = field.value;
        }else {
           user[field.name] = field.value;
        }
    });

    addLine(user);

    document.querySelector("#form-user-create").reset();

});