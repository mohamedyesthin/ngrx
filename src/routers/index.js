const router = require("express").Router()
const catagorieRouter = require("./catagories/catagories.router")


router.use("/category", catagorieRouter);

module.exports=router