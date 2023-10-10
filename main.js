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

unzip(zipFilePath, pathUnzipped);

// Use promise.all to run all greyscaling at the same time
