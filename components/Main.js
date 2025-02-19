import {changeInnerP} from './questions/guestions.js'

let Main = {
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
  js: {
    var: {
      VALUE_1: 227,
      success1: false,
      VALUE_2: 117,
      success2: false,
      VALUE_3: 794,
      success3: false,
      VALUE_4: 156,
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
          document.querySelector('#q1>p:nth-child(2)'),
          /*html*/ `
          НАЧАЛО<br>&nbsp;ПОКА нашлось (2222) ИЛИ нашлось (7777) <br>
            &nbsp;&nbsp;ЕСЛИ нашлось (2222)<br>
            &nbsp;&nbsp;&nbsp;ТО заменить (2222, 77)<br>
            &nbsp;&nbsp;ИНАЧЕ заменить (7777, 22)<br>
            &nbsp;&nbsp;&nbsp;ТО заменить (444, 88)<br>
            &nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
            &nbsp;КОНЕЦ ПОКА<br>
            КОНЕЦ
      `
        );
        changeInnerP(
          document.querySelector('#q1>p:nth-child(3)'),
          /*html*/ `
          Определите строку, которая получится после применения этой программы к входной строке, содержащей 47 цифр «7». В ответе укажите только полученную строку.`
        );

        //q2
        changeInnerP(
          document.querySelector('#q2>p:nth-child(2)'),
          /*html*/ `
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
        `
        );
        changeInnerP(
          document.querySelector('#q2>p:nth-child(3)'),
          /*html*/ `
          На вход приведённой выше программе поступает строка, содержащая n цифр 5. Определите наименьшее значение n, большее 100 и кратное 9, при котором в результате работы алгоритма получится строка с максимальным числовым значением.`
        );

        //q3
        changeInnerP(
          document.querySelector('#q3>p:nth-child(2)'),
          /*html*/ `
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
      `
        );
        changeInnerP(
          document.querySelector('#q3>p:nth-child(3)'),
          /*html*/ `
          На вход приведённой выше программы поступает строка из 120 цифр, содержащая по 40 цифр 4, 7 и 9, расположенных в произвольном порядке.<br><br>

          Определите, какие цифры будут находиться на 25-м, 73-м и 105-м местах строки, получившейся в результате выполнения программы. Цифры в строке нумеруются последовательно слева направо, самая левая имеет номер 1, следующая — номер 2 и т. д.<br><br>

          В ответе запишите три полученные цифры подряд без пробелов и разделителей в порядке возрастания номеров их мест в получившейся строке. Так, например, если бы на 25-м месте стояла цифра 1, на 73-м — 2, а на 105-м — 3, то был бы ответ 123.`
        );

        //q4
        changeInnerP(
          document.querySelector('#q4>p:nth-child(2)'),
          /*html*/ `
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
      `
        );
        changeInnerP(
          document.querySelector('#q4>p:nth-child(3)'),
          /*html*/ `
          На вход приведённой выше программе поступает строка, начинающаяся с цифры «5», а затем содержащая n цифр «2» (3 < n < 10 000).<br><br>

          Определите наибольшее значение n, при котором сумма цифр в строке, получившейся в результате выполнения программы, равна 64.`
        );

        //q5
        changeInnerP(
          document.querySelector('#q5>p:nth-child(2)'),
          /*html*/ `
          НАЧАЛО<br>
          &nbsp;ПОКА  нашлось (22222)  ИЛИ нашлось (9999)<br>
          &nbsp;&nbsp;ЕСЛИ  нашлось (22222)<br>
          &nbsp;&nbsp;&nbsp;ТО заменить (22222, 99)<br>
          &nbsp;&nbsp;ИНАЧЕ заменить (9999, 2)<br>
          &nbsp;&nbsp;КОНЕЦ ЕСЛИ<br>
          &nbsp;КОНЕЦ ПОКА<br>
            КОНЕЦ
      `
        );
        changeInnerP(
          document.querySelector('#q5>p:nth-child(3)'),
          /*html*/ `
          Какая строка получится в результате применения приведённой ниже программы к строке, состоящей из 135 идущих подряд цифр 9? В ответе запишите полученную строку.`
        );
      },
      /**
       * Устанавливает нужные значения для компонента вопросы
       *
       * @param {object} e Объект события
       */
      setQuestProperty(e) {
        let target = e.target;

        components.Main.js.func.fillQuestion();

        // Обработка ответов:
        var q1 = document.querySelector('#q1');
        var btn1 = document.querySelector('#q1 button');

        var q2 = document.querySelector('#q2');
        var btn2 = document.querySelector('#q2 button');

        var q3 = document.querySelector('#q3');
        var btn3 = document.querySelector('#q3 button');

        var q4 = document.querySelector('#q4');
        var btn4 = document.querySelector('#q4 button');

        var q5 = document.querySelector('#q5');
        var btn5 = document.querySelector('#q5 button');

        var variables = components.Main.js.var

        if (target == btn1) {
          components.Q12_1_1.js.var.quest = q1;
          components.Q12_1_1.js.var.value = variables.VALUE_1;
          components.Q12_1_1.js.var.rez = variables.success1
          return [variables, 1]
        } else if (target == btn2) {
          components.Q12_1_1.js.var.quest = q2;
          components.Q12_1_1.js.var.value = variables.VALUE_2;
          components.Q12_1_1.js.var.rez = variables.success2
          return [variables, 2]
        } else if (target == btn3) {
          components.Q12_1_1.js.var.quest = q3;
          components.Q12_1_1.js.var.value = variables.VALUE_3;
          components.Q12_1_1.js.var.rez = variables.success3
          return [variables, 3]
        } else if (target == btn4) {
          components.Q12_1_1.js.var.quest = q4;
          components.Q12_1_1.js.var.value = variables.VALUE_4;
          components.Q12_1_1.js.var.rez = variables.success4
          return [variables, 4]
        } else if (target == btn5) {
          components.Q12_1_1.js.var.quest = q5;
          components.Q12_1_1.js.var.value = variables.VALUE_5;
          components.Q12_1_1.js.var.rez = variables.success5
          return [variables, 5]
        }
      },
    }
  }
};

let timerFillQuestions = setInterval(() => {
  if (document.querySelector('main')) {
    components.Main.js.func.fillQuestion();

    clearInterval(timerFillQuestions);
  }
}, 100);

export default Main
