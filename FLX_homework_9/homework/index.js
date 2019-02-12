let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
/*task-1*/
function findTypes(...args) {
    let res = [];
    for (let i = 0; i < args.length; i++) {
        res.push(typeof args[i]);
    }
    return res;
}
findTypes('number');

/*task-2*/
function executeforEach(value, foo) {
    for (let i = 0; i < value.length; i++) {
        foo(value[i]);
    }
}
executeforEach([1, 2, 3], (el) => console.log(el));

/*task-3*/
function mapArray(value, f) {
    let newArr = [];
    executeforEach(value, function (value) {
        newArr.push(f(value));
    });
    return newArr;
}
mapArray([2, 5, 8], (el) => el + 3);

/*task-4*/
function filterArray(value, f) {
    let filteredArray = [];
    executeforEach(value, function (value) {
        if (f(value)) {
            filteredArray.push(value);
        }
    });
    return filteredArray;
}
filterArray([2, 5, 8], (el) => el > 3);

/*task-5*/
function getAmountOfAdultPeople(value) {
    return mapArray(filterArray(value, obj => obj.age > 18), el => el.name).length;
}
getAmountOfAdultPeople(data);

/*task-6*/
function getGreenAdultBananaLovers(value) {
    return mapArray(filterArray(value, obj => obj.age > 18 && obj.favoriteFruit === `banana`), el => el.name);
}
getGreenAdultBananaLovers(data);

/*task-7*/
function keys(value) {
    let newArr = [];
    for (let n in value) {
        if (value.hasOwnProperty(n)) {
            newArr.push(n);
        }
    }
    return newArr;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

/*task-8*/
function values(value) {
    let newArr = [];
    for (let n in value) {
        if (value.hasOwnProperty(n)) {
            newArr.push(value[n]);
        }
    }
    return newArr;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

/*task-9*/
function showFormattedDate(value) {
    const month = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    return `Date: ${value.getDate()} of ${month[value.getMonth()]}, ${value.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

/*task-10*/
function isEvenYear(value) {
    if (value.getFullYear() % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenYear(new Date('2019-01-27T01:10:00'));

/*task-11*/
function isEvenMonth(value) {
    let days = [];
    if (value.getFullYear() % 4 === 0) {
        days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    if (days[value.getMonth()] % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenMonth(new Date('2019-01-27T01:10:00'));