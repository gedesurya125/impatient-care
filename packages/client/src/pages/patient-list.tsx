import React from "react";

// External Components
import { GridTemplate, Heading, Box } from "@gedesurya125/surya-ui";
import client from "apollo/client";
import { gql } from "@apollo/client";

// Local Components

// Data
import { usePatients } from "apollo/query";

export default function PatientList() {
  const { data, loading } = usePatients();

  console.log("this is the patient data bro", data);

  return (
    <Box
      as="main"
      id="home-page"
      sx={{
        p: "small",
      }}
    >
      <Headline />
      <PatientListTable />
    </Box>
  );
}

const PatientListTable = () => {
  return (
    <Box as="table">
      <TableHead />
    </Box>
  );
};

const TableHead = () => {
  const columnTitles = [
    { label: "No" },
    { label: "Name" },
    { label: "Age" },
    { label: "Gender" },
  ];
  return (
    <Box as="thead">
      <Box as="tr">
        {columnTitles.map(({ label }, index) => {
          return (
            <Box as="th" key={label}>
              {label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const Headline = () => (
  <Heading
    as="h2"
    sx={{
      fontSize: ["2rem", "3rem"],
      fontFamily: "body.bold",
    }}
  >
    Welcome to Patient List
  </Heading>
);
