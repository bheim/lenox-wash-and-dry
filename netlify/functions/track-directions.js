// Netlify serverless function to track "Get Directions" clicks and redirect to Google Maps

exports.handler = async (event, context) => {
  // The Google Maps URL we're redirecting to
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=500+Pittsfield-Lenox+Road+Lenox+MA+01240";

  // Log the click (optional - you can use this for your own analytics too)
  console.log("Get Directions click tracked at", new Date().toISOString());

  // Return a redirect response
  // GTM tracking happens client-side via the button's onclick, so we just redirect here
  return {
    statusCode: 302,
    headers: {
      Location: mapsUrl,
      "Cache-Control": "no-cache, no-store, must-revalidate"
    }
  };
};
