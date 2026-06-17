export default function TrustStatistics() {
  
  const stats = [
    { number: '19+ Years', label: 'of Legacy' },
    { number: '10 Lakh+', label: 'Students Nurtured' },
    { number: '80+ Centers', label: 'Across India' },
    { number: '10 Lakh+', label: 'App Downloads' }
  ];
  
  return (
    <section className="py-5">
      <div className="container-lg d-d-flex justify-content-center px-3">
        <h1 className="fs-3 md:display-5 fw-bold text-center text-foreground mb-5 py-5">
          Trusted by Millions of Students Nationwide
        </h1>
        <div className="row row-cols-2 md:row-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2 border border-gray-200 bg-gray-50">
              <p className="fs-3 md:display-5 fw-bold mb-2" style={{color:"red"}}>
                {stat.number}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
