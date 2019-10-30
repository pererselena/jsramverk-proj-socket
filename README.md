# jsramverk-proj-socket

## Teknikval för socket

I detta projekt har jag valt att göra en trading plattform för att kunna köpa och sälja produkter som råvaror och aktier. Namnen har fått inspiration från utbildningen.

I denna socket.io server har jag valt att avnända mig av socket.io, dotenv, express.js, mongoose och mongodb för att skapa en realtids push av priser till klienter som kopplat upp sig.

Jag har valt att använda mongooose och mongodb då det valet skedde redan i backend delen i projektet, jag har använt samma model för products för att med mongoose kunna hämta ut alla produkter som finns lagrade.

i models mappen är min mongoose modell lagrad. Server.js hanterar alla anslutningar och stock.js slumpar fram ett pris.

När man hämtat hem alla produkter gås dessa igenom och man anropar en metod i stock.js som ger tillbaks ett slumpmässigt pris från information lagrad i prdokuten, så som rate, variance och start pris. Det slumpade priset kontrolleras dock så det inte kan gå över 100 eller under 0.

När man har gått igenom alla produkter och gett dem  ett uppdaterat pris skickas dessa produkter ut till alla anslutna klienter.
Utskicket kommer att likna det som fås från backend apiet via GET.

Klienten kommer sedan att hantera detta i sin kod, och anävder det för att jag använder mig av chart.js och react-chartjs-2 för att generera graferna. Jag har valt göra detta enbart i Home component, jag lägger alla produkter i en array i state, först via en fetch från backend och sedan uppdateras via socket.io och fyller på en array med pris och labels.