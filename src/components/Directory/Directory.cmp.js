import React, { useEffect, useState } from 'react';
import swagService from '../../services/swagService';
import MenuItem from '../MenuItem/MenuItem.cmp';
import './directory.styles.scss'

const Directory = () => {
    const [sectionList, setSectionList] = useState([])

    useEffect(() => {
        swagService.query().then((section) => setSectionList(section))
    }, [])
    return (
        <div className="directory-menu">

            {sectionList.map(({  id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    )
}

export default Directory;