import {
    FaAccusoft,
    FaAdversal,
    FaAvianex,
   
    FaBitcoin,
    FaBtc,
    FaCodiepie,
    FaDocker,
    FaGithubSquare,
} from 'react-icons/fa';

import { nanoid } from 'nanoid'


const sublinks = [
    {
        pageId: nanoid(),
        page: 'Product',
        links: [
          
            {
                id: nanoid(),
                label: 'content',
                icon: <FaAccusoft />,
                url: '/product/content',
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/product/roles',
            },
        ],
    },
    {
        pageId: nanoid(),
        page: 'Solutions',
        links: [
            {
                id: nanoid(),
                label: 'developers',
                icon: <FaAvianex />,
                url: '/solutions/developers',
            },
            {
                id: nanoid(),
                label: 'content managers',
                icon: <FaBitcoin />,
                url: '/solutions/content-managers',
            },
            {
                id: nanoid(),
                label: 'business teams',
                icon: <FaBtc />,
                url: '/solutions/business teams',
            },
            {
                id: nanoid(),
                label: 'ecommerce',
                icon: <FaCodiepie />,
                url: '/solutions/ecommerce',
            },
        ],
    },
    {
        page: 'Resources',
        pageId: nanoid(),
        links: [
            {
                id: nanoid(),
                label: 'starters',
                icons: <FaDocker />,
                url: '/resources/starters',
            },
            {
                id: nanoid(),
                label: 'showcase',
                icons: <FaDocker />,
                url: '/resources/showcase',
            },
        ]
    },
   
]

export default sublinks;