const timer5Reducer = (state = Date.now(), action) => {
  switch (action.type) {
    case "SET_TIMER_5":
      if (action.payload - state > 1000) return action.payload;
      return state;
    default:
      return state;
  }
};

export default timer5Reducer;
