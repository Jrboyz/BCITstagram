const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: October 10, 2023
 * Author: Josh-Ryan Castillo
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const fs = require("fs");

if (!fs.existsSync(pathProcessed)) {
    fs.mkdirSync(pathProcessed, { recursive: true });
}

IOhandler.unzip(zipFilePath, pathUnzipped)
    .then(() => IOhandler.readDir(pathUnzipped))
    .then((dirData) => {
        const filterPromises = dirData.map((imagePath, index) => {
            const outputPath = path.join(pathProcessed, `gs_${index}.png`);
            return IOhandler.grayScale(imagePath, outputPath); 
        });
        return Promise.all(filterPromises);
    })
    .then(() => {
        console.log("Image processing complete.");
    })
    .catch((err) => {
        console.log("An Error has Occurred:", err);
    });
