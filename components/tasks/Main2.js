import {changeInnerP} from '../questions/guestions.js'

let Main2 = {
  css: /*css*/ `
    main {
      flex: 1;
      padding: 20px;
    }
  `,
  html: /*html*/ `
  <main>
    <h1>Системы счисления</h1>
    <ol class="quest">
      <questions/Q14_1_2 qid="q1"/>
      <hr>
      <questions/Q14_1_2 qid="q2"/>
      <hr>
      <questions/Q14_1_2 qid="q3"/>
      <hr>
      <questions/Q14_1_2 qid="q4"/>
    </ol>
    <RezQuestions />
  </main>
  `,
  js: {
    var: {
      VALUE_1: 49,
      success1: false,
      VALUE_2: 469034148,
      success2: false,
      VALUE_3: 212,
      success3: false,
      VALUE_4: 23,
      success4: false,
      VALUE_5: 229,
      success5: false
    },
    func: {
      /**
       * Заполнение блоков с вопросами контентом
       */
      fillQuestion() {
        //q1
        changeInnerP(
          document.querySelector('#q1>p'),
          /*html*/ `
          Значения выражения 5<sup>3</sup> + 4<sup>2</sup> + 3<sup>1</sup> − x
при всех значениях натурального x, меньших 100, записывают в пятеричной системе счисления.

Сколько чётных пятеричных чисел будет записано?
      `
        );

        //q2
        changeInnerP(
          document.querySelector('#q2>p'),
          /*html*/ `
          Операнды арифметического выражения записаны в системе счисления с основанием 19.<br><br>
98897x21 + 2x923<br><br>

В записи чисел переменной x обозначена неизвестная цифра из алфавита 19-ричной системы счисления.<br><br>

Определите наибольшее значение x, при котором значение данного арифметического выражения кратно 18. Для найденного x вычислите частное от деления значения арифметического выражения на 18 и укажите его в ответе в десятичной системе счисления.
Основание системы счисления указывать не нужно.
      `
        );

        //q3
        changeInnerP(
          document.querySelector('#q3>p'),
          /*html*/ `
          Значение арифметического выражения<br><br>
36^65 + 6^112 − 136<br><br>
записали в системе счисления с основанием 6.<br><br>

Укажите последние три цифры получившейся записи.
      `
        );

        //q4
        changeInnerP(
          document.querySelector('#q4>p'),
          /*html*/ `
          Значение арифметического выражения<br><br>
5^23 + 25^12<br><br>
записали в системе счисления с основанием 5.<br><br>

Сколько цифр 0 содержится в этой записи?
      `
        );

      },
      /**
       * Устанавливает нужные значения для компонента вопросы
       *
       * @param {object} e Объект события
       */
      setQuestProperty(e) {
        let target = e.target;

        components.Main2.js.func.fillQuestion();

        // Обработка ответов:
        var q1 = document.querySelector('#q1');
        var btn1 = document.querySelector('#q1 button');

        var q2 = document.querySelector('#q2');
        var btn2 = document.querySelector('#q2 button');

        var q3 = document.querySelector('#q3');
        var btn3 = document.querySelector('#q3 button');

        var q4 = document.querySelector('#q4');
        var btn4 = document.querySelector('#q4 button');



        var variables = components.Main2.js.var

        if (target == btn1) {
          components.Q14_1_2.js.var.quest = q1;
          components.Q14_1_2.js.var.value = variables.VALUE_1;
          components.Q14_1_2.js.var.rez = variables.success1
          return [variables, 1]
        } else if (target == btn2) {
          components.Q14_1_2.js.var.quest = q2;
          components.Q14_1_2.js.var.value = variables.VALUE_2;
          components.Q14_1_2.js.var.rez = variables.success2
          return [variables, 2]
        } else if (target == btn3) {
          components.Q14_1_2.js.var.quest = q3;
          components.Q14_1_2.js.var.value = variables.VALUE_3;
          components.Q14_1_2.js.var.rez = variables.success3
          return [variables, 3]
        } else if (target == btn4) {
          components.Q14_1_2.js.var.quest = q4;
          components.Q14_1_2.js.var.value = variables.VALUE_4;
          components.Q14_1_2.js.var.rez = variables.success4
          return [variables, 4]
        } else if (target == btn5) {
          components.Q14_1_2.js.var.quest = q5;
          components.Q14_1_2.js.var.value = variables.VALUE_5;
          components.Q14_1_2.js.var.rez = variables.success5
          return [variables, 5]
        }
      },
    }
  }
};

let timerFillQuestions = setInterval(() => {
  if (document.querySelector('main')) {
    components.Main2.js.func.fillQuestion();

    clearInterval(timerFillQuestions);
  }
}, 100);

export default Main2
