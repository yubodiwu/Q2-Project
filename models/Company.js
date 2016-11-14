'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

class Company {
    constructor(id, name, email, industry, website, status, logoUrlSquare, locations) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.industry = industry;
        this.website = website;
        this.status = status;
        this.logoUrlSquare = logoUrlSquare
        this.locations = locations;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            industry: this.industry,
            website: this.website,
            status: this.status,
            logo: this.logoUrlSquare,
            locations: this.locations
        }
    }
}

module.exports = Company;
