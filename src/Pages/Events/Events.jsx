import "./Event.css";
import CollapseibleCard from "../../Components/CollapsibleCard/Index";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";

const FAQ = [
  {
    title: "How many days in advance should I book?",
    desc: "Booking a reservation at least a few days in advance is recommended to secure your preferred time at MingleMug.",
  },
  {
    title: "Do you host Bussiness Events?",
    desc: "Yes, we cater to business events, offering a sophisticated and customizable venue for your corporate gatherings at MingleMug.",
  },
  {
    title:
      "Do you offer private event spaces for special occasions and what are the associated amenities and services?",
    desc: "Yes, we offer private event spaces with customizable amenities for special occasions.",
  },
  {
    title: "Are people under 21 allowed in events?",
    desc: "Our events are open to individuals of all ages, and we welcome guests under 21 to join and enjoy the experience at MingleMug.",
  },
];

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="event-wrapper p-2 w-100">
      <div className="event-wrapper-section1"></div>
      <div className="event-wrapper-section2 d-flex flex-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap gap-3 my-5">
        <div className="flex-grow-2">
          <p className="sub-header">WE HOST YOUR EVENT</p>
          <h2>Unforgetable Moments</h2>
          <p className="desc">
            Elevate your gatherings with us, where each detail is woven together
            to craft a tapestry of truly unforgettable experiences.
          </p>
          <div className="d-flex gap-3">
            <ul>
              <li>Bussiness Events</li>
              <li>Birthday Parties</li>
              <li>Social Events</li>
            </ul>
            <ul>
              <li>Charity Events</li>
              <li>Company Events</li>
              <li>Team Parties</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow-1">
          <img
            src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/elementor/thumbs/party-time-e1624968801218-p9dndzmvi977ezhww45msikpwbsk0yidqm1khbtro8.jpg"
            className="event-wrapper-section2-img w-100"
            height="500px"
          />
        </div>
      </div>
      <div className="event-wrapper-section3 d-flex flex-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap gap-3 my-5">
        <div className="flex-grow-1">
          <p className="sub-header">Book Now</p>
          <h2>Make a Reservation</h2>
          <p className="desc">
            Secure your spot for an unforgettable experience! Make a reservation
            at MingleMug and ensure a night filled with exceptional drinks,
            delectable bites, and cherished moments.
          </p>
          <div className="d-flex  justify-content-center justify-content-md-start w-100">
            <Button
              className="btn btn-lg btn-outline-warning"
              onClick={() => navigate("/book-table")}
            >
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex-grow-1 w-100 ">
          <h2>FAQ</h2>
          {FAQ.map((faq, i) => (
            <CollapseibleCard title={faq.title} desc={faq.desc} key={i} />
          ))}
        </div>
      </div>
      <div className="event-wrapper-section4"></div>
    </div>
  );
};
export default Events;
