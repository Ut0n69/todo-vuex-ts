export interface ItemState {
  data: {
    list: string[],
  };
}

export const initialState = (): ItemState => {
  return {
    data: {
      list: ["buy something", "eat something"],
    },
  };
};
