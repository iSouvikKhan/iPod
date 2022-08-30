import React from 'react';

class Games extends React.Component {

    render() {
        return (

            <div style={styles.settings} >
                <div style={styles.titleBar}>
                    <p style={{ fontWeight: 'bold' }}>iPod</p>
                </div>

            </div>

        );
    }

}

const styles = {
    settings: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
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


export default Games;