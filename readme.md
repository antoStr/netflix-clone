# Netflix Clone
Questa e' una copia fullstack del sito "Netflix" creato con ( .. ) TODO specifiche sito

# Utility
## Creazione repo ed enviroment.
### NextJS
Ho scaricato NodeJS da [https://nodejs.org/en]((https://nodejs.org/en)) e dopo per la creazione del progetto ho eseguito il comando nel terminale (Clonato una repo nuova da GitHub per completezza):
```
npx create-next-app@latest
```
Dopo mi chiedera' alcune impostazione per il progetto ed in base alle preferenze scegli, io ho utilizzato ESLint, Typescript, No src directory, no app/ experimental (etc) e nessun alias importato o settaggi. Una volta terminato utilizzo il comando per aprire il materiale su localhost web:
```
npm run dev
```
Se non dovesse funzionare assicurati di essere nella cartella interna del progetto dove hai typescript dell'index scss etc. Per avanzare cartella utilizza nel terminale:
```
cd "nome-della-cartella-interna-progetto"
```
### Tailwind
Una volta finito questo ho installato tailwind con:
```
npm install -D tailwindcss postcss autoprefixer
```
### Prisma

Ho installato l'estensione per VSCode chiamata 'Prisma'.
Dopo ho aperto il terminale ed ho installato lo schema con questo comando:
```
npm install -D prisma
```
E successivamente crea lo schema con:
```
npx prisma init
```
Ho cambiato il provider da "postgradesql" a "mongodb" nel schema.prisma appena creato.
Infine ho terminato l'installazione con l'integrazione con il database:
```
npm install @prisma/client
```
Una volta che ho creato il mio database con i files ed il necessario, per pusharlo su MongoDB uso:
```
npx prisma db push
```
E dovrei riuscire a visualizzare le mie collections nella tab apposita.

Se per caso dovebbe dare un errore del tipo "Environment variable not found: DATABASE_URL" potrebbe essere un errore legato al fatto che non riesce a trovare il file .env. Semplicemente sposta il file all'interno del progetto o della cartella dove c'e' la roba di prisma.
Se per caso dovresti avere un errore del tipo "Error: P1013" significa che nel link di collegamento non ha una cartella e gliela devi mettere tu con un semplice "/".
Esempio:
```
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.nnbtwc3.mongodb.net"

    ==>

DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.nnbtwc3.mongodb.net/test"
```