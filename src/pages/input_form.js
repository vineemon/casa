import React from "react";
import { Link, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  inputData,
  inputDataItem,
  inputDataText,
  searchButton
} from "../components/layout.module.css";

import * as AWS from "aws-sdk";

// markup
const StartPage = () => {
  const [firstName, setFirstName] = React.useState(0);
  const [lastName, setLastName] = React.useState(0);
  const [percentDown, setPercentDown] = React.useState(0);
  const [homePrice, setHomePrice] = React.useState(0);
  const [city, setCity] = React.useState(0);

  AWS.config.update({
    region: "us-east-2",
    accessKeyId: `${process.env.GATSBY_AWS_ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.GATSBY_AWS_SECRET_ACCESS_KEY}`,
  });
  // AWS.config.update({region: 'us-east-2'});
  const docClient = new AWS.DynamoDB.DocumentClient();

  const name = "Vineet2";
  const table = "UserData";

  const addDataToDynamoDB = async () => {
    const params = {
      TableName: table,
      Item: {
        id: lastName + "" + firstName,
        firstName: firstName,
      },
    };

    console.log("Adding a new item...");
    docClient.put(params, function (err, data) {
      if (err) {
        console.error(
          "Unable to add item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
      }
    });
  };

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Back to Home
            </Link>
          </li>
        </ul>
      </nav>
      <p className={siteTitle}>
        Let's Find the Best Mortgage Provider for Your Goals
      </p>
      <ul className={inputData}>
        <li>
          <div className={inputDataItem}>Enter your first name:</div>
          <input
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </li>
        <li>
          <div className={inputDataItem}>Enter your last name:</div>
          <input
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </li>
        <li>
          <div className={inputDataItem}>
            Enter your expected percent(%) down:
          </div>
          <input
            type="text"
            onChange={(event) => setPercentDown(event.target.value)}
          />
        </li>
        <li>
          <div className={inputDataItem}>Enter your expected home price:</div>
          <input
            type="text"
            onChange={(event) => setHomePrice(event.target.value)}
          />
        </li>
        <li>
          <div className={inputDataItem}>
            Enter the city you are looking to purchase in:
          </div>
          <input
            type="text"
            onChange={(event) => setCity(event.target.value)}
          />
        </li>
      </ul>
      <ul className={navLinks}>
        <button className={searchButton} onClick={addDataToDynamoDB}>
        <div className={navLinkText}>
            Submit
          </div>
        </button>
      </ul>
    </div>
  );
};

const query = graphql`
  query MyQuery {
    allIllu {
      edges {
        node {
          firstName
          id
        }
      }
    }
  }
`;

export default StartPage;
