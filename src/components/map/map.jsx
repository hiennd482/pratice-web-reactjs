import React from "react";

function map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4704470513725!2d105.80198060000001!3d21.0138542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac67d331aa1d%3A0xbd017c6f9dfc4463!2sHyperlogy!5e0!3m2!1svi!2s!4v1679971098919!5m2!1svi!2s"
        style={{
          width: "800px",
          height: "550px",
          loading: "lazy",
          allowfullscreen: "",
          border: 0,
        }}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default map;
