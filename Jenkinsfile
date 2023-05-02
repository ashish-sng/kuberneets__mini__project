pipeline {
    agent any // Run this pipeline on any available agent
    }
    stages {
        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                // sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the app...'
                // sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
                // sh 'docker build -t my-app .'
                // sh 'docker run -d -p 3000:3000 my-app'
            }
        }
    }
}
