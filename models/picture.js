const fs = require("fs").promises;

const uploadTemp = async (req, res) => {
  try {
    if (!req.files) {
      console.log("file is required");

      res.status(400).send({
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let picture = await req.files.picture;
      //   console.log(req.files);

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      //   picture.mv("./public/uploads/" + picture.name);
      console.log("file successfully uploaded");

      //send response
      res.send({
        message: "File is uploaded",
        data: {
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
};

const uploadPicture = async (picture, req) => {
  try {
    fs.copyFile(picture.path, "./public/uploads/" + picture.name);
    picture.path = req.app.get("base") + "/public/uploads/" + picture.name;
    console.log(`uploaded : ${picture.path}`);
    return picture;
  } catch (error) {
    console.log(error);
    return picture = {};
  }
};

module.exports = {
  uploadTemp,
  uploadPicture,
};
