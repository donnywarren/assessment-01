const { 
  sum,
  genNums,
  greeter,
  capitalize,
  flipBool
} = require('../app');

describe('demo functions', () => {
  
  describe('sum', () => {
    test('adds 1 and 1', () => {
      expect(sum(1, 1)).toBe(2);
    });

    test('handles big numbers', () => {
      expect(sum(10000, 20000)).toBe(30000);
    });

    test('handles negatives', () => {
      expect(sum(-1, 1)).toBe(0);
    });

    test('handles 0', () => {
      expect(sum(0, 0)).toBe(0);
    });
  });

  describe('genNums', () => {
    test('returns an array', () => {
      expect(genNums(1)).toBeInstanceOf(Array);
    });
    
    test('returns an empty array when n < 1', () => {
      expect(genNums(0)).toEqual([]);
    });

    test('returns a single num', () => {
      expect(genNums(1)).toEqual([1]);
    });
  });
  describe('greeter', () => {
    it('returns a string', () => {
      expect(greeter('')).toEqual(expect.stringContaining(''));
    });

    it('says hello', () => {
      expect(greeter('Jay Z')).toContain('Hello, ');
    });

    it('returns a personalized message', () => {
      expect(greeter('Jon Master')).toEqual('Hello, Jon Master');
    });

    it('greets someone else', () => {
      expect(greeter('Mimi')).toEqual('Hello, Mimi');
    });
  });
  describe('capitalize', () => {
    let person;
    beforeEach(() => {
      person = { 
        name: 'art vandelay',
        age: 32,
        occupation: 'marine biologist'
      };
    });

    it('takes a person object', () => {
      expect(capitalize(person)).toBeTruthy();
    });

    it('returns a person object', () => {
      expect(capitalize(person)).toEqual(expect.objectContaining(
        {
          name: expect.any(String),
          age: expect.any(Number),
          occupation: expect.any(String)
        }
      ))
    });

    it('capitalizes first letter of first and last name', () => {
      expect(capitalize(person)).toEqual(
        expect.objectContaining(({name: 'Art Vandelay'})));
    });
  });
  describe('flipBool', () => {
    it('takes and returns an array', () => {
      expect(flipBool([])).toEqual(expect.arrayContaining([]));
    });

    it('returns an array of the same length', () => {
      expect(flipBool([true, false, true])).toHaveLength(3);
    });

    it('contains only boolean values', () => {
      const data = [false, false, true, false, true]
      expect(flipBool(data).filter(val => val.constructor === Boolean)).toHaveLength(5);
    });

    it('calls map', () => {
      const mock = jest.fn(() => 3);
      const data = [true, false, false]
      data.map = mock;
      flipBool(data)
      expect(mock).toHaveBeenCalled();
      mock.mockClear();
    });

    it('flips the first value', () => {
      expect(flipBool([true, false])[0]).toBeFalsy();
    });

    it('flips the last value', () => {
      expect(flipBool([false, true, false])).toBeTruthy();
    });

    it('flips all the values', () => {
      const data = [true, true, true, false, false, true, false, true, false, false]
      const expected = [ false, false, false, true, true, false, true, false, true, true]
      expect(flipBool(data)).toEqual(expected);
    });
  });
});
