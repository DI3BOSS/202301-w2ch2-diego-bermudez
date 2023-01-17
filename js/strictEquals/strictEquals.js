let strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueA)) {
    return false;
  } else if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  } else if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  } else if (Object.is(valueA, true) && Object.is(valueB, false)) {
    return false;
  } else {
    return Object.is(valueA, valueB);
  }
};

export default strictEquals;
