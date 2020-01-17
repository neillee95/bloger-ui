import axios from "axios";

export default function detectCountry(onsuccess, onerror) {
  axios.get('https://ipapi.co/json/')
    .then((resp) => {
      if (resp.status === 200) {
        const data = resp.data;
        if (onsuccess && typeof (onsuccess) === "function") {
          onsuccess(data.country_code);
        }
      }
    })
    .catch(error => {
      if (onerror && typeof (onerror) === "function") {
        onerror(error);
      }
    });
}
