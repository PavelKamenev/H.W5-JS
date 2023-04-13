/* 3*Створіть конструктор CatConstructor який створює обєкт з ключати age, nema, bread ( порода ), color.
  Використайте цей конструктор щоб створити 3 кота */

function CatConstructor(age, name, breed, color) {
    this.age = age;
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  let cat1 = new CatConstructor(2, "Tom", "British Shorthair", "Gold");
  let cat2 = new CatConstructor(1, "Flex", "no breed", "Black");
  let cat3 = new CatConstructor(6, "Kinder", "no bread", "White");
  
  console.log(cat1);
  console.log(cat2);
  console.log(cat3);


/* 4*Створіть масив, помістіть туди створених котів і відфільтруйте массив за віком котів */

function CatConstructor(age, name, breed, color) {
        this.age = age;
        this.name = name;
        this.breed = breed;
        this.color = color;
      }

 let cats = [

    new CatConstructor(2, "Tom", "British Shorthair", "Gold"),
    new CatConstructor(1, "Flex", "no breed", "Black"),
    new CatConstructor(6, "Kinder", "no bread", "White")
    
 ]

 let filteredCats = cats.filter(cat => cat.age >= 3);
 console.log (filteredCats);