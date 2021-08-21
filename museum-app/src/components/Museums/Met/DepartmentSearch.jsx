import React, { useState} from 'react'
import Search from './Search'
import MetSearch from './MetSearch'


function DepartmentSearch(props) {
    return(
        <div>
            <MetSearch department={`departmentId=${props.match.params.number}&`}/>
        </div>
    )
}

export default DepartmentSearch
