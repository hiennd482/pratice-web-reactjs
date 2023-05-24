import React, { useState } from "react";

const Uploadfile = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(false);

  const oneFile = (event) => {
    // - đẩy 1 file
    setFile(event.target.files[0]);

    console.log("so file là:", event.target.files);
  };
  const multipleFiles = (event) => {
    // - đẩy nhiều file
    setFile(event.target.files);
    console.log("so file là:", event.target.files);
  };
  const limitFiles = (event) => {
    // - Giới hạn số lượng file đẩy( max file)
    const filesinfo = event.target.files;
    if (filesinfo.length < 5) {
      setFile(filesinfo);
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
  return (
    <div className="m-3 p-4">
      <form action="">
        <input
          type="file"
          onChange={oneFile}
          //   accept=".pdf,.png,.jpg"
          multiple
        />

        <button
          type="button"
          //   onClick={handleUploadClick}
          className="border border-black/20 tex-sm px-2 rounded-md"
        >
          Upload
        </button>
      </form>
      {error ? (
        <>
          <p className="text-[red]">khong dc qua 5 mb</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Uploadfile;
