'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const knex = require('../db/knex');

class Connection {
    constructor(request) {
        this.connectionId = request.connectionId;
        this.userId = request.userId;
    }

    toArray() {
        return [{
            user_id: this.userId,
            connection_id: this.connectionId
        }, {
            user_id: this.connectionId,
            connection_id: this.userId
        }];
    }

    postToDB(res) {
        var postArray = this.toArray();
        var userId = this.userId;
        var connectionId = this.connectionId;

        knex('connections')
            .where('connection_id', connectionId)
            .andWhere('user_id', userId)
            .returning('*')
            .then(function(connection) {
                if (connection.length > 0) {
                    res.redirect(`/show_connections/${userId}`);
                } else {
                    knex('connections')
                        .insert(postArray)
                        .returning('*')
                        .then(function(user) {
                            res.send(user[0]);
                        });
                }
            });
    }
}

module.exports = Connection;
