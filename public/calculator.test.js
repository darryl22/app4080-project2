const {calculate} = require('./calculator');

Test('2 + 2', () =>{
    expect(calculate(2, 2, '+')).toBe(4);
})