import React from "react";
// import avt2 from "../../assets/avatar-components/avt2.png";

const Avtitem = ({ item }) => {
  //   const limit = () => {
  //     let test = item.slice(0, 4);
  //     console.log(test);
  //   };
  return (
    <div className="">
      {/* {limit} */}

      <img
        src={item.url}
        alt=""
        className="h-10 w-10 flex-none rounded-full ring-2 ring-white object-cover"
      />
    </div>
  );
};

export default Avtitem;
