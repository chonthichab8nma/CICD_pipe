pipeline {
    agent any

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build' 
            }
        }
        stage('Test') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo 'Deploying to Netlify...'
                script {
                    def netlifyKeys = readProperties file: 'key.txt'
                    sh "netlify deploy --prod --site ${netlifyKeys.NETLIFY_SITE_ID} --auth ${netlifyKeys.NETLIFY_AUTH_TOKEN}"
                }
            }
        }
        stage('Post deploy') {
            steps {
                echo 'Post deploy...'
                echo 'Deployment successful!'
            }
        }
    }
}