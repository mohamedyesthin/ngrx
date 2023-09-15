const router = require("express").Router()
const catagoryController = require("..//..//controllers/catagories/catagories.controller")



router.get("/viewall", catagoryController.getalldata);
module.exports=router