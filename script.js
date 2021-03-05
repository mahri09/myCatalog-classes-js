class Media {
  constructor(title, type) {
    this._title = title;
    this._type = type;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get type() {
    return this._type;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratings =
      this.ratings.reduce((sum, raiting) => sum + raiting) /
      this.ratings.length;
    return ratings.toFixed(2);
  }
  addraiting(value) {
    let raiting = parseFloat(value);
    if (raiting >= 1 && raiting <= 10) {
      this._ratings.push(raiting);
    } else {
      console.log(
        `Your input is ${raiting}, please insert value between 1 and 10!`
      );
    }
  }
}

class Book extends Media {
  constructor(title, type, author, pages) {
    super(title, type);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, type, director, runtime) {
    super(title, type);
    this._director = director;
    this._runtime = runtime;
  }

  get director() {
    return this._director;
  }

  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title, type, artist, duration) {
    super(title, type);
    this._artist = artist;
    this._duration = duration;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get duration() {
    return this._duration;
  }

  get songs() {
    return this._songs;
  }

  addSong(song) {
    this._songs.push(song);
  }

  shuffle() {
    return this._songs.sort(() => Math.random() - 5);
  }
}

class Catalog {
  constructor() {
    this._myCatalog = [];
  }

  get myCatalog() {
    return this._myCatalog;
  }

  addCatalog(newCatalog) {
    this._myCatalog.push(newCatalog);
  }
}

const historyOfViolence = new Book(
  "History of Violence",
  "history",
  "Édouard Louis",
  224
);
console.log(historyOfViolence);

historyOfViolence.toggleCheckoutStatus();
console.log(historyOfViolence.isCheckedOut);
historyOfViolence.addraiting(3);
historyOfViolence.addraiting(4);
historyOfViolence.addraiting(5);
console.log(historyOfViolence.getAverageRating());

const bloodSport = new Movie(
  "Blood Sport",
  "action",
  "Jean-Claude Van Damme",
  122
);
console.log(bloodSport);
bloodSport.toggleCheckoutStatus();
console.log(bloodSport.isCheckedOut);
bloodSport.addraiting(4);
bloodSport.addraiting(4);
bloodSport.addraiting(5);
console.log(bloodSport.getAverageRating());

const myHeartWillGoOn = new CD(
  "My Heart will go on",
  "drama",
  "Celine Dion",
  30
);
console.log(myHeartWillGoOn);
myHeartWillGoOn.toggleCheckoutStatus();
console.log(myHeartWillGoOn.isCheckedOut);
myHeartWillGoOn.addSong("My heart will go on");
myHeartWillGoOn.addSong("A new Day has come");
myHeartWillGoOn.addSong("I'm Alive");
myHeartWillGoOn.addSong("Goodbye");
myHeartWillGoOn.addraiting(5);
myHeartWillGoOn.addraiting(4);
myHeartWillGoOn.addraiting(5);
console.log(myHeartWillGoOn.getAverageRating());

const catalogLibrary = new Catalog();
catalogLibrary.addCatalog(historyOfViolence);
catalogLibrary.addCatalog(bloodSport);
catalogLibrary.addCatalog(myHeartWillGoOn);

console.log(catalogLibrary);

const submitBtn = document.getElementById("submit_btn");
const selectMedia = document.getElementById("mediaTypeSelect");
const titleMedia = document.getElementById("titleOfMedia");
const typeOfMedia = document.getElementById("typeOfMedia");
const creatorOfMedia = document.getElementById("creatorOfMedia");
const durationOfMedia = document.getElementById("durationOfMedia");
const ratings = document.getElementsByClassName("ratingsOfMedia");
const catalog = document.getElementById("catalogLibrary");

submitBtn.onclick = () => {
  // alert('hi')
  const subclass =
    selectMedia.value === "Book" ? Book
      : selectMedia.value === "Movie" ? Movie
      : selectMedia.value === "CD" ? CD
      : "";
  const newMedia = new subclass(
    titleMedia.value,
    typeOfMedia.value,
    creatorOfMedia.value,
    durationOfMedia.value
  );

  newMedia.toggleCheckoutStatus();
  console.log(ratings[0].value);
  newMedia.addraiting(ratings[0].value);
  newMedia.addraiting(ratings[1].value);
  newMedia.addraiting(ratings[2].value);
  newMedia.addraiting(ratings[3].value);

  catalogLibrary.addCatalog(newMedia);

  const result = [];
  console.log(catalogLibrary)
    catalogLibrary._myCatalog.map((element)=>result.push('<li>' + element._title +'</li>'))

    return catalog.innerHTML = result.join('<br>')
};
