import * as sayHello from '../src/scripts/sayHello';

describe('Greet', function() {
    it('concats Hello and a name', function() {
        var actual = sayHello.greet('World');
        var expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    it('says "Hello, Friend!" when no name is given', function() {
        var actual = sayHello.greet('');
        var expected = 'Hello, Friend!';
        expect(actual).toEqual(expected);
    });

    it('says good morning in the morning', function() {
        var theDate = new Date('February 01, 2018 08:00:00');

        var actual = sayHello.greet('World',theDate);
        var expected = 'Good Morning, World';
        expect(actual).toEqual(expected);

    });
    it('speaks German to Germans', function() {
        var actual = sayHello.greet('Hans');
        var expected = 'Guten Tag, Hans';
        expect(actual).toEqual(expected);
    });
});