let strictEquals = (valueA, valueB) => {
  const zero = 0;
  if (Number.isNaN(valueA && valueB)) return false;
  if (Object.is(valueA, zero) && Object.is(valueB, -zero)) return true;
  if (Object.is(valueA, -zero) && Object.is(valueB, zero)) return true;
  return Object.is(valueA, valueB);
};
export default strictEquals;
