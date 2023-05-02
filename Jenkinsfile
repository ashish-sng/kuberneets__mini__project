pipeline {
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
            }
        }
    }
}