import express from "express"
//used to create restfull api
const router = express.Router()

router.post("/signup", signup)

export default router