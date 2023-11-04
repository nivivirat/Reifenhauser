import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '400px',
};

class GoogleMap extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                style={mapStyles}
                initialCenter={{
                    lat: 19.162178378028063,
                    lng: 72.8508571183853,
                }}
                zoom={14}
            >
                <Marker
                    title={'Head Office'}
                    name={'Head Office'}
                    position={{
                        lat: 19.162178378028063,
                        lng: 72.8508571183853,
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEo2177QYWTZ6npBiaXOYYq2dsISdzqls',
})(GoogleMap);


