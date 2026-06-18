# Image Python officielle
FROM python:3.12-slim

# Empêcher la création des fichiers .pyc
ENV PYTHONDONTWRITEBYTECODE=1

# Afficher les logs Python directement
ENV PYTHONUNBUFFERED=1

# Dossier de travail dans le conteneur
WORKDIR /app

# Installation des dépendances
COPY requirements.txt .

RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copier le code du projet
COPY . .

# Port Django
EXPOSE 8000
