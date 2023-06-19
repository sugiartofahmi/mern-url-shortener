import shortener from "../models/shortener.js";
import randomString from "../utils/randomString.js";
export const createUrlShortener = async (req, res) => {
  try {
    let { originalUrl, requestUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({
        status: "failed",
        message: "please insert url",
      });
    }
    const urlRegex = new RegExp(
      "^(http|https)://([a-zA-Z0-9-.]+)\\.([a-zA-Z]{2,3})(/(.)*)?(\\?(.)*)?$"
    );
    if (!urlRegex.test(originalUrl)) {
      return res.status(400).json({
        status: "failed",
        message: "Please add a valid URL",
      });
    }
    if (!requestUrl) {
      requestUrl = randomString(5);
    }
    const isMatch = await shortener.findOne({ requestUrl });
    if (isMatch) {
      return res.status(400).json({
        status: "failed",
        message: "request url already exist",
      });
    }

    const shortenerUrl = await shortener.create({
      originalUrl,
      requestUrl,
    });

    res.status(200).json({
      status: "success",
      result: shortenerUrl,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: "server error",
    });
  }
};

export const redirectUrlShortener = async (req, res) => {
  try {
    const { requestUrl } = req.params;
    const shortenerUrl = await shortener.findOne({ requestUrl });
    if (!shortenerUrl) {
      return res
        .status(404)
        .json({ status: "failed", message: "url not found " });
    }
    res.redirect(shortenerUrl.originalUrl);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: "server error",
    });
  }
};
