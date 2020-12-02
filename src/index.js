import data from './scripts/initialData';
import Widget from './scripts/Widget';
import Article from './scripts/Article';
import './index.css';


// Проверяется число непрочитанных статей для вывода в уведомлении
let unreadArticles = 0;
data.forEach((item) => {
  if (!item.state) {
    unreadArticles++;
  }
});

const widget = new Widget(document.querySelector('.root'), unreadArticles);
const article = new Article();


// Обработчик на виджет: раскрывает/скрывает
// Уменьшает количество непрочитанных статей
widget.widget.addEventListener('click', (event) => {
  if ( !widget.isOpened ) {
    widget.setIsOpened(true);

    data.forEach((item) => {
      widget.addArticle(article.create(item));
    });
  } else {

    if ( event.target.classList.contains('widget__header-close-icon') ) {
      widget.setIsOpened(false);
    } else if ( event.target.classList.contains('article') && event.target.classList.contains('js_state_false') ) {
      widget.reduceUnreadArticlesQuanity();
      article.setState(event.target);
      data.find((item) => { return item.title === event.target.querySelector('.article__title').textContent }).state = true;
    }

  }
});