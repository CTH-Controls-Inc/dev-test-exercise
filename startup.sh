#!/bin/bash

# Start the backend
cd /app/server
npm start &

# Start the frontend
cd /app/client
npm start
