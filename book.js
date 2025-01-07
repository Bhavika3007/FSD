class Book {
    constructor(title, author, status = "available") {
        this.title = title;
        this.author = author;
        this.status = status;
        this.dueDate = null;
    }

    markAsBorrowed(dueDate) {
        this.status = "borrowed";
        this.dueDate = dueDate;
    }

    markAsAvailable() {
        this.status = "available";
        this.dueDate = null;
    }

    isOverdue(currentDate) {
        if (this.dueDate && new Date(this.dueDate) < new Date(currentDate)) {
            return true;
        }
        return false;
    }

    calculateFine(currentDate) {
        if (this.isOverdue(currentDate)) {
            const overdueDays = Math.floor((new Date(currentDate) - new Date(this.dueDate)) / (1000 * 60 * 60 * 24));
            return overdueDays * 1;
        }
        return 0;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    borrowBook(title, dueDate) {
        const book = this.books.find(book => book.title === title && book.status === "available");
        if (book) {
            book.markAsBorrowed(dueDate);
        } else {
            console.log("Book not available.");
        }
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    trackOverdueBooks(currentDate) {
        return this.books.filter(book => book.isOverdue(currentDate));
    }

    calculateTotalFines(currentDate) {
        return this.books.reduce((total, book) => total + book.calculateFine(currentDate), 0);
    }
}

const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.borrowBook("1984", "2023-12-15");
console.log(library.searchByTitle("1984"));
console.log(library.searchByAuthor("George Orwell"));

console.log(library.trackOverdueBooks("2023-12-16"));
console.log(library.calculateTotalFines("2023-12-16"));
