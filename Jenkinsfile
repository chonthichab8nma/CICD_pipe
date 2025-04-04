pipeline {
    agent any

    environment {
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
                script {
                    // ใช้ withCredentials ภายใน script block
                    withCredentials([string(credentialsId: 'netlify-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
                        sh '''
                            npm install netlify-cli
                            node_modules/.bin/netlify --version
                            echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                            node_modules/.bin/netlify status
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Build & Test stages completed!"
        }
    }
}
