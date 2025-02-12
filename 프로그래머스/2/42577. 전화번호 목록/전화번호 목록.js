// phone_book의 길이가 최대 백만... -> 시간복잡도 n2이상의 풀이로 불가능

function solution(phone_book) {
  phone_book.sort();

  return !phone_book.some((_, index) => {
    if (index === phone_book.length - 1) return false;
    return phone_book[index + 1].startsWith(phone_book[index]);
  });
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
