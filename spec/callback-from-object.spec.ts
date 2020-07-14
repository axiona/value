import CallbackFromObject from "../dist/callback-from-object";
import Value from "../dist/value";
import Functions from "@dikac/t-function/function";
import Argument from "@dikac/t-function/argument/argument";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("basic", function() {

    let fn = function (number : number) {

        return number + number;
    };

    let argument : Value<Functions<[number],number>> & Argument<[number]> = {value:fn, argument:[1]};
    let callback = new CallbackFromObject(argument);

    it('validate initial data', function () {

        expect(argument.argument).toEqual([1]);
        expect(argument.value).toEqual(fn);

    });

    it('validate value', function () {

        expect(callback.value).toEqual(2);

    });

    it('change argument', function () {

        argument.argument = [2];
        expect(argument.argument).toEqual([2]);

    })

    it('validate value', function () {

        expect(callback.value).toEqual(4);

    });
});




