export default function reducer(state = [], action) {
  if (action.type === "initializeAsync") return (state = action.payload.value);

  if (action.type === "deleteItem")
    return state.filter((item) => item.id !== action.payload.id);
  return state;
}
