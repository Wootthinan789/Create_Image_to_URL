const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;
const pathImages = "//203.150.197.76/rpa/KING/Images/"; 
const imagesPath = path.join( pathImages.replace(/\//g, path.sep));

app.use('/images', express.static(imagesPath));

app.get('/all-image-urls', (req, res) => {
  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const imageUrls = files.map((file) => {
      return `http://localhost:${port}/images/${file}`;
    });

    // แสดง URL ในรูปแบบข้อความนะครับ
    const textResult = imageUrls.join('\n');
    console.log(textResult);
    console.log("----------------------------------");
    files.forEach((file) => {
        console.log(`${file}`);
      });

    res.json({ imageUrls });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
