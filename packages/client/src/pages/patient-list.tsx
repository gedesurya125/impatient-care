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
      <Box
        sx={{
          width: "100%",
          overflow: "auto",
          border: "2px solid",
          borderColor: "primary",
          minHeight: "70vh",
          borderRadius: "medium",
        }}
      >
        <PatientListTable />
      </Box>
    </Box>
  );
}

const PatientListTable = () => {
  return (
    <Box
      as="table"
      sx={{
        width: "max-content",
      }}
    >
      <TableHead />
    </Box>
  );
};

const TableHead = () => {
  const columnTitles = [
    { label: "No" },
    { label: "Kode AG" },
    { label: "Sampling Comstok" },
    { label: "Ruang Perawatan" },
    { label: "Tanggla Pengkajian" },
    { label: "Nomor Kamar / BED" },
    { label: "Tanggal MRS" },
    { label: "No RM" },
    { label: "Nama Pasien" },
    { label: "Tanggal Lahir Pasien" },
    { label: "Diagonis Medis" },
    { label: "Diet" },
    { label: "BB saat MRS" },
    { label: "Lingkar Lengan (cm)" },
    { label: "BB Estimasi" },
    { label: "Berat Badan Aktual (kg)" },
    { label: "Tinggi Berat Badan Saat MRS(cm)" },
    { label: "IMT/ % Water Low" },
    { label: "IMT" },
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
