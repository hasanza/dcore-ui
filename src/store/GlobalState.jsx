import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { projects } from "./projects";

const initialState = {
  //initial state is an array of Question objects
  projects,

  currentProject: {
    name: "Welcome",
    info: {
      details: "Select a Project",
      phase: "",
      website: "",
    },
    img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1595228346838x805114642918018400%2F2020-07-20%252009_57_15-SaTT%2520-%2520Smart%2520Advertising%2520Transaction%2520Token.png?w=128&h=128&auto=compress&dpr=1&fit=max",
    data: {
      questions: [
        {
          title: "Welcome",
          img: "",
          description:
            "Please review the referral schemes and provide a score. High scores indicate strong referrals that give incentive to people to invite their peers.",
          reward: 0.2,
          class: "Market & Product",
          time: 15,
        },
      ],
    },
  },

  viewQuestion: {},
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function setViewQuestion(vq) {
    dispatch({
      type: "SET_VIEW",
      payload: vq,
    });
  }

  function setCurrentProject(cp) {
    dispatch({
      type: "SET_PJT",
      payload: cp,
    });
  }

  function scrubViewQuestion() {
    dispatch({
      type: "SCRUB",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        projects: state.projects,
        currentProject: state.currentProject,
        viewQuestion: state.viewQuestion,
        setCurrentProject,
        setViewQuestion,
        scrubViewQuestion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
