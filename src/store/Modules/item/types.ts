export enum Types {
  ADD_ITEM = "item/add_item",
}

export class AddItem implements FluxStandardAction {
  public type = Types.ADD_ITEM;
  constructor(public payload: string) {}
}
