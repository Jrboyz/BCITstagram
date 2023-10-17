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
        console.log("Extraction operation complete")
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
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      }
      else {
        const pngFiles = files.filter((file) => path.extname(file).toLowerCase() === '.png');
        const filePaths = pngFiles.map((file) => path.join(dir, file));
        resolve(filePaths);
      }
    })
  })
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
  return new Promise((resolve, reject) => {
    fs.readFile(pathIn, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        for (let i = 0; i < data.length; i += 4) {
          const red = data[i];
          const green = data[i+1];
          const blue = data[i+2];
          const grayscale = Math.round(0.2989 * red + 0.5870 * green + 0.1140 * blue);
          data[i] = data[i+1] = data[i+2] = grayscale;
        }

        fs.writeFile(pathOut, data, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          else {
            console.log("Success");
            resolve("Success");
          }
        });
      }
    });
  });
};


module.exports = {
  unzip,
  readDir,
  grayScale,
};
