// Primitives : string, number, boolean
// more complex types : arrays, objects
// Functions types, parameter


//  Primitives 
let age: number = 20;

// Number : capital N represents Number Object for JS, we want TS's primitive, therfre we use small n for number
//  Same for string and boolean
// String : capital S represents String Object for JS, we want TS's primitive, therfre we use small s for string
// Boolean : capital B represents Boolean Object for JS, we want TS's primitive, therfre we use small b for boolean
let userName: string = 'Max';

let isInstructor: boolean = true;

// Arrays

let hobbies: string[] = ['Sports', 'Cooking'];

// defining primitives of the person object type definition
let person: {
    name: string;s
    age: number;};

person = {
    name: 'Max',
    age: 30,};

// person = {
//     isInstructor: true,
// }; // this will throw an error because isInstructor is not defined in the person object type definition

// person = {
//     name: string;
//     age: number;
//     isInstructor: boolean;
// }[]; // this wil story multiple objects as array

// Type Inference
// Type inference is the automatic deduction of the data type of an expression in a programming language.

let course = 'React - The Complete Guide'; // TS infers the type of course as string
// course = 12341; // this will throw an error because TS infers the type of course as string and we are trying to assign a number to it
// course = '1234'; // this will not throw an error because TS infers the type of course as string and we are assigning a string to it

//  Union Types
// Union types allow you to define a variable that can hold multiple types of values.
// This is useful when you want to allow a variable to hold different types of values, such as a string or a number.
//  In this case, we are defining a variable that can hold either a string or a number.

let course2: string | number = 'React - The Complete Guide'; // TS infers the type of course as string | number
course2 = 12341; // this will not throw an error because TS infers the type of course as string | number and we are assigning a number to it
// course2 = true; // this will throw an error because TS infers the type of course as string | number and we are trying to assign a boolean to it

// Type Aliases
// Type aliases allow you to create a new name for a type.
// This is useful when you want to create a more descriptive name for a type, or when you want to reuse a type in multiple places.
// This is a PURE TS feature, not a JS feature.
type Person = {
    name: string;
    age: number;
};
//  This is a type alias for the person object type definition
let person2: Person

// Functions and Types
function add(a: number, b: number) : number | number[] {
    return a + b;
} // this function takes two parameters of type number and returns a number
//  We can also use Type Unioins in output as well.

// Generics
// Generics allow you to create reusable components that can work with any data type.
// This is useful when you want to create a function or a class that can work with multiple data types.
//  In this case, we are creating a function that takes an array of any type and returns the first element of that array.
function insertAtBeggining(array: any[], value:any[]){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeggining(demoArray, -1);

//  Now above function is not type safe, we can use generics to make it type safe.
function insertAtBegginingWithGenerics<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
} // this function takes an array of type T and a value of type T and returns an array of type T
const demoArray2 = [1, 2, 3];
const updatedArray2 = insertAtBegginingWithGenerics(demoArray2, -1); // this will not throw an error because we are passing a number to the function

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), 
// so that we can use that information later. Here, we use Type again as the return type. On inspection, 
// we can now see the same type is used for the argument and the return type.
// This allows us to traffic that type information in one side of the function and out the other.

// We say that this version of the identity function is generic, as it works over a range of types.
// Unlike using any, it’s also just as precise (i.e., it doesn’t lose any information) as the first identity function that
//  used numbers for the argument and return type.