import { Runner } from "../src";
import { ActionHook } from "../src/lib/action";

test("initial integration test", () => {
  const runner = new Runner();

  runner.useAction("http", () => {});

  const myAction: ActionHook = {
    type: "log",
    action: (opts) => console.log(opts),
  };
  runner.useAction(myAction);

  runner.context = {
    myInfo: 2,
    abc: "123",
  };

  const job = runner.load("./resources/");
});
