import injectSheet from "react-jss";

const aboutUsStyles = {
  "@global": {
    body: {
      overflow: "visible"
    }
  },
  navBar: {
    width: "100%",
    height: 120,
    background:
      "linear-gradient(0deg, rgba(25,22,50,1) 0%, rgba(18,18,30,1) 100%)",
    zIndex: 20,
    borderBottom: "5px #ece solid",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  timeline: {
    fontFamily: "MetalOnMetal",
    color: "#eee",
    margin: "0 10px",
    fontSize: 26
  },
  container: {
    width: "100%",
    background:
      "linear-gradient(0deg, rgba(45,56,89,1) 0%, rgba(15,34,91,1) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30
  },
  who: ({ isDesktop }) => ({
    fontFamily: "Scope One",
    fontSize: isDesktop ? 48 : 26,
    textAlign: "center",
    padding: "10px 40px",
    paddingTop: 20,
    backgroundColor: "rgba(11,23,63,1)",
    margin: "10px",
    marginBottom: 0,
    color: "#cecece",
    borderRadius: "60px 60px 0 0",
    zIndex: 2
  }),
  content: ({ isDesktop }) => ({
    width: isDesktop ? "80%" : "100%",
    maxWidth: 1200,
    boxShadow: "10px 15px 40px 2px rgba(0,0,0,0.5)",
    marginBottom: 60
  })
};

const developerStyle = {
  wrapper: ({ isDesktop }) => ({
    width: "100%",
    backgroundColor: "rgba(11,23,63,1)",
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    paddingLeft: isDesktop ? 20 : 0
  }),
  image: ({ isDesktop }) => ({
    width: isDesktop ? "100%" : "60%",
    minWidth: 140,
    maxWidth: 340,
    borderRadius: "50%",
    border: "2px #fff solid",
    display: "block",
    margin: "0 auto",
    boxShadow: "5px 15px 40px 2px rgba(0,0,0,0.5)"
  }),
  imageWrapper: ({ isDesktop }) => ({
    width: isDesktop ? "45%" : "100%",
    margin: "10px 0"
  }),
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textArea: ({ isDesktop }) => ({
    padding: isDesktop ? "5px 30px" : "3px 10px",
    display: isDesktop ? "block" : "flex",
    flexDirection: "column",
    alignItems: "center"
  }),
  line: {
    width: "90%",
    height: 2,
    backgroundColor: "#fff",
    borderRadius: "50%",
    margin: "30px auto"
  },
  socialMedia: {
    padding: 10
  },
  name: {
    fontFamily: "Philosopher",
    fontSize: 34,
    color: "#99ee00"
  },
  bio: {
    color: "#e2e2ee",
    fontFamily: "Scope One",
    fontSize: 22
  }
};

export const AboutUsStyle = cmp => injectSheet(aboutUsStyles)(cmp);
export const DeveloperStyle = cmp => injectSheet(developerStyle)(cmp);
