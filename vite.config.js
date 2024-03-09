// vite.config.js
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
      context: {
        translations: {
          banner_heading: "Du har kontroll över dina uppgifter",
          banner_main_text:
            "Vi och våra samarbetspartner använder tekniska lösningar, bland annat kakor, för att inhämta information om dig för olika syften, däribland: Genom att klicka ”Godkänn” ger du ditt samtycke till samtliga syften. Du kan också välja att uppge vilka syften du samtycker till genom att klicka i rutan bredvid syftet och sedan ”Spara inställningar”. Du kan när som helst ta tillbaka ditt samtycke genom att klicka på den lilla ikonen i det nedre vänstra hörnet på sidan. Klicka på länken för att läsa mer om hur vi använder kakor och andra tekniska lösningar och hur vi inhämtar och behandlar personuppgifter.",
          accept_cookies_button: "Godkänn alla",
          cookie_declaration_text: "Cookie declaration text",
          decline_cookies_button: "Neka alla",
          about_cookies: "Läs mer om kakor",
          show_details: "Show Details",
          hide_details: "Hide Details",
          cookies_overview: "Cookies Overview",
          multiaccept: "Multi Accept",
          multidecline: "Multi Decline",
          cookie_name_header: "Cookie Name",
          cookie_provider_header: "Cookie Provider",
          cookie_purpose_header: "Cookie Purpose",
          cookie_expiry_header: "Cookie Expiry",
          google_privacy_policy_link:
            "https://policies.google.com/privacy?hl=sv",
          domain_list_explanation: "Domain list explanation",
          last_updated: "Last Updated",
          no_scan_performed: "No scan performed",
          category_consent_header: "Category Consent",
          update_consent_button: "Update Consent",
          iab_info: "IAB Info",
          iab_privacy_controls: "IAB Privacy Controls",
          iab_vendors_button: "IAB Vendors Button",
          iab_vendors: "IAB Vendors",
          iab_full_vendors_button: "IAB Full Vendors Button",
          dp_name: "DP Name",
          dp_privacy_policy: "DP Privacy Policy",
          dp_service_specification: "DP Service Specification",
          iab_show_vendors: "IAB Show Vendors",
          iab_show_purposes: "IAB Show Purposes",
          iab_features: "IAB Features",
          iab_privacy_policy: "IAB Privacy Policy",
          iab_legitimate_purposes: "IAB Legitimate Purposes",
          iab_no_cookies_in_category: "No cookies in this category",
        },
      },
    }),
  ],
};
