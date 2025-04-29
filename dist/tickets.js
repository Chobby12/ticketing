"use strict";
class Tickets {
    constructor(event, availableTickets) {
        this.event = event;
        this.availableTickets = availableTickets;
        this.purchaseTickets = [];
        this.buyers = [];
        this.event = event;
        this.availableTickets = availableTickets;
    }
    generateTicket(name, ticketType) {
        let ticket = 't';
        let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        if (ticketType == 'VIP') {
            return generator('VIP', 20000);
        }
        else if (ticketType == 'Premium') {
            return generator('Premium', 10000);
        }
        function randInt() {
            let id = Math.ceil(Math.random() * alpha.length - 1);
            return id;
        }
        function generator(tType, price) {
            for (let i = 1; i <= 7; i++) {
                ticket += tType.slice(0, 2) + alpha[randInt()];
            }
            let purchased = {
                buyer: name,
                ticketId: `${ticket}+${tType.slice(tType.length - 1)}`,
                ticketType: tType == 'VIP' ? 'VIP' : 'Premium',
                price: 20000
            };
            return purchased;
        }
        return 'unable to generate Ticket! Try Again!';
    }
}
const ticket1 = new Tickets('UEFA Champions League Final', 100);
console.log(ticket1.generateTicket('Tobi', 'VIP'));
console.log(ticket1.generateTicket('Ebenezer', 'Premium'));
//# sourceMappingURL=tickets.js.map