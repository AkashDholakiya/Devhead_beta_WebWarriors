import "../style/ContactFormStyles.css";
import { useEffect } from "react";

function ContactForm() {
  useEffect(() => {
    // Initialize Google Maps
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 }, 
      zoom: 5,
      
    });

    // eslint-disable-next-line no-unused-vars
    const marker = new window.google.maps.Marker({
      position: {lat: 20.5937, lng: 78.9629 }, 
      map: map,
      title: "Marker Title", 
    });
  }, []);

  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <div id="map" style={{ height: "400px" }}></div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
