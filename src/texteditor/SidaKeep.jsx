import React, {useState} from 'react';
import {url} from '../url';
import {toast} from 'react-toastify';

function SidaKeep() {
  const [url1, setUrl1] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {url1};
      const response = await fetch(`${url}/create/url`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      if (response.status === '200') {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='row mx-0 box'>
      <div className=''>
        <div className='auth-form-light text-left py-5 px-4 px-sm-5'>
          <form className='pt-3' onSubmit={onSubmitForm}>
            <h1 style={{fontSize: '2em'}}>keep the url</h1>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='exampleInputEmail1'
                placeholder='URL'
                name='url1'
                value={url1}
                onChange={(e) => setUrl1(e.target.value)}
              />
            </div>
            <div className='mt-3'>
              <button className='btn  btn-primary  font-weight-medium auth-form-btn'>
                KEEP IT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SidaKeep);
