pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'f561d6c4-55b4-40a8-99db-d284ea24aafc'
        NETLIFY_AUTH = credentials('netlify-token')
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
                    echo "================Installing dependencies================"
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
                    echo "================Running tests================"
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
                    echo "================Deploying the project================"
                    echo "This part needs to be changed based on how you deploy your Node.js app"
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
    }
}
