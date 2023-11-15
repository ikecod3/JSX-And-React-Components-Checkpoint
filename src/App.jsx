import React from "react";
import { Alert, Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

let firstName = prompt("What's your first name?");

export default function App() {
  return (
    <>
      {/* Navbar component is here */}
      <Navbar />
      {/* Card is here*/}
      <Card
        className="mb-3 mx-auto shadow-lg rounded-lg"
        style={{ width: "25rem" }}
      >
        <Image />
        <Card.Body>
          <Name />
          <Description />
          <Price />
        </Card.Body>
      </Card>

      {/* conditionally displaying of user firstName is here */}
      <div>
        {firstName ? (
          <Alert className="d-flex justify-content-center align-items-center mx-auto bg-transparent border-0">
            <img
              src="https://img.freepik.com/free-photo/young-annoyed-afro-american-cook-chef-uniform-holds-frying-pan-spatula-isolated-white-background-with-copy-space_141793-34748.jpg?size=626&ext=jpg&ga=GA1.1.1777253689.1700062667&semt=ais"
              alt="#"
              className="rounded-circle"
              style={{
                width: "75px",
                height: "75px",
              }}
            />
            <h1 className="m-5">Hello, {firstName}</h1>
          </Alert>
        ) : (
          <Alert
            key="dark"
            className="d-flex justify-content-center align-items-center mx-auto bg-transparent border-0 text-primary-emphasis"
          >
            <h1 className="m-5 text-success">Hello, there!</h1>
          </Alert>
        )}
      </div>
    </>
  );
}
