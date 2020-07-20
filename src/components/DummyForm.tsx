import React from 'react';
import '../styles/dummy-form.scss';


export const DummyForm: React.FC = () => {
    return (
        <form className="dummy-form">
            <div className="element-row">
                <div className="element-col">
                    <label>First Name</label>
                    <input />
                </div>
                <div className="element-col">
                    <label>Last Name</label>
                    <input />
                </div>
                
            </div>

            <div className="element-row">
                <div className="element-col">
                    <label>Address 1</label>
                    <input />
                </div>
            </div>

            <div className="element-row">
                <div className="element-col">
                    <label>Address 2</label>
                    <input />
                </div>
            </div>

            <div className="element-row">
                <div className="element-col">
                    <label>State</label>
                    <input />
                </div>
            </div>

            <div className="element-row">
                <div className="element-col">
                    <label>Country</label>
                    <input />
                </div>
            </div>

            <div className="element-row">
                <div className="element-col">
                    <label>Zip Code</label>
                    <input />
                </div>
            </div>
        </form>
    )
}