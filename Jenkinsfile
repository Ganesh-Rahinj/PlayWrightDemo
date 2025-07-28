pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Ensure NodeJS is configured in Jenkins Global Tools
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ganesh-Rahinj/PlayWrightDemo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                echo Installing dependencies...
                npm install
                '''
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat '''
                echo Installing Playwright browsers...
                npx playwright install --with-deps
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                echo Running Playwright tests...
                npx playwright test --reporter=html
                '''
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report', 
                    reportFiles: 'index.html', 
                    reportName: 'Playwright Test Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        success {
            echo 'Build and tests completed successfully!'
        }
        failure {
            echo 'Build failed! Check Playwright test report.'
        }
    }
}
