import axios from "axios";

export const getDataTracks = () => {
  return axios
    .get(
      "https://firebasestorage.googleapis.com/v0/b/muziquiz-app.appspot.com/o/tracks.json?alt=media&token=c1455d25-f61f-4ccf-8121-5c9f04f038b9"
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
