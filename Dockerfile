# Step 1: Build React App
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the app and build
COPY . .  
RUN npm run build  

# Step 2: Use Nginx to Serve Static Files
FROM nginx:alpine

# Copy the built React files to Nginx's default public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
