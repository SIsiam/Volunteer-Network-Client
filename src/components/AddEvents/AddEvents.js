import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    };
    console.log(data);
    const url = `https://murmuring-caverns-54438.herokuapp.com/addEvent`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        console.log('server side response', res)
        alert("done")
        
      })
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'b2b2f18b85c3c135d0349cedeebbea1c');
    imageData.append('image', event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then((response) => {
        console.log(response.data.data.display_url);
        setIMageURL(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <div>
      <h1>Add your awesome Event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="name" defaultValue="New exciting Event" ref={register} />
        </div>
        <div>
          <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        </div>
        <br />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddEvents;