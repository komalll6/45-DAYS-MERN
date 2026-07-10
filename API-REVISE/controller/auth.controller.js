export const signup = async(req, res, next)=>{
    try{
        const {userName, email, password} = req.body

        if(!userName || !email || !password){
            return res.status(40).json({
                message : "all fields requrie"
            })
        }
        const isUserExist = await Auth.findOne({emial})
        
    if(isUserExist){
        return res.status(400).json({
            message : "email is already exist"
        })
    }

    const user = await Auth.create({
        userName,
        email,
        password,
    })
    return res.status(201).json({
        message : "user crated sucessful",
        data:{
        _id: user._id,
        userName: user.userName,
        },
    })

    } catch(err){
    return res.status(500).json({
        message: err.message,
    })
  }
}