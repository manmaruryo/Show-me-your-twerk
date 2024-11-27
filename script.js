// ボタンと画像を取得
const showImageButton = document.getElementById('showImageButton');
const mainImage = document.getElementById('mainImage');

// ボタンクリック時の処理
showImageButton.addEventListener('click', function (event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    mainImage.style.display = 'block'; // 画像を表示
    showImageButton.style.display = 'none'; // ボタンを非表示にする
});
