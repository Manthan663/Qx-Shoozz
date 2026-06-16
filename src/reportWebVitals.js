import { getCLS, getFID, getFCP, getLCP, getTTFB, getINP } from "web-vitals";

export default function reportWebVitals(onPerfEntry) {
  if (typeof onPerfEntry !== "function") {
    return;
  }

  getCLS(onPerfEntry);
  getFID(onPerfEntry);
  getFCP(onPerfEntry);
  getLCP(onPerfEntry);
  getTTFB(onPerfEntry);
  getINP(onPerfEntry);
}
