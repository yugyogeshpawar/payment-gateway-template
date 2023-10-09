import Image from "next/image";
import Link from "next/link";

const HelpCenterCard = ({ data }) => {
  return (
    <div className="single-box">
      <div className="img-area">
        <Image src={data.icon} alt="icon" />
      </div>
      <Link href="/help-center-category">
        <h5>{data.title}</h5>
      </Link>
    </div>
  );
};

export default HelpCenterCard;
