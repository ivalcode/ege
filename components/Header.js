let Header = {
  css: /*css*/`
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 30px 0 30px;
      background-color: var(--fon);
      color: var(--text-fon);
      font-size: 20px;
      align-items: center;
    }

    header a {
      color: var(--text-fon);
    }

    .logo {
      font-weight: 900;
      font-size: 28px;
      display: flex;
      align-items: center;
    }

    header > img {
      height: 100px;
    }

    nav ul {
      display: flex;
    }

    nav li {
      list-style: none;
    }
  `,
  html: /*html*/ `
    <header>
      <p class="logo">ЕГЭ</p>
      <img src="/logo.svg" alt="" width="100%" height="100%">
      <nav>
        <ul>
          <li>
            <a href="/index.html">тема 1.1</a>
          </li>
          <li>
            <a href="/pages/2/index.html">тема 1.2</a>
          </li>
        </ul>
      </nav>
    </header>
    `,
  js: {}
}

export default Header
