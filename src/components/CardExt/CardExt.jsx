import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardExt({ ImgSrc, CrdTitle, CrdText }) {
  return (
    <div className="card-container col-sm-4">
      <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={`${ImgSrc}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {CrdTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {CrdText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
