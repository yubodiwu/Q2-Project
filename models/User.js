'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

class User {
    constructor(request) {
        this.id = request.id;
        this.linkedinId = request.linkedinId
        this.firstName = request.firstName;
        this.lastName = request.lastName;
        this.maidenName = request.maidenName;
        this.headline = request.headline;
        this.location = request.location;
        this.industry = request.industry;
        this.currentShare = request.currentShare;
        this.summary = request.summary;
        this.specialties = request.specialties;
        this.positions = request.positions;
        this.picUrl = request.picUrl;
        this.profileUrl = request.profileUrl;
        this.company = request.company
        this.email = request.email
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
