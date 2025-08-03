class UserController {

    constructor(formEl, tableId){
        this.formEl = document.getElementById(formEl);
        this.tableId = document.getElementById(tableId) || "table-users";
    }

    // Initialize the form submission event
    // and add a new user line to the table
    onSubmit(){
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
      
            let objectUser =  this.getValues();

            this.getPhoto().then((content) => {
                objectUser.photo = content;
                this.addLine(objectUser, this.tableId);
                this.formEl.reset();
            }, function(error) {
                console.error("Error reading photo:", error);
            });         
        
        });
    }

    // Get values from the form and create a User object
    getValues(){

        let user = {};
        Array.from(this.formEl.elements).forEach(function(field, index){
            if (field.name == "gender") { 
                if (field.checked)  user[field.name] = field.value;
            }else {
               user[field.name] = field.value;
            }
        });
    
        var objectUser = new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);

        return objectUser;
    }

    // Get the photo from the file input and convert it to base64
    getPhoto() {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
    
            let elements = [...this.formEl.elements].filter(item => {
                return item.name === "photo" && item.files.length;
            });
    
            if (elements.length === 0 || !elements[0].files[0]) {
                // Retorna uma imagem padrão em Base64
                const defaultPhotoBase64 = "data:image/svg+xml;base64,          PHN2ZyBmaWxsPSIjNjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjEzIiByPSIxMCIvPjxwYXRoIGQ9Ik0zNSAzOGgtMjBjLTUuNTIgMC0xMCA0LjQ4LTEwIDEwdjJoNDB2LTJjMC01LjUyLTQuNDgtMTAtMTAtMTB6Ii8+PC9zdmc+";
                resolve(defaultPhotoBase64);
                return;
            }
    
            let file = elements[0].files[0];
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
    
            fileReader.onerror = (error) => {
                console.error("Error reading file:", error);
                reject(error);
            };
    
            fileReader.readAsDataURL(file);
        });
    }

    
    // Add a new line to the table with the user data
    addLine(data, tableId) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
                        <td><img src="${data.photo}" alt="User Image" class="img-circle img-sm"></td>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.admin}</td>
                        <td>${data.birth}</td>
                        <td>
                          <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                          <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                        </td>
                    `;
        this.tableId.appendChild(tr);
    }
}