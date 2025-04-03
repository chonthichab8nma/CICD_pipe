pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Building with Docker...'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Testing with Docker...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Deploying with Docker...'
                script {
                    withCredentials([string(credentialsId: 'NETLIFY_SITE_ID', variable: 'NETLIFY_SITE_ID'), string(credentialsId: 'NETLIFY_AUTH_TOKEN', variable: 'NETLIFY_AUTH_TOKEN')]) {
                        sh "npm install -g netlify-cli"
                        sh "netlify deploy --prod --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN"
                    }
                }
            }
        }
        stage('Post deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Post deploy with Docker...'
                echo 'Deployment successful!'
            }
        }
    }
}