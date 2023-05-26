import React, { useEffect, useState } from "react";
import "./uploading.scss";
import { Value } from "sass";
const Uploadfile = () => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState(false);

  const oneFile = (event) => {
    // - đẩy 1 file
    setFile(event.target.files[0]);

    console.log("so file don la:", event.target.files[0].name);
  };
  const multipleFiles = (event) => {
    // - đẩy nhiều file
    setFile(event.target.files);

    // Object.entries(file).forEach(([key, value]) => {
    //   // console.log(`ten`, value.name);
    //   let filename = value.name;
    //   let filetype = value.type;

    //   fileshow(filename, filetype);
    //   console.log("day la btn input", filename, filetype);
    // });
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
    let file;

    let button = document.querySelector(".btn-inputform");
    let input = document.querySelector(".hd-input");

    // button.onclick = () => {
    //   input.click();
    // };

    // input.addEventListener("change", (multipleFiles) => {
    //   file = this.files[0];
    //   // file = e.dataTransfer.files[0];
    // });

    const dragArena = document.querySelector(".drag-area");

    dragArena.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragArena.classList.add("active");
      // console.log("file in drag area");
    });
    dragArena.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dragArena.classList.remove("active");
    });
    dragArena.addEventListener("drop", (e) => {
      e.preventDefault();

      file = e.dataTransfer.files;
      // setFile(e.dataTransfer.files);
      // console.log(e.dataTransfer.files);
      // let filename = file.name;
      // let filetype = file.type;
      // let filelength = file.length;
      let filen = 0;
      // if (file.length > 0) {
      // file.forEach((val, i) => {
      //   // let name = val.name;
      //   console.log(val);
      // });
      // }
      // for (const [key, value] of Object.entries(file)) {
      //   console.log(key, value);
      // }
      // console.log(filename);
      Object.entries(file).forEach(([key, value]) => {
        // console.log(`ten`, value.name);
        let filename = value.name;
        let filetype = value.type;
        let filesize = value.size;

        fileshow(filename, filetype, filesize);
        console.log(filename);
      });
      console.log(file);

      // let spanTag = `<span> ${filename}</span>`;
      // dragArena.innerHTML = spanTag;
      dragArena.classList.remove("active");
    });
    const upload = document.querySelector(".upload");
    upload.addEventListener("click", (e) => {
      // setFile(e.target.files);
      // console.log("Upload");
      // console.log(e.target.files);
    });
    const fileshow = (filename, filetype, filesize) => {
      // if (filelength > 1) {
      //   console.log("nhieu hon 2 file");
      // } else {
      const filewrapper = document.querySelector(".file-wrapper");

      const showfileboxElm = document.createElement("div");
      showfileboxElm.classList.add("showfilebox");
      const leftElm = document.createElement("div");

      leftElm.classList.add("left-filename");
      const fileTypeElm = document.createElement("span");
      fileTypeElm.classList.add("filetype");
      fileTypeElm.innerHTML = filetype;
      leftElm.append(fileTypeElm);

      const filetitleElm = document.createElement("h3");
      filetitleElm.innerHTML = filename;
      leftElm.append(filetitleElm);
      showfileboxElm.append(leftElm);

      // const filesizeElm = document.createElement("p");
      // filesizeElm.classList.add("file-size");
      // filesizeElm.innerHTML = filesize + "B";
      // leftElm.append(filesizeElm);
      // showfileboxElm.append(leftElm);

      const rightElm = document.createElement("div");
      rightElm.classList.add("right");
      showfileboxElm.append(rightElm);

      const crossElm = document.createElement("span");
      crossElm.innerHTML = "&#215;";
      rightElm.append(crossElm);
      filewrapper.append(showfileboxElm);

      crossElm.addEventListener("click", () => {
        filewrapper.removeChild(showfileboxElm);
        console.log(filename);
      });

      // }
    };
  });

  return (
    <div className="m-3 p-4">
      <form action="">
        <div className="  relative drag-area flex gap-[10px] flex-col items-center  p-5 rounded-lg cursor-pointer transition text-[#444] border-[#555]  hover:border-[#111] border-dashed border-[2px]">
          <span className="text-[#444] text-xl text-center  font-bold transition ">
            Drop files here
            <p> or</p>
          </span>

          <input
            type="file"
            id="form-input"
            onChange={multipleFiles}
            multiple
            className="hd-input"
          />
          <div className=" flex">
            {/* <span className="btn-inputform h-[50px]">Choose Files</span> */}
            <div className="file-wrapper grid grid-cols-2"></div>
            {/* <div className="showfilebox flex items-center">
              <div className="left-filename flex gap-2">
                <span className="filetype">Pdf</span>
                <h3>sadf.pdf</h3>
              </div>
              <div className="right-filename px-3">
                <span>&#215;</span>
              </div>
            </div> */}
          </div>
          <button
            type="button"
            className="upload border border-black/20 px-5 rounded"
          >
            Upload
          </button>
        </div>
      </form>
      {error ? (
        <>
          <p className="text-[red]">khong dc qua 5 mb</p>
        </>
      ) : (
        ""
      )}
      <div className="mt-4 flex items-center text-center justify-center">
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
      <div></div>
    </div>
  );
};

export default Uploadfile;
