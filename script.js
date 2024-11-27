// ボタンと画像を取得
const showImageButton = document.getElementById('showImageButton');
const mainImage = document.getElementById('mainImage');

// ボタンクリック時の処理
showImageButton.addEventListener('click', function (event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化

    // 画像の表示/非表示を切り替え
    if (mainImage.style.display === 'none' || mainImage.style.display === '') {
        mainImage.style.display = 'block'; // 画像を表示
    } else {
        mainImage.style.display = 'none'; // 画像を非表示
    }
});
