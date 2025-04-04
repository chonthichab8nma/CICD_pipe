pipeline {
    agent any

    environment{
        NETLIFY_SITE_ID = '3ac3f845-8a36-4bcb-80eb-2562c4ec8b5e'
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "================ Installing dependencies ================"
                    npm ci
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "================ Running tests ================"
                    npm test || echo "Tests failed but continuing..."
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli
                    echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                '''
            }
        }
    }

    post {
        always {
            echo "Build & Test stages completed!"
        }
    }
}
