/*
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": 
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ,
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};


////////// 課題3-2 ここからプログラムを書こう
console.log("あいうえお");
console.log(data.coord); 
console.log(data.weather); 
console.log(data.base); 
console.log(data.main);
console.log(data.visibility);
console.log(data.wind);
console.log(data.clouds);
console.log(data.dt);
console.log(data.sys);
console.log(data.timezone);
console.log(data.id);
console.log(data.name);
console.log(data.cod);  


*/
//print(data);

function print(data){

  let h3 = document.querySelector('h3');
  h3.textContent = data.name;

  let remove = document.querySelectorAll("li"); 
  for (let n of remove){
    n.remove();
    } 

  let ul = document.querySelector("ul#ago"); 

  let listW = document.createElement("li");
  listW.textContent ="天気: " + data.weather[0].description;
  ul.insertAdjacentElement("beforeend", listW); 
  /*
  let listL = document.createElement("li");
  listL.textContent ="場所:" + data.name;
  ul.insertAdjacentElement("beforeend", listL); 
  */
  let listMin = document.createElement("li");
  listMin.textContent ="最低気温: " + data.main.temp_min +" ℃";
  ul.insertAdjacentElement("beforeend", listMin);

  let listMax = document.createElement("li");
  listMax.textContent ="最高気温: " + data.main.temp_max +" ℃";
  ul.insertAdjacentElement("beforeend", listMax); 

  let listwet = document.createElement("li");
  listwet.textContent ="湿度: " + data.main.humidity +" %";
  ul.insertAdjacentElement("beforeend", listwet);

  let listspeed = document.createElement("li");
  listspeed.textContent ="風速: " + data.wind.speed +" m/s";
  ul.insertAdjacentElement("beforeend", listspeed); 



}


//検索ボタンのコード

// 1. イベントハンドラの登録
let b1 = document.querySelector('button#kensaku');
b1.addEventListener('click', getplace);

let o;
// 2. イベントハンドラの定義
function getplace() {
  let s = document.querySelector('select#place');
  let idx = s.selectedIndex; //idx 番目の optionが選択された

  let os = s.querySelectorAll('option'); //sの子要素 optionを全て検索
  o = os.item(idx); //os　の idx　番目の要素

	//console.log('選択された ' + idx + ' 番目の option の情報');
  console.log(' value=' + o.getAttribute('value')); //id属性を表示
  //console.log(' textContent=' +o.textContent);
}



//通信処理
let b = document.querySelector('#kensaku');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
    // URL を設定

    //1.検索キーを取得する
    let key = o.getAttribute('value');
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
    
