pipeline {
<<<<<<< HEAD
     /*
     agent {  
        docker {
            image 'node' 
            args '-p 3000:3000' 
        }  
    }
    */
    agent any
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                bat 'npm install' 
                
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
                bat "npm test"
            }
        }
         
         stage('Deploy') { 
            steps {
                echo "Deploying..."
=======
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
>>>>>>> a8ba80c18b0a59c85a9eaa814809298579cc42e2
            }
        }
    }
}
