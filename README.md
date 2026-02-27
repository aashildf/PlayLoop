
# PLAYLOOP


<p align="center">
  <img src="images/preview.png" alt="PLAYLOOP Preview" width="600">
</p>

[👉 Se PLAYLOOP live her!](https://aashildf.github.io/PlayLoop/)

PLAYLOOP er en interaktiv webplattform inspirert av retro spillestetikk og moderne design. Prosjektet fungerer som en portal til ulike spillmoduler og et omfattende designsystem, pakket inn i et nostalgisk 80-talls visuelt uttrykk.

## Konsept
Prosjektet er bygget rundt følelsen av en klassisk arkadehall. Ved hjelp av lydeffekter, neon-elementer og CRT-filtre, tas brukeren med fra en "Insert Coin"-forside og videre inn i et univers av spill og visuelle komponenter.

## Min rolle & Utvikling
Som ansvarlig for **Interface & Portal Architecture**, har jeg stått for utviklingen av rammeverket og den tekniske infrastrukturen for å få siden live:

* **Deployment & CI/CD:** Jeg har satt opp GitHub Actions for automatisk utrulling til GitHub Pages. Dette innebærer overgang fra kun kildekode til en aktiv, fungerende nettside.
* **Portal-arkitektur:** Konfigurering av ruting-logikk (React Router) med `basename` for å håndtere undermapper i produksjonsmiljø.
* **Hero & Interface:** Design og koding av forsiden med Lottie-animasjoner, lyd-integrasjon og komplekse overgangseffekter.
* **Arcade Interface:** Konstruksjon av den visuelle arkademaskinen og integrering av Scoreboard og navigasjonselementer.
* **Designsystem:** Utvikling av en komplett visuell profil med gjenbrukbare komponenter som knapper og kort med parallax-effekter.

## Oppgavefordeling (Originalt team)
Prosjektet startet som et samarbeid der vi hadde ulike fokusområder:
* **Åshild:** Interface, portal-arkitektur og overordnet frontend.
* **Lene Renate:** Backend og integrasjon.
* **Mia:** Memory Game-modulen.
* **Therese:** Reaction Game-modulen.

## Teknisk oppsett
* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Animasjoner:** Framer Motion & Lottie-react
* **Hosting:** GitHub Pages