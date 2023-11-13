import React from "react";

const Overlay = (props) => {
    function clickoverlay() {
        props.overlayClicked();
    }
    return (
        <div onClick={clickoverlay} className={props.show ? 'overlay fixed left-0 right-0 bottom-0 top-0 bg-primary z-[1] opacity-0' : 'hidden'}></div>
    )
}

export default Overlay;