"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class App {
    constructor(name) {
        this.name = name;
        this.users = [];
        this.loggedInUsers = [];
        this.active = false;
        this.name = name;
    }
    register(user) {
        if (this.users.length > 0) {
            for (let person of this.users) {
                if (user.userName == person.userName || user.email == person.email)
                    return 'user already exists!';
            }
        }
        if ((0, index_1.emailVerifier)(user.email) && (0, index_1.passwordvVerifer)(user.password)) {
            this.users.push(user);
            this.login(user, user.userName, user.password);
        }
        else {
            if (!(0, index_1.emailVerifier)(user.email))
                console.log("Invalid Email.\n Please check email");
            if (!(0, index_1.passwordvVerifer)(user.password))
                console.log("Invalid Password. Password must contain one uppercase, lowercase, digit, and special characters.");
        }
    }
    login(user, name, password) {
        for (let user of this.users) {
            if (user.userName == name && user.password == password) {
                this.active = true;
                if (!this.loggedInUsers.includes(user.userName))
                    this.loggedInUsers.push(user.userName);
                console.log(`
            === Welcome to ${this.name.toUpperCase()}, ${user.userName}! ===
            
            Balance: ${(0, index_1.checkPrefences)(user, 'balanceDisplay')},
            Theme: ${(0, index_1.checkPrefences)(user, 'colorTheme')}

        ++++Permisions++++
            Bills: ${(0, index_1.permisionsChecker)(user, 'Bills')};
            Betting: ${(0, index_1.permisionsChecker)(user, 'Betting')};
            Investing: ${(0, index_1.permisionsChecker)(user, 'Bills')};
            Savings: ${(0, index_1.permisionsChecker)(user, 'Savings')}

        `);
                return true;
            }
        }
        console.log(`${user.userName} : Login access denied`);
        return 'Login access denied';
    }
    logOut(user) {
        this.active = false;
        this.register(user);
        if (this.loggedInUsers.includes(user.userName))
            this.loggedInUsers = this.loggedInUsers.filter(a => a != user.userName);
    }
    allUsers() {
        console.log(this.users);
        console.log(`Number of Users: ${this.users.length}
            LoggedinUsers: ${this.loggedInUsers}, NumberOfLoggedIn: ${this.loggedInUsers.length}
            NumberOfLoggedOutUsers: ${this.users.length - this.loggedInUsers.length}
            `);
    }
    getUsers() {
        let users = [];
        for (let user of this.users) {
            users.push(user.userName);
        }
        return users;
    }
}
const app = new App(`Swifty Pay`);
console.log(app);
app.allUsers();
const u1 = {
    userName: "Edu",
    age: 20,
    email: 'edunami@gmail.com',
    phoneNumber: 1233456789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: index_1.p1
};
const u2 = {
    userName: "Ekenechukwu",
    age: 20,
    email: 'ekene4life@gmail.com',
    phoneNumber: 1233456789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: { choice: true },
        Investing: { choice: false },
        Betting: { choice: false },
        Savings: { choice: true }
    }
};
const u3 = {
    userName: "Matty kash",
    age: 20,
    email: 'amttwewr.fe@gmail.com',
    phoneNumber: 1233456789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: { choice: true },
        Investing: { choice: false },
        Betting: { choice: false },
        Savings: { choice: true }
    }
};
const u5 = {
    userName: "Geofery",
    age: 20,
    email: 'goddft+e@gmail.com',
    phoneNumber: 1233456789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: { choice: true },
        Investing: { choice: false },
        Betting: { choice: false },
        Savings: { choice: true }
    }
};
const u4 = {
    userName: "James",
    age: 20,
    email: 'goddft+e@gmail.com',
    phoneNumber: 1233456789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: { choice: true },
        Investing: { choice: false },
        Betting: { choice: false },
        Savings: { choice: true }
    }
};
console.log();
console.log((0, index_1.passwordvVerifer)(u1.password));
app.register(u1);
app.register(u4);
app.allUsers();
app.login(u1, u1.userName, u1.password);
console.log('\n\n\n');
console.log('Point');
console.log(app.register(u2));
app.register(u3);
app.login(u4, u4.userName, u4.password);
app.logOut(u4);
app.allUsers();
console.log(app.login(u5, u5.userName, u5.password));
console.log(app.getUsers());
//# sourceMappingURL=app.js.map