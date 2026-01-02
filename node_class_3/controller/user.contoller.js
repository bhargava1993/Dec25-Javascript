
function createUser(req, res) {
    console.log("req.body--", req.body);
    // return "create user";
    res.send({ "message": `user created`, data: req.body });
}

// const createUser =(req, res)=>{
//  res.send({ "message": `user created`, data: req.body });
// }

function getUser(req, res) {
    console.log("req.params--", req.params);
    res.send({ "message": "fetch user" });
}

function getSingleUser(req, res) {
    console.log("req.params--", req.params);
    res.send({ "message": "fetch signle user", data:req.params });
}

function updateUser(req, res) {
    console.log("req.params--", req.params);
    res.send({ "message": "update user" });
}

function deleteUser(req, res) {
    console.log("req.params--", req.params);
    res.send({ "message": "delete user" });
}

module.exports = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}