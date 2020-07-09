export default function lreducer(state = [], action) {
  if (action.type === "initializeAsync") return (state = action.payload.value);

  
  return state;
}
