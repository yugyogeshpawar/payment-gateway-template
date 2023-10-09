import { useEffect, useState } from "react";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const Rating = ({ numberOfReview }) => {
  const [numberType, setNumberType] = useState();
  const [reviewNumber, setReviewNumber] = useState(0);

  useEffect(() => {
    if (Number.isInteger(numberOfReview)) {
      setNumberType("int");
      setReviewNumber(numberOfReview);
    } else {
      const [first] = numberOfReview.toString().split(".");
      setNumberType("float");
      setReviewNumber(Number(first));
    }
  }, [numberOfReview]);

  return (
    <>
      {numberType === "int" ? (
        <>
          {[...Array(reviewNumber)]?.map((_, i) => (
            <button key={i}>
              <BsFillStarFill />
            </button>
          ))}
          {[...Array(5 - reviewNumber)]?.map((_, i) => (
            <button key={i + 3}>
              <BsStar />
            </button>
          ))}
        </>
      ) : (
        <>
          {[...Array(reviewNumber)]?.map((_, id) => (
            <button key={id}>
              <i>
                <BsFillStarFill />
              </i>
            </button>
          ))}
          {[...Array(5 - reviewNumber)]?.map((_, id) => (
            <button key={"id" + id}>
              <i>{id === 0 ? <BsStarHalf /> : <BsStar />}</i>
            </button>
          ))}
        </>
      )}
    </>
  );
};

export default Rating;
