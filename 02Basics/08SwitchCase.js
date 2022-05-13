// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets acess to consume content

var role = "admin"

switch (role) {
    case "admin":
        console.log("Gets full access");
        break;
    
    case "subadmin":
        console.log("Gets access to create/delete courses");
        break;

    case "testprep":
        console.log("Gets access to create/delete tests");
        break;

    case "user":
        console.log("Gets access to consume content");
        break;

    default:
        console.log("Role not matched");
        break;
}