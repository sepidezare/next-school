import Link from 'next/link';
import './homepage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">EduLearn</span>
          </div>
          <div className="nav-links">
            <Link href="/courses" className="nav-link">Courses</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/login" className="nav-link login-btn">Login</Link>
            <Link href="/signup" className="nav-link signup-btn">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Learn Without <span className="highlight">Limits</span>
            </h1>
            <p className="hero-description">
              Join thousands of students worldwide in our interactive online classrooms. 
              Access quality education from anywhere, at any time.
            </p>
            <div className="hero-buttons">
              <Link href="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link href="/demo" className="btn btn-secondary">
                Book a Demo
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <span className="card-icon">📚</span>
              <span>Interactive Lessons</span>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">👨‍🏫</span>
              <span>Expert Teachers</span>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">💻</span>
              <span>Live Classes</span>
            </div>
            <div className="main-hero-image">
              <div className="learning-illustration">
                <div className="student-avatar">👩‍🎓</div>
                <div className="book-stack">📖</div>
                <div className="laptop">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Online School?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Learning</h3>
              <p>Customized curriculum tailored to your learning style and pace</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Flexible Schedule</h3>
              <p>Learn at your own convenience with 24/7 course access</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Live Interaction</h3>
              <p>Real-time classes and discussions with instructors and peers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your learning journey with detailed analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="courses-preview">
        <div className="container">
          <h2 className="section-title">Popular Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image math-bg">
                <span className="course-icon">🧮</span>
              </div>
              <div className="course-content">
                <h3>Mathematics Mastery</h3>
                <p>From basics to advanced concepts</p>
                <div className="course-meta">
                  <span className="course-level">Beginner - Advanced</span>
                  <span className="course-duration">12 Weeks</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image science-bg">
                <span className="course-icon">🔬</span>
              </div>
              <div className="course-content">
                <h3>Science Explorer</h3>
                <p>Hands-on experiments and theory</p>
                <div className="course-meta">
                  <span className="course-level">Intermediate</span>
                  <span className="course-duration">8 Weeks</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image coding-bg">
                <span className="course-icon">💻</span>
              </div>
              <div className="course-content">
                <h3>Programming Fundamentals</h3>
                <p>Learn to code from scratch</p>
                <div className="course-meta">
                  <span className="course-level">Beginner</span>
                  <span className="course-duration">10 Weeks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-cta">
            <Link href="/courses" className="btn btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This platform transformed my learning experience. The teachers are amazing!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🎓</div>
                <div className="author-info">
                  <strong>Sarah Johnson</strong>
                  <span>Grade 10 Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Flexible schedule allowed me to balance school and extracurricular activities."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🎓</div>
                <div className="author-info">
                  <strong>Michael Chen</strong>
                  <span>Grade 12 Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The interactive classes made learning fun and engaging. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👧</div>
                <div className="author-info">
                  <strong>Emily Davis</strong>
                  <span>Grade 8 Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join our community of learners today and unlock your potential</p>
            <div className="cta-buttons">
              <Link href="/signup" className="btn btn-large btn-primary">
                Get Started Free
              </Link>
              <Link href="/demo" className="btn btn-large btn-secondary">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🎓</span>
                <span className="logo-text">EduLearn</span>
              </div>
              <p>Transforming education through innovative online learning solutions.</p>
              <div className="social-links">
                <span className="social-icon">📘</span>
                <span className="social-icon">🐦</span>
                <span className="social-icon">📷</span>
                <span className="social-icon">💼</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link href="/courses">Courses</Link>
              <Link href="/about">About Us</Link>
              <Link href="/teachers">Our Teachers</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <Link href="/blog">Blog</Link>
              <Link href="/help">Help Center</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/resources">Learning Resources</Link>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📧 hello@edulearn.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Education Street, Learning City</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 EduLearn. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}