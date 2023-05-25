import React, { useEffect, useState } from "react";
import "./uploading.scss";
const Uploadfile = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(false);

  const oneFile = (event) => {
    // - đẩy 1 file
    setFile(event.target.files[0]);

    console.log("so file don la:", event.target.files);
  };
  const multipleFiles = (event) => {
    // - đẩy nhiều file
    setFile(event.target.files);
    console.log("so file là:", event.target.files);
  };
  const limitFiles = (event) => {
    // - Giới hạn số lượng file đẩy( max file)
    const filesinfo = event.target.files;
    if (filesinfo.length <= 5) {
      setFile(filesinfo);
      console.log("so file là:", event.target.files);
    } else {
      console.log("ko dc qua 5 file");
      alert("ko dc qua 5 file");
      //   setError(true);
    }
  };
  const limitSizefiles = (event) => {
    // - Giới hạn dung lượng của tổng số file (max 5MB)
    const filesinfo = event.target.files;

    let totalFiles = 0;
    for (let i = 0; i < filesinfo.length; i++) {
      totalFiles += filesinfo[i].size;
    }
    // filesinfo.forEach((file, i) => {
    if (totalFiles / (1024 * 1024) > 5) {
      console.log("kho dc qua 5Mb");
      alert("khong dc quá 5mb");
      //   setError(true);
    } else {
      setFile(filesinfo);
      console.log("so file là:", event.target.files);
    }
  };
  const handleFile = (event) => {
    console.log("so file là:", event.target.files);
  };
  //   const handleUploadClick = () => {
  //     if (!file) {
  //       return;
  //     }
  //     const data = new FormData();
  //     files.forEach((file, i) => {
  //       data.append(`file-${i}`, file, file.name);
  //     });
  //     fetch("https://httpbin.org/post", {
  //       method: "POST",
  //       body: data,
  //       //  Set headers manually for single file upload
  //       //   headers: {
  //       //     "content-type": file.type,
  //       //     "content-length": `${file.size}`, //
  //       //   },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));
  //   };
  //   const files = file ? [...file] : [];

  useEffect(() => {
    var holder = document.getElementById("holder");
    holder.ondragover = function () {
      this.className = "hover";
      return false;
    };
    holder.ondrop = function (e) {
      this.className = "hidden";
      e.preventDefault();
      var file = e.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById("image_droped").className = "visible";
        document
          .getElementById("image_droped")
          .attr("src", event.target.result);
      };
      reader.readAsDataURL(file);
    };
  });
  return (
    <div className="m-3 p-4">
      <form action="">
        <label
          for="form-input"
          className="relative flex gap-[10px] flex-col items-center h-[200px] p-5 rounded-lg cursor-pointer transition text-[#444] border-[#555] hover:bg-[#eee] hover:border-[#111] border-dashed border-[2px]"
        >
          <span className="text-[#444] text-xl text-center font-bold transition">
            Drop files here
          </span>
          or
          <input
            type="file"
            id="form-input"
            onChange={limitSizefiles}
            multiple
          />
        </label>
      </form>
      {error ? (
        <>
          <p className="text-[red]">khong dc qua 5 mb</p>
        </>
      ) : (
        ""
      )}
      <div className="mt-4">
        {/* <form method="post" action="http://example.com/">
          <div id="holder" class="holder_default">
            <img
              src=""
              id="image_droped"
              className=" hiddene border-dashed w-[200px]"
            />
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Uploadfile;
