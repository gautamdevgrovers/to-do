pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                // Cloning the repository
                git branch: 'main',
                    url: 'https://github.com/gautamdevgrovers/to-do.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the Docker image on Jenkins host
                    sh 'docker-compose build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy the container on Jenkins host
                    sh 'docker-compose up'
                }
            }
        }
    }
}
