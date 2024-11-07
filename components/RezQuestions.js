RezQuestions = {
  css: {
    '.rez': {
      position: 'fixed',
      top:'100px',
      right: 0,
      'background-color': 'var(--fon)',
      color: 'var(--text-fon)',
      width: '160px',
      height: '50px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
  },
  html: `<div class="rez">
          <b>Ответы</b>:&nbsp;<span>0 / 5</span>
        </div>
         `,
  js: {
    var: {
      score: 0,
      countQ: 5
    }
  }
}
