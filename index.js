/* Feeling Loopy */
// csvString1 and csvString2 are two strings that represent parsed csv data. The data is seperated by commas and new lines.
// these const will be used in the parseCSV function.
// const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// const csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// // will evaluate csvString1 and csvString2 as csv. The function will log each row of the csv to the console when all 4 cells are present.
// function parseCSV(csv) {
//     // An empty string to store the current word to be placed in a cell
//     let currentCell = '';
//     // An empty array to store the current row
//     let currentRow = [];
//     // Loop through each character in the csv string
//     for (const char of csv) {
//         // If statement that checks if the character is a comma, if it is, push the current cell to the current row and reset the current cell
//         if (char === ',') {
//             // Push the current cell to the current row
//             currentRow.push(currentCell);
//             // Empties the current cell
//             currentCell = '';
//             // Else if statement that checks if the character is a new line.
//         } else if (char === '\n') {
//             // Push the current cell to the current row
//             currentRow.push(currentCell);
//             // Destructure the current row into 4 cells
//             const [cell1, cell2, cell3, cell4] = currentRow;
//             // Log the 4 cells to the console
//             console.log(cell1, cell2, cell3, cell4);
//             // Empty the current row
//             currentRow = [];
//             // Empty the current cell
//             currentCell = '';
//             // Else statement that adds the character to the current cell. Basically if it does not encounter an "," or "/n" it will add the character to its respective cell.
//         } else {
//             currentCell += char;
//         }
//     }
//     // If statement that checks if the current cell is not empty, if it is not, push the current cell to the current row
//     if (currentCell) currentRow.push(currentCell);
//     // If statement that checks if the current row has 4 cells, if it does, destructure the current row into 4 cells and log them to the console.
//     if (currentRow.length === 4) {
//         const [cell1, cell2, cell3, cell4] = currentRow;
//         console.log(cell1, cell2, cell3, cell4);
//     }
// }

// // Call the parseCSV function with csvString1 and csvString2 as arguments
// parseCSV(csvString1);
// parseCSV(csvString2);

// Log
// ID Name Occupation Age
// 42 Bruce Knight 41
// 57 Bob Fry Cook 19
// 63 Blaine Quiz Master 58
// 98 Bill Doctor’s Assistant 26
// Index Mass (kg) Spring 1 (m) Spring 2 (m)
// 1 0.00 0.050 0.050
// 2 0.49 0.066 0.066
// 3 0.98 0.087 0.080
// 4 1.47 0.116 0.108
// 5 1.96 0.142 0.138
// 6 2.45 0.166 0.158
// 7 2.94 0.193 0.174
// 8 3.43 0.204 0.192
// 9 3.92 0.226 0.205
// 10 4.41 0.238 0.232


/* Feeling Loopy Part 2: Expanding Functionality */
//Store result in a two-dimensional array
// Do not hard-code four columns per row
// Intended log output:
// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]

/* Checklist */
// Transform the parseCSV function to accomplish the new task: store the result in a two-dimensional array ###
// Declare my initializing variables ###
// need a for loop to iterate through the csv string and if statements to check for commas and new lines. ###
// when a comma is found, .push the current cell to the current row.  ###
// just like before, upon .push to the current row, we must reset the current cell. ###
// when a new line \n is found, .push the current cell to current row ###
// check if the rows array is empty. If it is, set the number of columns to the length of the current row. ###
// handle how the currentRow interacts with rows. ###
// reset currentRow and currentCell to start building the next row and cell. ###
// else statement to handle characters that are not commas or \n. ###
// account for the last cell in the csv string. ###
// account for the last row in the csv string. ###
// return the rows array. ###
// call the parseCSV2D function with csvString1 and csvString2 as arguments. ###    
// log the rows array to the console. ###

// csvString1/2 are strings meant to be parsed and stored in a two-dimensional array.
const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

