const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Firm Name */}
          <div>
            <h3 className="text-xl font-light mb-4">Lexora Legal</h3>
            <p className="text-small text-primary-foreground/70">
              A law firm specializing in business law, dedicated to handling corporate crises and exceptional situations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2 text-small">
              <li>
                <a href="#the-firm" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                  The Firm
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                  Our Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">CONTACT</h4>
            <div className="space-y-2 text-small text-primary-foreground/70">
              <p> 19, Avenue du Address</p>
              <p>No_ PARIS</p>
              <p> +33 (0)1 23 45 43 21</p>
              <p>contact@lexoralegals.com</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-small text-primary-foreground/70">
              Legal Notice – © 2020 –Lexora Legal – Designed by Nexxi Studios
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-small text-primary-foreground/70">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;