class User {
  constructor(private firstName: string, private lastName: string) {}
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("john", "doe");
console.log(user.fullName); // we can access fullName property because we are not using private modifier. when getter is used, we can use it like a property

class BasicUser {
  public _firstName: string = "";
  public _lastName: string = "";
  set firstName(value: string) {
    this._firstName = value;
  }
  set lastName(value: string) {
    this._lastName = value;
  }
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
  static createUser(firstName: string, lastName: string): BasicUser {
    const user = new BasicUser();
    user.firstName = firstName;
    user.lastName = lastName;
    return user;
  }
  static description: string = "This is a basic user class";
}
console.log(BasicUser.createUser("John", "Doe").fullName); // we can access static method and variable before initialization of class
console.log(BasicUser.description); // we can access static property before initialization of class

const newUser = new BasicUser();
newUser.firstName = "John";
newUser.lastName = "Doe";
console.log(newUser.fullName); // we can access fullName property because we are not using private modifier.

// protected vs private
// protected members are accessible within the class and its subclasses
// private members are accessible only within the class not in subclasses
class Base {
  protected id: number;
  private name: string = "BaseClass";
  constructor(id: number, name?: string) {
    this.id = id;
    if (name) this.name = name;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
class Derived extends Base {
  constructor(id: number) {
    super(id);
    console.log(this.id); // we can access protected member in subclass
  }
  // getName(): string {
  //   return this.name;
  // }
}
abstract class UIElement {
  // clone ui element we cant create instance of abstract class use as inheritance
  constructor(public id: number) {}
  abstract getName(): string;
  clone() {
    // logic to clone the UI element
  }
}
class ConcreteClass extends UIElement {
  constructor(id: number, public name: string) {
    super(id);
  }
  getName(): string {
    return this.name;
  }
}
