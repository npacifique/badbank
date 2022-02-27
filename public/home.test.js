const home = require('./home');
describe("My home", () => {
  test("work", () => {
    expect(home.home()).toEqual(
      <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
    )
  })
})