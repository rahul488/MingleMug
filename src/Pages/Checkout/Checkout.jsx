import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import AppModal from "../../Components/Modal/Modal";
import useCartStore from "../../hooks/Strore/Store";
import React, { useState } from "react";
import SubTotal from "../Cart/SubTotal";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { toast } from "react-toastify";

const CheckOut = ({ open, close, details, formProps }) => {
  const prodcut = useCartStore((state) => state.product);
  const handleConfirm = () => {
    toast.success('We have received your request', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    formProps.reset();
    close();
  }
  return (
    <AppModal open={open} close={close}>
      <ModalHeader toggle={() => close(false)} color="white">
        Verify details
      </ModalHeader>
      <ModalBody style={{ height: "600px", overflowY: "auto" }}>
        <div className="customer-details p-3">
          <p className="sub-header text-center">Personal Information</p>
          {Object.keys(details).map((detail, index) => (
            <h6 key={index} className="text-center">
              {detail.toUpperCase()} - {details[detail]}
            </h6>
          ))}
        </div>
        {prodcut.length ? (
          <div className="product-details my-3">
            <p className="sub-header text-center">Item Information</p>
            <div className="container">
              {prodcut.map((prod) => (
                <div
                  className="row g-2 mb-4"
                  key={prod?.idDrink || prod?.idMeal}
                >
                  <div className="col-md-4 col-sm-12">
                    <img
                      src={prod?.strDrinkThumb || prod?.strMealThumb}
                      height="300px"
                      width="100%"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 d-flex justify-content-start justify-content-md-center">
                    <div>
                      <h5>Name -{prod?.strDrink || prod?.strMeal}</h5>
                      <h5>Price - {prod?.price}</h5>
                      <h5>Quantity - {prod?.quantity}</h5>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12 d-flex justify-content-center">
                    <h5>${prod?.quantity * prod?.price}</h5>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-center justify-content-md-end w-100">
                <SubTotal product={prodcut} />
              </div>
            </div>
          </div>
        ) : null}
      </ModalBody>
      <ModalFooter className="d-flex justify-content-between">
        <div class="alert alert-primary d-flex align-items-center" role="alert">
          <BsFillInfoCircleFill size={45} />
          <div className="mx-2">
            Your payment would be received at our store after event.
          </div>
        </div>
        <div className="ml-auto">
          <Button color="success" onClick={handleConfirm}>
            Confirm Table
          </Button>
          <Button color="warning" className="mx-2" onClick={() => close(false)}>
            Cancel
          </Button>
        </div>
      </ModalFooter>
    </AppModal>
  );
};
export default CheckOut;
