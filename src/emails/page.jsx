import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const NotionMagicLinkEmail = ({
  loginCode = `Input: arr[] = {0, -1, 2, -3, 1}, x= -2 
    Output: Yes
    Explanation:  If we calculate the sum of the output,1 + (-3) = -2`,
}) => (
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Your Daily DSA Question is Here!!!</Heading>
        <Link
          href="https://notion.so"
          target="_blank"
          style={{
            ...link,
            display: "block",
            marginBottom: "16px",
          }}
        >
          Click Here to Join 30dayscoding.com
        </Link>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Given an array A[] of n numbers and another number x, the task is to
          check whether or not there exist two elements in A[ ] whose sum is
          exactly x. <br></br>
          Examples:
        </Text>
        <code style={code}>{loginCode}</code>
        <code style={code}>{`Input: arr[] = {1, -2, 1, 0, 5}, x = 0
Output: No`}</code>

        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          <span style={{fontWeight : 'bold'}}>Naive Approach:</span> The basic approach to solve this problem is by nested
          traversal. Traverse the array using a loop For each element: Check if
          there exists another in the array with sum as x Return true if yes,
          else continue If no such pair is found, return false.
        </Text>
        
        <Img src="https://framerusercontent.com/images/ksJbX3Vkl68FllvI7czmWjg6wvg.png" width="50" height="50" alt="Notion's Logo" />
        <Text style={footer}>
          <Link
            href="https://30dayscoding.com"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            30dayscoding.com
          </Link>
          , the all-in-one-workspace
          <br />
          One Question Per Day!!
        </Text>
      </Container>
    </Body>
  </Html>
);

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
