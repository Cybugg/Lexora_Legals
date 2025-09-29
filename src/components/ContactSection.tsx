const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="heading-section mb-12 text-foreground">
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">Address</h3>
                <p className="text-body text-muted-foreground">
                  19, Avenue du Address<br />
                  No_ PARIS
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">Phone</h3>
                <a 
                  href="tel:+33176534240" 
                  className="text-body text-muted-foreground hover:text-foreground transition-smooth"
                >
                  +33 (0)1 23 45 43 21
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">Fax</h3>
                <p className="text-body text-muted-foreground">
                 +33 (0)1 23 45 43 21
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">Email</h3>
                <a 
                  href="mailto:contact@cahnwilson.com" 
                  className="text-body text-muted-foreground hover:text-foreground transition-smooth"
                >
                  contact@LexoraLegals.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Map or Additional Info */}
          <div className="bg-accent/30 p-8 lg:p-12">
            <h3 className="text-xl font-medium mb-6 text-foreground">Office Hours</h3>
            <div className="space-y-4 text-body text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Weekend</span>
                <span>By appointment</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-small text-muted-foreground">
                Located in the prestigious Address of Paris, our office is easily accessible by metro and by car with nearby parking facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;