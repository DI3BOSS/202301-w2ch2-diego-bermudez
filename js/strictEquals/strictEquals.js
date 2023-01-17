let strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) return false;
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) return true;
  if (Object.is(valueA, -0) && Object.is(valueB, 0)) return true;
  if (Object.is(valueA, true) && Object.is(valueB, false)) return false;
  return Object.is(valueA, valueB);
};

export default strictEquals;
