'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

class User {
    constructor(id, firstName, lastName, maidenName, headline, location, industry, currentShare, summary, specialties, positions, picUrl, profileUrl, company) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.maidenName = maidenName;
        this.headline = headline;
        this.location = location;
        this.industry = industry;
        this.currentShare = currentShare;
        this.summary = summary;
        this.specialties = specialties;
        this.positions = positions;
        this.picUrl = picUrl;
        this.profileUrl = profileUrl;
        this.company = cumpany
        this.email = email
    }

    toObject() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastNAme: this.lastName,
            maidenName: this.maidenName,
            headline: this.headline,
            location: this.location,
            industry: this.industry,
            currentShare: this.currentShare,
            summary: this.summary,
            specialties: this.specialties,
            positions: this.positions,
            picUrl: this.picUrl,
            profileUrl: this.profileUrl,
            email: this.email
        }
    }
}

module.exports = User;
