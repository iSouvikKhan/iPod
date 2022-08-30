import React from 'react';

class Artists extends React.Component {

    render() {
        return (
            <div style={styles.artistsContainer}>

                <div style={styles.titleBar}>
                    <p style={{ fontWeight: 'bold' }}>iPod</p>
                </div>

            </div>
        );
    }

}

const styles = {
    artistsContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    titleBar: {
        height: '10%',
        width: '100%',
        borderRadius: '12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding: '1px 5px 10px 8px',
        display: 'flex',
        flexDirecton: 'row',
        justifyContent: 'space-between'

    }
}

export default Artists;