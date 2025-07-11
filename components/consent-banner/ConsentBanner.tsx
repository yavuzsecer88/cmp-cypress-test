import Script from "next/script";

export default function ConsentBanner() {
  return (
    <>
      <Script id="cmp-consent-banner" type="text/javascript">
        {`
                const currentLocation = window.location.hostname;
                
                let regulationKey = "GDPR";
                let privacyurl = "https://www.fielmann.de/datenschutz";
                let imprinturl = "https://www.fielmann.de/impressum";

                if (currentLocation.indexOf('appointments.fielmann.ch') >= 0 
                        || currentLocation.indexOf('appointments-widget-ch.qa.ae.fielmann.cloud') >= 0) {
                  regulationKey = "DSGLPD";
                  privacyurl = "https://www.fielmann.ch/datenschutz/";
                  imprinturl = "https://www.fielmann.ch/impressum/";
                } 

                if (currentLocation.indexOf('appointments.fielmann.at') >= 0 
                        || currentLocation.indexOf('appointments-widget-at.qa.ae.fielmann.cloud') >= 0) {
                  privacyurl = "https://www.fielmann.at/datenschutz/";
                  imprinturl = "https://www.fielmann.at/impressum/";
                }

                if (currentLocation.indexOf('appointments.fielmann.it') >= 0
                        || currentLocation.indexOf('appointments-widget-it.qa.ae.fielmann.cloud') >= 0) {
                  privacyurl = "https://www.fielmann.it/it/tuteladeidati/";
                  imprinturl = "https://www.fielmann.it/it/datisocietari/";
                }
                
                if (currentLocation.indexOf('appointments.fielmann.pl') >= 0
                        || currentLocation.indexOf('appointments-widget-pl.qa.ae.fielmann.cloud') >= 0) {
                  privacyurl = "https://www.fielmann.pl/ochronadanych/";
                  imprinturl = "https://www.fielmann.pl/impressum/";
                }
                
                if (currentLocation.indexOf('appointments.fielmann.cz') >= 0
                        || currentLocation.indexOf('appointments-widget-cz.qa.ae.fielmann.cloud') >= 0) {
                  privacyurl = "https://www.fielmann.cz/ochrana-udaju/";
                  imprinturl = "https://www.fielmann.cz/impresum/";
                }

                window.cmp_regulationkey = regulationKey;
                window.cmp_privacyurl = privacyurl;
                window.cmp_imprinturl = imprinturl;
      `}
      </Script>

      <Script
        type="text/javascript"
        async
        data-cmp-ab="1"
        src="https://cdn.consentmanager.net/delivery/js/semiautomatic.min.js"
        data-cmp-cdid={typeof window !== "undefined" && window.location.hostname.includes("fielmann.de") ? "a4d41045c28b5" : "1f57ec15c223c"}
        data-cmp-host="c.delivery.consentmanager.net"
        data-cmp-cdn="cdn.consentmanager.net"
        data-cmp-codesrc="0"
      ></Script>
    </>
  );
}
