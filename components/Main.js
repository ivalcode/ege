Main = {
  css: /*css*/ `
    main {
      flex: 1;
      padding: 20px;
    }
  `,
  html: /*html*/ `
  <main>
    <h1>Основы программирвоания</h1>
    <ol class="quest">
      <questions/Q12_1_1 qid="q1"/>
      <hr>
      <questions/Q12_1_1 qid="q2"/>
      <hr>
      <questions/Q12_1_1 qid="q3"/>
      <hr>
      <questions/Q12_1_1 qid="q4"/>
      <hr>
      <questions/Q12_1_1 qid="q5"/>
    </ol>
    <RezQuestions />
  </main>
  `,
  js: {},
};

/**
 * Заполнение блоков с вопросами контентом
 */
function fillQuestion() {
  //q1
  document.querySelector('#q1>p:nth-child(2)').innerHTML = /*html*/ `
  НАЧАЛО<br>&nbsp;ПОКА нашлось (2222) ИЛИ нашлось (7777) <br>
  &nbsp;&nbsp;ЕСЛИ нашлось (2222)<br>
  &nbsp;&nbsp;&nbsp;ТО заменить (2222, 77)<br>
  &nbsp;&nbsp;ИНАЧЕ заменить (7777, 22)<br>
  &nbsp;&nbsp;&nbsp;ТО заменить (444, 88)<br>
  &nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
  &nbsp;КОНЕЦ ПОКА<br>
  КОНЕЦ
`;
  document.querySelector('#q1>p:nth-child(3)').innerHTML = /*html*/ `
Определите строку, которая получится после применения этой программы к входной строке, содержащей 47 цифр «7». В ответе укажите только полученную строку.`;

  //q2
  document.querySelector('#q2>p:nth-child(2)').innerHTML = /*html*/ `
НАЧАЛО<br>
&nbsp;ПОКА нашлось(555) ИЛИ нашлось(11) ИЛИ нашлось(2)<br>
&nbsp;&nbsp;ЕСЛИ нашлось(555)<br>
&nbsp;&nbsp;&nbsp;ТО заменить(555, 1)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;&nbsp;ЕСЛИ нашлось(11)<br>
&nbsp;&nbsp;&nbsp;ТО заменить(11, 25)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;&nbsp;ЕСЛИ нашлось(2)<br>
&nbsp;&nbsp;&nbsp;ТО заменить(2, 5)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;КОНЕЦ ПОКА<br>
  КОНЕЦ<br>
`;
  document.querySelector('#q2>p:nth-child(3)').innerHTML = /*html*/ `
На вход приведённой выше программе поступает строка, содержащая n цифр 5. Определите наименьшее значение n, большее 100 и кратное 9, при котором в результате работы алгоритма получится строка с максимальным числовым значением.`;

  //q3
  document.querySelector('#q3>p:nth-child(2)').innerHTML = /*html*/ `
  НАЧАЛО<br>
    &nbsp;ПОКА нашлось (47) ИЛИ нашлось (49) ИЛИ нашлось (97)<br>
    &nbsp;&nbsp;ЕСЛИ  нашлось (47)<br>
    &nbsp;&nbsp;&nbsp;ТО заменить (47, 74)<br>
    &nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
    &nbsp;&nbsp;ЕСЛИ  нашлось (49)<br>
    &nbsp;&nbsp;&nbsp;ТО заменить (49, 94)<br>
    &nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
    &nbsp;&nbsp;ЕСЛИ  нашлось (97)<br>
    &nbsp;&nbsp;&nbsp;ТО заменить (97, 79)<br>
    &nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
    &nbsp;КОНЕЦ ПОКА<br>
      КОНЕЦ
`;
  document.querySelector('#q3>p:nth-child(3)').innerHTML = /*html*/ `
На вход приведённой выше программы поступает строка из 120 цифр, содержащая по 40 цифр 4, 7 и 9, расположенных в произвольном порядке.<br><br>

Определите, какие цифры будут находиться на 25-м, 73-м и 105-м местах строки, получившейся в результате выполнения программы. Цифры в строке нумеруются последовательно слева направо, самая левая имеет номер 1, следующая — номер 2 и т. д.<br><br>

В ответе запишите три полученные цифры подряд без пробелов и разделителей в порядке возрастания номеров их мест в получившейся строке. Так, например, если бы на 25-м месте стояла цифра 1, на 73-м — 2, а на 105-м — 3, то был бы ответ 123.`;

  //q4
  document.querySelector('#q4>p:nth-child(2)').innerHTML = /*html*/ `
НАЧАЛО<br>
&nbsp;ПОКА нашлось (52) ИЛИ нашлось (2222) ИЛИ нашлось (1122)<br>
&nbsp;&nbsp;ЕСЛИ нашлось (52)<br>
&nbsp;&nbsp;&nbsp;ТО заменить (52, 11)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;&nbsp;ЕСЛИ нашлось (2222)<br>
&nbsp;&nbsp;&nbsp;ТО заменить (2222, 5)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;&nbsp;ЕСЛИ нашлось (1122)<br>
&nbsp;&nbsp;&nbsp;ТО заменить (1122, 25)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;КОНЕЦ ПОКА<br>
  КОНЕЦ
`;
  document.querySelector('#q4>p:nth-child(3)').innerHTML = /*html*/ `
На вход приведённой выше программе поступает строка, начинающаяся с цифры «5», а затем содержащая n цифр «2» (3 < n < 10 000).<br><br>

Определите наибольшее значение n, при котором сумма цифр в строке, получившейся в результате выполнения программы, равна 64.`;

  //q5
  document.querySelector('#q5>p:nth-child(2)').innerHTML = /*html*/ `
НАЧАЛО<br>
&nbsp;ПОКА  нашлось (22222)  ИЛИ нашлось (9999)<br>
&nbsp;&nbsp;ЕСЛИ  нашлось (22222)<br>
&nbsp;&nbsp;&nbsp;ТО заменить (22222, 99)<br>
&nbsp;&nbsp;ИНАЧЕ заменить (9999, 2)<br>
&nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
&nbsp;КОНЕЦ ПОКА<br>
  КОНЕЦ
`;
  document.querySelector('#q5>p:nth-child(3)').innerHTML = /*html*/ `
Какая строка получится в результате применения приведённой ниже программы к строке, состоящей из 135 идущих подряд цифр 9? В ответе запишите полученную строку.`;
}

