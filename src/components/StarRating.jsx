import { useEffect, useState } from "react";
import { Star, StarFill, StarHalf, Stars } from "react-bootstrap-icons";

const StarRating = (props) => {
    const [star, setstar] = useState([]);
    useEffect(() => {
        const rat = () => {
            const item = [];
            for (let i = 0; i < 5; i++) {
                if (i < props.rating) {
                    item.push(<StarFill className=" inline-block fill-primary pr-1" size={14} />);
                } else {
                    item.push(<Star className=" inline-block fill-primary pr-1" size={14} />);
                }
            }
            setstar(item);
        }
        rat();
    }, [props.rating]);
    return (
        <div>
            <span className="pr-1 text-sm font-semibold">Rating:</span>
            {star.map((sr) => 
            <>{ sr }</>
            )
            }
        </div>
    )
}

export default StarRating;