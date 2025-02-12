
function solution(phone_book) {
  phone_book.sort();

  for (let num = 0; num < phone_book.length - 1; num++) {
    if (
      phone_book[num] ===
      phone_book[num + 1].substring(0, phone_book[num].length)
    )
      return false;
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));