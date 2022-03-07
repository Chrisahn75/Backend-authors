const express = require("express");
const app = express();

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// Exercice 1
app.get("/", (req, res) => {
	res.send("Authors API");
});

// Exercice 2

 app.get("/authors/:id", (req, res) => {
     const id = authors[parseInt(req.params.id) - 1];
     const authorsInfo = `${id.name}, ${id.nationality}`;
  
     if (!id) {
       return res.json({
         message: "Not found",
       });
     }
     res.json(authorsInfo);
 });

// Exercice 3

 app.get("/authors/:id", (req, res) => {
     const id = authors[parseInt(req.params.id) - 1];
     const authorsInfo = `${id.books}`;
  
     if (!id) {
       return res.json({
         message: "Not found",
       });
     }
    
   res.json(id.books.join(""));
 });

// Exercice 4

 app.get("/json/authors/:id", (req, res) => {
     const id = authors[parseInt(req.params.id) - 1];
     const authorsInfo = `${id.name}, ${id.nationality}`;
    
     if (!id) {
         return res.json({
     message: "Not found",
     });
 }
 res.json({
     name: id.name,
     nationality: id.nationality,
     });
 });

app.get("/json/authors/:id/books", (req, res) => {
    const id = authors[parseInt(req.params.id) - 1];
    const authorsInfo = `${id.books}`;

    if (!id) {
    return res.json({
    message: "Not found",
    });
}
    res.json({
    books: id.books.join(" "),
    });
});


app.listen(8000, () => {
	console.log("Listening on port 8000"); // localhost:8000
});