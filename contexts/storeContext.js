import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();
const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.action) {
    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "REMOVE_ONE_PRODUCT":
      const nextBasket = state.basket.map((item) => {
        if (item.id === action.payload.id) {
          // found the one
          const copy = { ...item };
          copy.amount--;
          return copy;
        } else {
          // not found
          return item;
        }
      });
      // filter out the ones that are 0
      const finalBasket = nextBasket.filter((item) => item.amount > 0);

      return {
        ...state,
        basket: finalBasket,
      };

    case "ADD_PRODUCT":
      console.log(state, action);
      // if it exists already, add 1
      const exists = state.basket.find((item) => item.id === action.payload.id);
      if (exists) {
        const nextBasket = state.basket.map((item) => {
          if (item.id === action.payload.id) {
            // found it
            const copy = { ...item };
            copy.amount++;
            return copy;
          } else {
            return item;
          }
        });
        return { ...state, basket: nextBasket };
      } else {
        const newItem = action.payload;
        newItem.amount = 1;
        return { ...state, basket: state.basket.concat(newItem) };
      }
  }
}

export const StoreProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  console.log(data);

  return (
    <StoreContext.Provider value={{ data }}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
