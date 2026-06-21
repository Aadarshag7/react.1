const permit=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.roles)){

            res.status(403).json({
                message:"Permission denied"
            });
        }

    next();
        

    }
}
