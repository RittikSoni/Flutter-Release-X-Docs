---
sidebar_position: 6
---

# Advanced Pipeline Cookbook

This guide provides various **automation pipelines** for different tech stacks using the **Advanced Pipeline** system. It includes Flutter, React, Node.js, Python, DevOps, and more!

---

## 📌 1. Custom Build Pipelines ✅

The Advanced Pipeline allows running **custom commands** like:

```yaml
pipeline:
  - name: "Check Flutter Version"
    run: "flutter --version"

  - name: "Check Git Status"
    run: "git status"
```

---

## 🔥 2. Flutter Cookbooks

### **2.1 Multi-Platform Build & Deployment**

```yaml
pipeline:
  - name: "Build for All Platforms"
    run: "frx build --target ios,android,web,macos,windows,linux"
```

### **2.2 Auto Versioning & Tagging**

```yaml
pipeline:
  - name: "Bump Minor Version"
    run: "frx version bump --type minor"
```

### **2.3 Advanced Notifications**

:::info
This `frx` feature is Coming Soon!
:::

```yaml
pipeline:
  - name: "Send Slack Notification"
    run: "frx notify --platform slack --message '🚀 New Release Available!'"
```

---

## 🔥 3. Web Development Cookbooks

### **3.1 Build & Deploy React/Next.js**

```yaml
pipeline:
  - name: "Build React App"
    run: "npm run build"

  - name: "Deploy to Server"
    run: "scp -r build/ user@server:/var/www/html"
```

### **3.2 Automate Git Operations**

```yaml
pipeline:
  - name: "Auto Commit & Push"
    run: "git add . && git commit -m 'Auto release' && git push"
```

### **3.3 Lint & Format Code**

```yaml
pipeline:
  - name: "Run ESLint & Prettier"
    run: "eslint . --fix && prettier --write ."
```

---

## 🔥 4. Mobile Development Cookbooks

### **4.1 Build & Deploy React Native (Android & iOS)**

```yaml
pipeline:
  - name: "Build React Native APK"
    run: "npx react-native run-android --variant=release"
```

### **4.2 Upload to Play Store / App Store**

```yaml
pipeline:
  - name: "Upload Android Release to Play Store"
    run: "fastlane supply --track production --aab app-release.aab"
```

---

## 🔥 5. Node.js & Backend Cookbooks

### **5.1 Start, Build & Deploy a Node.js API**

```yaml
pipeline:
  - name: "Build & Restart API"
    run: "npm run build && pm2 restart my-api"
```

### **5.2 Run Tests & Coverage Reports**

```yaml
pipeline:
  - name: "Run Jest Tests"
    run: "jest --coverage"
```

---

## 🔥 6. Database & DevOps Cookbooks

### **6.1 Auto Migrations & Database Sync**

```yaml
pipeline:
  - name: "Apply Database Migrations"
    run: "npx prisma migrate deploy"
```

### **6.2 Automate Docker Builds & Deployments**

```yaml
pipeline:
  - name: "Build & Start Docker Container"
    run: "docker build -t my-app . && docker-compose up -d"
```

### **6.3 Deploy Apps to AWS, GCP, DigitalOcean, Vercel**

```yaml
pipeline:
  - name: "Deploy to Vercel"
    run: "vercel --prod"
```

---

## 🔥 7. Security & Optimization Cookbooks

### **7.1 Check for Security Vulnerabilities**

```yaml
pipeline:
  - name: "Run Security Audit"
    run: "npm audit --fix"
```

### **7.2 Monitor Performance & Logs**

```yaml
pipeline:
  - name: "Check App Logs"
    run: "pm2 logs my-app"
```

---

## 🚀 Conclusion

This **Advanced Pipeline Cookbook** helps **automate workflows** for **Flutter, Web, Backend, Mobile, DevOps, and more** without extra CI/CD costs!
