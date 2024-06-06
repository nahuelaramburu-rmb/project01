import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/*REVISAR EL RESPONSIVE 369, YA QUE CON ESAS DIMENSIONES EL RESPONSIVE ROMPE Y LAS LETRAS SALEN DE LA TARJETA*/


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "160px",
  height: "190px",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function NextEvents() {
  return (
    <Stack direction="row" spacing={3}>
      <DemoPaper square={false} style={{borderRadius:"20px", height: "175px", width:"200px"}}>
        <h3>La Plata</h3>
        <p>21 de mayo 19:00 hs</p>
        <br />
        <p>Estadio Unico</p>
      </DemoPaper>
      <DemoPaper square={false} style={{borderRadius:"20px", height: "175px", width:"200px"}}>
        <h3>Berisso</h3>
        <p>20 de Diciembre 19:00 hs</p>
        <br />
        <p>Estadio Malvinas Pepa</p>
      </DemoPaper>
    </Stack>
  );
}
