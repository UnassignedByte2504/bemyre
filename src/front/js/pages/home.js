import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Main } from "../component/Main";
import { AsideLeft } from "../component/asides/AsideLeft";
import { AsideRight } from "../component/asides/AsideRight";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Main-Wrapper container">
      <div className="Main-AsideL"><aside><AsideLeft /></aside></div>
      <div className="Main-Content-Wrapper"><main><Main /></main></div>
      <div className="Main-AsideR"><aside><AsideRight /></aside></div>
		</div>
	);
};
