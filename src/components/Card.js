import React from 'react'
import data from './json-data/data'

const Card = () => {
    return (
        <>
            <div className="row">
                {data.map((item) => (
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className={item.classname}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className={item.textclassname}>
                                            {item.text}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{item.price}</div>
                                        {item.active === true ? null
                                            : <div className="col ml-4">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                        style={{ "width": "50%" }} aria-valuenow="50" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>}
                                    </div>
                                    <div className="col-auto">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card
