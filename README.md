# Gaia Web - Kind Health
This is a Patient, Doctors and System Admin LLM based application that makes life easier, this app does basic things , like setting up configurations for different types of LLM , traces patient and bot conversation.

## Tech Stack
- Next.js, tRPC, Prisma, Typescript
- Flask Backend API
- Database on Cloud SQL (PostgreSQL)
- Google OAuth
- Deepgram STT & ElevenLabs TTS
- Google Translate

## Installation

1. - Clone the repo to your local system
   ```git
   git clone
   cd gaia-web
   ```

2. Create a node environment and activate it
   ```bash:
    npm i
    ```
3. Install dependencies
    ```bash:
    npm run build

    cp .env.example .env
    ```

4. Run server
   ```bash:
   npm run start
   ```

5. Then, run the development server:
    ```bash:
   npm run dev
   ```

## Installation using Docker
1. Build the Docker image using the following command:
    ```bash:
    docker build -t gaia-web .
    ```

2. Run the Docker container using the following command:
    ```bash:
    docker run -p 3000:3000 -e .env gaia
    ```
