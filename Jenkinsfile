pipeline {
    agent none

    stages {
        stage('Build Docker Image') {
            agent {
                docker {
                    args '-t my-nodejs-app:latest .'
                    dockerfile true
                }
            }
            steps {
                echo 'Building Docker image...'
                script {
                    docker.build('my-nodejs-app:latest')
                }
            }
        }
        stage('Deploy') {
            agent any
            steps {
                echo 'Deploying Docker container...'
                script {
                    withCredentials([string(credentialsId: 'NETLIFY_SITE_ID', variable: 'NETLIFY_SITE_ID'), string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_AUTH_TOKEN')]) {
                        sh "npm install -g netlify-cli"
                        sh "netlify deploy --prod --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN"
                    }
                }
            }
        }
        stage('Post deploy') {
            agent any
            steps {
                echo 'Post deploy...'
                echo 'Deployment successful!'
            }
        }
    }
}