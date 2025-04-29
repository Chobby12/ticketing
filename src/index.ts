// Usage: Record
let p1: Choice = {
    Bills: {choice: true},
    Investing: {choice: false},
    Betting: {choice: true},
    Savings: {choice: false}
}


const user1: User<PreferencesSchema> = {
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

console.log(user1)


function passwordvVerifer(password: string){
    let passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,20}$/
    return passwordRegex.test(password)
}

function emailVerifier(email: string){
    let emailRegex: RegExp = /^[a-zA-Z](?!.*\.\.)[a-zA-z\d\.%\+\-]+@(gmail|outlook|yahoo)\.com$/
    return emailRegex.test(email)
}

console.log(user1.password.length)
console.log(passwordvVerifer(user1.password))
console.log(emailVerifier('omenyitk@gmail.com'))
console.log(emailVerifier('okoro123@gmail.com'))
console.log("e1", emailVerifier('eee..a3@gmail.com'))
console.log(emailVerifier('234..4dfdbbdj@gmail.com'))
console.log(emailVerifier('oeruhu'))


function checkPrefences(user: User<PreferencesSchema>, preference:string){
    if(preference == 'balanceDisplay'){
        if(user.preferences.balanceDisplay == 'show-balance') return user.accountBalance;
        else return '****'
    }
    else if(preference == 'colorTheme'){
        return user.preferences.colorTheme;
    }
    else{
        return `${preference} not found!`
    }
    
}

function permisionsChecker(user: User<PreferencesSchema>,permission: string){
    if(permission=='Betting') {
        return user.extras.Betting.choice ? `You're free to bet` : `Permission Denied`
    }else if(permission == 'Investing'){
        return user.extras.Investing.choice ? `You're eligible to invest` : `Not eligible to invest`
    }else if(permission == 'Bills'){
        return user.extras.Bills.choice ? `You can pay bills with our app.` : `You cannot pay bills with our app`
    }else if(permission == 'Savings'){
        return user.extras.Savings.choice ? `You can save with our app` : `You cannot save with our app.`
    }
    else return 'Permission not found'
}


permisionsChecker(user1,'Betting')
export {p1, emailVerifier, passwordvVerifer, checkPrefences, permisionsChecker}
// export default passwordvVerifer()