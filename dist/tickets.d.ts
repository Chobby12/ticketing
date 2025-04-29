declare class Tickets {
    private event;
    private availableTickets;
    protected purchaseTickets: never[];
    protected buyers: never[];
    constructor(event: string, availableTickets: number);
    generateTicket(name: string, ticketType: string): Ticket | string;
}
declare const ticket1: Tickets;
