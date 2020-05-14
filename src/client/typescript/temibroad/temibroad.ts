// import axios from './axios';
function getEById(elementStr : string):Element{
  let element = document.getElementById(elementStr);
  if(!element){
    throw new Error("can't gt DOM: " + elementStr);
  }
  return element;
}

getEById('clickGo').addEventListener('click', function(e){
  axios.get('connect/test').then(res=>{
    console.log(res);
  })
})
getEById('clickGo2').addEventListener('click', function(e){
  axios.get('connect/test2').then(res=>{
    console.log(res);
  })
})