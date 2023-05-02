pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t my-app .'
                sh 'docker run -d -p 3000:3000 my-app'
            }
        }
    }
}
