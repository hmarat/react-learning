const user = {
    name: "Marat",
    cities: ["Stepanakert", "Yerevan", "Moscow"],
    logLivedCities(){
        return this.cities.map(city => `${this.name} has lived in ${city}}`)
    }
}

console.log(user.logLivedCities())

//Challange area

const multiplier = {
    numbers: [1, 2, 3, 4, 6, 11],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map(number => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())