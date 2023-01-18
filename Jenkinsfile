pipeline {

  environment {
    dockerimagename = "bilelgtifi/fullstack-app"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bilelgtifi/dev-ops.git']]])

      }
    }

    stage('Build image') {
      steps{
        script {
           sh 'docker build -f /backend/Dockerfile -t bilelgtifi/server-app .'
          sh 'docker build -f /backend/Dockerfile -t bilelgtifi/client-app .'
        
        }
      }
    }
    stage('Push image to dockerhub') {
            steps {
                withCredentials([string(credentialsId: 'password-dockerhub', variable: 'pass')]) {
                    sh 'docker login -u bilelgtifi -p ${pass}'
               		  sh 'docker push bilelgtifi/server-app'
                    sh 'docker push bilelgtifi/client-app'
            }
        }
    }
      stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deploymentservice.yml", kubeconfigId: "kubernetes")
        }
      }
    }
    
  }

}
