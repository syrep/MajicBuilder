import styles from "../styles/Footer.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
// import makeStyles from "@mui/styles/makeStyles";
import Container from "@mui/material/Container";
import Link from "next/link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Demo
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // minHeight: "100vh",
//     Height: "100%",
//     marginTop: "auto",
//   },
//   footer: {
//     padding: theme.spacing(3, 2),
//     marginTop: "auto",
//     backgroundColor:
//       theme.palette.mode === "light"
//         ? theme.palette.grey[200]
//         : theme.palette.grey[800],
//   },
// }));

export default function Footer() {
  // const classes = useStyles();

  return (
    <div
    //  className={classes.root}
    >
      <footer
      // className={classes.footer}
      >
        {/* <Container maxWidth="md"> */}
        {/* <Container sx={{ m: 3 }}> */}
        <Container maxWidth="xl">
          <Typography variant="body1" component={"p"}>
            Contact me on the following socials
          </Typography>
          <Copyright />
          <Link color="inherit" href="https://majicsites.com.au">
            Website by MajicSites
          </Link>
          <p>these links need noreferrer, norel etc</p>
        </Container>
      </footer>
    </div>
  );
}
//   return (
//     <footer className={styles.footer}>
//       <a
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Made by MajicStites{" "}
//         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//       </a>
//     </footer>
//   );
// }
