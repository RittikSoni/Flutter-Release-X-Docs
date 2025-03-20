---
sidebar_position: 6
---

# Advanced Pipeline Cookbook

This guide provides various **automation pipelines** for different tech stacks using the **Advanced Pipeline** system. It includes Flutter, React, Node.js, Python, DevOps, and more!

---

## 📌 1. Custom Build Pipelines ✅

The Advanced Pipeline allows running **custom commands** like:

```yaml
pipeline_steps:
  - name: "Check Flutter Version"
    command: "flutter --version"

  - name: "Check Git Status"
    command: "git status"
```

---

## 🔥 2. Flutter Cookbooks

### **2.1 Multi-Platform Build & Deployment**

```yaml
pipeline_steps:
  - name: "Build for Specific Platforms"
    command: frx build --target ios,android
```

```yaml
pipeline_steps:
  - name: Build for All Platforms
    command: frx build -t all # build release for all available platforms.
```

### **2.2 Advanced Notifications**

```yaml
pipeline_steps:
  - name: "Send Slack Notification"
    command: "frx notify --platform slack --message '🚀 New Release Available!'"
```

```yaml
pipeline_steps:
  - name: "Send Slack Notification with emojis symbol"
    command: "frx notify -p slack -m ':rocket: New Release Available!'"
```

---

## 🔥 3. Web Development Cookbooks

### **3.1 Build & Deploy React/Next.js**

```yaml
pipeline_steps:
  - name: "Build React App"
    command: "npm run build"

  - name: "Deploy to Server"
    command: "scp -r build/ user@server:/var/www/html"
```

### **3.2 Automate Git Operations**

```yaml
pipeline_steps:
  - name: "Auto Commit & Push"
    command: "git add . && git commit -m 'Auto release' && git push"
```

### **3.3 Lint & Format Code**

```yaml
pipeline_steps:
  - name: "Run ESLint & Prettier"
    command: "eslint . --fix && prettier --write ."
```

---

## 🔥 4. Mobile Development Cookbooks

### **4.1 Build & Deploy React Native (Android & iOS)**

```yaml
pipeline_steps:
  - name: "Build React Native APK"
    command: "npx react-native run-android --variant=release"
```

### **4.2 Upload to Play Store / App Store**

```yaml
pipeline_steps:
  - name: "Upload Android Release to Play Store"
    command: "fastlane supply --track production --aab app-release.aab"
```

---

## 🔥 5. Node.js & Backend Cookbooks

### **5.1 Start, Build & Deploy a Node.js API**

```yaml
pipeline_steps:
  - name: "Build & Restart API"
    command: "npm run build && pm2 restart my-api"
```

### **5.2 Run Tests & Coverage Reports**

```yaml
pipeline_steps:
  - name: "Run Jest Tests"
    command: "jest --coverage"
```

---

## 🔥 6. Database & DevOps Cookbooks

### **6.1 Auto Migrations & Database Sync**

```yaml
pipeline_steps:
  - name: "Apply Database Migrations"
    command: "npx prisma migrate deploy"
```

### **6.2 Automate Docker Builds & Deployments**

```yaml
pipeline_steps:
  - name: "Build & Start Docker Container"
    command: "docker build -t my-app . && docker-compose up -d"
```

### **6.3 Deploy Apps to AWS, GCP, DigitalOcean, Vercel**

```yaml
pipeline_steps:
  - name: "Deploy to Vercel"
    command: "vercel --prod"
```

---

## 🔥 7. Security & Optimization Cookbooks

### **7.1 Check for Security Vulnerabilities**

```yaml
pipeline_steps:
  - name: "Run Security Audit"
    command: "npm audit --fix"
```

### **7.2 Monitor Performance & Logs**

```yaml
pipeline_steps:
  - name: "Check App Logs"
    command: "pm2 logs my-app"
```

---

## 🚀 Conclusion

This **Advanced Pipeline Cookbook** helps **automate workflows** for **Flutter, Web, Backend, Mobile, DevOps, and more** without extra CI/CD costs!
