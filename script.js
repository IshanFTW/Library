const myLibrary = [];

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const form = document.getElementById('book-form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
});

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    myLibrary.forEach(function(book, index){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}<td>
        <td>${book.author}<td>
        <td>${book.pages}<td>
        <td>${book.read ? 'yes' : 'No'}<td>
        `;
        bookList.appendChild(row);
    });
}


