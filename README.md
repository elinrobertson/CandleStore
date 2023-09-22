CandleStore
Länk till GitHub-repo: https://github.com/elinrobertson/CandleStore

För att starta projektet:
- Hämta hem projektet
- Öppna en terminal och skriv in cd server för att navigera till servern
- Skriv in nodemon server.js för att starta servern
- Öppna ytterligare en terminal och skriv cd client för att navigera till clienten
- Skriv in npm run dev för att starta clienten. 
- Öppna sedan projektet på http://localhost:5173/

Följande krav är uppfyllda:
1. Uppgiften lämnas in i tid.
2. Produkter ska listas på en sida.
3. Produkter som visas och köps skall hämtas ifrån Stripe.
4. Det ska gå att lägga till produkter i en kundvagn.
5. Baserad på kundvagnen skall det gå att lägga en order genom Stripe.
6. Man skall kunna registrera sig som en användare i webbshoppen. Detta skall resultera
i att en ”Customer” skapas i Stripe och användaren sparar i en JSON-fil. (samtliga
lösenord skall sparas hashade).
7. Man skall kunna logga in som kund. Den inloggade kunden (som även är sparad i
Stripe) skall användas vid placering av order.
8. Man skall inte kunna placera en order om man inte är inloggad.
Det skall gå att ange en rabattkod för att få rabatt på sitt köp (Detta görs genom Stripe)

Värt att notera:

Rabattkod som fungerar i kassan är FALL10 som ger 10% rabatt på hela köpet

När man lägger en produkt i varukorgen så är tanken att siffran vid varukorgen ska uppdateras. Siffran uppdateras först efter att man har refreshat sidan. Trots att funktionaliteten inte är fullständig har jag valt att behålla siffran för utseendets skull.