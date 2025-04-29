import {p1, emailVerifier, passwordvVerifer, checkPrefences, permisionsChecker} from './index'

class App{
    protected users: User<PreferencesSchema>[] = []
    protected loggedInUsers: string[] = []
    protected active: boolean = false

    constructor(protected name:string){
        this.name = name
    }

    public register(user: User<PreferencesSchema>){
        if(this.users.length>0){
            for(let person of this.users){
                if(user.userName == person.userName || user.email == person.email) return 'user already exists!'
            }
        }
        if(emailVerifier(user.email)&&passwordvVerifer(user.password)){
            this.users.push(user)
            this.login(user,user.userName,user.password)
        }else{
            if(!emailVerifier(user.email)) console.log("Invalid Email.\n Please check email")
            if(!passwordvVerifer(user.password)) console.log("Invalid Password. Password must contain one uppercase, lowercase, digit, and special characters.")
        }
    }

    login(user: User<PreferencesSchema>, name:string, password: string){
        for(let user of this.users){
            if(user.userName == name && user.password==password){

                this.active = true
        if(!this.loggedInUsers.includes(user.userName)) this.loggedInUsers.push(user.userName)
        console.log(`
            === Welcome to ${this.name.toUpperCase()}, ${user.userName}! ===
            
            Balance: ${checkPrefences(user, 'balanceDisplay')},
            Theme: ${checkPrefences(user, 'colorTheme')}

        ++++Permisions++++
            Bills: ${permisionsChecker(user, 'Bills')};
            Betting: ${permisionsChecker(user, 'Betting')};
            Investing: ${permisionsChecker(user, 'Bills')};
            Savings: ${permisionsChecker(user, 'Savings')}

        `)
            return true
            }
        }
        console.log(`${user.userName} : Login access denied`)
        return 'Login access denied'
        
    }

    logOut(user: User<PreferencesSchema>){
        this.active = false
        this.register(user)
        if(this.loggedInUsers.includes(user.userName)) this.loggedInUsers = this.loggedInUsers.filter(a =>  a!=user.userName)
    }

    allUsers(){
        console.log(this.users)
        console.log(
            `Number of Users: ${this.users.length}
            LoggedinUsers: ${this.loggedInUsers}, NumberOfLoggedIn: ${this.loggedInUsers.length}
            NumberOfLoggedOutUsers: ${this.users.length-this.loggedInUsers.length}
            `
        )
    }
    
    getUsers(){
        let users: string[] = []
        for(let user of this.users){
            users.push(user.userName)
        }
        return users
    }
}

const app = new App(`Swifty Pay`);


console.log(app)
app.allUsers()


const u1:User<PreferencesSchema> = {
    userName: "Edu",
    age: 20,
    email: 'edunami@gmail.com',
    phoneNumber: 123_345_6789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1_000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: p1
}

const u2:User<PreferencesSchema> = {
    userName: "Ekenechukwu",
    age: 20,
    email: 'ekene4life@gmail.com',
    phoneNumber: 123_345_6789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1_000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: {choice: true},
        Investing: {choice: false},
        Betting: {choice: false},
        Savings: {choice: true}
    }
}

const u3:User<PreferencesSchema> = {
    userName: "Matty kash",
    age: 20,
    email: 'amttwewr.fe@gmail.com',
    phoneNumber: 123_345_6789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1_000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: {choice: true},
        Investing: {choice: false},
        Betting: {choice: false},
        Savings: {choice: true}
    }
}

const u5:User<PreferencesSchema> = {
    userName: "Geofery",
    age: 20,
    email: 'goddft+e@gmail.com',
    phoneNumber: 123_345_6789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1_000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: {choice: true},
        Investing: {choice: false},
        Betting: {choice: false},
        Savings: {choice: true}
    }
}

const u4:User<PreferencesSchema> = {
    userName: "James",
    age: 20,
    email: 'goddft+e@gmail.com',
    phoneNumber: 123_345_6789,
    password: 'snshffHBFjUN*()*^^2',
    accountBalance: 1_000,
    preferences: {
        colorTheme: 'dark-mode',
        balanceDisplay: "hide-balance"
    },
    extras: {
        Bills: {choice: true},
        Investing: {choice: false},
        Betting: {choice: false},
        Savings: {choice: true}
    }
}

console.log()
console.log(passwordvVerifer(u1.password))

app.register(u1)
app.register(u4)
app.allUsers()
app.login(u1,u1.userName,u1.password)                             

console.log('\n\n\n')

console.log('Point')
console.log(app.register(u2))

// app.logOut(u1)

app.register(u3)
app.login(u4,u4.userName,u4.password)
app.logOut(u4)
app.allUsers()
console.log(app.login(u5, u5.userName, u5.password))


// console.log(p1)
// console.log(checkPrefences(u1, 'balanceDisplay'))
console.log(app.getUsers())

