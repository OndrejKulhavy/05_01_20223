class Autor {
    private firstName: string;
    private age: number;
    private dateOfBirth: string;
    private lastName: string;
    constructor(firstName, age, dateOfBirth, lastName) {
        this.firstName = firstName;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.lastName = lastName;
    }
}

class Picture {
    private author: Autor;
    private title: string;
    private price: number;
    private year: number;
    constructor(author, title, price, year) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.year = year;
    }
}

class Galery {
    private pictures: Picture[];
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
        let sortedPics = this.pictures.sort((a, b) => b.price - a.price).slice(0, 3);
        console.log(sortedPics);
        let final = {};
        sortedPics.forEach(picture => {
            var ouput = {};
            ouput["author"] = picture.author.firstName;
            ouput["title"] = picture.title;
            ouput["price"] = picture.price;

            final["picture"] = ouput;
            console.log(final);
        });
        return final;
    }

    getPicturesByAuthor(author) {
        return this.pictures.filter(picture => picture.author === author).sort((a, b) => b.price - a.price);
    }

    getGroupedPicturesByAuthor() {
        let groupedPictures = {};
        this.pictures.forEach(picture => {
            if (groupedPictures[picture.author]) {
                groupedPictures[picture.author].push(picture);
            } else {
                groupedPictures[picture.author] = [picture];
            }
        });
        return groupedPictures;

    }
}


let Autor1 = new Autor("Pablo", 82, "25.10.1881", "Picasso");
let Autor2 = new Autor("Vincent", 37, "30.03.1853", "Van Gogh");
let Autor3 = new Autor("Leonardo", 67, "15.04.1452", "da Vinci");
let Autor4 = new Autor("Claude", 84, "08.12.1840", "Monet");
let Autor5 = new Autor("Edvard", 82, "12.12.1840", "Munch");

let Picture1 = new Picture(Autor1, "Guernica", 3000, 1937);
let Picture2 = new Picture(Autor2, "Starry Night", 90000, 1889);
let Picture3 = new Picture(Autor3, "Mona Lisa", 12000, 1503);
let Picture4 = new Picture(Autor4, "Water Lilies", 40000, 1919);
let Picture5 = new Picture(Autor5, "The Scream", 50, 1893);
let Picture6 = new Picture(Autor1, "The Old Guitarist", 5000, 1903);

let Galery1 = new Galery([Picture1, Picture2, Picture3, Picture4, Picture5]);

console.log(Galery1.getSumOfAllPrices());
console.log(Galery1.get3MostExpensivePictures());