import {checkResponse} from './guestions.js'

let Q14_1_2 = {
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
      checkResponse(e) {
        checkResponse(e, components.Q14_1_2, components.Main2)
      },
    },
    event: [
        {type: 'click', selector: '.quest__checkBtn', handler: 'checkResponse'}
      ],
  },
};

export default Q14_1_2
