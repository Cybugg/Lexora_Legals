const NewsSection = () => {
  const newsItems = [
    "Featured in the Bulletin Quotidien, April 12, 2022 (pages 17–18)",
    "Gérard Pollen-Weill joins Lexora Legal",
    "Pro Bono: An exhibition for Notre-Dame",
    "Samuel grande's column: \"Business leaders in difficulty, beware of tax risks!\""
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-12 text-white text-foreground">
            News & Insights
          </h2>
          
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary mt-3 group-hover:bg-muted-foreground transition-smooth"></div>
                  <p className="text-body  text-primary-foreground/70 group-hover:text-muted-foreground transition-smooth">
                    {item}
                  </p>
                </div>
                <div className="mt-4 ml-6 h-px bg-border group-hover:bg-muted-foreground/20 transition-smooth"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;