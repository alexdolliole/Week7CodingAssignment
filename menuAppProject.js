class Book {
    constructor (name, author) {
        this.name = name;
        this.author = author;
    }

    describe() {
        return `${this.name} is written by ${this.author}.`;
    }
}

class Readinglist {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } else {
            throw new Error(`You can only add an instance of Book. Argument is not a book: ${book}`);
        
    }
}

describe() {
    return `${this.name} has ${this.books.length} books.`;
    }
}

class Menu {
    constructor() {
        this.readinglists = [];
        this.selectedReadinglist = null;
    }
    start() {
        let selection = this.showMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addReadinglist();
                    break;
                case '2':
                    this.viewReadinglist();
                    break;
                case '3':
                    this.deleteReadinglist();
                    break;
                case '4':
                    this.showReadinglists();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert('Goodbye!')
    }

    showMenuOptions() {
        return prompt(`
        0) Exit
        1) Create a reading list
        2) View a reading list
        3) Delete a reading list
        4) Show all reading lists
        `);
    }

    showReadingListMenuOptions(readinglistInfo) {
        return prompt(`
        0) Return to main menu
        1) Add book to reading list
        2) Delete book from reading list
        ------------------------
        ${readinglistInfo}
        `);
    }

    addReadinglist() {
        let name = prompt('Enter new reading list name:');
        this.readinglists.push(new Readinglist(name));
    }

    showReadinglists() { 
        let readinglistString = '';
        for (let i = 0; i < this.readinglists.length; i++) {
            readinglistString += i + ') ' + this.readinglists[i].name + '\n';
        }
        alert(readinglistString);
    }

    viewReadinglist() {
        let index = prompt('Enter the index of the reading list you wish to view:');
            if (index > -1 && index < this.readinglists.length) {
                this.selectedReadinglist = this.readinglists[index];
                let description = 'Reading List: ' + this.selectedReadinglist.name + '\n';
    
                for (let i = 0; i < this.selectedReadinglist.books.length; i++) {
                    description += i + ') ' + this.selectedReadinglist.books[i].name + ' - ' + this.selectedReadinglist.books[i].author + '\n';
                }
    
                let selection = this.showReadingListMenuOptions(description);
                switch (selection) {
                    case '1':
                        this.createBook();
                        break;
                    case '2':
                        this.deleteBook();
            }
        }
    }
    
    createBook() {
        let name = prompt('Enter name of the new book you want to add:');
        let author = prompt('Enter the author of the new book:');
        this.selectedReadinglist.books.push(new Book(name, author));
    }

    deleteBook() {
        let index = prompt('Enter the index of the book you would like to delete:');
        if (index > -1 && index < this.selectedReadinglist.books.length) {
            this.selectedReadinglist.books.splice(index, 1);
        }
    }
}

let menu = new Menu;
menu.start();

