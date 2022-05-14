/*
Define a function that can answer the role of a user
A user can be on following roles:
Admin - with all access
Subadmin - with access to create/delete courses
Testprep - with access to create/delete tests
user - consume all content
other- trial user

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with full access`;

        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;

        case "testprep":
            return `${name} is a Testprep with access to create and delete tests`;

        case "user":
            return `${name} is a user to consume content`;
    
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("Soundhar","admin"));

var getRole = getUserRole("Naveen","user");
console.log(getRole);