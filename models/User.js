class User {
    constructor(name, gender, birth, country, email, password, photo, admin){
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.country = country;
        this.email = email;
        this.password = password;
        this.photo = photo || "dist/img/user1-128x128.jpg";
        this.admin = admin || false;              
    }
}