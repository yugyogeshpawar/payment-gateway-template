import Image from "next/image";
import Social from "../social/Social";
import linkedin from "/public/images//icon/linkedin.png";
import facebook from "/public/images/icon/facebook.png";
import instagram from "/public/images/icon/instagram.png";
import twitter from "/public/images/icon/twitter.png";

const TeamCard = ({ itm }) => {
  const { name, designation, avt } = itm;
  return (
    <div className="single-box">
      <div className="img-box">
        <Image src={avt} alt="image" />
      </div>
      <div className="body-area">
        <h5>{name}</h5>
        <p className="designation">{designation}</p>
        <ul className="social-link d-flex justify-content-center align-items-center">
          <Social
            items={[
              [facebook, "/"],
              [linkedin, "/"],
              [instagram, "/"],
              [twitter, "/"],
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
