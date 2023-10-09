import Image from "next/image";
import values_1 from "/public/images/icon/values-icon-1.png";
import values_2 from "/public/images/icon/values-icon-2.png";
import values_3 from "/public/images/icon/values-icon-3.png";
import values_4 from "/public/images/icon/values-icon-4.png";

const OurValues = () => {
  return (
    <section className="our-values">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Our values</h5>
                <h2 className="title">
                  The values that drive everything we do
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                  justo aliquet elit sed
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar align-items-center">
            <div className="col-lg-6">
              <div className="single-box d-flex">
                <div className="img-box">
                  <Image src={values_1} alt="icon" />
                </div>
                <div className="text-box">
                  <h4>Innovation</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-box d-flex">
                <div className="img-box">
                  <Image src={values_2} alt="icon" />
                </div>
                <div className="text-box">
                  <h4>Accountability</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-box d-flex">
                <div className="img-box">
                  <Image src={values_3} alt="icon" />
                </div>
                <div className="text-box">
                  <h4>Commitment</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-box d-flex">
                <div className="img-box">
                  <Image src={values_4} alt="icon" />
                </div>
                <div className="text-box">
                  <h4>Team Work</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur imp adipiscing elit
                    justo aliquet elit sed convallisolo neque aliquam elementum
                    dolr.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
