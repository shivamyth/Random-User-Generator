import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaBirthdayCake,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span className="pr-1">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <FaBirthdayCake className="pr-1" />
          {details.dob?.age}
          <br />
          <FaMapMarkedAlt className="pr-1" />
          {details.location?.city}
          <br />
          <FaPhone className="pr-1" />
          {details.cell}
          <br />
          <FaEnvelope className="pr-1" />
          {details.email}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
