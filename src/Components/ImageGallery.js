import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';


const ImageGallery = (props) => {


    const [gallery, setGallery] = useState(null);

    function getGallery(v) {

        axios.get("https://images-api.nasa.gov/search?media_type=image&q=" + v)
            .then((res) => setGallery(res.data.collection.items))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getGallery("all");
    }, [setGallery]);


    if (gallery == null) {
        return (
            <div className='p-4' style={{ height: '80vh' }}>
                <center>
                    <div class="spinner-border " role="status" style={{ marginTop: "25vh", fontSize: '50%' }}>
                        <span class="sr-only">Loading...</span>
                    </div>
                </center>
            </div>

        );
    }

    const handler = (g) => {
        props.setMedia(g);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        var v = e.target.search.value;
        getGallery(v);
    }

    var imgs = gallery.map((g) => {

        // .split('thumb')[0] + "orig.mp4"
        return g.links.map(l => {

            if (l.href.includes('jpg'))
                return (
                    <NavLink to={'/gallery/' + g.data[0].nasa_id} style={{ textDecoration: 'none' }} onClick={() => handler(g)} >
                        <Fade bottom>
                            <div className='pics p-2 shadow  ' >

                                <img src={l.href} alt='gallery-pic' className='rounded' style={{ width: '100%' }} />

                                <center>
                                    <b style={{ color: 'whitesmoke' }}> {g.data[0].title.split('- Video')[0]}</b>
                                </center>
                            </div>
                        </Fade>
                    </NavLink>


                );
            else
                return <div></div>
        });

    });

    return (
        <div style={{ backgroundColor: 'black' }} className='row py-5'>
            <div className='col-10 offset-1'>

                <div className='my-3 p-2'>
                    <center>
                        <Form style={{ width: '40%' }} onSubmit={submitHandler}>
                            <InputGroup>
                                <Input style={{ backgroundColor: 'whitesmoke' }} name='search' type='text' placeholder='Search' required />
                                <Button color='dark' className='mx-1'><i className='fa fa-search'></i></Button>
                            </InputGroup>
                        </Form>
                    </center>
                </div>

                <div className='gallery'>
                    {imgs}
                </div>

            </div>
        </div>
    );
}


export default ImageGallery;