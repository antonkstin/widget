// Создает статью в текстовом формате
// Состояние прочитано/не прочитано заносится в специальный
// класс с префиксом js_state

class Article {
  create(props) {
    return (
      `<a class="article js_state_${props.state}" href="${props.link}" target="__blank">
        <h3 class="article__title">${props.title}</h3>
        <p class="article__info">${props.author} - ${props.time}, ${props.date}</p>
      </a>`
    );
  }

  setState(article) {
    article.classList.remove('js_state_false');
    article.classList.add('js_state_true');
  }
}

export default Article;