import React from 'react';
import {url} from '../url';
import useSWR from 'swr';
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Urt() {
  const {data, error} = useSWR(`${url}/get/url`, fetcher);
  if (!data) return 'I am loading...';
  if (error) return 'there is an error';

  return (
    <div>
      <div className='row mx-0 box1'>
        <div className=''>
          <div className='auth-form-light text-left py-3 px-2 were'>
            {data.map((chat) => (
              <Link
                key={chat.url_id}
                to={{pathname: `${chat.url_content}`}}
                target='_blank'
                className='were'>
                {format(chat.timestamp)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Urt);
