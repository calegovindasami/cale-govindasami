import React from "react";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import {
  Avatar,
  CardActionArea,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import { useTheme } from "@emotion/react";

function handleTag() {}
export const Tweet = () => {
  return (
    <Card sx={{ width: "550px" }}>
      <CardActionArea sx={{ cursor: "default" }} disableTouchRipple="true">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar>
                    <img src="/public/avatar.jpg" height="45"></img>
                  </Avatar>
                }
                titleTypographyProps={{
                  fontFamily: "inherit",
                  color: "red[500]",
                  variant: "h6",
                  align: "left",
                }}
                title="Cale"
                subheader="📚 Exams loading. . ."
              />
            </Box>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor
              animi, esse ex expedita distinctio alias perferendis maxime natus
              consequuntur. Quidem harum perspiciatis temporibus omnis aut
              nostrum unde magni alias.
            </Typography>
          </CardContent>
        </Box>

        <Box>
          <CardMedia component="img" height="300" image="./public/demo.png" />
        </Box>
        <CardActions>
          <IconButton size="large">
            <FavoriteIcon sx={{ color: red[500] }} />
          </IconButton>
          <IconButton size="large">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
