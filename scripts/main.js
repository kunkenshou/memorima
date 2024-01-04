
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

console.log(check(true));




