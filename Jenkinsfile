pipeline {
    agent any

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
    }

    post {
        always {
            echo "Build & Test stages completed!"
        }
    }
}
