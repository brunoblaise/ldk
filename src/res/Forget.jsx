import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {url} from '../url';

function Forget() {
  const [inputs, setInputs] = useState({
    email: '',
  });
  const {email} = inputs;

  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {email};
      const response = await fetch(`${url}/res/forget`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      if (parseRes === 'User does not exist') {
        toast.error(parseRes);
      } else {
        toast.success('Check your email to reset the password');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='container-scroller'>
        <div className='container-fluid page-body-wrapper full-page-wrapper'>
          <div className='content-wrapper d-flex align-items-center auth px-0'>
            <div className='row w-100 mx-0'>
              <div className='col-lg-4 mx-auto'>
                <div className='auth-form-light text-left py-5 px-4 px-sm-5'>
                  <h4>Hello! let's get started</h4>
                  <h6 className='font-weight-light'>Reset password</h6>
                  <form className='pt-3' onSubmit={onSubmitForm}>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        id='exampleInputEmail1'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='mt-3'>
                      <button className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'>
                        SIGN IN
                      </button>
                    </div>
                    <div className='text-center mt-4 font-weight-light'>
                      Don't have an account?
                      <Link to='/register' className='text-primary'>
                        Create
                      </Link>
                      <br />
                      <Link to='/login' className='text-primary'>
                        login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Forget);
