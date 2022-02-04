const data = [
    {
        classname: 'card border-left-primary shadow h-100 py-2',
        textclassname: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
        text: ' Earnings (Monthly)',
        icon: <i className="fas fa-calendar fa-2x text-gray-300"></i>,
        active: true,
        price:'$40,000'
    },
    {
        classname: 'card border-left-success shadow h-100 py-2',
        textclassname: 'text-xs font-weight-bold text-success text-uppercase mb-1',
        text: ' Earnings (Annual)',
        icon: <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>,
        active: true,
        price: '$215,000'
    },
    {
        classname: 'card border-left-info shadow h-100 py-2',
        textclassname: 'text-xs font-weight-bold text-info text-uppercase mb-1',
        text: 'Task',
        icon: <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>,
        active: false,
        price: '50%'
    },
    {
        classname: 'card border-left-warning shadow h-100 py-2',
        textclassname: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
        text: 'Pending Requests',
        icon: <i className="fas fa-comments fa-2x text-gray-300"></i>,
        active: true,
        price: '18'
    }
]

export default data;