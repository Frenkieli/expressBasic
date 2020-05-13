/**
 * @description 用來與遠端伺服器溝通的相關controllers
 * @author frenkie
 * @date 2020-05-13
 */


import request from 'request';
import fs from 'fs';
import compressing from 'compressing';
import path from 'path';
//

import config from '../../config/config';



const connrctServer ={};




/**
 * @description 判斷回傳錯誤資訊的內容
 * @author frenkie
 * @date 2020-05-13
 * @param {boolean} err - could be null or string
 * @param {string} title - status title status ex. download
 * @returns could be null or string
 */
function printError(err , title){
  return err ? title + ' error :' + err : err || title + 'success';
}



/**
 * @description 將獲取到的資料儲存成對應檔案後解壓縮最後將壓縮檔刪掉
 * @param {*} req
 * @param {*} res
 * @param {function} next
 */
connrctServer.getUserFile = async function (req, res, next) {
  // console.log(config);
  request.get({ uri:  config.mainServer + '/connectionTemi/UserData/1234567890', encoding: 'binary' }, function (error, response, body) {
    try {
      // console.log(error);
      // console.log(response);
      console.log(printError(error, 'download'));
      fs.writeFile(path.resolve(__dirname + '/destination.zip'), response.body, "binary", function (err) {
        console.log(printError(err, 'writeFile'));
        compressing.zip.uncompress(path.resolve(__dirname + '/destination.zip'), path.resolve(__dirname))
          .then((err) => {
            fs.unlink(path.resolve(__dirname + '/destination.zip'), function (err) {
              console.log(printError(err, 'delete'));
            });
            console.log('uncompress success');
            console.log('connrctServer.getFile process done');
          })
          .catch(err => {
            console.error(err);
          });
      })
      res.send('gogo');
    } catch (err) {
      console.log('connrctServer.getFile function error : ' + err);
    }
  })
};

connrctServer.getUserData = async function (req, res, next) {

}


export default connrctServer;