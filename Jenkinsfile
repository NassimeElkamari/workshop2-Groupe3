pipeline {
    agent any

    environment {
        SONAR_HOST_URL = 'http://sonarqube-server:9000'
        SONAR_TOKEN    = 'sqa_73817cd26adf945445f16410d6c530a7cad42d2b'   // ❗better to use Jenkins credentials later
        SONAR_NETWORK  = 'sonarqube_sonarnet'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/NassimeElkamari/nodejs-sonar.git'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests with coverage') {
            steps {
                // NODE_ENV=test so index.js doesn’t start the server
                bat 'set NODE_ENV=test&& npm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    bat """
docker run --rm -e SONAR_HOST_URL="${SONAR_HOST_URL}" -e SONAR_TOKEN="${SONAR_TOKEN}" -v "%CD%:/usr/src" --network ${SONAR_NETWORK} sonarsource/sonar-scanner-cli
"""
                }
            }
        }
    }
}
