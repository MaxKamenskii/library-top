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


function addBookToLibrary(i, title, author, pages, read) {
    // take params, create a book then it in the array
    let uuid = self.crypto.randomUUID();
    let book = new Book(uuid, title, author, pages, read)
    myLibrary.push(book)
}

// addBookToLibrary('id', 'The Hobbit', 'Tolkien', '256', "no");
// addBookToLibrary('id', '451 Fahrenheit', 'Rey Bradbury', '252', "yes");

// console.log(myLibrary)

function addToTable(data) {
    var table = document.getElementById('bookTable')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].title}</td>
                        <td>${data[i].author}</td>
                        <td>${data[i].pages}</td>
                        <td>${data[i].read}</td>
                    </tr>`
            table.innerHTML += row
    }
}

document.getElementById("addBook__submit").onclick = function() {
    // bookTitle = document.getElementById("form__title").value;
    let bookTitle = document.getElementById("form__title").value;
    let bookAuthor = document.getElementById("form__author").value;
    let bookPages = document.getElementById("form__pages").value;
    let bookRead = document.getElementById("form__read").value;
    console.log(`Book title is: ${bookTitle}`)
    console.log(`Book author is: ${bookAuthor}`)
    console.log(`Book pages: ${bookPages}`)
    console.log(`Book read is: ${bookRead}`)
    addBookToLibrary("id", bookTitle, bookAuthor, bookPages, bookRead);
    addToTable(myLibrary)
    console.log(myLibrary)
}
