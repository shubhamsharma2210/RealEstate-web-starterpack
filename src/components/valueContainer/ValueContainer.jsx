import React, { useState } from "react";
import "./valueContainer.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import valueImage from "../../../public/value.png";

const ValueContainer = () => {
    const [className , setClassName] = useState(null)
  return (
    <div className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src={valueImage} alt="valueImage" />
          </div>
        </div>
        <div className="v-right flexColStart">
          <span className="orangeText">Our value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always to help bt providing the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordian"
          >
            {data.map((value, index) => {
              return (
                <AccordionItem
                  className={`accordianItem ${className}`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordianButton">
                      {({ expended }) =>
                        expended
                          ? setClassName("expended")
                          : setClassName("collapsed")
                      }

                      <div className="flexCenter icon">{value.icon}</div>
                      <span className="primaryText">{value.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{value.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ValueContainer;
