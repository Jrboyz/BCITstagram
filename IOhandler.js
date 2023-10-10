/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: October 10, 2023
 * Author: Josh-Ryan Castillo
 *
 */

const unzipper = require("unzipper"),
  fs = require("fs"),
  PNG = require("pngjs").PNG,
  path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
*/
const unzip = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(pathIn)
      .pipe(unzipper.Extract({ path: pathOut}))
      .on('error', (err) => {
        reject(err)
      })
      .on("end", () => {
        resolve ("Success");
      });
  })
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
*
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  pass;
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  // Read each png file...
  //fs.createReadStream("png1.png")
    // .on("data", (chunk) => console.log(chunk))
  pass;
};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
