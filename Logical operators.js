// -AND  (&&)

// true -AND true = true (&&)  
// true -AND false = false 
// false -AND true = false 
// false -AND false = false 

// -OR (||)

// true -OR true = true
// true -OR false = true
// false -OR true = true
// false -OR false = false

// -NOT (!)

// NOT (true) = false
// NOT (false) = true


// NOT (p -AND q) = (NOT p) -OR (NOT q)

// NOT (p -OR q) = (NOT p) -AND (NOT q)

// myString = "nuuca"
// p = myString.includes("a")
// q = myString.includes("b")
// // console.log(q)
// if (p || q){
//     console.log("Both statements are true.")
// } else {
//     console.log("At least one statement is false.")
//     console.log(p)
//     console.log(q)
// }


// myString = "masna"
// p = myString.includes("f")
// q = myString.includes("i")

// if (!(p||q)){
//     console.log("At least one statement is false")
//     console.log(p)
//     console.log(q)
// } else {
//     console.log("Both statements are true")
//     console.log(p)
//     console.log(q)
// }

myString = "masina"
p = myString.includes("f")
q = myString.includes("i")

if (!(p||q)){
    console.log("Both statements are false")
    console.log(p)
    console.log(q)
} else {
    console.log("At least one statment is true")
    console.log(p)
    console.log(q)
}