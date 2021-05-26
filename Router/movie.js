const express = require("express");
const fs = require('fs');
const router = express.Router({ mergeParams: true });

// get all
router.get("/", (req, res) => {
  res.send("Hello from get all");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello from get, your id is : ${id}`);
});

router.post("/", (req, res) => {
    const picture = req.body.picture;
    try {
        fs.copyFile(picture.path, './public/uploads/'+picture.name, (err)=>{
            if (err) return console.log("error");
            picture.path = req.app.get('base')+'/public/uploads/'+picture.name;
            console.log(`uploaded : ${picture.path}`);

            const movie = {
                id: req.body.id,
                picture: picture
            }
            res.json(movie);
        });
    } catch (error) {
        console.log(error);
    }
});
    

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello from put, your id is : ${id}`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello from delete, your id is : ${id}`);
});

router.post('/uploadpicture', async (req,res)=>{
    try {
        const value = req.body.id;
        if (!req.files) {
          console.log("file is required");
    
          res.send({
            status: 400,
            message: "No file uploaded",
          });
        } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let picture = req.files.picture;
          console.log(req.files)
    
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
        //   picture.mv("./public/uploads/" + picture.name);
          console.log("file successfully uploaded");
    
          //send response
          res.send({
            status: true,
            message: "File is uploaded",
            data: {
              id: value,
              name: picture.name,
              tempFilePath: picture.tempFilePath,
              mimetype: picture.mimetype,
              size: picture.size,
            },
          });
        }
      } catch (err) {
        res.status(500).send(err);
      }
})

module.exports = router;
