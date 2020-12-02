class Widget {
  constructor(container, unreadArticlesQuanity) {
    this.container = container;
    this.isOpened = false;
    this.unreadArticlesQuanity = unreadArticlesQuanity;
    this.widgetContent = 'Статьи';

    this._addWidget();

    this.widget = this.container.querySelector('.widget');
    
    this._addNotification();
  }

  // Добавляет контейнер "widget" в то место DOM, которое передали данному классу
  _addWidget() {
    this.container.insertAdjacentHTML('afterbegin', `<div class="widget">${this.widgetContent}</div>`);
  }

  // Добавляет значок количества непрочитанных статей
  _addNotification() {
    this.widget.insertAdjacentHTML('afterbegin', `<p class="widget__notification">${this.unreadArticlesQuanity}</p>`);
  }

  // Добавляет статью в виджет
  addArticle(article) {
    this.widget.insertAdjacentHTML('beforeend', article);
  }

  // Добавляет заголовок к виджету с иконкой закрытия
  addHeader() {
    const templ = 
      `<div class="widget__header">
        <h3 class="widget__header-title">${this.widgetContent}</h3>
        <img class="widget__header-close-icon" src="../images/cross-white.png" alt="Close-icon">
      </div>`;
    this.widget.insertAdjacentHTML('afterbegin', templ);
  }

  // Меняет состояние виджета на открыт/закрыт
  setIsOpened(state) {
    if (state) {
      this.isOpened = state;
    } else {
      this.isOpened = !this.isOpened;
    }
    this.render();
  }

  // Сокращает число непрочитанных статей после перехода по ссылке
  reduceUnreadArticlesQuanity(){
    this.unreadArticlesQuanity = this.unreadArticlesQuanity - 1;
  } 

  // Перерисовывает виджет, исходя из состояния
  render() {
    if ( this.isOpened ) {
      this.widget.classList.add('widget_is-opened');
      this.widget.innerHTML = '';
      this.addHeader();
    } else {
      this.widget.innerHTML = this.widgetContent;

      if ( this.unreadArticlesQuanity !== 0 ) {
        this._addNotification();
      }

      this.widget.classList.remove('widget_is-opened');
    }  
  }
}

export default Widget;