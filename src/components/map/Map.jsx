import React from "react";

const Map = () => {
  return (
    <>
      <div className="map" id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.774229308295!2d90.4029554!3d23.791052699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71237872d93%3A0xe7c6db80e226b96!2sAWR%20NIB%20TOWER!5e0!3m2!1sen!2sbd!4v1640803740570!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
