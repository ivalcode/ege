const components_path = 'components'

runSimply('app', 'App');

setTimeout(() => {
  let score = 0
  let countQ = 5

  var q1 = document.querySelector('#q1')
  var btn1 = document.querySelector('#q1 button')
  const VALUE_1 = 227

  var q2 = document.querySelector('#q2')
  var btn2 = document.querySelector('#q2 button')
  const VALUE_2 = 117

  var q3 = document.querySelector('#q3')
  var btn3 = document.querySelector('#q3 button')
  const VALUE_3 = 794

  var q4 = document.querySelector('#q4')
  var btn4 = document.querySelector('#q4 button')
  const VALUE_4 = 156

  var q5 = document.querySelector('#q5')
  var btn5 = document.querySelector('#q5 button')
  const VALUE_5 = 229

  document.addEventListener('click', event => {
    let target = event.target

    if(target == btn1) {
      valQ(q1, VALUE_1)
    } else if(target == btn2) {
      valQ(q2, VALUE_2)
    } else if(target == btn3) {
      valQ(q3, VALUE_3)
    } else if(target == btn4) {
      valQ(q4, VALUE_4)
    } else if(target == btn5) {
      valQ(q5, VALUE_5)
    }
  })

  function valQ(quest, value) {
    let rez = document.createElement('p')
    let response = quest.querySelector('input').value
    let scoreRez = document.querySelector('.rez>span')

    if(response == value) {
      rez.textContent = 'Верно! ' + response
      rez.className = 'success'
      score++
      scoreRez.innerHTML = score + '/' + countQ
    } else {
      rez.textContent = 'Ошибка! Вы ответили: ' + response
      rez.className = 'error'
    }
    quest.append(rez)
  }
}, 1000)
