function checkVotingEligibility(age) {
  if (typeof age !== "number" || Number.isNaN(age) || !Number.isFinite(age) || age < 0) {
    return false;
  }
   return age >=18 ?  `Eligible to vote` :  `Not eligible to vote`;
}

console.log(checkVotingEligibility(20)); // Eligible to vote
console.log(checkVotingEligibility(17)); // Not eligible to vote
console.log(checkVotingEligibility(18)); // Eligible to vote
console.log(checkVotingEligibility(-5)); // false
console.log(checkVotingEligibility("twenty")); // false
console.log(checkVotingEligibility(16.5)); // false
console.log(checkVotingEligibility(NaN)); // false
console.log(checkVotingEligibility(Infinity)); // false 