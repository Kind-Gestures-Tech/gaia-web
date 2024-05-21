# Gaia Web - Kind Health

Gaia Web is an application designed to facilitate interactions between patients, doctors, and system administrators using Large Language Models (LLMs). This application enables seamless setup configurations for different types of LLMs, and it tracks patient and bot conversations to enhance healthcare delivery.

## Tech Stack
- **Frontend**: Next.js, tRPC, TypeScript
- **Backend**: Flask API
- **Database**: Cloud SQL (PostgreSQL)
- **Authentication**: Google OAuth
- **Speech and Translation**: Deepgram STT, ElevenLabs TTS, Google Translate

## Features
- Patient and Doctor Interaction: Facilitates conversations between patients and doctors.
- System Admin Panel: Allows admins to manage configurations and monitor system performance.
- Language Model Integration: Supports various LLM configurations.
- Conversation Tracing: Tracks and logs conversations for future reference.

## Prerequisites
- Node.js (version 14.x or higher)
- PostgreSQL (Cloud SQL)
- Docker (optional, for containerized deployment)

## Installation

### Local Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd gaia-web
   ```

2. **Install Node.js Dependencies**
   ```bash
   npm install
   ```

3. **Build the Project**
   ```bash
   npm run build
   ```

4. **Set Up Environment Variables**
   Copy the example environment variables file and edit it with your configuration:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your preferred settings, such as database connection details and API keys.

5. **Run the Server**
   ```bash
   npm run start
   ```

6. **Run the Development Server**
   For development purposes, you can run the development server:
   ```bash
   npm run dev
   ```

### Docker Installation

1. **Build the Docker Image**
   ```bash
   docker build -t gaia-web .
   ```

2. **Run the Docker Container**
   Ensure that the `.env` file is correctly configured, then run the Docker container:
   ```bash
   docker run -p 3000:3000 --env-file .env gaia-web
   ```

### Database Setup

1. **Create Database Schema**
   Use Prisma to migrate your database schema:
   ```bash
   npx prisma migrate deploy
   ```

2. **Seed the Database**
   (Optional) Seed the database with initial data if needed:
   ```bash
   npx prisma db seed
   ```

### OAuth Configuration

1. **Google OAuth Setup**
   - Go to the [Google Developer Console](https://console.developers.google.com/).
   - Create a new project.
   - Set up OAuth consent screen.
   - Create OAuth 2.0 credentials and obtain the Client ID and Client Secret.
   - Add these credentials to your `.env` file:
     ```plaintext
     GOOGLE_CLIENT_ID=<your-client-id>
     GOOGLE_CLIENT_SECRET=<your-client-secret>
     ```

### Speech and Translation API Configuration

1. **Deepgram STT Setup**
   - Sign up on [Deepgram](https://www.deepgram.com/) and obtain an API key.
   - Add the API key to your `.env` file:
     ```plaintext
     DEEPGRAM_API_KEY=<your-api-key>
     ```

2. **ElevenLabs TTS Setup**
   - Sign up on [ElevenLabs](https://elevenlabs.io/) and obtain an API key.
   - Add the API key to your `.env` file:
     ```plaintext
     ELEVENLABS_API_KEY=<your-api-key>
     ```

3. **Google Translate API Setup**
   - Use the [Google Cloud Console](https://console.cloud.google.com/) to set up the Translate API and obtain credentials.
   - Add the credentials to your `.env` file:
     ```plaintext
     GOOGLE_TRANSLATE_API_KEY=<your-api-key>
     ```

## Running Tests
To run tests, use the following command:
```bash
npm test
```

## Deployment
For deployment, ensure that all environment variables are set appropriately for your production environment. You can use platforms like Vercel, AWS, or any other cloud provider.

## Contributing
We welcome contributions! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Thanks to the Next.js, tRPC, Prisma, and TypeScript communities for their excellent tools and documentation.
- Special thanks to the providers of Deepgram, ElevenLabs, and Google for their robust APIs.

## Contact
For more information, please contact [info@kindhealth.tech].
