function logMethod(
  methodNameOrTarget?: string | Object,
  optionsOrPropertyKey?: { logLevel?: string } | string,
  descriptor?: PropertyDescriptor
): any {
  // If called as @logMethod
  if (
    typeof methodNameOrTarget === "object" &&
    typeof optionsOrPropertyKey === "string" &&
    typeof descriptor === "object"
  ) {
    const target = methodNameOrTarget;
    const propertyKey = optionsOrPropertyKey;
    const desc = descriptor!;
    const originalMethod = desc.value;
    desc.value = function (...args: any[]) {
      console.log(
        `[info] Calling ${propertyKey} with args: ${JSON.stringify(args)}`
      );
      const result = originalMethod.apply(this, args);
      console.log(`[info] Result of ${propertyKey}: ${JSON.stringify(result)}`);
      return result;
    };
    return desc;
  }

  // If called as @logMethod(...)
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(
        `[${
          (optionsOrPropertyKey as any)?.logLevel ?? "info"
        }] Calling ${methodNameOrTarget} with args: ${JSON.stringify(args)}`
      );
      const result = originalMethod.apply(this, args);
      console.log(
        `[${
          (optionsOrPropertyKey as any)?.logLevel ?? "info"
        }] Result of ${methodNameOrTarget}: ${JSON.stringify(result)}`
      );
      return result;
    };
    return descriptor;
  };
}

class Calculator {
  @logMethod()
  add(x: number, y: number) {
    return x + y;
  }

  @logMethod()
  subtract(x: number, y: number) {
    return x - y;
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.subtract(5, 3);

function logClass(target: any, ctx: ClassDecoratorContext) {
  console.log(`Class: ${target.name}`);
  console.log(target);
  console.log(ctx);
}

@logClass
class Person {
  name = "Alice";
  sayHello(name: string) {
    return `Hello, ${name}!`;
  }
}

const person = new Person();
person.sayHello("Alice");
