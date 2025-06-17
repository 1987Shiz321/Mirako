const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach((li) => li.addEventListener('click', checkClickedAnswer));

// 正しい答え
const correctAnswers = {
    1: 'A',
    2: 'B',
    3: 'B',
}

function checkClickedAnswer(event) {
    //選択した答えの要素を取得
    //event.currentTargetは、イベントが発生した要素を指す
    const clickedAnswerElement = event.currentTarget;
    //console.log(clickedAnswerElement.dataset.answer);

    //選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    //正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];

    //メッセージを入れる変数を用意
    let message;

    //カラーコードを入れる変数を用意
    let answerColorCode;

    //答えが正しいか判定
    if(selectedAnswer === correctAnswer) {
        //正解の時
        message = '正解です！';
        answerColorCode = '#000000';
    } else {
        //間違った答えだった時
        message = '不正解です。';
        answerColorCode = '#f05959';
    }

    alert(message);

    //間違い時のみ正解の色を強調
    document.querySelector('span#correct-answer').style.color = answerColorCode;

    //答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}
