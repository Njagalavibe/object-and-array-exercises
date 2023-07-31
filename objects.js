// beginner object execrices
/*1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let studentArr = []
for (key in student) {
    studentArr.push(key);
}
console.log(studentArr);

/*2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:*/
var pupil = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(pupil)
let deleteProperty = () => {
    delete pupil.rollno
}
deleteProperty(pupil)
console.log(pupil)

/*3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let studentLength = Object.keys(student).length
console.log(`Length of Object is ${studentLength}`)


/*4. Write a JavaScript program to display the reading status 
(i.e. display book name, author name and reading status) of the following books.*/
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++){
    let progress = library[i].author + ' '+'by'+' '+library[i].title;
    if (library[i].readingStatus == true) {
        console.log("Done reading" +" "+progress);
    } else {
        console.log("Need to read" +" "+ progress );
}

}

