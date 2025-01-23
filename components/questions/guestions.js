/**
       * Заполнение вопросов контентом
       *
       * @param {object} elem Элемент параграфа, которому заполняем контент
       * @param {string} innerHTML Новый HTML-код контента
       */
function changeInnerP(elem, innerHTML) {
  elem.innerHTML = innerHTML;
}

/**
       * Проверка ответа и установка результата
       */
function checkResponse(e, quest, main) {
  var variables = main.js.func.setQuestProperty(e);

  if (quest.js.var.rez) return;

  let rez = document.createElement('p');
  let response =
    quest.js.var.quest.querySelector('input').value;
  let scoreRez = document.querySelector('.rez>span');

  if (response == quest.js.var.value) {
    rez.textContent = 'Верно! ' + response;
    rez.className = 'success';
    components.RezQuestions.js.var.score++;
    scoreRez.innerHTML =
      components.RezQuestions.js.var.score + ' / ' + components.RezQuestions.js.var.countQ;
    quest.js.var.rez = true;
  } else {
    rez.textContent = 'Ошибка! Вы ответили: ' + response;
    rez.className = 'error';
  }
  quest.js.var.quest.append(rez);
  quest.js.var.quest.querySelector('input').value = ''

  switch (variables[1]) {
    case 1:
      variables[0].success1 = quest.js.var.rez;
      break;
    case 2:
      variables[0].success2 = quest.js.var.rez;
      break;
    case 3:
      variables[0].success3 = quest.js.var.rez;
      break;
    case 4:
      variables[0].success4 = quest.js.var.rez;
      break;
    case 5:
      variables[0].success5 = quest.js.var.rez;
      break;
  }
}

export {changeInnerP, checkResponse}
