const { expect } = require("chai");

describe("Crypto Pay Collectable Factory", function () {
  it("Should return the new collectable contract", async function () {
    const CryptoPayCollectableFactory = await ethers.getContractFactory("CryptoPayCollectableFactory");
    const factory = await CryptoPayCollectableFactory.deploy();
    await factory.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    const createCollectablePromise = factory.createCollectable("My Pay Collectable", "MPC");

    await expect(createCollectablePromise)
      .to.emit(factory, 'CryptoPayCollectableCreated')
      .withArgs(await factory.getCollectableByIndex(0))
  });
});