/**
 * Проверка ответа
 *
 * @param {object} quest Элемент вопроса
 * @param {number} value Ответ пользователя
 *
 * @return boolean Верный ли ответ
 */
function valQ(quest, value) {
  let rez = document.createElement('p');
  let response = quest.querySelector('input').value;
  let scoreRez = document.querySelector('.rez>span');
  let success = false

  if (response == value) {
    rez.textContent = 'Верно! ' + response;
    rez.className = 'success';
    RezQuestions.js.var.score++;
    scoreRez.innerHTML =
      RezQuestions.js.var.score + ' / ' + RezQuestions.js.var.countQ;
    success = true
  } else {
    rez.textContent = 'Ошибка! Вы ответили: ' + response;
    rez.className = 'error';
  }
  quest.append(rez);

  return success
}

let timerFillQuestions = setInterval(() => {
  if (document.querySelector('main')) {
    fillQuestion()

    // Обработка ответов:
    var q1 = document.querySelector('#q1');
    var btn1 = document.querySelector('#q1 button');
    const VALUE_1 = 227;
    let success1 = false

    var q2 = document.querySelector('#q2');
    var btn2 = document.querySelector('#q2 button');
    const VALUE_2 = 117;
    let success2 = false

    var q3 = document.querySelector('#q3');
    var btn3 = document.querySelector('#q3 button');
    const VALUE_3 = 794;
    let success3 = false

    var q4 = document.querySelector('#q4');
    var btn4 = document.querySelector('#q4 button');
    const VALUE_4 = 156;
    let success4 = false

    var q5 = document.querySelector('#q5');
    var btn5 = document.querySelector('#q5 button');
    const VALUE_5 = 229;
    let success5 = false

    document.addEventListener('click', (event) => {
      let target = event.target;

      if (target == btn1) {
        let rez
        if(!success1)
          rez = valQ(q1, VALUE_1);
        if(rez)
          success1 = true
      } else if (target == btn2) {
        if(!success2)
          rez = valQ(q2, VALUE_2);
        if(rez)
          success2 = true
      } else if (target == btn3) {
        if(!success3)
          rez = valQ(q3, VALUE_3);
        if(rez)
          success3 = true
      } else if (target == btn4) {
        if(!success4)
          rez = valQ(q4, VALUE_4);
        if(rez)
          success4 = true
      } else if (target == btn5) {
        if(!success5)
          rez = valQ(q5, VALUE_5);
        if(rez)
          success5 = true
      }
    });

    clearInterval(timerFillQuestions);
  }
}, 100);
