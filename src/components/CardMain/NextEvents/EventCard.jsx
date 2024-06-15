import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const EventPaper = styled(Paper)(({ theme }) => ({
  width: "160px",
  height: "190px",
  borderRadius: "20px",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "gold",
}));

export default function EventCard({
  ciudad1,
  lugar1,
  fecha1,
  ciudad2,
  lugar2,
  fecha2,
}) {
  return (
    <div>
      <Stack direction="row" spacing={3}>
        <EventPaper square={false}>
          <h3>{ciudad1}</h3>
          <p>{fecha1}</p>
          <br />
          <p>{lugar1}</p>
        </EventPaper>
        <EventPaper square={false}>
          <h3>{ciudad2}</h3>
          <p>{fecha2}</p>
          <br />
          <p>{lugar2}</p>
        </EventPaper>
      </Stack>
    </div>
  );
}
