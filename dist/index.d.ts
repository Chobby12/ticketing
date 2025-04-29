declare let p1: Choice;
declare function passwordvVerifer(password: string): boolean;
declare function emailVerifier(email: string): boolean;
declare function checkPrefences(user: User<PreferencesSchema>, preference: string): string | number;
declare function permisionsChecker(user: User<PreferencesSchema>, permission: string): "You're free to bet" | "Permission Denied" | "You're eligible to invest" | "Not eligible to invest" | "You can pay bills with our app." | "You cannot pay bills with our app" | "You can save with our app" | "You cannot save with our app." | "Permission not found";
export { p1, emailVerifier, passwordvVerifer, checkPrefences, permisionsChecker };
