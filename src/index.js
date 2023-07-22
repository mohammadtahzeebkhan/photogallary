import React, { useState } from 'react';

const imgUrls = [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  // Add other image URLs here
  // ...
];

const GalleryImage = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

const GalleryModal = ({ isOpen, onClick, src }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay' onClick={onClick} name={src}>
      <div className='modal-body'>
        <a className='modal-close' href='#' onClick={onClick}>
          <span className='fa fa-times'></span>
        </a>
        <img src={src} />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const openModal = (url) => {
    setShowModal(true);
    setModalUrl(url);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl('');
  };

  return (
    <div className='container-fluid gallery-container'>
      <div className='row'>
        {imgUrls.map((url, index) => (
          <div key={index} className='col-sm-6 col-md-3 col-xl-2'>
            <div className='gallery-card'>
              <GalleryImage
                className='gallery-thumbnail'
                src={url}
                alt={`Image number ${index + 1}`}
              />
              <span
                className='card-icon-open fa fa-expand'
                onClick={() => openModal(url)}
              ></span>
            </div>
          </div>
        ))}
      </div>
      <GalleryModal isOpen={showModal} onClick={closeModal} src={modalUrl} />
    </div>
  );
};

// Let's render the whole thing
ReactDOM.render(<Gallery />, document.querySelector('.react-gallery'));

