let Q12_1_1 = {
  css: /*css*/ `
    .error, .success {
      font-size: 1rem;
      margin-bottom: 0;
    }

    .error {
      color: var(--accent);
    }

    .success {
      color: var(--success);
    }

    .quest>li {
      margin-bottom: 4rem;
    }

    .quest p:first-child {
      font-weight: 900;
    }

    .quest input,.quest button {
      font-size: 20px;
      font-weight: 900;
      height: 30px;
    }

    .quest button {
      height: 36px;
      background-color: var(--fon);
      color: white;
    }

    .quest hr {
      border: 1px solid var(--fon);
    }
  `,
  html: /*html*/ `
      <li id="{{ qid }}" class="quest__text">
        <p>
          Дана программа для Редактора:
        </p>
        <p></p>
        <p></p>
        <input type="text">
        <button class="quest__checkBtn">Проверить</button>
      </li>
         `,
  js: {
    var: {
      value: null,
      rez: false,
      quest: null,
    },
    func: {
      /**
       * Заполнение вопросов контентом
       *
       * @param {object} elem Элемент параграфа, которому заполняем контент
       * @param {string} innerHTML Новый HTML-код контента
       */
      changeInnerP(elem, innerHTML) {
        elem.innerHTML = innerHTML;
      },

      /**
       * Проверка ответа и установка результата
       */
      checkResponse(e) {
        var variables = components.Main.js.func.setQuestProperty(e);

        if (components.Q12_1_1.js.var.rez) return;

        let rez = document.createElement('p');
        let response =
          components.Q12_1_1.js.var.quest.querySelector('input').value;
        let scoreRez = document.querySelector('.rez>span');

        if (response == components.Q12_1_1.js.var.value) {
          rez.textContent = 'Верно! ' + response;
          rez.className = 'success';
          components.RezQuestions.js.var.score++;
          scoreRez.innerHTML =
            components.RezQuestions.js.var.score + ' / ' + components.RezQuestions.js.var.countQ;
          components.Q12_1_1.js.var.rez = true;
        } else {
          rez.textContent = 'Ошибка! Вы ответили: ' + response;
          rez.className = 'error';
        }
        components.Q12_1_1.js.var.quest.append(rez);
        components.Q12_1_1.js.var.quest.querySelector('input').value = ''

        switch (variables[1]) {
          case 1:
            variables[0].success1 = components.Q12_1_1.js.var.rez;
            break;
          case 2:
            variables[0].success2 = components.Q12_1_1.js.var.rez;
            break;
          case 3:
            variables[0].success3 = components.Q12_1_1.js.var.rez;
            break;
          case 4:
            variables[0].success4 = components.Q12_1_1.js.var.rez;
            break;
          case 5:
            variables[0].success5 = components.Q12_1_1.js.var.rez;
            break;
        }
      },
    },
    event: [
        {type: 'click', selector: '.quest__checkBtn', handler: 'checkResponse'}
      ],
  },
};

export default Q12_1_1
