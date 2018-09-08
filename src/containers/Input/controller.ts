import store from "@/store";
import { AddItem } from "@/store/Modules/item/types";

export default class ItemController {
  private item: string;
  constructor(item: string) {
    this.item = item;
  }

  public addItem(): void {
    store.commit(new AddItem(this.item));
  }
}
