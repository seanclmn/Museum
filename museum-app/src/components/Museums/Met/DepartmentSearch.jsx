import React, { useState} from 'react'
import Search from './Search'
import MetSearch from './MetSearch'


function DepartmentSearch() {
    return(
        <div>
            <MetSearch department={`departmentId=1&`}/>
        </div>
    )
}

export default DepartmentSearch
