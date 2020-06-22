// THE ES% WAU
// book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// ui constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  // insert col
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};

UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // insert alert
  container.insertBefore(div, form);
  // timeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    // dom traversing
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};
// event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  console.log(title, author, isbn);
  // instantiate a book
  const book = new Book(title, author, isbn);

  const ui = new UI();

  // validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('please check entered values', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);
    // show success
    ui.showAlert('book added', 'success');
    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();

  ui.deleteBook(e.target);
  // show message
  ui.showAlert('book removed', 'success');
  e.preventDefault();
});
