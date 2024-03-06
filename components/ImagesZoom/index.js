import React from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";

const ImagesZoom = ({ images, onClose }) => {
  return (
    <div>
      <header>
        <h1>상세 이미지</h1>
        <button onClick={onclose}>X</button>
      </header>
      <div>
        <div>
          <Slick />
        </div>
      </div>
    </div>
  );
};
ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ImagesZoom;
