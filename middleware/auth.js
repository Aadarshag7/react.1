const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
    try{
    const tokens=req.cookies.token;
    if(!tokens){
        return res.status(401).json({
            message:"Not authorized"
        });
        
    }
    const decoded=jwt.verify(tokens,"aadarshag");
    req.user=decoded;
    next();
    } catch(error){
        console.log("Error:",error);
        res.status(500).json({
            message:"server error"
        });
    }

}

module.exports=auth;