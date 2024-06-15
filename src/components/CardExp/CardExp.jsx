import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MediaQuery from "react-responsive";

export default function CardExp({ ImgSrc, CrdTitle, CrdText }) {
  return (
    <div className="card-container">
      <MediaQuery maxWidth={512}>
        <Card
          sx={{ maxWidth: "auto" }}
          style={{ borderRadius: "20px", backgroundColor: "#f0f0f0" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={`${ImgSrc}`}
              alt="img src"
            />
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {CrdTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {CrdText}
              </Typography>
            </CardContent> */}
          </CardActionArea>
        </Card>
      </MediaQuery>

      <MediaQuery minWidth={513}>
        <Card
          sx={{ maxWidth: "800" }}
          style={{ borderRadius: "30px", backgroundColor: "grey" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="600"
              image={`${ImgSrc}`}
              alt="img src"
            />
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {CrdTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {CrdText}
              </Typography>
            </CardContent> */}
          </CardActionArea>
        </Card>
      </MediaQuery>
    </div>
  );
}
