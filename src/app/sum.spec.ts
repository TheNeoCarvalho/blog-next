const sum = (a: number, b: number) => a + b;

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
