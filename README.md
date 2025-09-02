# 🛒 Jugglers Shop - Customer Frontend

Modern e-commerce frontend built with React, TypeScript, and Tailwind CSS. Designed for Indian consumers with ₹ pricing and local features.

## 🌟 Features

- 🛍️ Product browsing with categories and filters
- 🛒 Shopping cart with quantity management
- ❤️ Wishlist functionality
- 👤 User authentication (login/register)
- 📦 Order tracking and history
- 💳 Cash on Delivery (COD) payment
- 📱 Responsive design for mobile/desktop
- 🇮🇳 Indian localization (₹, addresses, contact)

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Query** for data fetching
- **React Router** for navigation
- **Framer Motion** for animations
- **Lucide React** for icons
- **Shadcn/ui** for components

## 📁 Project Structure

```
jugglers-shop/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── products/       # Product-related components
│   │   └── ui/            # Base UI components (shadcn)
│   ├── contexts/          # React contexts (Auth, Cart)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and API functions
│   ├── pages/             # Page components
│   └── styles/            # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── vercel.json           # Vercel deployment config
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Backend API running (see backend documentation)

### Installation
```bash
# Clone repository
git clone <your-repo-url>
cd jugglers-shop

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables
Create `.env` file:
```
VITE_API_URL=http://127.0.0.1:8000
```

## 📱 Pages & Routes

### Public Routes
- `/` - Homepage with featured products
- `/shop` - Product catalog with filters
- `/product/:id` - Product detail page
- `/about` - About us page
- `/contact` - Contact information
- `/faq` - Frequently asked questions

### Authentication Routes
- `/login` - User login
- `/register` - User registration

### Protected Routes (Login Required)
- `/profile` - User profile management
- `/orders` - Order history
- `/wishlist` - Saved products
- `/cart` - Shopping cart
- `/checkout` - Order placement

## 🎨 Design System

### Colors (Indian Theme)
- Primary: Blue gradient
- Currency: ₹ (Indian Rupee)
- Success: Green for confirmations
- Warning: Orange for alerts
- Error: Red for errors

### Typography
- Font: Inter (system fonts fallback)
- Headings: Bold, large sizes
- Body: Regular weight, readable sizes

### Components
- Responsive design (mobile-first)
- Touch-friendly buttons
- Loading states
- Error boundaries

## 🔧 API Integration

### Backend Connection
```typescript
// lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Authentication endpoints
POST /api/auth/login/
POST /api/auth/register/

// Product endpoints
GET /api/products/
GET /api/products/{id}/

// Order endpoints
GET /api/orders/
POST /api/orders/create/

// Wishlist endpoints
GET /api/wishlist/
POST /api/wishlist/
DELETE /api/wishlist/
```

### State Management
- **React Query** for server state
- **Context API** for global state (Auth, Cart)
- **Local Storage** for persistence

## 🌐 Deployment (Vercel)

### Automatic Deployment
1. Push to GitHub repository
2. Connect to Vercel
3. Set environment variables
4. Deploy automatically on push

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Environment Variables (Production)
```
VITE_API_URL=https://your-backend-url.onrender.com
```

### Vercel Configuration
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📊 Performance Optimization

### Code Splitting
- Route-based splitting
- Component lazy loading
- Dynamic imports

### Image Optimization
- Lazy loading images
- WebP format support
- Responsive images

### Bundle Optimization
- Tree shaking
- Minification
- Gzip compression

## 🔒 Security Features

### Authentication
- JWT token storage
- Automatic token refresh
- Protected route guards

### Data Validation
- Form validation
- Input sanitization
- XSS protection

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Linting
```bash
npm run lint
```

## 📱 Mobile Responsiveness

### Breakpoints
- Mobile: 0-768px
- Tablet: 768-1024px
- Desktop: 1024px+

### Touch Interactions
- Swipe gestures
- Touch-friendly buttons
- Mobile navigation

## 🎯 Indian Localization

### Currency
- ₹ (Indian Rupee) throughout
- Indian number formatting
- Price range: ₹500-1000

### Contact Information
- Phone: +91 7415159952
- Email: jugglers.shop@gmail.com
- Address: Freeganj, Ujjain, MP 456010

### Features
- PIN code validation (6 digits)
- Indian address format
- Cash on Delivery (COD)
- GST calculation

## 🚀 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📦 Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0
- typescript: ^5.0.2

### Routing & State
- react-router-dom: ^6.8.1
- @tanstack/react-query: ^4.28.0

### UI & Styling
- tailwindcss: ^3.3.0
- framer-motion: ^10.12.0
- lucide-react: ^0.263.1

### Forms & Validation
- react-hook-form: ^7.43.9
- zod: ^3.21.4

## 🐛 Troubleshooting

### Common Issues

#### API Connection
```bash
# Check API URL
echo $VITE_API_URL

# Test API endpoint
curl $VITE_API_URL/api/products/
```

#### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check TypeScript
npm run type-check
```

#### Styling Issues
```bash
# Rebuild Tailwind
npm run build:css
```

## 📞 Support

- **Developer**: Siddharth Nigam
- **Email**: jugglers.shop@gmail.com
- **Phone**: +91 7415159952
- **GitHub**: Create an issue in the repository

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ in India 🇮🇳**