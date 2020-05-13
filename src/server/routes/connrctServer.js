/**
 * @description 用來與遠端伺服器溝通的相關路由在這邊設定
 * @author frenkie
 * @date 2020-05-13
 */
const express = require('express');
const router = express.Router();
//

import controller from '../controllers/connrctServer';
//




// var controller = require('../controller/connectionTemi')

// router.get('/UserData/:id',controller.getUserData)
router.get('/test', controller.getUserFile);

router.get('/test2', controller.getUserData);


export default router;