let text = document.querySelector('.text');
let save = document.querySelector('.save');
let list = document.querySelector('.list');
let check = document.querySelector('.check');
let ary = [
  {
    item: '今天天氣真好，準備去踏青',
    finished: '',
    check: 'false',
  },
  {
    item: '生人無求，在家耍廢救世界',
    finished: '',
    check: 'false',
  },
  {
    item: '拳拳到肉，處處醬肉',
    finished: '',
    check: 'false',
  },
  {
    item: '快點寫作業，老師在你後面很火',
    finished: '',
    check: 'false',
  },
  {
    item: '明天的力氣，今天幫你船便便',
    finished: '',
    check: 'false',

  },
];
init();
//重新整理資料
function init() {
  let str = '';
  ary.forEach(function (items, index) {
    str += `<li class="${items.del}"><a  href="#"><img data-check="${items.check}" class="check ${items.finished}"  data-num=${index} src="images/check_box_outline_blank_black_24dp.svg"></a>${items.item}<a  data-num=${index} href="#" class="del"></a></li>`;
  });
  list.innerHTML = str;
}
//新增
save.addEventListener('click', saveData);
function saveData(e) {
  let obj = { finished: '', check: 'false' ,del:''};
  if (text.value == '') {
    return;
  }
  obj.item = text.value;
  ary.push(obj);
  init();
  text.value = '';
}
//刪除&修改
list.addEventListener('click', remove);
function remove(e) {
  let num = e.target.dataset.num;
  let check = e.target.dataset.check;
  
  if (e.target.nodeName == 'IMG' && e.target.nodeName !== 'A') {
    console.log(check);
    console.log(num);
    if (check == 'false') {
      ary[num].check = 'true';
      ary[num].finished = 'confirm-finished';
      ary[num].del = 'finished';
    }
    else if(check == 'true'){
      ary[num].check = 'false';
      ary[num].finished = '';
      ary[num].del = '';
    }
  }
  if (e.target.nodeName == 'A') {
    ary.splice(num, 1);
    init();
    return
  }
  init();
}

//checkbox

// let check=document.querySelector('.confirm')
// check.addEventListener('click',checkbox)
// function checkbox(e){
//   console.log(e)
// }

// $(document).ready(function(){
//   $('.check').on('click',function(e){
//     let num = e.target.dataset.num
//     console.log('123')
//    $(this).toggleClass('confirm-finished');
//    $(this).parent().parent().toggleClass('finished');
//    if (e.target.className == 'confirm confirm-finished') {
//      ary[num].finished = 'finished';
//      ary[num].check = 'confirm-finished';
//    }
//    else{
//     ary[num].finished = '';
//     ary[num].check='';
//    }
//   })
// })

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
