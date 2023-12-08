import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const reservationSchema = yupResolver(
  Yup.object().shape({
    name: Yup.string().nullable().required("This field is required"),
    email: Yup.string()
      .nullable()
      .required("This field is required")
      .email("Invalid email")
      .required("This field is required"),
    totalPeople: Yup.number()
      .typeError("Please enter a valid number")
      .min(1, "At least one people")
      .max(100, "Sorry , Maximum 100 people are allowed")
      .required("This field is required"),
    date: Yup.date()
      .typeError("Invalid Date")
      .min(new Date(), "Selected date must be greater than from today")
      .required("This field is required"),
    time: Yup.string()
      .test(
        "is-valid-time",
        "Selected time must be between 10 AM to 10 PM",
        (value) => {
          if (!value) return false;
          const selectedTime = new Date(`2000-01-01T${value}`);
          const minTime = new Date(`2000-01-01T10:00`);
          const maxTime = new Date(`2000-01-01T22:00`);
          return selectedTime >= minTime && selectedTime <= maxTime;
        }
      )
      .required("This field is required"),
    mobile: Yup.number()
      .nullable()
      .typeError("This field is required")
      .min(1, "Negative number not allowed")
      .test("valid number", function (value) {
        if (!value) {
          return false;
        }
        if (value.toString().length != 10) {
          return this.createError({
            message: "Number should be 10 digits length",
          });
        } else {
          return true;
        }
      })
      .required("This field is required"),
  })
);
