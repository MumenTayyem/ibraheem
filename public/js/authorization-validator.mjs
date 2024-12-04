export default function authorizationValidator(config){
    let token = localStorage.getItem("token");

    let decoded = jwt_decode(token);

    for (let i = 0; i< config.allowed_roles.length; i++){
        let currentRole = config.allowed_roles[i];

        if (decoded.Role.indexOf(currentRole) > -1){
            return true;
        }
    }

    return false;
}