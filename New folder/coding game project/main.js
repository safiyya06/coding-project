const arrayOfBooks = [

    {
        book='If Only',
        author='Jennifer Gilmore',
    },
    {
        book='Blight',
        author='Alexandra Duncan',
    },
    {
        book='We\'ll Never Be Apart',
        author='Emiko Jean', 
    },
    {
        book='Wreck',
        author='Fleur Ferris',
    },

]

function getRandomNumber() {
    const randomNumber = Math.random() * arrayOfBooks.length;
    return Math.floor(randomNumber) 
 }
 
 function setBook(book) {
     document.getElementById("book").innerHTML = book
 }
 
 function setAuthor(author) {
     document.getElementById("author").innerHTML = author
 }
 
 
 function getRandomBook() {
     const randomNumber = getRandomNumber()
     const book = arrayOfBooks[randomNumber]
     //set the book
     setBook(book.message)
     //set the author
     setAuthor(book.author)
 }
 