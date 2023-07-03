import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";

use(chaiAsPromised);

before(function () {});

describe("some test", function () {
  it("test", () => {
    expect(true).to.be.true();
    expect(function () {
      return Promise.resolve(true);
    }).to.eventually.be.true;
  });
});