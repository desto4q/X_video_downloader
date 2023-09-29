import getTwitterMedia from "get-twitter-media";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';



function Yt_dl() {
  const [vid_address, set_address] = useState({});
  const vid = useRef();

  function isURL(str) {
    // Regular expression to match URLs
    var urlPattern =
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(\/\S*)?$/;

    return urlPattern.test(str);
  }

  let downloader = async (link) => {
    let media = await getTwitterMedia(link);
    return media;
  };

  let get_video = async (e) => {
    e.preventDefault();
    let link = e.target[0].value;
    if (isURL(link)) {
      let resp = await toast.promise(downloader(link),  {
        pending: 'is pending',
        success: 'resolved 👌',
        error: 'rejected 🤯'
      });
      let media = resp.media[0];
      console.log(media);
      set_address((vid_address) => media);
      vid.current.load();
    } else {
      const notify = () => toast.error("Invalid link")
      notify()
    }
  };

  return (
    <>
      <form className="downloader" onSubmit={get_video}>
        <input type="text" placeholder="enter link here" />
        <button>Get Video</button>
      </form>
      <div className="cont">
        <video className="video" controls ref={vid}>
          <source src={vid_address.url} />
        </video>
        {/* <button onClick={e=> {
            console.log(vid_address)
        }}>Click me</button> */}
      </div>
      {vid_address?.url ? (
        <>
          {" "}
          <button className="download_btn">
            <a href={vid_address.url} download>
                Download
            </a>
          </button>
        </>
      ) : null}
    </>
  );
}

export default Yt_dl;
