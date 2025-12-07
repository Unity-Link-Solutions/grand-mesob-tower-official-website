# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Development Workflow

### Adding New Content

1. **Images/Assets**: Place in `/public/` folder
2. **Components**: Add to `/app/components/`
3. **Pages**: Create new folders in `/app/`
4. **Styles**: Modify `/app/globals.css` for global changes

### Code Style

- **TypeScript**: Strictly typed components
- **React**: Functional components with hooks
- **CSS**: Tailwind utility classes preferred
- **Naming**: PascalCase for components, camelCase for functions

### Design Tokens

Key design values are defined in `globals.css`:

```css
--color-black: #0a0a0a
--color-gold: #c8a882
--spacing-lg: 4rem
```

Use these CSS variables or Tailwind's extended theme.

## Component Patterns

### Page Structure

```tsx
'use client'; // If using client-side features

import { PatternComponent } from '../components/EthiopianPatterns';
import ParallaxSection from '../components/ParallaxSection';

export default function YourPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Content */}
      </section>
      
      {/* Other sections */}
    </div>
  );
}
```

### Using Parallax

```tsx
<ParallaxSection speed={0.3}>
  <div>Content that moves at 0.3x scroll speed</div>
</ParallaxSection>
```

### Using Patterns

```tsx
import { MesobPattern } from '../components/EthiopianPatterns';

<div className="absolute inset-0 text-white opacity-5">
  <MesobPattern opacity={0.08} />
</div>
```

## Performance Optimization

- **Images**: Use Next.js `<Image>` component with proper sizing
- **Fonts**: Already optimized with `next/font/google`
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Consider for heavy components below fold

## Accessibility

- Maintain semantic HTML structure
- Ensure color contrast ratios meet WCAG AA standards
- Add ARIA labels where needed
- Test keyboard navigation
- Test with screen readers

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Troubleshooting

### Build Errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npx tsc --noEmit`

### Styling Issues

1. Check Tailwind CSS compilation
2. Verify CSS variables in `globals.css`
3. Clear browser cache
4. Check for conflicting styles

### Performance Issues

1. Use Next.js built-in profiler
2. Check for large image files
3. Review unnecessary client components
4. Consider code splitting

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Forms validate and submit
- [ ] Responsive on mobile, tablet, desktop
- [ ] Parallax effects smooth and performant
- [ ] Ethiopian patterns display correctly
- [ ] Links open correctly
- [ ] Contact forms work

### Future Automated Testing

Consider adding:
- Jest for unit tests
- Cypress or Playwright for E2E tests
- Lighthouse for performance monitoring

## Deployment Checklist

- [ ] Update environment variables
- [ ] Test production build locally
- [ ] Check all links and forms
- [ ] Verify SEO metadata
- [ ] Test on multiple devices
- [ ] Check analytics integration
- [ ] Verify error tracking
- [ ] Update README if needed

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: descriptive message"

# Push to remote
git push origin feature/your-feature

# Create pull request on GitHub
```

### Commit Message Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

## Future Enhancements

### Recommended Additions

1. **CMS Integration**: Contentful or Strapi for content management
2. **Email Service**: SendGrid or Mailgun for contact forms
3. **Analytics**: Google Analytics 4 or Plausible
4. **Search**: Algolia for site search
5. **Multilingual**: i18n support for Amharic
6. **Blog**: News and updates section
7. **Virtual Tour**: 3D tower visualization
8. **Image Gallery**: High-quality renders and photos
9. **Video**: Promotional video integration
10. **Newsletter**: Email subscription system

### API Routes (Future)

Create API routes in `/app/api/` for:
- Contact form submission
- Newsletter signup
- Investment inquiry handling
- File uploads (brochures, etc.)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/)

## Support

For development questions or issues:
- Check existing documentation
- Review Next.js and Tailwind docs
- Contact the development team

---

Happy coding! 🇪🇹

