import React from 'react';

export const SidebarData =
    [
        {
            title: "Components",
            path: '#',
            icon: <i className="fas fa-fw fa-cog"></i>,

            subNav: [
                {
                    title: "Cards",
                    path: "/component/cards",
                },
                {
                    title: "Buttons",
                    path: '/component/buttons',
                }
            ]
        },
        {
            title: "Utilities",
            path: '#',
            icon: <i className="fas fa-fw fa-wrench"></i>,

            subNav: [
                {
                    title: "Colors",
                    path: "/utilities/colors",
                },
                {
                    title: "Borders",
                    path: "/utilities/border",
                },
                {
                    title: "Animation",
                    path: "/utilities/animation"
                }
            ]
        },
        {
            title: "Pages",
            path: '#',
            icon: <i className="fas fa-fw fa-folder"></i>,

            subNav: [
                {
                    title: "Login",
                    path: '/',
                },
                {
                    title: "Register",
                    path: '/',
                },
                {
                    title: "Forget",
                    path: '/',
                },
                {
                    title: "Forgot Password",
                    path: '/',
                }
            ]
        },

    ]

export const List = [
    {
        title: "Charts",
        path: "/chart",
        icon: <i className="fas fa-fw fa-chart-area"></i>,
    },
    {
        title: "Table",
        path: "/table",
        icon: <i className="fas fa-fw fa-table"></i>
    }

]