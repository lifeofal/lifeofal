import React from "react";
import "./work.scss";
import{ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import {data} from "../../data/slider-data.js";

export default function Work() {
	return (
		<div className="work" id="work">
			<div className="slider">
				{data.map((d) => (
        <div className="container">
					<div className="item">
						<div className="left">
							<div className="leftContainer">
								<div className="imgContainer">
                  {d.icon}
								</div>
								<h2>{d.title}</h2>
								<p>
									{d.desc}
								</p>
                <span>Projects</span>
							</div>
						</div>
						<div className="right">
              <img src="" alt="" />
            </div>
					</div>
				</div>
        ))}
			</div>
      <ArrowForwardIos className="arrow right"/>
      <ArrowBackIos className="arrow left"/>
		</div>
	);
}
