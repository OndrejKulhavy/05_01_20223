
class Autor {
    constructor(firstName, age, dateOfBirth, lastName) {
        this.firstName = firstName;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.lastName = lastName;
    }
}

class Picture {
    constructor(author, title, price, year) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.year = year;
    }
}

class Galery {
    constructor(pictures) {
        this.pictures = pictures;
    }
    getSumOfAllPrices() {
        let sum = 0;
        this.pictures.forEach(picture => {
            sum += picture.price;
        });
        return sum;
    }

    get3MostExpensivePictures() {
        const sortedPics = this.pictures.sort((a, b) => b.price - a.price).slice(0, 3);
        let final = [];
        sortedPics.forEach(picture => {
            let item = {};
            item["author"] = picture.author.firstName;
            item["title"] = picture.title;
            item["price"] = picture.price;
            final.push(item);
        });
        return final;
    }

    searchPicByAuthor(author) {
        let filteredPics = this.pictures.filter(picture => picture.author == author).sort((a, b) => b.price - a.price);
        let final = [];
        filteredPics.forEach(picture => {
            let item = {};
            item["title"] = picture.title;
            item["price"] = picture.price;
            item["author"] = picture.author.firstName + " " + picture.author.lastName;
            final.push(item);
        });
        return final;
    }

    groupPicsByAuthor() {
        let final = {};
        let authors = [];
        this.pictures.forEach(picture => {
            if (!authors.includes(picture.author)) {
                authors.push(picture.author);
            }
        });
        authors.forEach(author => {
            let filteredPics = this.pictures.filter(picture => picture.author == author).sort((a, b) => b.price - a.price);
            let pics = [];
            filteredPics.forEach(picture => {
                let item = {};
                item["title"] = picture.title;
                item["price"] = picture.price;
                item["year"] = picture.year;
                pics.push(item);
            });
            final[author.firstName + " " + author.lastName] = pics;
        });
        return final;
    }
}

let authors = [];



let authorFormButon = document.getElementById("author_form_button");
console.log(authorFormButon);
authorFormButon.addEventListener("click", function () {
    let firstName = document.getElementById("firstname").value;
    let dateOfBirth = document.getElementById("dateofbirth").value;
    let lastName = document.getElementById("lastname").value;
    let author = new Autor(firstName, 5, dateOfBirth, lastName);
    
    authors.push(author);
    console.log(authors);
});

let paintingFormButton = document.getElementById("painting_form_button");
paintingFormButton.addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let year = document.getElementById("year").value;
    let author = document.getElementById("author").value;
    let authorObj = authors.find(authorObj => authorObj.firstName == author);
    let picture = new Picture(authorObj, title, price, year);
    console.log(picture);
});