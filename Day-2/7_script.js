/*
Check Triangle Type Using Sides and Angles
Input: Sides = 3, 4, 5

Output: Right-Angled Triangle

✨ Combines geometric reasoning + Pythagoras theorem check.

Example Logic:

If a² + b² = c² → Right-angled
Else if all sides equal → Equilateral
Else if any two equal → Isosceles
Else → Scalene
*/
function checkTriangleType(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("Invalid triangle sides");
    return;
  } else if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles Triangle");
  } else if (
    side1 * side1 + side2 * side2 === side3 * side3 ||
    side2 * side2 + side3 * side3 === side1 * side1 ||
    side1 * side1 + side3 * side3 === side2 * side2
  ) {
    console.log("Right-Angled Triangle");
  } else {
    console.log("Scalene Triangle");
  }
}

checkTriangleType(3, 4, 5); // Right-Angled Triangle
checkTriangleType(5, 5, 5); // Equilateral Triangle
checkTriangleType(5, 5, 8); // Isosceles Triangle
checkTriangleType(4, 5, 6); // Scalene Triangle