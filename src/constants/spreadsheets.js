const spreadsheets = [
    {
        name: 'Żelbet',
        sheets: [
            {
                name: 'otulina',
                path: '/zelbet/otulina',
                description: 'Kalkulator do wyznaczania otuliny w konstrukcjach żelbetowych',
                standard: 'PN-EN-1992-1-1'
            },
            {
                name: 'zakład, zakotwienie',
                path: '/zelbet/zaklad-zakotwienie',
                description: 'Kalkulator do wyznaczania zakładu oraz zakotwienia prętów zbrojeniowych w betonie',
                standard: 'PN-EN-1992-1-1'
            },
        ]
    },
    {
        name: 'Obciążenia',
        sheets: [
            {
                name: 'obciążenie śniegiem',
                path: '/obciazenia/snieg',
                description: '',
                standard: ''
            },
            {
                name: 'obciążenie wiatrem',
                path: '/obciazenia/wiatr',
                description: '',
                standard: ''
            }
        ]
    }
];

export default spreadsheets;
