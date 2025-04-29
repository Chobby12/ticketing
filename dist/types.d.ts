type Extra = "Bills" | "Investing" | "Betting" | "Savings";
type Choice = Record<Extra, {
    choice: boolean;
}>;
interface User<T> {
    userName: string;
    age: number;
    email: string;
    phoneNumber: number | string;
    password: string;
    accountBalance: number | string;
    preferences: T;
    extras: Choice;
}
type PreferencesSchema = {
    colorTheme: "light-mode" | "dark-mode";
    balanceDisplay: "show-balance" | 'hide-balance';
};
type LoggedInUser = Pick<User<PreferencesSchema>, 'userName' | 'password'>;
interface Ticket {
    buyer: string;
    ticketId: string;
    ticketType: "VIP" | "Premium" | "Basic";
    price: number;
}
interface Customer {
    name: string;
    ticketsBought: String[];
    totalAmountPurchased: number;
}
