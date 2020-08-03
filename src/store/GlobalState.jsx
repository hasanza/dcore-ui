import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  //initial state is an array of Question objects
  questions: [
    {
      title: "Referral Schemes review",
      description: "Please review the referral schemes and provide a score. High scores indicate strong referrals that give incentive to people to invite their peers.",
      reward: 0.2,
      class: "Market & Product",
      time: 15
    },
    {
      title: "What are the Youtube mentions?",
      description: "Please elaborate and provide a score. High scores indicate a high number of mentions. Go to Youtube, type in the name of the project and see if there are any review or other videos about the project? Does the project have a presence on the platform with their own channel and their own videos?",
      reward: 0.1,
      class: "Social & Virality",
      time: 6
    },
    {
      title: "What is the vesting period for team tokens (lockup)?",
      description: "Low scores indicate no vesting or very low vesting periods. ",
      reward: 0.3,
      class: "Tokenomics",
      time: 8
    },
    {
      title: "Partnership review",
      description: "Please perform a review of the available partnerships and provide a score. Elaborate on the quality and quantity of partnerships. Blockchain projects tend to list their service providers as partners, identify if the listed partners are providing  services to the projects therefore they are not real partners. Provide scores accordingly.",
      reward: 0.22,
      class: "Market & Product",
      time: 8
    },
    {
      title: "Success Factors: Describe distinguishing factors that will help the business to succeed.",
      description: "What makes the project stand out? Give a high rating if the project has many  points of success. Also, high scores should be given for a project that can easily achieve its goals.",
      reward: 0.525,
      class: "Market & Product",
      time: 3
    },
    {
      title: "Is there already a Minimum Viable Product? If not, when will there be? Are processes explained?",
      description: "Please elaborate and provide a score. Provide a score of 0 if none are available, and a 3-5 if there is a  functioning MVP. Rate with 1-2 if no MVP but processes are clearly explained. A functioning MVP is 'Do they already have end users. Are people paying for it?'.",
      reward: 0.35,
      class: "Market & Product",
      time: 5
    },
    {
      title: "Are there any Consensus Mechanisms used?",
      description: "Please elaborate by listing all the identified mechanisms( Proof of work- stake- or other),  and provide a score. A score of 1 indicates no mechanisms. A high score indicates highly effective mechanisms.",
      reward: 1,
      class: "Team",
      time: 9
    },
    {
      title: "Evaluate the initial and future supply by reviewing the underlying tokenomics",
      description: "Elaborate more on this and provide a score. High scores indicate high token values. Consider the amount of tokens initially available vs the total supply, and how if the entry of new tokens for trading will drop the price.",
      reward: 0.6,
      class: "Tokenomics",
      time: 5
    },
    {
      title: "How many followers on twitter? Is it still active?",
      description: "Please elaborate and provide a score. High scores indicate a high number of mentions. Use tools like  www.buzzsumo.com , app.awario.com/",
      reward: 0.1,
      class: "Social & Virality",
      time: 4
    },
    {
      title: "How many followers on LinkedIn? Is it still active?",
      description: "Please elaborate and provide a score. High scores indicate a high number of mentions. Use tools like  www.buzzsumo.com , app.awario.com/",
      reward: 0.1,
      class: "Social & Virality",
      time: 5
    },
  ],

  viewQuestion: {
    
  },
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

  return (
    <GlobalContext.Provider
      value={{
        questions: state.questions,
        viewQuestion: state.viewQuestion,
        setViewQuestion
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
