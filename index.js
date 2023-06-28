const binarySearch = require("./binarySearch");

const fs = require("fs");
const path = require("path");

class EmailProviderChecker {
  verifyEmail(email = "") {
    if (!email.length || typeof email !== "string") {
      return { emailProvider: null, isPublicMail: null, message: "Put a valid email" };
    }

    const parsedEmail = email.toLowerCase();

    const emailProvider = parsedEmail.split("@")[1];

    let fileContent = [];

    try {
      fileContent = fs
        .readFileSync(path.resolve(__dirname) + "/emailProviders.txt", "utf8")
        .split("\n");
    } catch (err) {
      console.error(err);
    }

    const exists = binarySearch(
      fileContent,
      emailProvider,
      0,
      fileContent.length - 1
    );

    return { emailProvider, ord: emailProvider.charCodeAt(0), isPublicMail: exists };
  }
}

module.exports = new EmailProviderChecker();
