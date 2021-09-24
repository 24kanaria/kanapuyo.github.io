var height = document.getElementById('height-input'); 
var weight = document.getElementById('weight-input'); 
var atk = document.getElementById('atk-input');
var cc = document.getElementById('cc-input');
var pp = document.getElementById('pp-input');

var button = document.getElementById('button-submit'); // 計測開始ボタン

// 出力要素を取得
var output = document.getElementById('bmi-output'); // 表示場所


var calcBmi = function () {
  // 1.入力された同時消しの値 を取得
  var h_value = height.value;
  // 2.入力された連鎖の値 を取得
  var w_value = weight.value;
  
  var a_value = atk.value;
  var c_value = cc.value;
  var p_value = pp.value;

 
  var rennsa =  [((w_value-4)*0.2+1)*p_value+1 ];
  var bairitu = [1+(h_value-3)*0.15*c_value];
  var bunnri = [a_value];

  var bmi= rennsa*bairitu*bunnri
  // 表示
  output.innerHTML = bmi;
}

// 計測開始ボタンが押されたときの処理を登録（イベントリスナー）
button.addEventListener('click', calcBmi);
