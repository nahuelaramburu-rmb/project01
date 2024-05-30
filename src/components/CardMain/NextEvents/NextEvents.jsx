import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "auto",
  height: "auto",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function NextEvents() {
  return (
    <Stack direction="row" spacing={4}>
      <DemoPaper square={false}>
        <h3>La Plata</h3>
        <p>21 de mayo 19:00 hs</p>
        <br />
        <p>Estadio Unico</p>
      </DemoPaper>
      <DemoPaper square={false}>
        <h3>Berisso</h3>
        <p>20 de Diciembre 19:00 hs</p>
        <br />
        <p>Estadio Malvinas Pepa</p>
      </DemoPaper>
    </Stack>
  );
}
