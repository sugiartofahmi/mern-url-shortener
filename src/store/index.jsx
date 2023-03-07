import { selector, atom } from "recoil";

export const queryState = atom({
  key: "query-state",
  default: "",
});

export const fetchUrl = selector({
  key: "fetch-url",
  get: async ({ get }) => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        params: get(queryState),
      });
      return res.data.articles || {};
    } catch (error) {
      console.log(error);
    }
  },
});
