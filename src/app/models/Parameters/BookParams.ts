import {ParametersBase} from "./ParametersBase";

export class BookParams extends ParametersBase {
  public Authors = Array<string>();
  public Publishers = Array<string>();
  public IsFree = true;
}
