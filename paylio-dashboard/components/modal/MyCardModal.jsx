import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import mastercard from "/public/images/icon/mastercard.png";
import popup_card from "/public/images/popup-card.png";

const MyCardModal = () => {
  return (
    <div className="transactions-popup mycard">
      <div className="container-fruid">
        <div className="row">
          <div className="col-lg-6">
            <div className="modal fade" id="myCardModal" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header justify-content-between">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i>
                        <FaTimes />
                      </i>
                    </button>
                  </div>
                  <div className="main-content">
                    <div className="row">
                      <div className="col-sm-4">
                        <h5>My Cards</h5>
                        <div className="icon-area">
                          <Image
                            src={popup_card}
                            alt="image"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="right-area">
                          <div className="top-area d-flex align-items-center justify-content-between">
                            <div className="card-details d-flex align-items-center">
                              <Image src={mastercard} alt="image" />
                              <span>5880 **** **** 8854</span>
                            </div>
                            <a href="javascript:void(0)">
                              <i className="icon-h-edit"></i>
                              Edit
                            </a>
                          </div>
                          <ul className="payment-details">
                            <li>
                              <span>Card Type:</span>
                              <span>Visa</span>
                            </li>
                            <li>
                              <span>Card Holder:</span>
                              <span>Alfred Davis</span>
                            </li>
                            <li>
                              <span>Expires:</span>
                              <span>12/19</span>
                            </li>
                            <li>
                              <span>Card Number:</span>
                              <span>5880 5087 3288 8854</span>
                            </li>
                            <li>
                              <span>Total Balance:</span>
                              <span>80,700.00</span>
                            </li>
                            <li>
                              <span>Total Debt:</span>
                              <span>8,250.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardModal;
