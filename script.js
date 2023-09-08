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
});

function addBookToLibrary(book){
    myLibrary.push(book);
}


