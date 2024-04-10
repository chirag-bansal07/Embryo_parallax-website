import { useMemo } from "react";
import "./Image.css";

const Image = (props) => {

    return (
        <div className="image">
            <img 
                src={`${props.src}`}
            />
        </div>
    )
}

export default Image;