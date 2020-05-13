/**
 * @description 存放環境等相關參數
 * @author frenkie
 * @date 2020-05-13
 */

/* config.js */
let env = process.env.NODE_Server;
console.log('=======================================================');
console.log(`      current environment: TemiLocal / ${JSON.stringify(env)}`);
console.log('=======================================================');

let config = {
  version: '1.0.0',
  env: env,
  port: '3000',
};

let setConfig = {};

switch (env){
  case 'frenkie':
    setConfig = {
      mainServer : 'http://192.168.3.133:3001',
    }
    break;
  default:
    break;
}

for(let key in setConfig){
  config[key] = setConfig[key];
}

export default config;