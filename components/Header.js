Header = {
  css: {
    header: {
      display: 'flex',
      'justify-content': 'space-between',
      padding: '0 30px 0 30px',
      'background-color': 'var(--fon)',
      color: 'var(--text-fon)',
      'font-size': '20px',
      'align-items': 'center',
    },

    '.logo': {
      'font-weight': 900,
      'font-size': '28px',
      display: 'flex',
      'align-items': 'center',
    },

    'header>img': {
      height: '100px'
    },

    'nav>ul>li': {
      'list-style': 'none'
    }
  },
  html: /*html*/ `
    <header>
      <p class="logo">ЕГЭ</p>
      <img src="logo.svg" alt="">
      <nav>
        <ul>
          <li>тема 1.1</li>
        </ul>
      </nav>
    </header>
    `,
  js: {}
}
