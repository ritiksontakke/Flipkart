export default function getURL() {
  if (process.env.REACT_APP_STAGE === "DEPLOY") {
    console.log("Running on deployed db...");
    return "https://flipkart-zzrh.onrender.com";
  } else if (process.env.REACT_APP_STAGE === "LOCAL") {
    console.log("running on local db...");
    return "http://localhost:8000";
  }
}
