import React from 'react'
import { Link } from 'react-router-dom'
import './DepartmentSelect.css'

function DepartmentSelect() {
    return (
        <div className="departments_container">
            <Link to='/met/department/1'>
                <div className="department_block">
                    <div>
                        <h3>Explore American Decorative Arts</h3>
                    </div>
                </div>
            </Link>
        
            <div className="department_block">
                <div>
                    <h3>Explore Ancient Near Eastern Art</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Arms and Armor</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Arts of Africa, Oceania, and the Americas</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Asian Art</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore The Cloisters</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore The Costume Institute</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Drawings and Prints</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Egyptian Art</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore European Paintings</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore European Sculpture and Decorative Arts</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Greek and Roman Art</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Islamic Art</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore The Robert Lehman Collection</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore The Libraries</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Medieval Art</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Musical Instruments</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Photographs</h3>
                </div>
            </div>
            <div className="department_block">
                <div>
                    <h3>Explore Modern Art</h3>
                </div>
            </div>
        </div>
    )
}

export default DepartmentSelect
