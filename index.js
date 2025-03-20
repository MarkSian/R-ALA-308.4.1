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

// csvString1/2 are strings meant to be parsed and stored in a two-dimensional array.
const csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Transform the parseCSV function to accomplish the new task: store the result in a two-dimensional array
// Declare my initializing variables ###
// need a for loop to iterate through the csv string and if statements to check for commas and new lines. ###
// when a comma is found, .push the current cell to the current row.  ###
// just like before, upon .push to the current row, we must reset the current cell.
// when a new line \n is found, .push the current cell to current row
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
            console.log('Current Row after comma:', currentRow); // Log the current row after adding a cell
        }
    }

}
// Test csvString1
parseCSV2D(csvString1);

// Test csvString2
parseCSV2D(csvString2);