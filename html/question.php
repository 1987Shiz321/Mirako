<?php

require __DIR__.'/../lib/functions.php';

$id = '2';

$data = fetchById($id);

$formattedData = generateFormattedData($data);

$question = $formattedData['question'];
$answers = $formattedData['answers'];
$correcrAnswer = $formattedData['correctAnswer'];
$correcrAnswerValue = $answers[$correcrAnswer];
$explanation = $formattedData['explanation'];

include __DIR__.'/../template/question.tpl.php';