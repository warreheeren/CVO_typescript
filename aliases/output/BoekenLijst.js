"use strict";
function findBookByAuthor(books, authorName) {
    return books.find(b => b.author === authorName) || null;
}
function filterBookByYear(books, year) {
    return books.filter(b => b.publishedYear === year);
}
const books = [
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951,
        ISBN: "978-0-316-76948-0",
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        ISBN: "978-0-06-112008-4",
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        ISBN: "978-0-452-28423-4",
    },
];
const boekByAuthor = findBookByAuthor(books, "Harper Lee");
console.log(boekByAuthor);
const filteredBooksByYear = filterBookByYear(books, 1960);
console.log(filteredBooksByYear);