function parseCSV2D(csv) {
    const rows = []; // Initialize an array to store the rows (empty)
    let currentCell = ''; // Initialize the string to store to the current cell
    let currentRow = []; // Initialize the array to store the current row
    let numColumn = 0; // Initialize a variable to track the number of columns in the parse csv

    // this loop iterates through the strings contained in csvString1 and csvString2
    for (const char of csv) {
        // if statement that checks if the current character is a comma. If it is, it signifies the end of a cell.
        if (char === ',') {
            // .push the current cell to the current row
            currentRow.push(currentCell)
            // reset the current cell
            currentCell = '';
        }
        // else if statement that checks if the current character is \n. This will signal the end of a row.
        else if (char === '\n') {
            // .push the current cell to the current row
            currentRow.push(currentCell);
            // checks if rows array is empty.
            // if the first row is empty, it will set the number of columns to the length of the current row.
            // by determining the number of columns in the first row, we can set the number of columns to ensure proper structure of the array.
            if (rows.length === 0) {
                numColumn = currentRow.length;
            }
            // handles how row is added to rows array
            // currentRow is added to the rows array
            rows.push(currentRow);
            // reset to start building next row

            currentRow = [];
            // reset to start builing the next cell
            currentCell = '';
        }
        // else statement that handles characters that are not commas or \n
        else {
            currentCell += char;
        }
    }

    // account for the last cell 
    // after the loop, if there’s any remaining data in currentCell, it is added to the currentRow
    if (currentCell) {

        currentRow.push(currentCell);
    }
    // account for the last row
    // after the loop, if there’s any remaining data in currentRow, it is added to the rows array
    if (currentRow.length === numColumn) {
        rows.push(currentRow);
    }
    // return the parsed rows array
    return rows;


}
// call the parseCSV2D function with csvString1 
const resultArray1 = parseCSV2D(csvString1);
console.log(resultArray1);
// log result:
// [
//     [ 'ID', 'Name', 'Occupation', 'Age' ],      
//     [ '42', 'Bruce', 'Knight', '41' ],
//     [ '57', 'Bob', 'Fry Cook', '19' ],
//     [ '63', 'Blaine', 'Quiz Master', '58' ],    
//     [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
//   ]

const resultArray2 = parseCSV2D(csvString2);
console.log(resultArray2);
// log result:
// [
//     [ 'Index', 'Mass (kg)', 'Spring 1 (m)', 'Spring 2 (m)' ],
//     [ '1', '0.00', '0.050', '0.050' ],
//     [ '2', '0.49', '0.066', '0.066' ],
//     [ '3', '0.98', '0.087', '0.080' ],
//     [ '4', '1.47', '0.116', '0.108' ],
//     [ '5', '1.96', '0.142', '0.138' ],
//     [ '6', '2.45', '0.166', '0.158' ],
//     [ '7', '2.94', '0.193', '0.174' ],
//     [ '8', '3.43', '0.204', '0.192' ],
//     [ '9', '3.92', '0.226', '0.205' ],
//     [ '10', '4.41', '0.238', '0.232' ]
//   ]


/* Feeling Loopy Part 3: Transforming Data */
// We will transform our rows into objects
// Create an object where the key of each value is the heading for that value's column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// The heading for each column will be stored in the object keys.
// You do not need to create an object for the heading row itself
// *While we can add this functionality to the parseCSV2D function, it is better to create a new function for this task. Be sure to make a new function!!!

/* Visual Representation */
// FROM :
//     [ 'ID', 'Name', 'Occupation', 'Age' ],
//     [ '42', 'Bruce', 'Knight', '41' ],
//     [ '57', 'Bob', 'Fry Cook', '19' ],
//     [ '63', 'Blaine', 'Quiz Master', '58' ],
//     [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
//   ]
// TO: [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

/* Checklist */
// adjust the part 2 function so that the arrays we would like to transform can be called upon in this new function. ###
// declare a new function transformArray that takes in the array we would like to transform as an argument. ###
// the resultArray is where resultArray1 and resultArray2 will pass through. ###
// map through the first row of the csv and lowercase each heading. ###
// declare a new array called transformedArray. ###
// we must now loop through each row of data * excluding or skipping the first row. ###

function transformArray(resultArray) {
    // resultArray[0] is the first row of the CSV, which is the heading row and converts it to lowercase.
    // this is accomplished using the .map method to iterate through the first row and convert each heading to lowercase.
    const heading = resultArray[0].map(heading => heading.toLowerCase());
    // declare a new array to store the transformed data
    const transformedArray = [];
    // loop starts from c = 1 to skip the first row of the csv. c = 0 contains the headings and NOT the data.
    // c++ lol
    for (let c = 1; c < resultArray.length; c++) {
        // row will contain the current row of data.
        const row = resultArray[c];
        // obj is initialized as an empty object. As such it will store the key-value pairs for the current row.
        const obj = {};

        // loop through each cell in the row
        for (let j = 0; j < heading.length; j++) {
            // sets the key of obj to "id", "name", etc and the value to its respective key in the row.
            obj[heading[j]] = row[j];
        }
        //the object for the current row is added to the target array
        transformedArray.push(obj);

    }

    return transformedArray;
}
const transformedData1 = transformArray(resultArray1);
console.log(transformedData1);
//log result: * Bill did not format correctly most likely due to the special character in Doctor's Assistant. I'm not sure how to tackle that issue.
// [
//     { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
//     { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
//     { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//     {
//       id: '98',
//       name: 'Bill',
//       occupation: 'Doctor’s Assistant',
//       age: '26'
//     }
//   ]




