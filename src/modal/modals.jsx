import React, { useState } from 'react';

export default function modals() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className='btn-model' />

      <div className='modal'>
        <div className='overlay'>
          <div className='modal-content'>
            <h2>Hello Modal</h2>
          </div>
        </div>
      </div>
    </>
  );
}
