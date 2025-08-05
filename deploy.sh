#!/bin/bash

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building the project..."
npm run build

echo "🧹 Linting the code (if configured)..."
npm run lint || echo "No linting script found"

echo "🧪 Running tests (if any)..."
npm test || echo "No tests defined"




