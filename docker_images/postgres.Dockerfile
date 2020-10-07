FROM postgres:latest

WORKDIR /postgres

EXPOSE 5432
CMD ["psql", "run", "-D", "/var/lib/postgresql/9.3/main"]
