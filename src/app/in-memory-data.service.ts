import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const links = [
      {
        "id": 0,
        "name" : "AIM",
        "description" : "Academic information",
        "url" : "https://aim.byu.edu",
        "icon" : "school",
        "tags" : [
          "school",
          "grades",
          "academic",
          "favorite"
        ]
      },
      {
        "id": 1,
        "name" : "Learning Suite",
        "description" : "Classes and schedule",
        "url" : "https://learningsuite.byu.edu",
        "icon" : "class",
        "tags" : [
          "school",
          "classes",
          "schedule",
          "academic"
        ]
      },
      {
        "id": 2,
        "name" : "My Financial Center",
        "description" : "Tuition and fees",
        "url" : "https://link.byu.edu/mfc",
        "icon" : "attach_money",
        "tags" : [
          "school",
          "tuition",
          "fees"
        ]
      },
      {
        "id": 3,
        "name" : "Time Clock",
        "description" : "Time Clock",
        "url" : "https://ytime.byu.edu",
        "icon" : "access_time",
        "tags" : [
          "work",
          "time clock",
          "time punch"
        ]
      },
      {
        "id": 4,
        "name" : "Employee Discounts",
        "description" : "Employee Discounts",
        "url" : "https://byudiscounts.byu.edu",
        "icon" : "card_giftcard",
        "tags" : [
          "work",
          "discounts",
          "employee benefits",
          "benefits"
        ]
      },
      {
        "id": 5,
        "name" : "BYU Directory",
        "description" : "Look up person",
        "url" : "https://y.byu.edu/ry/ae/prod/person/cgi/personLookup.cgi",
        "icon" : "people",
        "tags" : [
          "communication",
          "directory",
          "find employee"
        ]
      },
      {
        "id": 6,
        "name" : "Email Alias Manager",
        "description" : "Manage email aliases",
        "url" : "https://home.byu.edu/eam/emailAliasManager.htm",
        "icon" : "email",
        "tags" : [
          "communication",
          "email",
          "email aliases"
        ]
      },
      {
        "id": 7,
        "name" : "Personal Information",
        "description" : "Update personal information",
        "url" : "https://y.byu.edu/ry/ae/prod/person/cgi/personSummary.cgi",
        "icon" : "account_circle",
        "tags" : [
          "communication",
          "personal information"
        ]
      }
    ];
    return {links};
  }
}
