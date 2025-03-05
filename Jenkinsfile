pipeline {
    agent {
        docker {
            image 'maven:3.8.5-openjdk-11'
            args '-v /root/.m2:/root/.m2'
        }
    }

    environment {
        IMAGE_NAME = 'hello-backend'
        CONTAINER_NAME = 'hello-container'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/hello-world-app.git'
            }
        }

        stage('Build and Test') {
            steps {
                sh 'mvn clean test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }

        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Backend') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker run -d --name $CONTAINER_NAME -p 8080:8080 $IMAGE_NAME
                '''
            }
        }
    }

    post {
        always {
            sh 'docker ps -a'
        }
    }
}
