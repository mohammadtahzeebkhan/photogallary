import React, { useState, useEffect } from 'react';
import fileData from "../src/output.json";
import myphoto from '../src/image/IMG_3656.jpeg';

const ImageGallery = () => {
  const [modalContent, setModalContent] = useState(null);
  const imagePath = '../src/image/';

  const handleImageClick = (src) => {
    setModalContent(
      <div className="modal-img-container">
        <img src={src} className="modal-img" />
  
      </div>
    );
    showModal();
  };

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(
        fileData.files.map(async (filename) => {
          const imageUrl = await import(`${`../src/image/`}${filename}`);
          return imageUrl.default;
        })
      );
      setImageUrls(urls);
    };
    fetchImages();
  }, []);

  const styles = {
    heading: {
      fontFamily: 'Satisfy',
      fontSize: '50px',
      textAlign: 'center',
      color: 'black',
      padding: '1%',
     
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      boxShadow: '-3px 5px 15px #000',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    modal: {
      display: modalContent ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
    },
    modalContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    modalImg: {
      width: '100%',
      height: '100%',
    },
  };

  const handleVideoClick = (src) => {
    setModalContent(
      <video className="model-vid" controls>
        <source src={src} type="video/mp4" />
      </video>
    );
    showModal();
  };

  const videos = [
    {
      //url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type: "video/mp4",
    },
    // Add more video URLs here
  ];

  const showModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent('');
  };

  return (
    <div>
      <h4 style={{textAlign:"center"}}>This Website Create By Mohammad Tahzeeb Khan </h4>
      <p style={{textAlign:"center"}}> </p>
      <h4 style={{textAlign:"center"}}>conatct: +917486882890</h4>
     <h4 style={{textAlign:"center"}}> <a href='https://www.instagram.com/mohammadtahzeebkhan/'> My Instagram</a></h4>
     <h4 style={{textAlign:"center"}}>  <a href='https://www.youtube.com/watch?v=AGKweS7fFQk&t=189s/'> My Youtube Channel</a> Please Subscribe</h4>
     <h4 style={{textAlign:"center"}}>  <a href='https://github.com/mohammadtahzeebkhan?tab=repositories'>My Github Repo</a> </h4>
     
      <hr />
      <div id="gallery" className="container-fluid">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className="img-responsive"
            onClick={() =>
              showModal(
                <img
                  src={imageUrl}
                  className="modal-img"
                  style={styles.modalImg}
                />
              )
            }
            alt={`Image ${index + 1}`}
          />
        ))}
{/*         {videos.map((video, index) => (
          <video
            key={index}
            className="vid"
            controls
            onClick={() =>
              showModal(
                <video className="model-vid" controls>
                  <source src={video.url} type={video.type} />
                </video>
              )
            }
          >
            <source src={video.url} type={video.type} />
          </video>
        ))} */}
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog" style={{ width: '80%', height: '90%' }}>
          <div className="modal-content">
            <div className="modal-body">{modalContent}</div>
          </div>
        </div>
      </div>

      <div
        id="myModal"
        className="modal"
        style={styles.modal}
        onClick={closeModal}
      >
          <button  onClick={closeModal} style={{position:"absolute",padding:"1%", left:"45%"}}>CLOSE</button>
        <div style={styles.modalContent} >
          <div className="modal-dialog">
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-body">{modalContent}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
