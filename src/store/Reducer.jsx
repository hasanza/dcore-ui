export default (state, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return {
          ...state,
          viewQuestion: state.viewQuestion = action.payload
      };
    case "SET_PJT":
      return {
        ...state,
        currentProject: state.currentProject = action.payload
      };
     case "SCRUB":
       return {
         ...state,
         viewQuestion: state.viewQuestion = {}
       } 

    default:
      return state;
  }
};
