FROM postgres:latest

WORKDIR /postgres

EXPOSE 5432
CMD ["postgres"]