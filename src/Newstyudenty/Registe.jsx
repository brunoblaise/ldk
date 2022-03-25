import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';



import {url} from '../url';


function Registe() {
  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({
    father: '',
    mother: '',
    phone: '',
    email: '',
    day: '',
    student: '',
    written: '',
  });

  const [subjec, setSubjec] = useState('');
  const [subje, setSubje] = useState('');
  const classe = subjec.value;
  const gender = subje.value;
  const {father, mother, student, written, phone, day, email} = inputs;
  const [opene, setOpene] = useState(false);
  const [photo, setImages] = useState('');
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('classe', classe);
      formData.append('gender', gender);

      formData.append('father', father);
      formData.append('mother', mother);

      formData.append('student', student);
      formData.append('written', written);

      formData.append('email', email);
      formData.append('phone', phone);

      formData.append('day', day);
      formData.append('photo', photo);

      const myHeaders = new Headers();
      myHeaders.append('jwt_token', localStorage.token);
      const response = await fetch(
        `${url}/create/newStudent`,

        {
          method: 'POST',
          body: formData,
          headers: myHeaders,
        },
      );
      setOpene(true);
      if (response.status === 500) {
        toast.error('Fill the required one');
      } else {
        toast.success('Sent Successfully');
        setOpene(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleChang = (event) => {
    setSubjec({value: event.target.value});
  };
  const handleChan = (event) => {
    setSubje({value: event.target.value});
  };
  return (
    <>

     
     
    
    </>
  );
}

export default React.memo(Registe);
