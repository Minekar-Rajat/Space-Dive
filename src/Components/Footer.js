import React from 'react';

const Footer = () => {

    return (
        <div className='row p-3' style={{ backgroundColor: 'rgb(2, 13, 48)' }}>
            <div className='col-lg-1 col-6 col-sm-3 offset-lg-4'>
                <center>
                    <a className=' nav-link ' id='social' target='_blank' href='https://github.com/Minekar-Rajat'  >GITHUB</a>
                </center>
            </div>
            <div className='col-lg-1 col-6 col-sm-3'>
                <center>
                    <a className=' nav-link ' id='social' target='_blank' href='https://www.linkedin.com/in/minekarrajat/'  >LINKEDIN</a>
                </center>
            </div>
            <div className='col-lg-1 col-6 col-sm-3'>
                <center>
                    <a className=' nav-link ' id='social' target='_blank' href='https://www.instagram.com/rajatminekar/' >INSTAGRAM</a>
                </center>
            </div>
            <div className='col-lg-1 col-6 col-sm-3'>
                <center>
                    <a className=' nav-link ' target='_blank' id='social' href='https://twitter.com/MinekarRajat' >TWITTER</a>
                </center>
            </div>

        </div>
    );
}

export default Footer;