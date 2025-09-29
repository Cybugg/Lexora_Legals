import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeesServicesSection = () => {
  const services = [
    {
      title: "Corporate Restructuring",
      description: "Comprehensive restructuring services including debt reorganization, asset optimization, and strategic planning for business recovery.",
      features: ["Debt Restructuring", "Asset Management", "Strategic Planning", "Stakeholder Negotiations"]
    },
    {
      title: "Insolvency Proceedings",
      description: "Expert guidance through all forms of insolvency procedures, from prevention to liquidation, ensuring optimal outcomes.",
      features: ["Safeguard Procedures", "Judicial Restructuring", "Liquidation Proceedings", "Creditor Protection"]
    },
    {
      title: "Business Litigation",
      description: "Skilled representation in commercial disputes, corporate governance issues, and complex business litigation matters.",
      features: ["Commercial Disputes", "Corporate Governance", "Contract Litigation", "Regulatory Compliance"]
    },
    {
      title: "Advisory Services",
      description: "Strategic legal advice for businesses facing challenges, including preventive measures and risk management.",
      features: ["Risk Assessment", "Preventive Measures", "Compliance Audits", "Strategic Consulting"]
    }
  ];

  return (
    <section id="fees" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Fees & Services
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            We offer transparent, competitive pricing structures tailored to the complexity and scope of each engagement. 
            Our fee arrangements are designed to align with our clients' business objectives and cash flow requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover-lift transition-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-white p-8 text-center">
          <h3 className="text-xl font-semibold  mb-4">
            Fee Structure
          </h3>
          <p className="text-body text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our fees are structured based on the complexity of each matter, the urgency of the situation, 
            and the resources required. We offer various fee arrangements including hourly rates, fixed fees, 
            and success-based compensation where appropriate. All fee structures are discussed and agreed upon 
            before engagement begins.
          </p>
          <p className="text-sm text-primary-foreground/70 mt-4">
            Contact us for a detailed consultation and customized fee proposal for your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeesServicesSection;