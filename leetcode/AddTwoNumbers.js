var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 === null && l2 === null && carry === 0) return null;

  const v1 = l1 === null ? 0 : l1.val;
  const v2 = l2 === null ? 0 : l2.val;

  const sum = v1 + v2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const result = new ListNode(digit);

  const next1 = l1 === null ? null : l1.next;
  const next2 = l2 === null ? null : l2.next;

  result.next = addTwoNumbers(next1, next2, nextCarry);

  return result;
};