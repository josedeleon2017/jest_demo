import { Controller } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import { Get, Returns, Summary } from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.aFunction();
  }

  aFunction() {
    return "hello";
  }

  fibNumber(n: number) {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }

  factorial(n: number) {
    let acm = 1;

    for (let i = 1; i <= n; i++) {
      acm *= i;
    }
    return acm;
  }

  pow2(a: number) {
    return a * a;
  }

  @Get("/pow/:a")
  @Summary("potencia dos numeros")
  @(Returns(200).Description("obtiene informacion del usuario"))
  pow(@PathParams("a") a: number): number {
    try {
      if (a == 1) {
        return this.pow2(a);
      }
      return a * a;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }
}
