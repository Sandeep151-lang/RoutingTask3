import React from 'react'
import datas from './json-data/datas'


// This progressbar Component used in HomePage component
const ProgressBar = () => {
    return (
        <div>
            {
                datas.map((item, index) => (
                    <div className="card-body" key={index}>
                        <h4 className="small font-weight-bold">{item.title} <span
                            className="float-right">{item.percentage}</span></h4>
                        <div className="progress mb-4">
                            <div className={item.color} role="progressbar" style={{ "width": item.percentage }}
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default ProgressBar
