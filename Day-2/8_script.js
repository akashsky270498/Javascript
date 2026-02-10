/*
Calculate Income Tax Based on Slabs
Input: Income = ₹7,50,000

Output: Tax = ₹62,500

Applies progressive slab logic similar to electricity bill but with financial context.

Example Logic (example slabs):

Up to ₹2,50,000 → No tax
₹2,50,001 – ₹5,00,000 → 5%
₹5,00,001 – ₹10,00,000 → 20%
Above ₹10,00,000 → 30%
Requires cumulative calculation using nested if–else or multiple slab loops.
*/

function calculateTax(income) {
  const convertedTax = parseInt(income);

  if (convertedTax <= 250000) {
    console.log(`No tax for an income of ₹${convertedTax}`);
  } else if (convertedTax >= 250001 && convertedTax <= 500000) {
    const tax = (convertedTax - 250000) * 0.05;
    console.log(`Tax for an income of ₹${convertedTax} is ₹${tax}`);
  } else if (convertedTax >= 500001 && convertedTax <= 1000000) {
    const tax = 250000 * 0.05 + (convertedTax - 500000) * 0.2;
    console.log(`Tax for an income of ₹${convertedTax} is ₹${tax}`);
  } else if (convertedTax > 1000000) {
    const tax = 250000 * 0.05 + 500000 * 0.2 + (convertedTax - 1000000) * 0.3;
    console.log(`Tax for an income of ₹${convertedTax} is ₹${tax}`);
  }
}

calculateTax(125000);    // No tax
calculateTax(350000);  // Tax = ₹5000
calculateTax(750000);   // Tax = ₹262500
calculateTax(1500000); // Tax = ₹262500 
calculateTax(2500000); // Tax = ₹562500
