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
    post {
        success {
            emailext(
                subject: "Build Successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                <p>Hi Team,</p>
                <p>The Jenkins pipeline for the project <b>${env.JOB_NAME}</b> has completed successfully.</p>
                <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                <p><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                """,
                to: 'pankaj.pundir@unthinkable.co '
            )
        }
        failure {
            emailext(
                subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                <p>Hi Team,</p>
                <p>The Jenkins pipeline for the project <b>${env.JOB_NAME}</b> has failed.</p>
                <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                <p><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                """,
                to: 'pankaj.pundir@unthinkable.co '
            )
        }
    }
}

