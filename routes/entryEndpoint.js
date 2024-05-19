const express = require("express");

const router = express.Router();
const { createEntry } = require("../controllers/create");

router.post("/createMusic", createEntry);
router.get("/getmusic", (req,res)=>{
res.json({
    body:"music"
})
});


module.exports = router;
