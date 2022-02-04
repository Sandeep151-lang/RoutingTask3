import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card';

import ProgressBar from './ProgressBar';
import image_posting from './images/undraw_posting_photo.svg'


const HomePage = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                </div>

                {/* dynamic card use from card component */}
                <Card />
                
                {/* chart part start */}
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                               
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* chart part end here    */}
                    
                    {/* renevue Sources part  start here  */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                            {/* renevue Sources part start end   */}

                            {/* progressbar start here  */}
                            <ProgressBar/>
                            {/* progressbar end here */}
                        </div>
                       
                        {/* cardtext start here */}

                        {/* cardtext end here */}
                    </div>
                          
                    {/* illustration card part  start here */}
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "25rem" }}
                                        src={image_posting} alt="..." />
                                </div>
                                <p>Add some quality, svg illustrations to your project courtesy of <Link to="#"
                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</Link>, Link
                                    constantly updated collection of beautiful svg images that you can use
                                    completely free and without attribution!</p>
                                <Link to="#" target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    unDraw &rarr;</Link>
                            </div>
                        </div>
                        {/* illustration card part  end here */}

                        {/* Development Approach card part  start here */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </div>
                            <div className="card-body">
                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                    CSS bloat and poor page performance. Custom CSS classes are used to create
                                    custom components and custom utility classes.</p>
                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                    Bootstrap framework, especially the utility classes.</p>
                            </div>
                        </div>
                        {/* Development Approach card part  end here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
