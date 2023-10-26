const data = [
    {
        name: "Réz Fülöp",
        age: 42,
        pets: ["Nózi", "Fici"],
        mostRecentPurchase: {
            price: 22000,
            color: "brown"
        }
    },
    {
        name: "Kis Rozi",
        age: 24,
        pets: ["Bubu"],
        mostRecentPurchase: {
            price: 10500,
            color: "pink"
        }
    },
    {
        name: "Piros Pista",
        age: 63,
        pets: [],
        mostRecentPurchase: {
            price: 20435,
            color: "white"
        }
    },
    {
        name: "Hamb Béla",
        age: 33,
        pets: ["Leo", "Hacsi"],
        mostRecentPurchase: {
            price: 54700,
            color: "blue"
        }
    },
    {
        name: "Cifra Cili",
        age: 57,
        pets: ["Vukk"],
        mostRecentPurchase: {
            price: 10020,
            color: "white"
        }
    },
    {
        name: "Hímes Emese",
        age: 46,
        pets: ["Dézi", "Zozi", "Cili", "Lui"],
        mostRecentPurchase: {
            price: 32500,
            color: "yellow"
        }
    },
    {
        name: "Kender Zsolt",
        age: 28,
        pets: ["Banán"],
        mostRecentPurchase: {
            price: 1260,
            color: "black"
        }
    },
    {
        name: "Néma Nóri",
        age: 89,
        pets: [],
        mostRecentPurchase: {
            price: 22040,
            color: "white"
        }
    },
    {
        name: "Bont Balázs",
        age: 21,
        pets: ["Fifi", "Herold"],
        mostRecentPurchase: {
            price: 37000,
            color: "green"
        }
    },
    {
        name: "Fertő Feri",
        age: 40,
        pets: ["Vackor", "Hedvig", "Bobó", "Tipi", "Törpi"],
        mostRecentPurchase: {
            price: 78000,
            color: "brown"
        }
    }
]

/*for (let i = 0; i < data.length; i++) {
    if (data[i].age >= 60 && data[i].mostRecentPurchase.price >= 20000)
    console.log(data[i])
}*/

function addTwoNumbers(number1, number2) {
    let result = number1 + number2

    return result
}

const addTwoNumbersResult = addTwoNumbers(1, 2)
//console.log("addTwoNumbers: ", addTwoNumbersResult)


function concatenateArray(array) {                                 // -----> ÖSSZEFŰZTÜNK EGY ARRAY STRINGJEIT 
    let result = ""

    array.forEach((string) => {
        result += string
    })
    return result
}

const arrayOfStrings = ["kismacska", "codecool", "javascript", "wednesday", "exam"]
const concatenateArrayResult = concatenateArray(arrayOfStrings)
//console.log ("concatenateArray: ", concatenateArrayResult)




function getOldPeople(arrayofPeople, minimumAge) {

    /*arrayofPeople.map((person) => {
        if (person.age >= minimumAge) {
            console.log(person)
        }
    })*/


    let result = []
    arrayofPeople.map ((person ) => {                              //MAP MINDIG 1 ÚJ TÖMBBEL TÉR VISSZA
        if (person.age >= minimumAge) {
            result.push(person)                                   //ha pl. person.age, akkor csak az összeszedett nevekkel tér vissza a tömbben
        }
    })
    return result
}

const oldPeople = getOldPeople(data, 60)
//console.log(oldPeople)




function getRichPeople(arrayOfPeople, minimumValue) {
    let result = arrayOfPeople.filter((person) => person.mostRecentPurchase.price > minimumValue)           //FILTER 1 SOROS LEGYEN
    return result
}

const richPeople = getRichPeople(data, 20000)
//console.log(richPeople)





function goodRecomendationFor(arrayOfPeople, newOffer) {
    
    /*let result = []
    for (let i = 0; i < arrayOfPeople.length; i++) {
        //console.log(arrayOfPeople[i].mostRecentPurchase)

        if (arrayOfPeople[i].mostRecentPurchase.color === newOffer.color && arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
                result.push(arrayOfPeople[i].name)
            }
    }

    return result
}*/

result = arrayOfPeople.filter ((person) => person.mostRecentPurchase.color === newOffer.color && 
                                           person.mostRecentPurchase.price > newOffer.price)

return result

}


const newOffer1 = {
    color: "brown",
    price: 25000
}

const goodRecomendations = goodRecomendationFor(data, newOffer1)
console.log(goodRecomendations)