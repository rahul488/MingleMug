import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { IoIosArrowForward } from "react-icons/io";

function CollapseibleCard({ title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="p-2">
      <div className="d-flex justify-content-between align-items-center gap-2">
        <p className="desc">{title}</p>
        <IoIosArrowForward onClick={toggle} size={30} cursor="pointer" />
      </div>
      <Collapse isOpen={isOpen}>
        <Card style={{ background: "orange" }}>
          <CardBody>{desc}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseibleCard;
