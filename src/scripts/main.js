// ChickenMonkey

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

const chickenMonkey = function () {
    for (let num = 0; num <= 100; num++) {
        if (num % 5 === 0) {
            if (num % 7 === 0) {
                console.log("ChickenMonkey")
            } else {
                console.log("Chicken")
            }
        } else if (num % 7 === 0) {
            console.log("Monkey")
        } else {
            console.log(num)
        }
    }
}

chickenMonkey()