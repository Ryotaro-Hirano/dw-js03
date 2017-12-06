/* **********************************************************

	複数の処理をまとめよう
	〜同じ処理は２度書かない！〜

	※悩んだらjs001で学んだ、consoleやalertを活用しよう!!

*********************************************************** */

// 配列を生成、初期化
var strArray = new Array(
			'photo1', 'photo2', 'photo3',
			'photo4', 'photo5', 'photo6',
			'photo7', 'photo8', 'photo9',
			'photo10'
		);

// ランダムな値を取得する関数
function getRandom(){
	// Math.random()は0以上1未満の少数点付きの値をランダムに生成する。
	// その少数点付きの値に10をかけているので、「rand」には、0以上10未満の少数点付きの値がランダムに生成される。
	var rand = Math.random() * 10;

	// Math.floor()は少数点を切り捨てる。
	// 結果「floorNum」には0〜9(全10個)までのランダムな整数が格納される

	var floorNum = Math.floor(rand);
	// 格納されたランダムな数字を呼び出し元に返す
	return floorNum;
}

// windowがloadされたら
window.onload = function(){
	// 下に定義されている関数「changeRandomImg」を呼び出す
	changeRandomImg();

	// hoverの対象となるid名の要素を取得
	var hoverDivID = document.getElementById('hoverDiv');

	// id名「hoverDiv」のマウスオーバー時
	hoverDivID.onmouseover = function(){
		// 下に定義されている関数「changeRandomImg」を呼び出す
		changeRandomImg();
	}

	// ランダムな値を取得し、画像を切り替える動作を一つの関数として定義する
	function changeRandomImg(){
		// 表示エリアのdivタグのidを取得
		var divID = document.getElementById('randomImg');

		// 上記のランダムな値を取得する関数を呼び出す
		var get_func_rand = getRandom();

		// strArray[xxx]　←　このxxxにランダムな数字が入れば
		// getRandom関数でランダムな値を取得し、変数「get_func_rand」に代入した値をここで使用する
		// 一番上で生成した配列からランダムな値が出力できる
		divID.innerHTML = '<img src="images/' + strArray[get_func_rand] + '.jpg" />';
	}
}



/* **********************************************************

--- 補足 ---

どこでも使用しそうな処理を関数化してまとめる事で、
動作を変更したい場合に関数の中を変更するだけで全ての動作を一括変更できる

別プロジェクトで使用したい場合、関数だけをコピペすれば簡単に機能を移植できる

*********************************************************** */
