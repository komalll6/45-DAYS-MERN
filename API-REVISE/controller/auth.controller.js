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


//signin
export const signin = async (req, res, next) =>{
    try{
        const {email, password} = req.body

        if(!email || !password) {
            return res.send(400).json({
                message: "please fill all fields"
            })
        }
        const user = await Auth.findOne({email})

        if(!user){
           return res.status(404).json({
            message: "user not found"
           })
        }

        if (User.password !== password){
            return res.status(401).json({
                message: "Incorrect password",
            })
            return res.status(201).json({
                message: "user login sucessful",
                data: {
                    _id: user._id,
                    email: user.email,
                },
            })
        } catch (err){
            return res.status(500).json({
                message: err.message,
            })
        }
    }        