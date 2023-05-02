import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./bitcoin11.jpg)" ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div data-testid="banner" className={classes.banner}>
      <Container className={classes.bannerContent} data-testid="bannerContent">
        <div className={classes.tagline} data-testid="tagline">
          <Typography
            variant="h2"
            data-testid="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
           {/* <i>CryptoPulse</i> */}
          </Typography>
          <Typography
            variant="subtitle2"
            data-testid="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
           {/* Welcome to the world of Crypto... */}
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
