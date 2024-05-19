const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['authorization'];

    if(!token){
        return res.status(403).json({
            success:false,
            msg:"token is required for authentication"
        })
    }

    try{
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        const decodeData  = jwt.verify(bearerToken, process.env.ACCESS_SECRET_TOKEN);
        req.user = decodeData.user;
        return next();
    }
    catch(error){
        return res.status(400).json({
            success:false,
            msg:'Invalid Token'
        })
    }

    
}

module.exports = verifyToken;