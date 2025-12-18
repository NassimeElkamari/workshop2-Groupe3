# 🛡️ Workshop 2 – Analyse SAST avec SonarQube & Semgrep

## 🎯 Objectif du Workshop
Ce workshop a pour objectif de mettre en place une **analyse de sécurité statique (SAST)** sur une application **Node.js** en utilisant :
- **Jenkins** pour l’automatisation CI/CD
- **SonarQube** pour l’analyse de qualité et de sécurité du code
- **Semgrep** pour la détection des failles de sécurité (secrets exposés, mauvaises pratiques)

---

## 🧩 Architecture du projet

- Application **Node.js** exposant une API REST `/tasks`
- Pipeline Jenkins automatisé
- SonarQube exécuté dans un **conteneur Docker**
- Semgrep utilisé comme **agent Jenkins**

---

## 🚀 Étape 1 – Création de l’application Node.js

Une application Node.js simple est créée, exposant une API `/tasks`.

![API Tasks](https://github.com/user-attachments/assets/41c24ea5-590f-4c8b-a078-6de56ce3d962)

---

## 🔧 Étape 2 – Création du Jenkinsfile

Un fichier **Jenkinsfile** est ajouté à la racine du projet contenant les étapes suivantes :

1. **Checkout** du code depuis GitHub  
2. **Installation des dépendances**
3. **Exécution des tests**
4. **Analyse du code avec SonarQube** (SonarQube lancé via Docker)

![Jenkinsfile](https://github.com/user-attachments/assets/0943cbf8-f46a-4d4d-8398-84438a4b2fae)

---

## 🔗 Étape 3 – Création du pipeline Jenkins

Un pipeline Jenkins est créé et relié au dépôt GitHub du projet.

![Pipeline Jenkins](https://github.com/user-attachments/assets/e18193cf-ee52-4c43-a7bf-180b88d62c2e)

---

## ▶️ Étape 4 – Exécution du pipeline

Le pipeline Jenkins est lancé avec succès, toutes les étapes du Jenkinsfile sont exécutées correctement.

![Pipeline Success](https://github.com/user-attachments/assets/150f12f6-f510-444f-b962-74df5eb25380)

---

## 🔍 Étape 5 – Création du projet SonarQube

Un projet est créé sur la plateforme **SonarQube** afin d’analyser le code source.

![Sonar Project](https://github.com/user-attachments/assets/52aedae5-2563-44c7-a969-e6011c10da21)

---

## ❌ Étape 6 – Échec de l’analyse SonarQube

L’analyse SonarQube retourne un statut **Failed** car des issues ont été volontairement introduites dans le code à des fins de test.

![Sonar Failed](https://github.com/user-attachments/assets/a972c7c7-8a90-4b14-9323-af768f45ca37)

### 📋 Liste des issues détectées
![Issues List](https://github.com/user-attachments/assets/28907661-106f-4a69-b3d0-5e3c41231b2c)

---

## 🚦 Étape 7 – Création d’un Quality Gate personnalisé

Un **Quality Gate** personnalisé est défini avec la règle suivante :
- **Coverage < 60 % → Échec**

![Quality Gate](https://github.com/user-attachments/assets/de94894e-8941-41ce-b3ce-b8ec9285f84f)

---

## ✅ Étape 8 – Correction du code

Les erreurs détectées sont corrigées, puis le pipeline Jenkins est relancé.

- Résultat : **SonarQube = Passed**
- Aucune issue restante

![Sonar Passed](https://github.com/user-attachments/assets/cfa3a453-ea77-4633-a16e-08689fdb406c)

![No Issues](https://github.com/user-attachments/assets/4284780f-8c5f-4a0b-ba2f-0ece8488ce7a)

---

## 🔐 Étape 9 – Intégration de Semgrep

Après l’installation de **Semgrep** comme agent Jenkins, une nouvelle étape est ajoutée au pipeline :

**Pipeline final :**
1. Checkout  
2. Installation des dépendances  
3. Lancement des tests  
4. Analyse du code avec **Semgrep**  
5. Analyse du code avec **SonarQube**

![Pipeline Semgrep](https://github.com/user-attachments/assets/08a21fe5-c20a-467b-866a-a09a7c411937)

---

## ⚠️ Étape 10 – Détection d’un secret exposé

Semgrep échoue lors de l’analyse car le **sonar-token est exposé directement dans le Jenkinsfile**.

![Semgrep Failed](https://github.com/user-attachments/assets/2fae1f90-5ad9-48fb-93b0-a62483f30cd7)

---

## 🔑 Étape 11 – Sécurisation avec Jenkins Credentials

Un **credential Jenkins** est créé pour stocker le `sonar-token` de manière sécurisée.

![Credential](https://github.com/user-attachments/assets/9508e3b8-02f8-46fe-bce7-be11dc0070f3)

Le credential est ensuite utilisé dans l’étape SonarQube du Jenkinsfile.

![Credential Usage](https://github.com/user-attachments/assets/47039e58-35a4-434e-bc10-ba20e1d1f17f)

---

## 🎉 Étape 12 – Pipeline sécurisé avec succès

Le pipeline Jenkins est relancé et se termine avec un statut **Success**.

✔️ Aucun secret exposé  
✔️ Aucune vulnérabilité détectée  
✔️ Qualité du code validée  

![Final Success](https://github.com/user-attachments/assets/c0160515-0041-4d4a-8ed0-97fd7312b5c9)

---

## 🏁 Conclusion

Ce workshop démontre l’importance de :
- L’automatisation CI/CD
- L’analyse SAST avec **SonarQube** et **Semgrep**
- La gestion sécurisée des secrets via **Jenkins Credentials**

👉 Résultat : **un pipeline DevSecOps robuste et sécurisé** 🔒🚀
