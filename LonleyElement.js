	Submissions	Leaderboard	Discussions	Editorial
Given an array of integers, where all elements but one occur twice, find the unique element.



function lonelyinteger(a) {
    // Write your code here
  let unique = 0;
  for (let i = 0; i < a.length; i++) {
    unique ^= a[i];
  }
  return unique;
}


Example
let  a = [1,2,3,4,3,2,1,]

The unique element is  4
