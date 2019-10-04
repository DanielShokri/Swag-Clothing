import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../store/directory/directorySelectors';
import MenuItem from '../MenuItem/MenuItem.cmp';
import './directory.styles.scss'

const Directory = ({ sections }) => {

    return (
        <div className="directory-menu">

            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);