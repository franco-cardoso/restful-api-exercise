const fib = (n: number): number[] | string => {
    if (n < 1) return "Value must be greater than 0";
    const sequence: number[] = [0, 1];
    for (let i = 2; i < (n ? n : 20); i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  };