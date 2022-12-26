import * as fs from "fs";
import { Action, ActionHook } from "./action";
import { Job } from "./Job";

export class Runner {
  private actions = new Map<string, Action>();
  private _context: Record<string, unknown> = {};

  public set context(context: Record<string, unknown>) {
    this._context = context;
  }

  public useAction(hook: ActionHook): void;
  public useAction(type: string, action: Action): void;
  public useAction(a: string | ActionHook, b?: Action): void {
    if (typeof a === "string") {
      if (b !== undefined) {
        this.actions.set(a, b);
      } else {
        throw new Error("no action was given");
      }
    } else {
      this.actions.set(a.type, a.action);
    }
  }

  public load(file: fs.PathLike);
  public load(job: Job);
  public;
}
