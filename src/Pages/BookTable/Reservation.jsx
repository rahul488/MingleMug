import { FormProvider, useForm } from "react-hook-form";
import "./Reservation.css";
import { Form, Row, Col, FormGroup, Label, Button } from "reactstrap";
import { reservationSchema } from "../../Util/Schema";
import { reservationInitilaValue } from "../../Util/Initialvalue";
import InputField from "../../Components/Form/Input";
import { useState } from "react";
import CheckOut from "../Checkout/Checkout";
import moment from 'moment'

const Reservation = () => {
  const [modal,showModal] = useState(false);
  const [details,setDetails] = useState({});
  const formProps = useForm({
    mode: "all",
    resolver: reservationSchema,
    defaultValues: reservationInitilaValue,
  });

  const onSubmit = async (values) => {
    const response = values;
    response.date = moment(response.date,'DD-MM-YY').format('YYYY-MM-DD');;
    setDetails(response);
    showModal(true);
  };

  return (
    <div className="p-3 w-100">
      <div className="header-wrapper"></div>
      <div className="form-wrapper d-flex flex-wrap flex-sm-wrap justify-content-center flex-md-nowrap flex-lg-nowrap gap-2 my-5">
        <div className="flex-grow-3 p-3">
          <img
            src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/elementor/thumbs/cheerful-bartender-enjoying-an-alcoholic-drink-at-pub-bar-or-restaurant-evening-relaxation-concept-e1624969356823-p9dnsi9525229l2hsbdqrquzspsfms5ygz9pa7rwj4.jpg"
            className="w-100"
          />
        </div>
        <div className="flex-grow-1 p-3">
        <FormProvider {...formProps}>
          <Form  onSubmit={formProps.handleSubmit(onSubmit)}>
            <Row>
              <Col md={12}>
                <p className="sub-header">Visit Us</p>
                <h4>Book a Table</h4>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <InputField
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <InputField
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md={6}>
                <FormGroup>
                  <Label for="mobile">Mobile</Label>
                  <InputField id="mobile" name="mobile" type="number" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="total-person">How Many Persons ?</Label>
                  <InputField id="totalPerson" name="totalPeople" type="number" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="date">Choose Date</Label>
                  <InputField id="date" name="date" type="date" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="time">Choose Time</Label>
                  <InputField id="time" name="time" type="time" />
                </FormGroup>
              </Col>
              <Col md={12}>
              <Button  type="submit" className="btn btn-success w-100">Send</Button>
              </Col>
            </Row>
          </Form>
          </FormProvider>
          <CheckOut open={modal} close={showModal} details={details} formProps={formProps}/>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
