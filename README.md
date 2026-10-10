# EVA-NAT

Application web d'analyse et de préparation des restitutions des évaluations nationales (DEPP).

## Fonctions
- Import des effectifs PRONOTE, des résultats DEPP et des contacts responsables depuis Siècle.
- Vérification des absents, statistiques par niveau, classe, sexe et établissement d'origine.
- Consultation des résultats, export PDF et diaporama PPTX.
- Traitement des fiches PDF et préparation du publipostage.

## Démarrage
Ouvrir `index.html` dans un navigateur ou activer GitHub Pages (branche `main`, dossier `/`).

## Sécurité et limites
Le dépôt est public : **ne jamais y déposer de fichiers élèves, de données de responsables, de sessions JSON ou d'archives de publipostage**. Les dépendances JavaScript externes (CDN) doivent être auditées et idéalement auto-hébergées avant usage avec des données nominatives. Le rapprochement des identités et les exports PDF nécessitent une recette complète sur des données fictives avant utilisation réelle. La mise en ligne sur GitHub Pages ne protège pas la page par authentification.

L'application d'analyse EVA-NAT est distincte de la chaîne SMTP du dépôt `split-eval`.
