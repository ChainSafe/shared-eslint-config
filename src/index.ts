import { MochaInstanceOptions } from "mocha";

const opts: MochaInstanceOptions = {
  bail: true,
};
console.log(opts);

const foo = 1;

//eslint-disable-line
//eslint-disable-line no-undef
console.log(foo);
