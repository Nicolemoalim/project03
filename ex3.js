function countZeros(arr) {
  // משתמשים ב-reduce יחד עם ביטוי מותנה כדי לספור את האפסים
  return arr.reduce((count, num) => count + (num === 0 ? 1 : 0), 0);
}

// דוגמת הרצה
const numbers = [1, 0, 3, 0, 5, 0, 7, 8, 0];
console.log("כמות האפסים במערך:", countZeros(numbers));
