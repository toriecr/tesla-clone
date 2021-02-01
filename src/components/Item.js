import React, { useState } from "react"
import Button from "./Button"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "./Item.css"
import handleViewport from 'react-in-viewport';

const Block = (props: { inViewport: boolean }) => {

  const { inViewport, forwardedRef } = props;
  // const color = inViewport ? '#217ac0' : '#ff9800';
  // const text = inViewport ? 'In viewport' : 'Not in viewport';

  return (
    <div className="viewport-block" ref={forwardedRef}></div>
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Item = ({ title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first }) => {
  const [display, setDisplay] = useState("hide");

  function show(){
    setDisplay("item__container")
  }
  
  function hide(){
    setDisplay("hide")
  }

  return (
    <div className="item" style={{ 
      backgroundImage: `url(${backgroundImg})`
    }}>
      <ViewportBlock onEnterViewport={() => show()} onLeaveViewport={() => hide()} />
      <div className={display}>
        <div className="item__text">
          <div className="item__title">
            <p>{title}</p>
          </div>
          <div className="item__textDesc">
            <p>{desc}</p>
          </div> 
        </div>
        <div className="item__lowerThird">
          <div className="item__buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )} 
          </div>
          {/* {first && (
            <div className="item__expand">
              <ExpandMoreIcon />
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
};

export default Item;