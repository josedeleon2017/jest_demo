import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("Hello -> .toBe()", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    expect(instance.aFunction()).toBe("hello");
  });


  it("Fibonacci -> .toStrictEqual()", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const serie = [instance.fibNumber(1), instance.fibNumber(2), instance.fibNumber(3), instance.fibNumber(4), instance.fibNumber(5)];

    expect(serie).toStrictEqual([1, 1, 2, 3, 5]);
  });

  it("Factorial -> .mockReturnValueOnce()", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance, "factorial").mockReturnValueOnce(5040);

    expect(instance.factorial(6)).toStrictEqual(5040);
    expect(instance.factorial(6)).toStrictEqual(720);
  });

  it("Sum -> .toBeCalled()", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    let x = jest.spyOn(instance, "pow2");

    //llamada al metodo
    const res = instance.pow(1)
    expect(x).toBeCalled();
  });

});
