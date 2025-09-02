# 🚀 Deployment Guide - Jugglers Shop Frontend

Step-by-step guide to deploy the customer frontend on Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Backend API deployed and running

## 🔧 Pre-Deployment Setup

### 1. Environment Configuration
Create `.env` file:
```bash
VITE_API_URL=https://your-backend-url.onrender.com
```

### 2. Build Test
```bash
# Test local build
npm run build
npm run preview
```

### 3. Update API URLs
Ensure all API calls use the environment variable:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
```

## 🌐 Vercel Deployment

### Method 1: GitHub Integration (Recommended)

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub
4. Select your repository
5. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (if deploying from root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### Step 3: Environment Variables
In Vercel dashboard → Settings → Environment Variables:
```
Name: VITE_API_URL
Value: https://jugglers-backend.onrender.com
Environment: Production, Preview, Development
```

#### Step 4: Deploy
- Click "Deploy"
- Wait for build to complete
- Get your live URL: `https://your-project.vercel.app`

### Method 2: Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Login and Deploy
```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔗 Custom Domain (Optional)

### Step 1: Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add your domain: `jugglers.shop`
3. Add www subdomain: `www.jugglers.shop`

### Step 2: DNS Configuration
Update your domain's DNS settings:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: SSL Certificate
- Vercel automatically provides SSL
- Certificate will be issued within minutes
- Force HTTPS redirect is enabled by default

## ⚙️ Vercel Configuration

### vercel.json
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, PUT, DELETE, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization" }
      ]
    }
  ]
}
```

### Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

## 🔒 Security Configuration

### Environment Variables
- Never commit `.env` files
- Use Vercel's environment variables
- Different values for different environments

### CORS Setup
Ensure backend allows your domain:
```python
# Django settings.py
CORS_ALLOWED_ORIGINS = [
    "https://jugglers.shop",
    "https://www.jugglers.shop", 
    "https://your-project.vercel.app",
]
```

## 📊 Performance Optimization

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    }
  }
})
```

### Image Optimization
- Use WebP format
- Implement lazy loading
- Optimize image sizes

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check build locally
npm run build

# Check TypeScript errors
npm run type-check

# Clear cache
rm -rf node_modules package-lock.json
npm install
```

#### API Connection Issues
```bash
# Verify environment variable
echo $VITE_API_URL

# Test API endpoint
curl https://your-backend-url.onrender.com/api/products/

# Check CORS settings
```

#### Routing Issues
- Ensure `vercel.json` has correct rewrites
- Check React Router configuration
- Verify all routes are properly defined

### Error Solutions

#### 404 on Refresh
Add to `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Environment Variables Not Working
- Check variable names (must start with `VITE_`)
- Verify in Vercel dashboard
- Redeploy after adding variables

#### Slow Loading
- Enable gzip compression
- Optimize bundle size
- Use code splitting

## 📈 Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// main.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Performance Monitoring
- Core Web Vitals
- Real User Monitoring
- Error tracking

## 🔄 CI/CD Pipeline

### Automatic Deployments
- Push to `main` → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployments

### Branch Protection
```bash
# Production branch
main → https://jugglers.shop

# Staging branch  
staging → https://staging-jugglers.vercel.app

# Feature branches
feature/* → https://feature-branch-hash.vercel.app
```

## 📱 Mobile Testing

### Responsive Testing
- Test on different screen sizes
- Verify touch interactions
- Check mobile navigation

### Performance Testing
- Lighthouse scores
- Mobile page speed
- Core Web Vitals

## 🎯 Post-Deployment Checklist

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] Product browsing works
- [ ] Search functionality
- [ ] User authentication
- [ ] Shopping cart operations
- [ ] Order placement
- [ ] Mobile responsiveness
- [ ] API connections

### Performance Testing
- [ ] Page load speed < 3s
- [ ] Lighthouse score > 90
- [ ] Images load properly
- [ ] No console errors

### SEO Testing
- [ ] Meta tags present
- [ ] Favicon loads
- [ ] Sitemap accessible
- [ ] Social media previews

## 🌍 Production URLs

After deployment:
- **Production**: https://jugglers.shop
- **Vercel URL**: https://jugglers-shop.vercel.app
- **Preview**: https://git-branch-name.vercel.app

## 📞 Support

For deployment issues:
- **Developer**: Siddharth Nigam
- **Email**: jugglers.shop@gmail.com
- **Phone**: +91 7415159952

---

**Happy Deploying! 🚀**