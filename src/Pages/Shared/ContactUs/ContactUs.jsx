import React from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const ContactUs = () => {

    return (
        <section>
            <div className='grid grid-cols-2'>
                <div>
                    <h2>Contact Us</h2>
                    <form action="">
                        <input className='border' type="text" />
                        <input className='border' type="text" />
                        <input type="text" />
                        <textarea className='border' name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
                {/* <div>
                    <h2>Map</h2>
                    <Map google={this.props.google} zoom={14}>
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                        <InfoWindow onClose={this.onInfoWindowClose}>
                        </InfoWindow>
                    </Map>
                </div>  */}
            </div>
        </section>
    );
};

export default ContactUs;
// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
//   })(ContactUs)