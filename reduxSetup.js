const INITIAL_STATE = { mood: "(*￣0￣*)ノ口" };

const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ANGRY":
      return { ...state, mood: action.payload };
    case "HAPPY":
      return { ...state, mood: action.payload };
    case "SAD":
      return { ...state, mood: action.payload };
    case "CONFUSED":
      return { ...state, mood: action.payload };
    default:
      return state;
  }
};
