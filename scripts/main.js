
/*DOMの基本
HTMLからIDを取得してコンソールに表示
documentというオブジェクト対して
getElementというメソッドを使って
textというIDを取得し
コンソールに表示するという基本
var p = document.getElementById('text');

    console.log( p );
*/



/*JavaScriptでCSSを操作する基
技術
documentオブジェクトを
getElementメソッドで
HTMLのIDを取得
elem変数に代入
変数をstyleで編集という基本

var elem = document.getElementById("text");
  
elem.style.fontSize = '32px';
elem.style.color = '#f00';
elem.style.marginLeft = '100px';
*/

const check = function(toggle){
  if (toggle == true) {
    return 'テスト';
  }
  }
//  var toggle = '';//buttonが投下されたらtrueという変数を代入する。
//  console.log(toggle);//consoleに変数が代入されていたら、trueと出力
/*
  if(toggle == '0'){
  var toggle = 'true';
  console.log(toggle);
elseif(toggle == 'true')
  var toggle = 'false';
}
*/
/*  var toggle = 'false';
  const answer = document.getElementById("answer");

answer.style.background = '#f00';
*/

/*ボタンを押して表示変わる処理のロジック
let flag = 2;
if (flag % 2 == 0){
  console.log('カード裏');
} else {
  console.log('カード表')
}
*/

let count = 1;
function toggle(flag){
    var flag = count++
    //console.log(flag)
        if (flag % 2 == 0){
      answer.style.background = '#ffa';
          console.log('カード表');
        } else {
          console.log('カード裏');
      answer.style.background = '#f00';
        }
    return 
  }
      //console.log(count)


  

let button = document.getElementById('btn');

/*
button.addEventListener('click', function(event){
    count++;
    console.log(count);
    if (count == count / 2 == 0){
      answer.style.background = '#f00';
    } else ount / 2 == 1
      answer.style.background = '#ffa';
    }
});
*/
  
const test = function(){
console.log(button);
}


