const endpoints = {
    
    accessories: "/accessories?populate=*",
    ps4: "/games?populate=*&filters[plartform][$eq]=ps",
    xbox: "/games?populate=*&filters[plartform][$eq]=xbox1",
    switch: "/games?populate=*&filters[plartform][$eq]=switch",
    banner: "/banners?populate=*&pagination[page]=1&pagination[pageSize]=10",
    homegames: '/games?populate=*&pagination[page]=1&pagination[pageSize]=10',
    homeaccessories: "/accessories?populate=*&pagination[page]=1&pagination[pageSize]=10",
    homediscount: "/games?populate=*&pagination[page]=1&pagination[pageSize]=10&filters[old_price][$notNull]=value",

}

export default endpoints;