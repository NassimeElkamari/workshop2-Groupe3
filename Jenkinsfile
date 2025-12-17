pipeline {
    agent any

    environment {
        SONAR_HOST_URL = 'http://sonarqube-server:9000'
        SONAR_TOKEN    = 'sqa_10af5d35417bce83a9dd2f997e782872df462e26'  
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
                bat 'set NODE_ENV=test&& npm test'
            }
        }

        stage('Semgrep SAST') {
            steps {
                bat '''
                chcp 65001 >NUL
                set PYTHONUTF8=1
                set PYTHONIOENCODING=utf-8
                semgrep --config auto --severity ERROR --error .
                '''
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
