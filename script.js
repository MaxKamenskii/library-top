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

addBookToLibrary('id', 'The Hobbit', 'Tolkien', '256', "no");
addBookToLibrary('id', '451 Fahrenheit', 'Rey Bradbury', '252', "yes");
addToTable(myLibrary);

// console.log(myLibrary)
// Add everything to the table
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
// Add last item from myLibrary to the table 
function addLastToTable(data) {
    var table = document.getElementById('bookTable')

        var row = `<tr>
                        <td>${data.at(-1).title}</td>
                        <td>${data.at(-1).author}</td>
                        <td>${data.at(-1).pages}</td>
                        <td>${data.at(-1).read}</td>
                    </tr>`
            table.innerHTML += row
}

document.getElementById("formBlock").style.display = "none";
document.getElementById("addBook__button").onclick = function() {
    
    let block = document.getElementById("formBlock");
    let background = document.getElementById("container");
      if (block.style.display === "none") {
            block.style.display = "block";
            background.style.filter = "blur(10px)";
        } else {
            block.style.display = "none";
            background.style.filter = "none";
        }
}

let closeFormButton = document.getElementById("closeForm")

closeFormButton.onclick = function() {
    let block = document.getElementById("formBlock");
    let background = document.getElementById("container");
    if (block.style.display === "none") {
            block.style.display = "block";
            background.style.filter = "blur(10px)";
        } else {
            block.style.display = "none";
            background.style.filter = "none";
        }
}

document.getElementById("addBook__submit").onclick = function() {
    let form = document.getElementById("addBook__form")
    let block = document.getElementById("formBlock");
    let background = document.getElementById("container");
    let bookTitle = document.getElementById("form__title").value;
    let bookAuthor = document.getElementById("form__author").value;
    let bookPages = document.getElementById("form__pages").value;
    let bookRead = document.getElementById("form__read").value;

    addBookToLibrary("id", bookTitle, bookAuthor, bookPages, bookRead);
    // addToTable(myLibrary);
    addLastToTable(myLibrary);
    console.log(myLibrary)
    form.reset()
}
