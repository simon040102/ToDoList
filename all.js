let text = document.querySelector('.text');
let save = document.querySelector('.save');
let list = document.querySelector('.list');
let ary = [
  {
    item: '今天天氣真好，準備去踏青',
    finished: '',
  },
  {
    item: '生人無求，在家耍廢救世界',
    finished: '',
  },
  {
    item: '拳拳到肉，處處醬肉',
    finished: '',
  },
  {
    item: '快點寫作業，老師在你後面很火',
    finished: '',
  },
  {
    item: '明天的力氣，今天幫你船便便',
    finished: '',
  },
];
init();
//重新整理資料
function init() {
  let str = '';
  ary.forEach(function (items, index) {
    str += `<li class="${items.finished}"><input type="checkbox" data-num=${index}  class="confirm" style="zoom:1.5; vertical-align:middle" id="confirm">${items.item}<a  href="#"><img data-num=${index} src="images/delete_black_24dp.svg"></a></li>`;
  });
  list.innerHTML = str;
}
//新增
save.addEventListener('click', saveData);
function saveData(e) {
  let obj = { finished: '' };
  if (text.value == '') {
    return;
  }
  obj.item = text.value;
  ary.push(obj);
  init();
  text.value = '';
}
//刪除
list.addEventListener('click', del);
function del(e) {
  e.preventdefault;
  let num = e.target.dataset.num;
  if (e.target.nodeName == 'IMG') {
    ary.splice(num, 1);
    init();
  }
  
}

// let check = document.querySelector('.confirm');

//checkbox
// check.addEventListener('click', checkbox);
// function checkbox(e) {
//   console.log(e);
//   let id = e.target.id;
//   let num = e.target.dataset.num;
//    console.log(e.target.checked);
//   if (e.target.id !== id) {
//     return;
//   }
//    if (e.target.checked==1){
//     ary[num].finished="finished"
//    }else{
//      ary[num].finished = '';
//    }
//   init();
// }

$(document).ready(function(){
  $('.confirm').change(function(e){
    console.log(e)
    let num = e.target.dataset.num;
     console.log(num);
    if(e.target.checked==1){
      ary[num].finished='finished'
    }else{
       ary[num].finished = '';
    }
   $(this).parent().toggleClass('finished')
  })
})
