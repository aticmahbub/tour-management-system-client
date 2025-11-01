const data = {
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            items: [
                {
                    title: 'Analytics',
                    url: '/admin/analytics',
                    component: 'Analytics',
                },
            ],
        },
        {
            title: 'Tour management',
            url: '/dashboard',
            items: [
                {
                    title: 'Add tour',
                    url: '/admin/add-tour',
                    components: 'AddTour',
                },
            ],
        },
    ],
};

const res = data.navMain.map((item) => {
    const sth = [
        {
            path: item.url,
            Component: item.title,
        },
    ];
    console.log(sth);
});
