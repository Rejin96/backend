const jwt = require("jsonwebtoken");

function genToken(_id){
    const token = jwt.sign({_id},"SECRETKEY");
    return token;
}

module.exports= genToken;