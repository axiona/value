import Memoized from '../dist/memoize.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('test', function() {

    const standard = {value:10};
    const memoize = new Memoized(standard);


    it(`check value`, () =>{

        expect(memoize.value).toBe(10);
    });

    it(`change subject value`, () =>{
        standard.value = 20;
        expect(standard.value).toBe(20);
    });

    it(`recheck memoized value`, () => {

        expect(memoize.value).toBe(10);
    });

    it(`reset memoize`, () =>{

        memoize.clear();
        expect(memoize.value).toBe(20);
    });
});
