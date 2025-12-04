---
id: cloud-integration
title: Cloud Integration
sidebar_position: 5
---

## Github Configuration

### Generating a GitHub Personal Access Token

To enable your Flutter CLI tool to upload and delete releases on GitHub, you'll need to generate a **Personal Access Token (PAT)** with the appropriate permissions. Follow the steps below to create and configure your token.

#### Steps to Generate a GitHub Token

1. **Open the GitHub Token Generation Page**:

   - [Generate GitHub Token](https://github.com/settings/tokens/new).

2. **Set the Token Name**:

   - In the **Note** field, enter a descriptive name for your token, such as `Flutter Release X Token`.

3. **Select Scopes**:

   - Under **Select scopes**, check the following permissions:
     - `repo` (Full control of private repositories)
       - This includes access to public and private repositories, which is required for uploading and deleting releases.

4. **Generate the Token**:

   - Click the **Generate token** button at the bottom of the page.
   - Copy the token immediately, as you won’t be able to see it again.

5. **Set Up Your Project**:

   ```yaml
   github:
     enabled: true
     token: YOUR_GITHUB_TOKEN
   ```

## Google Drive Configuration

To upload files to Google Drive, follow these steps to set up your credentials:

1. **Create a Google Cloud Project**:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.

2. **Enable the Drive API**:

   - In the Google Cloud Console, navigate to **APIs & Services > Library**.
   - Search for "Google Drive API" and enable it.

3. **Create OAuth 2.0 Credentials**:

   - Go to **APIs & Services > Credentials**.
   - Click on **Create Credentials** and select **OAuth Client ID**.
   - Configure the consent screen if prompted.
   - Set the application type to **Desktop App**.
   - Note down the generated **Client ID** and **Client Secret**.

4. **Set Up Your Project**:

   ```yaml
   google_drive:
     enabled: true
     client_id: YOUR_CLIENT_ID
     client_secret: YOUR_CLIENT_SECRET
   ```

   By following these steps, your application will be able to authenticate with Google Drive using the client ID and secret to upload files.

## Diawi Configuration

Diawi is a service for distributing iOS and Android apps via direct download links. To configure Diawi:

1. **Create a Diawi Account**:
   - Go to [Diawi](https://www.diawi.com/) and create an account.

2. **Get Your API Token**:
   - Log in to your Diawi account.
   - Go to [Profile > API](https://dashboard.diawi.com/profile/api).
   - Copy your API token.

3. **Set Up Your Project**:
   ```yaml
   diawi:
     enabled: true
     token: YOUR_DIAWI_TOKEN
     wall_of_apps: false
     find_by_udid: false
   ```

## AWS S3 Configuration

To upload files to AWS S3, you'll need AWS credentials with S3 upload permissions:

1. **Create AWS Credentials**:
   - Go to the [AWS IAM Console](https://console.aws.amazon.com/iam/).
   - Create a new user or use an existing one.
   - Attach a policy with S3 upload permissions (e.g., `AmazonS3FullAccess` or a custom policy).
   - Create an Access Key ID and Secret Access Key.

2. **Create an S3 Bucket**:
   - Go to the [S3 Console](https://console.aws.amazon.com/s3/).
   - Create a new bucket or use an existing one.
   - Note: For public access, configure bucket permissions appropriately.

3. **Set Up Your Project**:
   ```yaml
   aws:
     enabled: true
     access_key_id: YOUR_AWS_ACCESS_KEY_ID
     secret_access_key: YOUR_AWS_SECRET_ACCESS_KEY
     region: us-east-1
     bucket_name: your-bucket-name
     key_prefix: flutter-release-x
   ```

> **Important:** Ensure your S3 bucket has the appropriate permissions. For public downloads, enable public read access. For private files, consider using presigned URLs.

## GitLab Configuration

To upload releases to GitLab:

1. **Generate a Personal Access Token**:
   - Go to [GitLab Profile > Personal Access Tokens](https://gitlab.com/-/user_settings/personal_access_tokens?page=1&state=active&sort=expires_asc).
   - Create a token with `api` scope.
   - Copy the token.

2. **Find Your Project ID**:
   - Go to your GitLab project.
   - The Project ID is shown on the project's main page under the project name, or in Settings > General.

3. **Set Up Your Project**:
   ```yaml
   gitlab:
     enabled: true
     token: YOUR_GITLAB_TOKEN
     project_id: "12345678"
     tag: v0.0.1
     ref: main
     host: https://gitlab.com
   ```

> **Note:** For self-hosted GitLab instances, update the `host` field with your GitLab URL.

## Google Play Store Configuration

To upload apps to Google Play Store:

1. **Create a Service Account**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the Google Play Android Developer API.
   - Create a Service Account and download the JSON key file.

2. **Grant Access in Play Console**:
   - Go to [Google Play Console](https://play.google.com/console/).
   - Navigate to Setup > API access.
   - Link your service account and grant appropriate permissions.

3. **Set Up Your Project**:
   ```yaml
   play_store:
     enabled: true
     service_account_json_path: ./path/to/service-account.json
     package_name: com.example.app
     track: internal
     release_name: "Release v1.0.0"
   ```

## Apple App Store Configuration

To upload apps to App Store Connect:

1. **Generate an API Key**:
   - Go to [App Store Connect](https://appstoreconnect.apple.com/).
   - Navigate to Users and Access > Keys.
   - Create a new API key with App Manager or Admin role.
   - Download the `.p8` key file and note the Key ID and Issuer ID.

2. **Find Your App ID**:
   - In App Store Connect, go to My Apps.
   - Select your app and find the App ID in the App Information section.

3. **Set Up Your Project**:
   ```yaml
   app_store:
     enabled: true
     api_key_path: ./path/to/AuthKey_XXXXXXXXXX.p8
     api_issuer: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     app_id: "1234567890"
     bundle_id: com.example.app
   ```

> **Note:** Full IPA upload via App Store Connect API requires proper JWT signing. For production uploads, consider using Transporter, Fastlane, or Xcode Organizer for more reliable uploads.
