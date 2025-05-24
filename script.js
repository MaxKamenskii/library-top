const myLibrary = [];

function Book(id, title, author, pages, read) {
    //the constructor...
    this.id = id,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${read}`);
    }
}

Book.prototype.toggleRead = function() {

}

function addBookToLibrary(i, title, author, pages, read) {
    // take params, create a book then it in the array
    let uuid = self.crypto.randomUUID();
    let book = new Book(uuid, title, author, pages, read)
    myLibrary.push(book)
}



// Add everything to the table
function addToTable(data) {
    var table = document.getElementById('bookTable')
    for (var i = 0; i < data.length; i++) {
        var row = `<tr data-book-id="${data[i].id}">
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].pages}</td>
                        <td><button class="readButton" data-read-id="${data[i].id}">Read</button></td>

                        <td><button class="deleteButton" data-button-id="${data[i].id}">Delete</button></td>
                    </tr>`
            table.innerHTML += row
    }
}

// Preadded books when the page loads
addBookToLibrary('id', 'The Hobbit', 'Tolkien', '256', true);
addBookToLibrary('id', '451 Fahrenheit', 'Rey Bradbury', '252', false);

const myBook = new Book('id', 'CustomTitle','CustomAuthor', '328', false);
addBookToLibrary(myBook.id, myBook.title, myBook.author, myBook.pages, myBook.read);
console.log(`My test book is: ${myBook}`);

addToTable(myLibrary);
console.log(myLibrary)

//Delete the book from the library

document.addEventListener('click', e => {
    if(e.target.classList.contains("deleteButton")) {
        const buttonId = e.target.dataset.buttonId;
    myLibrary.forEach((element) => {
        if(element.id === buttonId) {
            const bookIndex = myLibrary.indexOf(element);
            console.log(`bookIndex is: ${bookIndex}`)
            const bookHTML = document.querySelector(`tr[data-book-id="${buttonId}"`);
            console.log(`BookHTMLelement is ${bookHTML}`)
            console.log(`Index of the book in myLibrary is: ${myLibrary.indexOf(element)}`);
            myLibrary.splice(bookIndex, 1);
            console.log(myLibrary);
            bookHTML.remove();
        }
    })
    console.log(e.target.dataset.buttonId);
    }
})


// Add last item from myLibrary to the table 
function addLastToTable(data) {
    var table = document.getElementById('bookTable')
        var row = `<tr data-book-id="${data.at(-1).id}"">
                        <td>${data.at(-1).title}</td>
                        <td>${data.at(-1).author}</td>
                        <td>${data.at(-1).pages}</td>
                        <td><button class="readButton" data-read-id="${data.at(-1).id}">Read</button></td>
                        <td><button class="deleteButton" data-button-id="${data.at(-1).id}">Delete</button></td>
                    </tr>`
            table.innerHTML += row

}

// Open form modal and close modal buttons
const openModalButton = document.getElementById('addBook__button')
const closeModalButton = document.getElementById('closeFormButton')
const overlay = document.getElementById("overlay")

openModalButton.addEventListener('click', () => {
        const modal = document.getElementById('addBook__button')
        openModal()
    })

closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('closeFormButton')
        closeModal()
    })

function openModal(){
        document.getElementById('formBlock').classList.add('active')
        overlay.classList.add('active')
        
}
function closeModal() {
    document.getElementById('formBlock').classList.remove('active')
    overlay.classList.remove('active')
}
document.getElementById("addBook__submit").onclick = function() {
    let form = document.getElementById("addBook__form")
    let block = document.getElementById("formBlock");
    let background = document.getElementById("container");
    let bookTitle = document.getElementById("form__title").value;
    let bookAuthor = document.getElementById("form__author").value;
    let bookPages = document.getElementById("form__pages").value;
    let bookRead = document.getElementById("form__read").checked;

    addBookToLibrary("id", bookTitle, bookAuthor, bookPages, bookRead);
    addLastToTable(myLibrary);
    console.log(myLibrary)
    console.log(document.getElementById('form__read').checked)
    form.reset()
}
