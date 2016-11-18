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
                "first_name": "Trevor",
                "headline": "Galvanize Full Stack Student",
                "linkedin_id": "fuutrzW8XY",
                "industry": "Computer Software",
                "last_name": "Pellegrini",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pic_url": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/090/289/3ca32fd.jpg",
                "email": "trevorpellegrini@gmail.com",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
                "skills": {
                    "skills": ["javascript", "Software Dev", "Node.js", "Golf", "Marketo", "salesforce.com", "awesomeness"]
                }
            }, {
                "first_name": "Yubo",
                "headline": "Galvanize Full Stack Student",
                "linkedin_id": "fuutrsW8XY",
                "industry": "Computer Software",
                "last_name": "Diwu",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pic_url": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/095/0a8/299b207.jpg",
                "email": "allndiwu@gmail.com",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
                "skills": {
                    "skills": ["javascript", "Software Dev", "Node.js", "Recursion", "Civil Engineering", "awesomeness"]
                }
            }, {
                "first_name": "Mikey",
                "headline": "Smashed",
                "linkedin_id": "fatigue",
                "industry": "Computer Software",
                "last_name": "Liu",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pic_url": "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/1548159_10153744860430623_1596799000_o.jpg",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
                "skills": {
                    "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
                }
            }, {
                "id": 5,
                "linkedin_id": "4zM4-B7Su-",
                "first_name": "David",
                "last_name": "Shin",
                "headline": "Structural Biologist",
                "location": "San Francisco Bay Area",
                "industry": "Research",
                "positions": "",
                "pic_url": "https://media.licdn.com/mpr/mprx/0_KMzyHnhE0W3Ymv4otJ5_Hq_Exf5K2P4o-Y3iHztv8Wl81cfEpxLKQv6UlGL77NJ6lscCFthlAOmN",
                "email": "davidshin444@gmail.com",
                "skills": null,
                "hashed_password": "$2a$12$1v5GPkAOJwtEg1c3IZMU7.kXMiQwNrR7cVgE4VayOVaYLaPK8qI6O"
            }]);
        }, {
            "id":6,
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjMidvRkLPQAhUKqFQKHW25DwgQjRwIBw&url=http%3A%2F%2Fwww.ericcalvi.com%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "id":7,
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjK7IjVkbPQAhVKjlQKHUhCBScQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Fprofessional-headshots%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "id":8,
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwii6JvekbPQAhVHllQKHQ5pBSkQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Fbusiness-headshots%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "id":9,
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/1548159_10153744860430623_1596799000_o.jpg",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjgxKLSkrPQAhUIxFQKHUW3DkwQjRwIBw&url=http%3A%2F%2Fwww.daviddanielsphotography.com%2Fjays-professional-headshots%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwigh7vXkrPQAhWJgFQKHbcHDUcQjRwIBw&url=http%3A%2F%2Fbarrusphoto.com%2Fheadshots%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjbjfvdkrPQAhVDwVQKHVRbAkIQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Fprofessional-headshots%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjc1pnjkrPQAhWG0FQKHdBeAXQQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F268245721529337820%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "http://www.beautyholicsanonymous.com/beautyholics/wp-content/uploads/2015/02/bw-guest-post-tips-on-posing-for-headshots-for-blog-2.jpg",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjI5fHykrPQAhWKjFQKHTKoBlgQjRwIBw&url=http%3A%2F%2Fkpstudios.com%2Ftag%2Fprofessional-headshot%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi39Z74krPQAhWIqlQKHe2fApAQjRwIBw&url=http%3A%2F%2Fwww.eastbayheadshots.com%2Flooks%2Fprofessional-photos%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj2wOuCk7PQAhVH0FQKHW64DToQjRwIBw&url=http%3A%2F%2Fbarfieldphotography.com%2Fportfolio%2Fcorporate-headshot-photography-houston-professional-headshot%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjFlJr-krPQAhXKrVQKHYomCCEQjRwIBw&url=http%3A%2F%2Fwww.ucblueash.edu%2Fnow%2F2016%2F11%2F08%2Fuc-blue-ash-students-get-your-free-professional-head-shot%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjj6--Mk7PQAhVDhlQKHe6BB_kQjRwIBw&url=http%3A%2F%2Fkellyweaverphotography.com%2Fgallery%2Floan-officer-headshot-in-littleton-location%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/1548159_10153744860430623_1596799000_o.jpg",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        }, {
            "first_name": "Mikey",
            "headline": "Smashed",
            "linkedin_id": "fatigue",
            "industry": "Computer Software",
            "last_name": "Liu",
            "location": {
                "country": {
                    "code": "us"
                },
                "name": "San Francisco Bay Area"
            },
            "pic_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiio7qRk7PQAhXLv1QKHT6bCDUQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Fprofessional-headshots%2F&bvm=bv.139250283,d.cGw&psig=AFQjCNG6lCO00trYVilX7w7RYMGtDhVPYw&ust=1479586377076779",
            "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
            "skills": {
                "skills": ["Fatigue", "javascript", "Software Dev", "Node.js", "awesomeness"]
            }
        })
        .then(function() {
            return knex.raw(
                "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
            )
        });
};
