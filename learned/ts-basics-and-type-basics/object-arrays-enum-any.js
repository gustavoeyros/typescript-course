"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Moderator"] = 1] = "Moderator";
    Role[Role["CommunityManager"] = 2] = "CommunityManager";
    Role[Role["User"] = 3] = "User";
})(Role || (Role = {}));
const people = {
    name: 'Gustavo',
    age: 18,
    hobbies: ['Study', 'Games'],
    roles: Role.Admin
};
let favoriteHobbies;
let favoriteGames;
