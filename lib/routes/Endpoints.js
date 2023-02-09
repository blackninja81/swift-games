const endpoints = {
    images: `http://127.0.0.1:1337`,
    game: '/games',
    accesory: '/accessories/',
    populate: '/?populate=*',
    homegames: '/games?populate=*',
    accessories: "/accessories?populate=*",
    ps4: "/games?populate=*&filters[plartform][$eq]=ps",
    xbox: "/games?populate=*&filters[plartform][$eq]=xbox1",
    switch: "/games?populate=*&filters[plartform][$eq]=switch",
    banner: "/banners?populate=*&pagination[page]=1&pagination[pageSize]=10",
    homeaccessories: "/accessories?populate=*&pagination[page]=1&pagination[pageSize]=10",
    homediscount: "/games?populate=*&pagination[page]=1&pagination[pageSize]=10&filters[old_price][$notNull]=value",

}

export default endpoints;