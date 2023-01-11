import React from "react";
import Followers from "./aux/Followers.jsx";
import Following from "./aux/Following.jsx";
import DefaultBody from "./aux/DefaultBody.jsx";

export const profileCardViews = ["default", "followers", "following"];

const cardComponents = (props) => {
  return [
    {
      name: "followers",
      component: <Followers {...props} />,
    },
    {
      name: "following",
      component: <Following {...props} />,
    },
    {
      name: "default",
      component: <DefaultBody {...props} />,
    }
  ];
};

export const componentToRender = (name, props) => {
  const components = cardComponents(props);
  const component = components.find((component) => component.name === name);
  return component.component;
}

