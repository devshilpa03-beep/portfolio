import {Component, computed, inject, signal, Signal, ElementRef, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ThemeService} from '../services/theme.service';
import { ContactComponent } from '../contact/contact.component';


// Strongly-typed domain models for projects, experience and skills.
export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  demo: string;
  repo: string;
  image: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export interface Skills {
  frontend: string[];
  state: string[];
  tools: string[];
}

/**
 * `PortfolioComponent`
 * - Standalone Angular 21 component using Signals for local reactive state.
 * - Uses Bootstrap 5 layout and utilities for a responsive bento-grid layout.
 * - Demonstrates usage of `NgOptimizedImage` for optimized imagery.
 *
 * Note: This is the main dashboard / bento-grid modular view for the portfolio.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, ContactComponent],
  templateUrl: './portfolio.component.html',
  // Styles are intentionally minimal here; prefer a global stylesheet with
  // design tokens and Bootstrap utilities. Keep component styles focused.
})
export class PortfolioComponent {
  private theme = inject(ThemeService);
  @ViewChild('heroCard', { read: ElementRef }) heroCard!: ElementRef<HTMLElement>;

  // Signals representing domain data. In a real app these would come from APIs.
  projects = signal<Project[]>([
    {
      id: 'catalog-1',
      title: 'E‑Commerce Catalog & Inventory Platform',
      summary: 'Dynamic multi-catalog management with reusable components, lazy loading, and live pricing integrations.',
      tags: ['Angular 17', 'NgOptimizedImage', 'SSR'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'pricing-1',
      title: 'Smart Pricing Automation Dashboard',
      summary: 'Admin dashboard for automated pricing workflows, data visualizations and CI/CD deployment.',
      tags: ['Angular', 'Charts', 'SASS'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'migrator-1',
      title: 'E‑Commerce Data Migrator (UI Tool)',
      summary: 'Step-by-step migration interface with validation and progress tracking for legacy e-commerce data.',
      tags: ['Angular', 'UX', 'SASS'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'domain-1',
      title: 'Domain Manager',
      summary: 'Centralized domain mapping and synchronization across environments with monitoring features.',
      tags: ['Angular 17', 'Admin'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'orders-1',
      title: 'E‑commerce Order Flow Management Admin Panel',
      summary: 'Modular dashboard to manage order lifecycle, analytics and secure access control.',
      tags: ['Angular', 'Analytics', 'SASS'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'marketplace-1',
      title: 'Seller & Marketplace Management System',
      summary: 'Admin tools for onboarding, listing management, pricing rules and marketplace analytics.',
      tags: ['Angular', 'Marketplace', 'SASS'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'event-1',
      title: 'Event Management System (Admin Portal)',
      summary: 'Full featured admin portal for event creation, registrations, bookings and check-ins.',
      tags: ['Angular 20', 'TypeScript', 'SASS'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1529634892666-5a5b1a1d9b0b?q=80&w=1400&auto=format&fit=crop'
    },
    {
      id: 'broadcast-1',
      title: 'Broadcast Management Admin Panel',
      summary: 'Admin console for campaign management, volunteer tracking and message orchestration.',
      tags: ['Angular 20', 'TypeScript', 'SASS'],
      demo: '#',
      repo: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
    }
  ]);

  skills = signal<Skills>({
    frontend: ['Angular 17–21', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS', 'Bootstrap'],
    state: ['Angular Signals', 'RxJS'],
    tools: ['Git', 'CI/CD', 'Postman', 'Chrome DevTools']
  });

  // Experience timeline entries
  experience = signal<ExperienceEntry[]>([
    {
      company: 'Shastha Systems and Solutions, Thiruvananthapuram',
      role: 'Software Engineer',
      period: 'Nov 2022 – Aug 2025',
      highlights: [
        'Designed Angular 17-based multi-catalog workflows, improving UI responsiveness significantly',
        'Engineered a multi-storefront platform with reusable catalog structures, boosting listings',
        'Developed automated pricing and inventory systems, reducing stockouts',
        'Led legacy e-commerce migration with zero data loss',
        'Introduced CI/CD pipelines to accelerate releases'
      ],
      tech: ['Angular 17', 'SASS', 'RxJS']
    },
    {
      company: 'Smartlounge, Ernakulam North',
      role: 'Senior Angular Developer',
      period: 'Nov 2025 – Present',
      highlights: [
        'Architected Angular 20 multi-catalog workflows improving responsiveness and UX',
        'Built vendor self-service dashboards using Angular 20 and REST APIs',
        'Led end-to-end migrations and established standardized CI/CD build processes',
        'Developed promoter management systems with real-time tracking and optimized change detection'
      ],
      tech: ['Angular 20', 'TypeScript', 'Angular Material']
    }
  ]);

  // About and additional content
  about = `Hi, I'm Shilpa Sivan. I am a Software Engineer and Web Developer specializing in building responsive, accessible, and high-performance web applications using Angular, TypeScript, and modern web technologies. I design scalable front-end architectures, reusable components, and integrate RESTful APIs to deliver user-centric products.`;

  aboutLong = `With a strong foundation in modern web technologies and a passion for problem-solving, I focus on building scalable, user-centric solutions. From crafting intuitive front-end interfaces to developing robust back-end integrations, I deliver products that blend performance with elegance. I write clean, maintainable, and modular code and enjoy debugging complex issues and integrating APIs to build data-driven applications.`;

  coreSkills = [
    'Angular 17 & TypeScript',
    'JavaScript, HTML5, SCSS, Bootstrap',
    'RESTful APIs & CI/CD',
    'Chrome DevTools, Postman, Git'
  ];

  softSkills = [
    'Analytical thinking & problem-solving',
    'Collaboration & communication',
    'Initiative & ownership',
    'Adaptability & continuous learning'
  ];

  languages = ['English', 'Malayalam', 'Hindi', 'Tamil'];

  linkedIn = 'https://www.linkedin.com/in/shilpa-sivan-25a059219/?isSelfProfile=false';

  contactEmail = 'shilpasivan2000@gmail.com';
  contactPhone = '+91 92074 12390';

  // Blog posts: 10 technical updates / tutorials about Angular features
  blogs = signal([
    {
      id: 'b1',
      title: 'Angular Signals: Reactive primitives for fine-grained reactivity',
      date: '2026-04-10',
      excerpt: 'Deep dive into Signals, how they compare to RxJS for local state, and migration tips for existing apps.',
      tags: ['Signals','Reactivity','Angular'] ,
      link: '#'
    },
    {
      id: 'b2',
      title: 'Server-side Rendering with provideServerRendering and Hydration',
      date: '2026-03-22',
      excerpt: 'Set up SSR with `provideServerRendering`, streaming responses, and enable client hydration for smooth UX.',
      tags: ['SSR','Hydration','Performance'],
      link: '#'
    },
    {
      id: 'b3',
      title: 'Optimizing Core Web Vitals for Angular Apps',
      date: '2026-02-15',
      excerpt: 'Practical strategies to improve LCP, FID/INP and CLS in Angular applications using lazy loading and image optimization.',
      tags: ['Performance','Lighthouse','Images'],
      link: '#'
    },
    {
      id: 'b4',
      title: 'Standalone Components & Simplified Bootstrapping',
      date: '2026-01-30',
      excerpt: 'Benefits of standalone components, bootstrapping with `bootstrapApplication`, and modular app architecture.',
      tags: ['Standalone','Architecture'],
      link: '#'
    },
    {
      id: 'b5',
      title: 'Typed Reactive Forms: Better DX and safer forms',
      date: '2025-12-10',
      excerpt: 'How to build strongly-typed reactive forms for robust validations and better developer experience.',
      tags: ['Forms','TypeScript'],
      link: '#'
    },
    {
      id: 'b6',
      title: 'Zone-less Change Detection and Zoneless Apps',
      date: '2025-11-05',
      excerpt: 'Exploring zoneless change detection approaches, `provideZonelessChangeDetection`, and how to migrate incrementally.',
      tags: ['Change Detection','Zoneless'],
      link: '#'
    },
    {
      id: 'b7',
      title: 'Advanced Router Patterns and Route Config Features',
      date: '2025-09-18',
      excerpt: 'Using `provideRouter`, route features, and strategies for preloading and modular routing.',
      tags: ['Router','Routing'],
      link: '#'
    },
    {
      id: 'b8',
      title: 'Image and Asset Optimization with NgOptimizedImage',
      date: '2025-08-02',
      excerpt: 'Practical guide to `NgOptimizedImage`, responsive sources, and improving image delivery for varied devices.',
      tags: ['Images','Optimization'],
      link: '#'
    },
    {
      id: 'b9',
      title: 'Testing Signals and Standalone Components',
      date: '2025-06-25',
      excerpt: 'Unit and integration testing strategies for signals-based components and tips for mocking providers.',
      tags: ['Testing','Signals'],
      link: '#'
    },
    {
      id: 'b10',
      title: 'Upgrading to Angular 21 — Practical steps and gotchas',
      date: '2025-05-10',
      excerpt: 'Step-by-step upgrade guide to Angular 21: dependency changes, build configuration, and runtime considerations.',
      tags: ['Upgrade','Migration'],
      link: '#'
    }
  ] as any);

  // Derived values using `computed`.
  projectsCount: Signal<number> = computed(() => this.projects().length);
  experienceCount: Signal<number> = computed(() => this.experience().length);

  // Expose theme state and a toggle helper for template bindings.
  isDark = this.theme.isDark;
  toggleTheme = () => this.theme.toggle();

  // Hero interactivity: update CSS variables for subtle 3D tilt.
  onHeroMove(event: MouseEvent) {
    const el = this.heroCard?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;
    const ry = (dx / rect.width) * 12; // rotateY degrees
    const rx = (-dy / rect.height) * 10; // rotateX degrees
    const tz = Math.max(0, 8 - Math.hypot(dx, dy) / 100);
    el.style.setProperty('--rx', rx + 'deg');
    el.style.setProperty('--ry', ry + 'deg');
    el.style.setProperty('--tz', tz + 'px');
  }

  onHeroLeave() {
    const el = this.heroCard?.nativeElement;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--tz', '0px');
  }

  // Image fallback handler: set a neutral tech image when an image fails to load
  onImgError(event: Event, fallback = 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop') {
    const img = event.target as HTMLImageElement | null;
    if (!img) return;
    img.src = fallback;
  }

  // Additional UI content for highlights and certifications
  achievements = [
    'MVP Q4 2023 & Q1 2024',
    'Led e‑commerce migration with zero downtime',
    'Reduced TTI by 30% across major product pages'
  ];

  certifications = [
    { title: 'UI Developer Certification', org: 'Trylogic Soft', year: 2023 },
    { title: 'Machine Learning Workshop', org: 'ICFOSS', year: 2020 }
  ];

  downloadResume() {
    // If a resume asset exists in /assets, open it; otherwise fallback to mailto
    const resumeUrl = '/assets/resume.pdf';
    fetch(resumeUrl, { method: 'HEAD' }).then((r) => {
      if (r.ok) {
        window.open(resumeUrl, '_blank');
      } else {
        window.location.href = 'mailto:shilpasivan2000@gmail.com?subject=Resume%20Request';
      }
    }).catch(() => {
      window.location.href = 'mailto:shilpasivan2000@gmail.com?subject=Resume%20Request';
    });
  }
}
