import {
  changeItemAmountAction,
  setItemsAction,
} from "../types/CatalogCartSlice_types";
import { CatalogCartSliceSchema } from "@/shared/types/catalog";
import { buildSlice } from "@/shared/utils/store";

const initialState: CatalogCartSliceSchema = {
  items: [],
};

export const CatalogCartSlice = buildSlice({
  name: "CatalogCartSlice",
  initialState: initialState,
  reducers: {
    changeItemAmount: (
      state: CatalogCartSliceSchema,
      action: changeItemAmountAction,
    ) => {
      const selectedItemIndex = state.items.findIndex(
        (item) => item.id == action.payload.itemId,
      );

      if (
        action.payload.amount < 0 &&
        state.items[selectedItemIndex].amount <= 1
      )
        state.items = state.items.filter(
          (item) => item.id !== action.payload.itemId,
        );
      else {
        state.items[selectedItemIndex].amount += action.payload.amount;
      }
    },

    setItems: (state: CatalogCartSliceSchema, action: setItemsAction) => {
      state.items = action.payload.items;
    },
  },
});

export const {
  actions: CatalogCartSliceActions,
  reducer: CatalogCartSliceReducer,
  useActions: useCatalogCartSliceActions,
} = CatalogCartSlice;
