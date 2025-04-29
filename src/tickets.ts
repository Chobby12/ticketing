class Tickets{
    protected purchaseTickets = []
    protected buyers = []
    constructor(private event:string, private availableTickets:number){
        this.event = event
        this.availableTickets = availableTickets
    }
    generateTicket(name: string, ticketType: string):Ticket|string{
        let ticket: string = 't'
        let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
         
        if(ticketType == 'VIP'){
            return generator('VIP', 20_000)
        }
        else if(ticketType == 'Premium'){
            return generator('Premium', 10_000)
        }
        
        function randInt(){
            let id = Math.ceil(Math.random() * alpha.length-1)
            return id
        }

        function generator(tType: string, price: number){
            for(let i = 1; i<=7; i++){
                ticket += tType.slice(0,2) + alpha[randInt()];
            }
            let purchased:Ticket = {
                buyer: name,
                ticketId : `${ticket}+${tType.slice(tType.length-1)}`,
                ticketType : tType=='VIP' ? 'VIP' : 'Premium' ,
                price : 20_000
            }
            // this.purchaseTickets.push({name,`${ticket}P`})
            return purchased

        }
        return 'unable to generate Ticket! Try Again!'
    }
}

const ticket1 = new Tickets('UEFA Champions League Final', 100)

console.log(ticket1.generateTicket('Tobi','VIP'))
console.log(ticket1.generateTicket('Ebenezer','Premium'))