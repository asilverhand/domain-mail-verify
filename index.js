const binarySearch = require("./binarySearch");

const path = require("path");
const providers = require("./emailProviders.json");

class EmailProviderChecker {
  verifyEmail(email = "") {
    if (!email.length || typeof email !== "string") {
      return { emailProvider: null, isPublicMail: null, message: "Put a valid email" };
    }

    const parsedEmail = email.toLowerCase();

    const emailProvider = parsedEmail.split("@")[1];

    let fileContent = providers;

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
