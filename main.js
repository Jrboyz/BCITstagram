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

IOhandler.unzip(zipFilePath, pathUnzipped)
    .then(() => IOhandler.readDir(pathUnzipped))
    .then((dirData) => IOhandler.grayScale(dirData, pathProcessed))
    .catch((err) => {
        console.log("An Error has Occurred");
    })
// Use promise.all to run all greyscaling at
