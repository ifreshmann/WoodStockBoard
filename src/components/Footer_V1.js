import React from 'react'
import PropTypes from 'prop-types'   

const Footer_V1 = ({title,website,postcode, isOpen}) => {
    //const {title,website,postcode} = props;
    return (
        <div>
            <h1 style={styles.title}>{title} &copy; {new Date().getFullYear()}</h1>
            <p style={{color: 'green', fontSize:16}}>{website} {postcode} {isOpen.toString()}</p>
            <p style={styles.title}>Coding</p>
        </div>
    )
}

const styles ={
    title :{
        color:'red'
    }
}

Footer_V1.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    postcode: PropTypes.number,
    isOpen: PropTypes.bool
};

export default Footer_V1
