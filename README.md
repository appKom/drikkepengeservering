# Ølcoins Backend

Dette er backenden for Ølcoins, en nokså sjelden men ettertraktet valuta som kan brukes når man driver drank på kontoret. 

### Sett opp utviklingsmiljø

Sørg for at `docker` og `docker-compose` er innstallert.

Deretter må det lages en .env fil i root-mappa hvor flere ting spesifiseres

Noen verdier må settes opp selv og noen har foreslåtte verdier

```
NODE_HOSTNAME=127.0.0.1
NODE_POST=8080

PG_PASSWORD=<Passord for database>
PGA_EMAIL=<Email for pgAdmin login>
PGA_PASSWORD=<Passord for pgAdmin login>
```

Bygg docker-bildene og start docker-compose med denne kommandoen:

```Bash
docker-compose up --build
```

### Tilgang

Etter at docker-compose kjører kan man få tak i apien på http://localhost:443/api/v1/ og database-frontenden på https://localhost:8081