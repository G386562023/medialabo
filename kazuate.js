// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
//1,2回目で正解した時に3回目で叱られるためのk
let k = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
//hantei();
let b = document.querySelector('#get');
b.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kazu"]');
  let kazu = i.value;
  let y = Number(kazu);
  let yoso = y;
  kaisu = kaisu + 1;

  //console.log(kaisu + " 回目の予想: " + yoso); 
  let kai = document.querySelector("span#kaisu");
  kai.textContent = kaisu;
  let yos = document.querySelector("span#answer");
  yos.textContent = yoso;
  let kota = document.querySelector("p#result");

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール  
  if(kotae === yoso && kaisu <= 3){
    if(k === 0){
      kota.textContent = ("正解です。おめでとう！");
      k = k + 1;
    }else if(k === 1){
      kota.textContent = ("答えは " + kotae + " でした。 すでにゲームは終わっています。");
    }
  }else if(kotae !== yoso && kaisu === 3){
    kota.textContent = ("まちがい、残念でした答えは " + kotae + " です。");
  }else if(kotae !== yoso && kaisu <= 2 && yoso < kotae){
    kota.textContent = ("まちがい、答えはもっと大きいですよ。");
  }else if(kotae !== yoso && kaisu <= 2 && yoso > kotae){
    kota.textContent = ("まちがい、答えはもっと小さいですよ。");
  }else{
    kota.textContent = ("答えは " + kotae + " でした。 すでにゲームは終わっています。");
  } 
}