'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return knex('users').insert([{
                "id": 1,
                "linkedin_id": "fuutrzW8XY",
                "first_name": "Trevor",
                "last_name": "Pellegrini",
                "headline": "Galvanize Full Stack Student",
                "location": "{\"country\":{\"code\":\"us\"},\"name\":\"San Francisco Bay Area\"}",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi",
                "email": "trevorpellegrini@gmail.com",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u"
            }, {
                "id": 2,
                "linkedin_id": "fuutrsW8XY",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Galvanize Full Stack Student",
                "location": "{\"country\":{\"code\":\"us\"},\"name\":\"San Francisco Bay Area\"}",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u"
            }, {
                "id": 3,
                "linkedin_id": "fatigue",
                "first_name": "Mikey",
                "last_name": "Liu",
                "headline": "Smashed",
                "location": "{\"country\":{\"code\":\"us\"},\"name\":\"San Francisco Bay Area\"}",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_Oh0PXQrmzxQuxqDzclw1f8tmA4kAJb-JOXwjC16mKwfKyBTHlhbguNgmcVLAp5DLjXWj7cOap4zr0_NMBPV72tPGM4zl0_LLlPVKFPQftJhjzvOMjGuObFeOJSfTn_tq4rYx8SXnjBK",
                "email": "",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u"
            }, {
                "id": 4,
                "linkedin_id": "7fjZeBGXuW",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Full Stack student at Galvanize Web Development Immersive",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$LElL57/PdRC64k7DIqAO2.ucfu6JpA4G8EPF86jO/LQSC308991lG"
            }, {
                "id": 5,
                "linkedin_id": "lWqMOfle1r",
                "first_name": "Namkai",
                "last_name": "Fairfield",
                "headline": "Junior Software Engineer",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_Oh0PXQrmzxQuxqDzclw1f8tmA4kAJb-JOXwjC16mKwfKyBTHlhbguNgmcVLAp5DLjXWj7cOap4zr0_NMBPV72tPGM4zl0_LLlPVKFPQftJhjzvOMjGuObFeOJSfTn_tq4rYx8SXnjBK",
                "email": "namkhai@live.com",
                "hashed_password": "$2a$12$G3ir2lj0ADj4uWCPJiFH5uTW0UisiSccAeqruZc1q.vUmbQ2HgOyO"
            }, {
                "id": 6,
                "linkedin_id": "7fjZeBGXuW",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Full Stack student at Galvanize Web Development Immersive",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$zND9DEn0/1ZYO2TQc84qfOenVyhCyR3mALzMxkTEl90F.bLvAcp0K"
            }, {
                "id": 7,
                "linkedin_id": "7fjZeBGXuW",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Full Stack student at Galvanize Web Development Immersive",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$aCoEjDwG1YAe1owc6m3o/.skFXVlmwfAz9UpVUJEIbHdoiSHXtXYy"
            }, {
                "id": 8,
                "linkedin_id": "7fjZeBGXuW",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Full Stack student at Galvanize Web Development Immersive",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$6eBEV7F5wEJ5/TlfksVNqe30NVpy0BO.elAz3N2mkdmmOZBq58idO"
            }, {
                "id": 9,
                "linkedin_id": "7fjZeBGXuW",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Full Stack student at Galvanize Web Development Immersive",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$xYuYfNoGzzWgo8aZTluxIOuwc7SKgvDJksd5cp3vDreM9ww.G8Juq"
            }, {
                "id": 10,
                "linkedin_id": "7fjZeBGXuW",
                "first_name": "Yubo",
                "last_name": "Diwu",
                "headline": "Full Stack student at Galvanize Web Development Immersive",
                "location": "San Francisco Bay Area",
                "industry": "Computer Software",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_pCD07nMj4UTgZLXWtb287zWS4p52NQqWO5J87zwDFJljwGidKkj13v0i9tL-cTz5jTf38tJsKZH_",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "$2a$12$cX4DijKvBXHCFKBo5xmiwu8FTi/sNdpfzV3qGfnzjQJp.mhZiPeEy"
            }]);
        })
        .then(function() {
            return knex.raw(
                "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
            )
        });
};
