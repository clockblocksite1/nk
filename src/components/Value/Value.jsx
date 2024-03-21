import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from "../../utils/accordion";

const Value = () => {
    const [className, setClassName] = useState(null);

    return (
        <section className='v-wrapper'>
            {/* Left side */}
            <div className='v-left'>
                <div className='image-container'>
                    <img src='./value.png' alt="" />
                </div>
            </div>

            {/* Right side */}
            <div className='flexColStart v-right'>
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We firmly believe that a wonderful living environment can significantly enhance your quality of life</span>

                <Accordion
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                    {data.map((item, i) => (
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flexCenter accordionButton '>

                                <AccordionItemState>
                                    {({expanded})=> 
                                    expanded ? 
                                    setClassName("expanded"):
                                    setClassName("collapsed")}
                                </AccordionItemState>


                                    <div className='flexCenter icon'>{item.icon}</div>
                                    <span className='primaryText'>{item.heading}</span>
                                    <div className='flexCenter icon'>
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {/* Content for the accordion item */}
                                <p className='secondaryText'>{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
export default Value;